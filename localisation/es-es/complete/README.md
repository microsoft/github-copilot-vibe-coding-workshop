# Muestras de Aplicaciones Completas

Aquí está la lista de muestras de aplicaciones completas. Debido a que también son vibe-coded, puedes verificar cómo están construidas.

| Aplicación  | Ubicación                   |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## Muestra de Contenedorización

### Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

### Comenzando

1. Asegúrate de que Docker esté ejecutándose.

    ```bash
    docker info
    ```

1. Obtén la raíz del repositorio.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Navega al directorio `complete`.

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. Ejecuta las aplicaciones contenedorizadas.

    ```bash
    docker compose up --build -d
    ```

1. Abre un navegador web y navega a `http://localhost:3030`.
1. Verifica si la aplicación web está ejecutándose correctamente.
1. Limpia ejecutando el siguiente comando para remover las aplicaciones contenedorizadas.

    ```bash
    docker compose down --rmi all
    ```

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
