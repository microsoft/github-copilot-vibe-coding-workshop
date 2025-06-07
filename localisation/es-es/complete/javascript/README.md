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