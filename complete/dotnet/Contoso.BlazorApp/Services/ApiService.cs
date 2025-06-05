using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Contoso.BlazorApp.Models;
using Microsoft.Extensions.Options;

namespace Contoso.BlazorApp.Services;

public class ApiService
{
    private readonly HttpClient _httpClient;
    private readonly AuthService _authService;
    private readonly ILogger<ApiService> _logger;
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true
    };

    public ApiService(HttpClient httpClient, AuthService authService, IOptions<ApiSettings> apiSettings, ILogger<ApiService> logger)
    {
        _httpClient = httpClient;
        _authService = authService;
        _logger = logger;
        
        var baseUrl = GetApiBaseUrl(apiSettings.Value.BaseUrl);
        _logger.LogInformation("API Base URL configured to: {BaseUrl}", baseUrl);
        
        _httpClient.BaseAddress = new Uri(baseUrl);
        _httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
    }

    private string GetApiBaseUrl(string configuredBaseUrl)
    {
        // Check if running in GitHub Codespaces
        var codespaceUrl = Environment.GetEnvironmentVariable("CODESPACE_NAME");
        var githubCodespacesPortForwardingDomain = Environment.GetEnvironmentVariable("GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN");
        
        _logger.LogDebug("CODESPACE_NAME: {CodespaceName}", codespaceUrl ?? "null");
        _logger.LogDebug("GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: {Domain}", githubCodespacesPortForwardingDomain ?? "null");
        
        if (!string.IsNullOrEmpty(codespaceUrl) && !string.IsNullOrEmpty(githubCodespacesPortForwardingDomain))
        {
            // Construct GitHub Codespaces URL: https://{codespace-name}-8080.{domain}/api/
            var codespacesUrl = $"https://{codespaceUrl}-8080.{githubCodespacesPortForwardingDomain}/api/";
            _logger.LogInformation("Using GitHub Codespaces URL: {CodespacesUrl}", codespacesUrl);
            return codespacesUrl;
        }
        
        // Fall back to configured base URL (localhost)
        _logger.LogInformation("Using configured base URL: {ConfiguredUrl}", configuredBaseUrl);
        return configuredBaseUrl;
    }

    private void SetAuthHeaders()
    {
        var user = _authService.AuthState.User;
        if (user != null)
        {
            if (user.UserId.HasValue)
            {
                _httpClient.DefaultRequestHeaders.Remove("X-User-ID");
                _httpClient.DefaultRequestHeaders.Add("X-User-ID", user.UserId.Value.ToString());
            }
            if (!string.IsNullOrEmpty(user.Username))
            {
                _httpClient.DefaultRequestHeaders.Remove("x-username");
                _httpClient.DefaultRequestHeaders.Add("x-username", Uri.EscapeDataString(user.Username));
            }
        }
    }

    // Post API methods
    public async Task<List<Post>> GetPostsAsync()
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync("posts");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Post>>(json, JsonOptions) ?? new List<Post>();
    }

    public async Task<Post> GetPostAsync(string postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(json, JsonOptions)!;
    }

    public async Task<Post> CreatePostAsync(string content, string username)
    {
        SetAuthHeaders();
        var request = new CreatePostRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request, JsonOptions);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("posts", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, JsonOptions)!;
    }

    public async Task<Post> UpdatePostAsync(string postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new UpdatePostRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request, JsonOptions);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"posts/{postId}", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, JsonOptions)!;
    }

    public async Task DeletePostAsync(string postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}");
        response.EnsureSuccessStatusCode();
        return;
    }

    public async Task<Post> LikePostAsync(string postId, string username)
    {
        SetAuthHeaders();
        var request = new LikeRequest { Username = username };
        var json = JsonSerializer.Serialize(request, JsonOptions);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"posts/{postId}/likes", content);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, JsonOptions)!;
    }

    public async Task UnlikePostAsync(string postId, string username)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}/likes?username={username}");
        response.EnsureSuccessStatusCode();
        return;
    }

    public async Task<List<Post>> SearchPostsAsync(string query)
    {
        SetAuthHeaders();
        var encodedQuery = Uri.EscapeDataString(query);
        var response = await _httpClient.GetAsync($"posts/search?q={encodedQuery}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Post>>(json, JsonOptions) ?? new List<Post>();
    }

    // Comment API methods
    public async Task<List<Comment>> GetCommentsAsync(string postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}/comments");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Comment>>(json, JsonOptions) ?? new List<Comment>();
    }

    public async Task<Comment> CreateCommentAsync(string postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new CreateCommentRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request, JsonOptions);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"posts/{postId}/comments", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(responseJson, JsonOptions)!;
    }

    public async Task<Comment> GetCommentAsync(string postId, string commentId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}/comments/{commentId}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(json, JsonOptions)!;
    }

    public async Task<Comment> UpdateCommentAsync(string postId, string commentId, string content, string username)
    {
        SetAuthHeaders();
        var request = new UpdateCommentRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request, JsonOptions);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"posts/{postId}/comments/{commentId}", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(responseJson, JsonOptions)!;
    }

    public async Task DeleteCommentAsync(string postId, string commentId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}/comments/{commentId}");
        response.EnsureSuccessStatusCode();
    }
}
