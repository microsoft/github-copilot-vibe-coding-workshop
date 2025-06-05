using System.ComponentModel.DataAnnotations;

namespace Contoso.BlazorApp.Models;

public class Post
{
    public string Id { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public int LikesCount { get; set; }
    public bool IsLiked { get; set; } // Client-side computed property
    public int CommentsCount { get; set; }
}

public class CreatePostRequest
{
    [Required]
    [StringLength(50, MinimumLength = 1)]
    public string Username { get; set; } = string.Empty;
    
    [Required]
    [StringLength(2000, MinimumLength = 1)]
    public string Content { get; set; } = string.Empty;
}

public class UpdatePostRequest
{
    [Required]
    [StringLength(50, MinimumLength = 1)]
    public string Username { get; set; } = string.Empty;
    
    [Required]
    [StringLength(2000, MinimumLength = 1)]
    public string Content { get; set; } = string.Empty;
}

public class LikeRequest
{
    [Required]
    [StringLength(50, MinimumLength = 1)]
    public string Username { get; set; } = string.Empty;
}

public class LikeResponse
{
    public string PostId { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public DateTime LikedAt { get; set; }
}

public class Error
{
    public string ErrorCode { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public List<string>? Details { get; set; }
}
