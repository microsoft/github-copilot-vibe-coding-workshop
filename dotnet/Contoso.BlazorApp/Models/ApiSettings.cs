namespace Contoso.BlazorApp.Models;

public class ApiSettings
{
    public const string SectionName = "ApiSettings";
    
    public string BaseUrl { get; set; } = string.Empty;
}
