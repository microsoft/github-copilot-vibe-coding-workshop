# Taller de Programación Vibe con GitHub Copilot

![Taller de Programación Vibe con GitHub Copilot](../../images/banner.png)

¡Vamos a programar con vibe usando [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) y sus características más nuevas y mejores en varios lenguajes de programación como Python, JavaScript, Java y .NET, así como hacer que las aplicaciones sean nativas de la nube mediante contenedorización! ¿Estás listo para sumergirte?

## Contexto

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales. Como su primer MVP, quieren construir rápidamente el sitio web. El departamento de TI de Contoso actualmente tiene dos desarrolladores que usan Python y JavaScript respectivamente. La fecha de lanzamiento se acerca rápidamente, así que ambos desarrolladores deben entregar la aplicación rápidamente.

Pero aquí está la situación...

## Objetivos del Taller

- Construir aplicaciones usando el Modo Agente de GitHub Copilot.
- Agregar instrucciones personalizadas a GitHub Copilot para tener más control sobre GitHub Copilot.
- Agregar varios servidores MCP a GitHub Copilot para construir las aplicaciones de manera más precisa.

## Taller en Tu Idioma

Este material del taller está actualmente disponible en los siguientes idiomas:

[English](../../README.md) | [Español](./README.md) | [Français](../fr-fr/) | [日本語](../ja-jp/) | [한국어](../ko-kr/) | [Português](../pt-br/) | [中文(简体)](../zh-cn/)

## Prerrequisitos

Durante este taller, se recomienda altamente [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) porque no hay necesidad de preparación, excepto un navegador web.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

Sin embargo, si realmente necesitas usar tu máquina, asegúrate de haber instalado todo lo identificado a continuación.

### Común

- [Visual Studio Code](https://code.visualstudio.com/)
- Extensión VS Code [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Extensión VS Code [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- 💥 Para usuarios de Windows 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) o [pyenv para Windows](https://github.com/pyenv-win/pyenv-win)
- Python 3.12+ a través de pyenv
- Gestor de paquetes `uv` (recomendado) o `pip`
- Extensión VS Code [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python)
- Extensión VS Code [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance)
- Extensión VS Code [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy)
- Extensión VS Code [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8)

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) o [nvm para Windows](https://github.com/coreybutler/nvm-windows)
- La última LTS de [Node.js](https://nodejs.org/) a través de nvm

### Java

- [SDKMAN](https://sdkman.io/)
- [OpenJDK 21](https://learn.microsoft.com/java/openjdk/download) a través de SDKMAN
- [Apache Maven](https://maven.apache.org/download.cgi) a través de SDKMAN
- [Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html) a través de SDKMAN
- [Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html) a través de SDKMAN
- Extensión VS Code [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack)
- Extensión VS Code [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack)

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- Extensión [VS Code C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit)

## Documento de Requisitos del Producto

Primero y principal, el lugar para comenzar es este [PRD (Documento de Requisitos del Producto)](./product-requirements.md). Este documento te dará una mejor comprensión de qué hacer y cómo hacerlo.

## Instrucciones del Taller

Este es un taller autodidacta siguiendo los enlaces a continuación:

| Paso                               | Enlace                                                   |
|------------------------------------|----------------------------------------------------------|
| 00: Entorno de Desarrollo          | [00-setup.md](./docs/00-setup.md)                       |
| 01: Backend Python                 | [01-python.md](./docs/01-python.md)                     |
| 02: Frontend JavaScript            | [02-javascript.md](./docs/02-javascript.md)             |
| 03: Migración Java desde Python    | [03-java.md](./docs/03-java.md)                         |
| 04: Migración .NET desde JavaScript| [04-dotnet.md](./docs/04-dotnet.md)                     |
| 05: Contenedorización              | [05-containerization.md](./docs/05-containerization.md) |

## Ejemplos Completos

Revisa el ejemplo completo de cada aplicación. También están programadas con vibe usando GitHub Copilot, por lo tanto, podrían no ser perfectas, y no tienes que seguir la aplicación.

| Lenguaje            | Aplicación  | Ubicación                             |
|---------------------|-------------|---------------------------------------|
| Backend Python      | FastAPI     | [python](./complete/python/)         |
| Frontend JavaScript | React       | [javascript](./complete/javascript/) |
| Backend Java        | Spring Boot | [java](./complete/java/)             |
| Frontend .NET       | Blazor      | [dotnet](./complete/dotnet/)         |
| Contenedorización   | Container   | [containerization](./complete/)      |

## Leer Más...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Modo Agente](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Instrucciones Personalizadas](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Cambiar Modelos de IA](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Servidores MCP Curados](https://github.com/modelcontextprotocol/servers)

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
