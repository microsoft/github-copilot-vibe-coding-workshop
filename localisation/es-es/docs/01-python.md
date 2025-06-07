# 01: Desarrollo Backend Python

## Escenario

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales.

Como desarrollador Python, vas a construir una aplicación backend Python usando FastAPI. Por ahora, estás usando la característica en memoria de SQLite.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Preparar Entorno Virtual](#preparar-entorno-virtual)
- [Construir Aplicación Backend FastAPI](#construir-aplicación-backend-fastapi)

### Verificar Modo Agente de GitHub Copilot

1. Haz clic en el ícono de GitHub Copilot en la parte superior de GitHub Codespace o VS Code y abre la ventana de GitHub Copilot.

   ![Abrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Si se te pide iniciar sesión o registrarte, hazlo. Es gratuito.
1. Asegúrate de estar usando el Modo Agente de GitHub Copilot.

   ![Modo Agente de GitHub Copilot](../../../docs/images/setup-03.png)

1. Selecciona el modelo ya sea `GPT-4.1` o `Claude Sonnet 4`.
1. Asegúrate de haber configurado [Servidores MCP](./00-setup.md#configurar-servidores-mcp).

### Preparar Instrucciones Personalizadas

1. Establece la variable de entorno de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copia las instrucciones personalizadas.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Entorno Virtual

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Usa un prompt como el siguiente para preparar el entorno virtual para el desarrollo de aplicaciones Python.

    ```text
    Me gustaría escribir una aplicación Python. Pero antes de eso, necesito configurar un entorno virtual. Sigue las instrucciones a continuación.
    
    - Usa context7.
    - Tu directorio de trabajo es `python`.
    - Identifica primero todos los pasos que vas a hacer.
    - Usa `.venv` para el entorno virtual.
    - Usa `uv` como el gestor de paquetes de Python.
    ```

### Construir Aplicación Backend FastAPI

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Agrega [`product-requirements.md`](../product-requirements.md) y [`openapi.yaml`](../openapi.yaml) a GitHub Copilot.
1. Usa un prompt como el siguiente para construir una aplicación backend FastAPI.

    ```text
    Me gustaría construir una aplicación FastAPI como una API backend. Lee cuidadosamente todo el PRD y `openapi.yaml`. Luego, sigue las instrucciones a continuación.
    
    - Usa context7.
    - Tu directorio de trabajo es `python`.
    - Identifica primero todos los pasos que vas a hacer.
    - Usa FastAPI como el framework de la aplicación API.
    - Usa SQLite como la base de datos.
    - Usa `sns_api.db` como el nombre de la base de datos SQLite.
    - La base de datos siempre debe ser inicializada cuando se inicie la aplicación.
    - Usa `openapi.yaml` que describe todos los endpoints y esquema de datos.
    - Usa el número de puerto `8000`.
    - Asegúrate de permitir CORS desde cualquier lugar.
    - El punto de entrada es `main.py`.
    - La aplicación API debe renderizar la página Swagger UI a través de un endpoint predeterminado.
    - La aplicación API debe renderizar exactamente el mismo documento OpenAPI a través de un endpoint predeterminado.
    - NO agregues nada no definido en `openapi.yaml`.
    - NO modifiques nada definido en `openapi.yaml`.
    ```

1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.
1. Una vez que la aplicación esté construida, verifica si está escrita correctamente o no.

    ```text
    Ejecuta la aplicación FastAPI y verifica si la aplicación se está ejecutando correctamente. También verifica que el endpoint OpenAPI renderice exactamente el mismo contenido que `openapi.yaml`.

    Si la ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

1. Abre un navegador web y navega a `http://localhost:8000`.
1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

---

Bien. Has completado el paso "Python". Vamos al [PASO 02: Desarrollo Frontend JavaScript](./02-javascript.md).

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
