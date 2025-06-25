# GitHub Copilot Vibe 编程工作坊

![GitHub Copilot Vibe 编程工作坊](../../images/banner.png)

让我们使用 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 及其在 Python、JavaScript、Java 和 .NET 等各种编程语言中的最新最强大功能进行氛围编程，并通过容器化让应用程序变得云原生。你准备好开始了吗？

## 背景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。作为他们的第一个 MVP，他们希望快速构建网站。Contoso 的 IT 部门目前有两名开发人员，分别使用 Python 和 JavaScript。发布日期临近，因此两名开发人员都需要快速交付应用程序。

但情况是这样的...

## 工作坊目标

- 使用 GitHub Copilot 代理模式构建应用程序。
- 向 GitHub Copilot 添加自定义指令，以便更好地控制 GitHub Copilot。
- 向 GitHub Copilot 添加各种 MCP 服务器，以便更精确地构建应用程序。

## 多语言工作坊

此工作坊材料目前提供以下语言版本：

[English](../../README.md) | [Español](../es-es/) | [Français](../fr-fr/) | [日本語](../ja-jp/) | [한국어](../ko-kr/) | [Português](../pt-br/) | [中文(简体)](./README.md)

## 先决条件

在此工作坊期间，强烈推荐使用 [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)，因为除了网络浏览器外无需任何准备。

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

但是，如果您确实需要使用自己的机器，请确保您已安装以下所有内容。

### 通用

- [Visual Studio Code](https://code.visualstudio.com/)
- VS Code [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 扩展
- VS Code [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) 扩展
- 💥 Windows 用户 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) 或 [Windows 版 pyenv](https://github.com/pyenv-win/pyenv-win)
- 通过 pyenv 安装 Python 3.12+
- `uv` 包管理器（推荐）或 `pip`
- VS Code [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python) 扩展
- VS Code [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance) 扩展
- VS Code [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy) 扩展
- VS Code [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8) 扩展

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) 或 [Windows 版 nvm](https://github.com/coreybutler/nvm-windows)
- 通过 nvm 安装最新 LTS 版本的 [Node.js](https://nodejs.org/)

### Java

- [SDKMAN](https://sdkman.io/)
- 通过 SDKMAN 安装 [OpenJDK 21](https://learn.microsoft.com/java/openjdk/download)
- 通过 SDKMAN 安装 [Apache Maven](https://maven.apache.org/download.cgi)
- 通过 SDKMAN 安装 [Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html)
- 通过 SDKMAN 安装 [Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html)
- VS Code [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack) 扩展
- VS Code [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack) 扩展

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- [VS Code C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit) 扩展

## 产品需求文档

首先，您应该从这个 [PRD（产品需求文档）](./product-requirements.md) 开始。此文档将让您更好地了解要做什么以及如何做。

## 工作坊说明

这是一个按照以下链接进行的自定进度工作坊：

| 步骤                              | 链接                                                      |
|----------------------------------|----------------------------------------------------------|
| 00: 开发环境                      | [00-setup.md](./docs/00-setup.md)                       |
| 01: Python 后端                  | [01-python.md](./docs/01-python.md)                     |
| 02: JavaScript 前端              | [02-javascript.md](./docs/02-javascript.md)             |
| 03: 从 Python 迁移到 Java        | [03-java.md](./docs/03-java.md)                         |
| 04: 从 JavaScript 迁移到 .NET    | [04-dotnet.md](./docs/04-dotnet.md)                     |
| 05: 容器化                       | [05-containerization.md](./docs/05-containerization.md) |

## 完整示例

查看每个应用程序的完整示例。它们也是使用 GitHub Copilot 进行氛围编程的，因此可能不完美，您不必完全遵循应用程序。

| 语言               | 应用程序     | 位置                                  |
|-------------------|-------------|-------------------------------------|
| Python 后端       | FastAPI     | [python](./complete/python/)        |
| JavaScript 前端   | React       | [javascript](./complete/javascript/) |
| Java 后端         | Spring Boot | [java](./complete/java/)             |
| .NET 前端         | Blazor      | [dotnet](./complete/dotnet/)         |
| 容器化            | Container   | [containerization](./complete/)      |

## 延伸阅读...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Agent Mode](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Changing AI Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Curated MCP Servers](https://github.com/modelcontextprotocol/servers)

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
