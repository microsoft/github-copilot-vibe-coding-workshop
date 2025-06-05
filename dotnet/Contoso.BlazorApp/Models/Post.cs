namespace Contoso.BlazorApp.Models;

public class Post
{
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public int LikesCount { get; set; }
    public bool IsLiked { get; set; }
    public int CommentsCount { get; set; }
}

public class CreatePostRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class UpdatePostRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class LikeRequest
{
    public string Username { get; set; } = string.Empty;
}
