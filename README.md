# GitHub Copilot Vibe Coding Workshop

![GitHub Copilot Vibe Coding Workshop](./images/banner.png)

Let's vibe-code with [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) and its newest and greatest features in various programming languages such as Python, JavaScript, Java and .NET, as well as make the apps cloud-native by containerization. Are you ready to jump in?

## Background

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers. As their first MVP, the want to quickly build the website. The IT department of Contoso currently has two developers using Python and JavaScript respectively. The launch date is fast approaching, so both developers should quickly deliver the application.

But here's the situation...

## Workshop Objectives

- Build applications using GitHub Copilot Agent Mode.
- Add custom instruction to GitHub Copilot so that you have more control over GitHub Copilot.
- Add various MCP servers to GitHub Copilot so that you build the applications more precisely.

## Workshop in Your Language

This workshop material is currently provided in the following languages:

[English](./README.md) | [Español](./localisation/es-es/) | [Français](./localisation/fr-fr/) | [日本語](./localisation/ja-jp/) | [한국어](./localisation/ko-kr/) | [Português](./localisation/pt-br/) | [中文(简体)](./localisation/zh-cn/)

## Prerequisites

During this workshop, [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) is highly recommended because there's no need for preparation, except a web browser.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

However, if you really need to use your machine, make sure you've installed everything identified below.

### Common

- [Visual Studio Code](https://code.visualstudio.com/)
- VS Code [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) Extension
- VS Code [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) Extension
- 💥 For Windows users 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) or [pyenv for Windows](https://github.com/pyenv-win/pyenv-win)
- Python 3.12+ through pyenv
- `uv` package manager (recommended) or `pip`
- VS Code [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python) Extension
- VS Code [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance) Extension
- VS Code [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy) Extension
- VS Code [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8) Extension

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) or [nvm for Windows](https://github.com/coreybutler/nvm-windows)
- The latest LTS of [Node.js](https://nodejs.org/) through nvm

### Java

- [SDKMAN](https://sdkman.io/)
- [OpenJDK 21](https://learn.microsoft.com/java/openjdk/download) through SDKMAN
- [Apache Maven](https://maven.apache.org/download.cgi) through SDKMAN
- [Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html) through SDKMAN
- [Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html) through SDKMAN
- VS Code [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack) Extension
- VS Code [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack) Extension

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- [VS Code C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit) Extension

## Product Requirements Document

First and foremost, the place for you to start is this [PRD (Product Requirements Document)](./product-requirements.md). This document will give you a better understanding of what to do and how to do it.

## Workshop Instructions

This is a self-paced workshop by following the links below:

| Step                               | Link                                                    |
|------------------------------------|---------------------------------------------------------|
| 00: Development Environment        | [00-setup.md](./docs/00-setup.md)                       |
| 01: Python Backend                 | [01-python.md](./docs/01-python.md)                     |
| 02: JavaScript Frontend            | [02-javascript.md](./docs/02-javascript.md)             |
| 03: Java Migration from Python     | [03-java.md](./docs/03-java.md)                         |
| 04: .NET Migration from JavaScript | [04-dotnet.md](./docs/04-dotnet.md)                     |
| 05: Containerization               | [05-containerization.md](./docs/05-containerization.md) |

## Complete Samples

Check out the complete example of each application. They're also vibe-coded with GitHub Copilot, therefore, they might not be perfect, and you don't have to follow the app.

| Language            | Application | Location                             |
|---------------------|-------------|--------------------------------------|
| Python Backend      | FastAPI     | [python](./complete/python/)         |
| JavaScript Frontend | React       | [javascript](./complete/javascript/) |
| Java Backend        | Spring Boot | [java](./complete/java/)             |
| .NET Frontend       | Blazor      | [dotnet](./complete/dotnet/)         |
| Containerization    | Container   | [containerization](./complete/)      |

## Read More...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Agent Mode](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Changing AI Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Curated MCP Servers](https://github.com/modelcontextprotocol/servers)
