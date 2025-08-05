# 00: Entorno de Desarrollo

En este paso, estás configurando el entorno de desarrollo para el taller.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Usar GitHub Codespaces](#usar-github-codespaces)
- [Usar Visual Studio Code](#usar-visual-studio-code)
  - [Instalar PowerShell 👉 Para Usuarios de Windows](#instalar-powershell--para-usuarios-de-windows)
  - [Instalar git CLI](#instalar-git-cli)
  - [Instalar GitHub CLI](#instalar-github-cli)
  - [Instalar Docker Desktop](#instalar-docker-desktop)
  - [Instalar Visual Studio Code](#instalar-visual-studio-code)
  - [Iniciar Visual Studio Code](#iniciar-visual-studio-code)
  - [Configurar Servidores MCP](#configurar-servidores-mcp)
- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Configurar Modo Bestia](#configurar-modo-bestia)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Analizar Documento de Requisitos del Producto (PRD) y Diseñar API](#analizar-documento-de-requisitos-del-producto-prd-y-diseñar-api)

## Usar GitHub Codespaces

1. Haz clic en este enlace 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. Una vez que la instancia de GitHub Codespace esté lista, abre una terminal y ejecuta el siguiente comando para verificar si todo lo que necesitas ha sido instalado correctamente o no.

    ```bash
    # Python
    python --version
    ```

    ```bash
    # Node.js
    node --version
    npm --version

    ```

    ```bash
    # JDK
    java --version
    ```

    ```bash
    # .NET SDK
    dotnet --list-sdks
    ```

1. Verifica el estado de tu repositorio.

    ```bash
    git remote -v
    ```

   Deberías poder ver lo siguiente.

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   Si ves algo diferente a lo anterior, elimina la instancia de GitHub Codespace y créala nuevamente.

1. Ve a la sección [Configurar Servidores MCP](#configurar-servidores-mcp).

**👇👇👇 En su lugar, si prefieres usar VS Code en tu máquina local, sigue las instrucciones a continuación. La sección de abajo no aplica para aquellos que usan GitHub Codespaces. 👇👇👇**

## Usar Visual Studio Code

### Instalar PowerShell 👉 Para Usuarios de Windows

1. Verifica si ya has instalado PowerShell o no.

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   Si no ves la ruta del comando `pwsh`, significa que aún no has instalado PowerShell. Visita la [página de instalación de PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) y sigue las instrucciones.

1. Verifica la versión de tu PowerShell.

    ```bash
    pwsh --version
    ```

   Se recomienda `7.5.0` o superior. Si la tuya es menor que esa, visita la [página de instalación de PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) y sigue las instrucciones.

### Instalar git CLI

1. Verifica si ya has instalado git CLI o no.

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   Si no ves la ruta del comando `git`, significa que aún no has instalado git CLI. Visita la [página de instalación de git CLI](https://git-scm.com/downloads) y sigue las instrucciones.

1. Verifica la versión de tu git CLI.

    ```bash
    git --version
    ```

   Se recomienda `2.39.0` o superior. Si la tuya es menor que esa, visita la [página de instalación de git CLI](https://git-scm.com/downloads) y sigue las instrucciones.

### Instalar GitHub CLI

1. Verifica si ya has instalado GitHub CLI o no.

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   Si no ves la ruta del comando `gh`, significa que aún no has instalado GitHub CLI. Visita la [página de instalación de GitHub CLI](https://cli.github.com/) y sigue las instrucciones.

1. Verifica la versión de tu GitHub CLI.

    ```bash
    gh --version
    ```

   Se recomienda `2.65.0` o superior. Si la tuya es menor que esa, visita la [página de instalación de GitHub CLI](https://cli.github.com/) y sigue las instrucciones.

1. Verifica si has iniciado sesión en GitHub o no.

    ```bash
    gh auth status
    ```

   Si aún no has iniciado sesión, ejecuta `gh auth login` e inicia sesión.

### Instalar Docker Desktop

1. Verifica si ya has instalado Docker Desktop o no.

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   Si no ves la ruta del comando `docker`, significa que aún no has instalado Docker Desktop. Visita la [página de instalación de Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) y sigue las instrucciones.

1. Verifica la versión de tu Docker CLI.

    ```bash
    docker --version
    ```

   Se recomienda `28.0.4` o superior. Si la tuya es menor que esa, visita la [página de instalación de Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) y sigue las instrucciones.

### Instalar Visual Studio Code

1. Verifica si ya has instalado VS Code o no.

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   Si no ves la ruta del comando `code`, significa que aún no has instalado VS Code. Visita la [página de instalación de Visual Studio Code](https://code.visualstudio.com/) y sigue las instrucciones.

1. Verifica la versión de tu VS Code.

    ```bash
    code --version
    ```

   Se recomienda `1.99.0` o superior. Si la tuya es menor que esa, visita la [página de instalación de Visual Studio Code](https://code.visualstudio.com/) y sigue las instrucciones.

   > **NOTA**: Puede que no puedas ejecutar el comando `code`. En este caso, sigue [este documento](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) para la configuración.

### Iniciar Visual Studio Code

1. Crea un directorio de trabajo.
1. Ejecuta el comando para hacer fork de este repositorio y clonarlo a tu máquina local.

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. Navega al directorio clonado.

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. Ejecuta VS Code desde la terminal.

    ```bash
    code .
    ```

1. Abre una nueva terminal dentro de VS Code y ejecuta el siguiente comando para verificar el estado de tu repositorio.

    ```bash
    git remote -v
    ```

   Deberías poder ver lo siguiente. Si ves `microsoft` en `origin`, deberías clonarlo nuevamente desde tu repositorio forkeado.

    ```bash
    origin  https://github.com/<tu ID de GitHub>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<tu ID de GitHub>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. Verifica si ambas extensiones han sido instaladas o no &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) y [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat).

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   Si no ves nada, significa que aún no has instalado esas extensiones. Ejecuta el siguiente comando para instalar las extensiones.

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### Configurar Servidores MCP

1. Asegúrate de que Docker Desktop esté funcionando si usas VS Code en tu máquina local.
1. Establece la variable de entorno de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copia la configuración de los servidores MCP.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/.vscode/. \
          $REPOSITORY_ROOT/.vscode/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/* `
              -Destination $REPOSITORY_ROOT/.vscode/ -Recurse -Force
    ```

1. Abre la Paleta de Comandos presionando F1 o `Ctrl`+`Shift`+`P` en Windows o `Cmd`+`Shift`+`P` en Mac OS, y busca `MCP: List Servers`.
1. Elige `context7` y luego haz clic en `Start Server`.
1. Elige `awesome-copilot` y luego haz clic en `Start Server`.

## Verificar Modo Agente de GitHub Copilot

1. Haz clic en el ícono de GitHub Copilot en la parte superior de GitHub Codespace o VS Code y abre la ventana de GitHub Copilot.

   ![Abrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Si se te pide iniciar sesión o registrarte, hazlo. Es gratuito.
1. Asegúrate de estar usando el Modo Agente de GitHub Copilot.

   ![Modo Agente de GitHub Copilot](../../../docs/images/setup-03.png)

1. Selecciona el modelo ya sea `GPT-4.1` o `Claude Sonnet 4`.

## Configurar Modo Bestia

1. Ingresa `/mcp.awesome-copilot.get_search_prompt`, seguido de palabras clave como "beast mode"

   Debería mostrar la lista de modos de chat bestia. Ingresa un prompt similar a `4.1 Beast Chat Mode`. Luego se guardará bajo el directorio `.github/chatmodes`.

1. Elige el modo `4.1-Beast` en lugar del modo `Agent`. Automáticamente cambiará el LLM a `GPT 4.1`.

1. Establece la variable de entorno de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copia la configuración del espacio de trabajo.

    ```bash
    # bash/zsh
    cp $REPOSITORY_ROOT/docs/.vscode/settings.json \
       $REPOSITORY_ROOT/.vscode/settings.json
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/settings.json `
              -Destination $REPOSITORY_ROOT/.vscode/settings.json -Force
    ```

## Preparar Instrucciones Personalizadas

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/setup/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/setup/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

## Analizar Documento de Requisitos del Producto (PRD) y Diseñar API

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Agrega [`product-requirements.md`](../product-requirements.md) a GitHub Copilot.
1. Ingresa el prompt como el siguiente para que el Agente de GitHub Copilot genere un documento OpenAPI para ti. Este documento OpenAPI será la base de toda tu aplicación.

    ```text
    Aquí tienes el PRD para ti. Lee cuidadosamente todo el PRD y haz lo siguiente para mí.
    
    - Identifica primero todos los pasos que vas a hacer.
    - Genera un documento OpenAPI en formato YAML.
    - El documento OpenAPI debe capturar todos los endpoints de la API, parámetros y cargas útiles de solicitud/respuesta.
    - Asume que el servidor de la API es `http://localhost:8080` y la URL base es `/api`.
    - Guárdalo en el archivo `openapi.yaml` en la raíz del repositorio.
    ```

1. Verifica que `openapi.yaml` se genere en la raíz del repositorio.
1. Haz clic en el botón `[keep]` de GitHub Copilot para tomar el archivo `openapi.yaml`.

---

Bien. Has completado el paso "Entorno de Desarrollo". Vamos al [PASO 01: Desarrollo Backend Python](./01-python.md).

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
