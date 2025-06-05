namespace Contoso.BlazorApp.Models;

public class User
{
    public string Username { get; set; } = string.Empty;
    public int? UserId { get; set; }
}

public class AuthState
{
    public User? User { get; set; }
    public bool IsAuthenticated => User != null;
    public bool IsLoading { get; set; } = true;
}
