# Muestra de Aplicación .NET

## Prerrequisitos

Consulta el documento [README](../../README.md) para la preparación.

## Comenzando

### Ejecutar Backend Spring Boot

Usa [Muestra de Aplicación Java](../java/).

> **NOTA**: Si usas GitHub Codespaces, asegúrate de que el puerto de la aplicación Java, `8080`, esté configurado como **público**.

### Ejecutar Frontend Blazor

1. Obtén la raíz del repositorio.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Ejecuta la aplicación.

    ```bash
    dotnet watch run --project $REPOSITORY_ROOT/complete/dotnet/Contoso.BlazorApp
    ```

1. Verifica si la aplicación web está ejecutándose correctamente.