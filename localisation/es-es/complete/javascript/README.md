# Muestra de Aplicación JavaScript

## Prerrequisitos

Consulta el documento [README](../../README.md) para la preparación.

## Comenzando

### Ejecutar Backend FastAPI

Usa [Muestra de Aplicación Python](../python/).

> **NOTA**: Si usas GitHub Codespaces, asegúrate de que el puerto de la aplicación Python, `8000`, esté configurado como **público**.

### Ejecutar Frontend React

1. Obtén la raíz del repositorio.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Instala los paquetes npm.

    ```bash
    cd $REPOSITORY_ROOT/complete/javascript
    npm install
    ```

1. Ejecuta la aplicación.

    ```bash
    npm run dev
    ```

1. Abre un navegador web y navega a `http://localhost:3000`.
1. Verifica si la aplicación web está ejecutándose correctamente.

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
