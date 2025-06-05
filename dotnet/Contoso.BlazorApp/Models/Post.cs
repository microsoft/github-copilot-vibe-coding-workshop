namespace Contoso.BlazorApp.Models;

public class Post
{
    public int Id { get; set; }
    public string Content { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public int? UserId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public int LikesCount { get; set; }
    public int CommentsCount { get; set; }
    public bool IsLiked { get; set; }
}

public class Comment
{
    public int Id { get; set; }
    public int PostId { get; set; }
    public string Content { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public int? UserId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class User
{
    public string Username { get; set; } = string.Empty;
    public int? UserId { get; set; }
}

public class CreatePostRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class CreateCommentRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class LikePostRequest
{
    public string Username { get; set; } = string.Empty;
}

public class ApiResponse<T>
{
    public T Data { get; set; } = default(T)!;
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
}
