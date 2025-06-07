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

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
