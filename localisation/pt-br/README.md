# Workshop de Codificação GitHub Copilot Vibe

![Workshop de Codificação GitHub Copilot Vibe](../../images/banner.png)

Vamos codar com vibe usando o [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) e seus recursos mais novos e incríveis em várias linguagens de programação como Python, JavaScript, Java e .NET, além de tornar os aplicativos nativos da nuvem através da containerização. Você está pronto para mergulhar?

## Contexto

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais. Como seu primeiro MVP, eles querem construir rapidamente o site. O departamento de TI da Contoso atualmente tem dois desenvolvedores usando Python e JavaScript, respectivamente. A data de lançamento está se aproximando rapidamente, então ambos os desenvolvedores devem entregar a aplicação rapidamente.

Mas aqui está a situação...

## Objetivos do Workshop

- Construir aplicações usando o Modo Agente do GitHub Copilot.
- Adicionar instruções customizadas ao GitHub Copilot para que você tenha mais controle sobre o GitHub Copilot.
- Adicionar vários servidores MCP ao GitHub Copilot para que você construa as aplicações com mais precisão.

## Workshop no Seu Idioma

Este material do workshop está atualmente disponível nos seguintes idiomas:

[English](../../README.md) | [Español](../es-es/) | [Français](../fr-fr/) | [日本語](../ja-jp/) | [한국어](../ko-kr/) | [Português](./README.md) | [中文(简体)](../zh-cn/)

## Pré-requisitos

Durante este workshop, [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) é altamente recomendado porque não há necessidade de preparação, exceto um navegador web.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

No entanto, se você realmente precisar usar sua máquina, certifique-se de ter instalado tudo identificado abaixo.

### Comum

- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) do VS Code
- Extensão [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) do VS Code
- 💥 Para usuários Windows 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) ou [pyenv for Windows](https://github.com/pyenv-win/pyenv-win)
- Python 3.12+ através do pyenv
- Gerenciador de pacotes `uv` (recomendado) ou `pip`
- Extensão [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python) do VS Code
- Extensão [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance) do VS Code
- Extensão [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy) do VS Code
- Extensão [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8) do VS Code

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) ou [nvm for Windows](https://github.com/coreybutler/nvm-windows)
- A versão LTS mais recente do [Node.js](https://nodejs.org/) através do nvm

### Java

- [SDKMAN](https://sdkman.io/)
- [OpenJDK 21](https://learn.microsoft.com/java/openjdk/download) através do SDKMAN
- [Apache Maven](https://maven.apache.org/download.cgi) através do SDKMAN
- [Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html) através do SDKMAN
- [Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html) através do SDKMAN
- Extensão [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack) do VS Code
- Extensão [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack) do VS Code

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- Extensão [VS Code C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit)

## Documento de Requisitos do Produto

Em primeiro lugar, o lugar para você começar é este [PRD (Documento de Requisitos do Produto)](./product-requirements.md). Este documento lhe dará uma melhor compreensão do que fazer e como fazer.

## Instruções do Workshop

Este é um workshop autoguiado seguindo os links abaixo:

| Etapa                                    | Link                                                    |
|------------------------------------------|---------------------------------------------------------|
| 00: Ambiente de Desenvolvimento         | [00-setup.md](./docs/00-setup.md)                       |
| 01: Backend Python                      | [01-python.md](./docs/01-python.md)                     |
| 02: Frontend JavaScript                 | [02-javascript.md](./docs/02-javascript.md)             |
| 03: Migração Java do Python             | [03-java.md](./docs/03-java.md)                         |
| 04: Migração .NET do JavaScript         | [04-dotnet.md](./docs/04-dotnet.md)                     |
| 05: Containerização                     | [05-containerization.md](./docs/05-containerization.md) |

## Exemplos Completos

Confira o exemplo completo de cada aplicação. Eles também foram codificados com vibe usando o GitHub Copilot, portanto, podem não ser perfeitos, e você não precisa seguir o app.

| Linguagem           | Aplicação   | Localização                          |
|---------------------|-------------|--------------------------------------|
| Backend Python      | FastAPI     | [python](./complete/python/)         |
| Frontend JavaScript | React       | [javascript](./complete/javascript/) |
| Backend Java        | Spring Boot | [java](./complete/java/)             |
| Frontend .NET       | Blazor      | [dotnet](./complete/dotnet/)         |
| Containerização     | Container   | [containerization](./complete/)      |

## Leia Mais...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Agent Mode](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Changing AI Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Curated MCP Servers](https://github.com/modelcontextprotocol/servers)

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
