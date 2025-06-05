using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Contoso.BlazorApp.Models;

namespace Contoso.BlazorApp.Services;

public class ApiService
{
    private readonly HttpClient _httpClient;
    private readonly AuthService _authService;
    private readonly JsonSerializerOptions _jsonOptions;

    public ApiService(HttpClient httpClient, AuthService authService)
    {
        _httpClient = httpClient;
        _authService = authService;
        _httpClient.BaseAddress = new Uri("http://localhost:8080/");
        _httpClient.DefaultRequestHeaders.Accept.Clear();
        _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        
        _jsonOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            WriteIndented = true
        };
    }

    private void SetAuthHeaders()
    {
        var user = _authService.User;
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
    public async Task<ApiResponse<List<Post>>> GetPostsAsync()
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync("api/posts");
        var content = await response.Content.ReadAsStringAsync();
        var posts = JsonSerializer.Deserialize<List<Post>>(content, _jsonOptions);
        return new ApiResponse<List<Post>> { Data = posts ?? new List<Post>(), Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<Post>> GetPostAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"api/posts/{postId}");
        var content = await response.Content.ReadAsStringAsync();
        var post = JsonSerializer.Deserialize<Post>(content, _jsonOptions);
        return new ApiResponse<Post> { Data = post!, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<Post>> CreatePostAsync(string content, string username)
    {
        SetAuthHeaders();
        var request = new CreatePostRequest { Username = username, Content = content };
        var json = JsonSerializer.Serialize(request, _jsonOptions);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync("api/posts", httpContent);
        var responseContent = await response.Content.ReadAsStringAsync();
        var post = JsonSerializer.Deserialize<Post>(responseContent, _jsonOptions);
        return new ApiResponse<Post> { Data = post!, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<Post>> UpdatePostAsync(int postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new CreatePostRequest { Username = username, Content = content };
        var json = JsonSerializer.Serialize(request, _jsonOptions);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"api/posts/{postId}", httpContent);
        var responseContent = await response.Content.ReadAsStringAsync();
        var post = JsonSerializer.Deserialize<Post>(responseContent, _jsonOptions);
        return new ApiResponse<Post> { Data = post!, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<bool>> DeletePostAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"api/posts/{postId}");
        return new ApiResponse<bool> { Data = response.IsSuccessStatusCode, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<bool>> LikePostAsync(int postId, string username)
    {
        SetAuthHeaders();
        var request = new LikePostRequest { Username = username };
        var json = JsonSerializer.Serialize(request, _jsonOptions);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"api/posts/{postId}/likes", httpContent);
        return new ApiResponse<bool> { Data = response.IsSuccessStatusCode, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<bool>> UnlikePostAsync(int postId, string username)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"api/posts/{postId}/likes?username={Uri.EscapeDataString(username)}");
        return new ApiResponse<bool> { Data = response.IsSuccessStatusCode, Success = response.IsSuccessStatusCode };
    }

    // Comment API methods
    public async Task<ApiResponse<List<Comment>>> GetCommentsAsync(int postId)
    {
        SetAuthHeaders();
        var response = await _httpClient.GetAsync($"api/posts/{postId}/comments");
        var content = await response.Content.ReadAsStringAsync();
        var comments = JsonSerializer.Deserialize<List<Comment>>(content, _jsonOptions);
        return new ApiResponse<List<Comment>> { Data = comments ?? new List<Comment>(), Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<Comment>> CreateCommentAsync(int postId, string content, string username)
    {
        SetAuthHeaders();
        var request = new CreateCommentRequest { Username = username, Content = content };
        var json = JsonSerializer.Serialize(request, _jsonOptions);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PostAsync($"api/posts/{postId}/comments", httpContent);
        var responseContent = await response.Content.ReadAsStringAsync();
        var comment = JsonSerializer.Deserialize<Comment>(responseContent, _jsonOptions);
        return new ApiResponse<Comment> { Data = comment!, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<Comment>> UpdateCommentAsync(int postId, int commentId, string content, string username)
    {
        SetAuthHeaders();
        var request = new CreateCommentRequest { Username = username, Content = content };
        var json = JsonSerializer.Serialize(request, _jsonOptions);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await _httpClient.PatchAsync($"api/posts/{postId}/comments/{commentId}", httpContent);
        var responseContent = await response.Content.ReadAsStringAsync();
        var comment = JsonSerializer.Deserialize<Comment>(responseContent, _jsonOptions);
        return new ApiResponse<Comment> { Data = comment!, Success = response.IsSuccessStatusCode };
    }

    public async Task<ApiResponse<bool>> DeleteCommentAsync(int postId, int commentId)
    {
        SetAuthHeaders();
        var response = await _httpClient.DeleteAsync($"api/posts/{postId}/comments/{commentId}");
        return new ApiResponse<bool> { Data = response.IsSuccessStatusCode, Success = response.IsSuccessStatusCode };
    }
}
