namespace Contoso.BlazorApp.Models;

public class Comment
{
    public int Id { get; set; }
    public int PostId { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class CreateCommentRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

public class UpdateCommentRequest
{
    public string Username { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}
