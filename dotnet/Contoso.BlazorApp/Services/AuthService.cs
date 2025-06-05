using Microsoft.JSInterop;
using System.Text.Json;
using Contoso.BlazorApp.Models;

namespace Contoso.BlazorApp.Services;

public class AuthService
{
    private readonly IJSRuntime _jsRuntime;
    private User? _currentUser;
    private bool _isLoading = true;

    public event EventHandler? AuthStateChanged;

    public AuthService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public User? User
    {
        get => _currentUser;
        private set
        {
            _currentUser = value;
            AuthStateChanged?.Invoke(this, EventArgs.Empty);
        }
    }

    public bool IsAuthenticated => User != null;

    public bool IsLoading
    {
        get => _isLoading;
        private set
        {
            _isLoading = value;
            AuthStateChanged?.Invoke(this, EventArgs.Empty);
        }
    }

    public async Task InitializeAsync()
    {
        IsLoading = true;
        try
        {
            var storedUser = await _jsRuntime.InvokeAsync<string?>("localStorage.getItem", "user");
            if (!string.IsNullOrEmpty(storedUser))
            {
                try
                {
                    User = JsonSerializer.Deserialize<User>(storedUser, new JsonSerializerOptions
                    {
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                catch (JsonException)
                {
                    await _jsRuntime.InvokeVoidAsync("localStorage.removeItem", "user");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading user from localStorage: {ex.Message}");
        }
        finally
        {
            IsLoading = false;
        }
    }

    public async Task<User> LoginAsync(string username)
    {
        IsLoading = true;
        try
        {
            var userData = new User { Username = username.Trim() };
            User = userData;
            var json = JsonSerializer.Serialize(userData, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
            await _jsRuntime.InvokeVoidAsync("localStorage.setItem", "user", json);
            return userData;
        }
        finally
        {
            IsLoading = false;
        }
    }

    public async Task LogoutAsync()
    {
        User = null;
        await _jsRuntime.InvokeVoidAsync("localStorage.removeItem", "user");
    }
}
