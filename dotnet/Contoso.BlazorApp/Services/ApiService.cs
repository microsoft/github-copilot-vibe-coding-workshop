using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Contoso.BlazorApp.Models;

namespace Contoso.BlazorApp.Services;

public class ApiService
{
    private readonly HttpClient _httpClient;
    private readonly AuthService _authService;

    public ApiService(HttpClient httpClient, AuthService authService)
    {
        _httpClient = httpClient;
        _authService = authService;
        _httpClient.BaseAddress = new Uri("http://localhost:8080/api/");
        _httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
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
        return JsonSerializer.Deserialize<List<Post>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<Post>();
    }

    public async Task<Post> GetPostAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<Post> CreatePostAsync(string content, string username)
    {
        SetAuthHeaders();
        var request = new CreatePostRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("posts", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<Post> UpdatePostAsync(int postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new UpdatePostRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"posts/{postId}", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task DeletePostAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}");
        response.EnsureSuccessStatusCode();
    }

    public async Task<Post> LikePostAsync(int postId, string username)
    {
        SetAuthHeaders();
        var request = new LikeRequest { Username = username };
        var json = JsonSerializer.Serialize(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"posts/{postId}/likes", content);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<Post> UnlikePostAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}/likes");
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Post>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<List<Post>> SearchPostsAsync(string query)
    {
        SetAuthHeaders();
        var encodedQuery = Uri.EscapeDataString(query);
        var response = await _httpClient.GetAsync($"posts/search?q={encodedQuery}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Post>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<Post>();
    }

    // Comment API methods
    public async Task<List<Comment>> GetCommentsAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}/comments");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Comment>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<Comment>();
    }

    public async Task<Comment> CreateCommentAsync(int postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new CreateCommentRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"posts/{postId}/comments", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<Comment> GetCommentAsync(int postId, int commentId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"posts/{postId}/comments/{commentId}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task<Comment> UpdateCommentAsync(int postId, int commentId, string content, string username)
    {
        SetAuthHeaders();
        var request = new UpdateCommentRequest { Content = content, Username = username };
        var json = JsonSerializer.Serialize(request);
        var content_ = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"posts/{postId}/comments/{commentId}", content_);
        response.EnsureSuccessStatusCode();
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Comment>(responseJson, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }

    public async Task DeleteCommentAsync(int postId, int commentId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"posts/{postId}/comments/{commentId}");
        response.EnsureSuccessStatusCode();
    }
}
