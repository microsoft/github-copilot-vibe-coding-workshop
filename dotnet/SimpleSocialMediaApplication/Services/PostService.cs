using System.Net.Http.Json;

public class PostService
{
    private readonly HttpClient _http;

    public PostService(HttpClient http)
    {
        _http = http;
    }

    public async Task<List<Post>> GetPosts()
    {
        return await _http.GetFromJsonAsync<List<Post>>("api/posts");
    }
}
