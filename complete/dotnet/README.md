# .NET App Sample

## Prerequisites

Refer to the [README](../../README.md) doc for preparation.

## Getting Started

### Run Spring Boot Backend

Use [Java App Sample](../complete/java/).

### Run Blazor Frontend

1. Get the repository root.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Run the app.

    ```bash
    dotnet watch run --project $REPOSITORY_ROOT/complete/dotnet/Contoso.BlazorApp/Contoso.BlazorApp.csproj
    ```

1. Verify if the web application is running properly.
