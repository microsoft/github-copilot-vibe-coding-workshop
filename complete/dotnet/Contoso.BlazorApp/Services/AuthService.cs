using System.Text.Json;
using Contoso.BlazorApp.Models;
using Microsoft.JSInterop;

namespace Contoso.BlazorApp.Services;

public class AuthService
{
    private readonly IJSRuntime _jsRuntime;
    private AuthState _authState = new();
    
    public event Action? OnAuthStateChanged;

    public AuthService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public AuthState AuthState => _authState;

    public async Task InitializeAsync()
    {
        try
        {
            var userJson = await _jsRuntime.InvokeAsync<string?>("localStorage.getItem", "user");
            if (!string.IsNullOrEmpty(userJson))
            {
                var user = JsonSerializer.Deserialize<User>(userJson);
                _authState.User = user;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error initializing auth: {ex.Message}");
            await _jsRuntime.InvokeVoidAsync("localStorage.removeItem", "user");
        }
        finally
        {
            _authState.IsLoading = false;
            OnAuthStateChanged?.Invoke();
        }
    }

    public async Task<User> LoginAsync(string username)
    {
        _authState.IsLoading = true;
        OnAuthStateChanged?.Invoke();

        try
        {
            var userData = new User { Username = username.Trim() };
            _authState.User = userData;
            
            var userJson = JsonSerializer.Serialize(userData);
            await _jsRuntime.InvokeVoidAsync("localStorage.setItem", "user", userJson);
            
            return userData;
        }
        finally
        {
            _authState.IsLoading = false;
            OnAuthStateChanged?.Invoke();
        }
    }

    public async Task LogoutAsync()
    {
        _authState.User = null;
        await _jsRuntime.InvokeVoidAsync("localStorage.removeItem", "user");
        OnAuthStateChanged?.Invoke();
    }
}
