# GitHub Copilot Vibe コーディングワークショップ

![GitHub Copilot Vibe コーディングワークショップ](../../images/banner.png)

Python、JavaScript、Java、.NETなど様々なプログラミング言語で[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)と最新かつ最高の機能を使ってバイブコーディングを行い、コンテナ化によってアプリをクラウドネイティブにしましょう。飛び込む準備はできていますか？

## 背景

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。最初のMVPとして、ウェブサイトを迅速に構築したいと考えています。ContosoのIT部門には現在、それぞれPythonとJavaScriptを使用する2人の開発者がいます。ローンチ日が急速に近づいているため、両方の開発者がアプリケーションを迅速に提供する必要があります。

しかし、状況は以下の通りです...

## ワークショップの目標

- GitHub Copilot エージェントモードを使用してアプリケーションを構築する。
- GitHub Copilotにカスタム指示を追加して、GitHub Copilotをより良く制御する。
- GitHub Copilotに様々なMCPサーバーを追加して、アプリケーションをより正確に構築する。

## 多言語でのワークショップ

このワークショップ教材は現在、以下の言語で提供されています：

[English](../../README.md) | [Español](../es-es/) | [Français](../fr-fr/) | [日本語](./README.md) | [한국어](../ko-kr/) | [Português](../pt-br/) | [中文(简体)](../zh-cn/)

## 前提条件

このワークショップでは、Webブラウザ以外に準備が不要なため、[GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)を強く推奨します。

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

ただし、どうしても自分のマシンを使用する必要がある場合は、以下で特定されたすべてのものがインストールされていることを確認してください。

### 共通

- [Visual Studio Code](https://code.visualstudio.com/)
- VS Code [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 拡張機能
- VS Code [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) 拡張機能
- 💥 Windows ユーザー向け 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) または [pyenv for Windows](https://github.com/pyenv-win/pyenv-win)
- pyenv経由でPython 3.12+
- `uv` パッケージマネージャー（推奨）または `pip`
- VS Code [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python) 拡張機能
- VS Code [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance) 拡張機能
- VS Code [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy) 拡張機能
- VS Code [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8) 拡張機能

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) または [nvm for Windows](https://github.com/coreybutler/nvm-windows)
- nvm経由で最新LTSの[Node.js](https://nodejs.org/)

### Java

- [SDKMAN](https://sdkman.io/)
- SDKMAN経由で[OpenJDK 21](https://learn.microsoft.com/java/openjdk/download)
- SDKMAN経由で[Apache Maven](https://maven.apache.org/download.cgi)
- SDKMAN経由で[Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html)
- SDKMAN経由で[Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html)
- VS Code [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack) 拡張機能
- VS Code [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack) 拡張機能

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- [VS Code C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit) 拡張機能

## 製品要求仕様書

まず最初に始めるべき場所は、この[PRD（製品要求仕様書）](./product-requirements.md)です。この文書は、何をすべきか、どのようにすべきかについてのより良い理解を提供します。

## ワークショップの手順

以下のリンクに従って進める自己ペース型ワークショップです：

| ステップ                               | リンク                                                    |
|------------------------------------|---------------------------------------------------------|
| 00: 開発環境                        | [00-setup.md](./docs/00-setup.md)                       |
| 01: Python バックエンド             | [01-python.md](./docs/01-python.md)                     |
| 02: JavaScript フロントエンド        | [02-javascript.md](./docs/02-javascript.md)             |
| 03: Python から Java への移行       | [03-java.md](./docs/03-java.md)                         |
| 04: JavaScript から .NET への移行   | [04-dotnet.md](./docs/04-dotnet.md)                     |
| 05: コンテナ化                      | [05-containerization.md](./docs/05-containerization.md) |

## 完成サンプル

各アプリケーションの完成例をチェックしてください。これらもGitHub Copilotでバイブコーディングされているため、完璧ではない可能性があり、アプリに従う必要はありません。

| 言語            | アプリケーション | 場所                             |
|---------------------|-------------|--------------------------------------|
| Python バックエンド      | FastAPI     | [python](./complete/python/)         |
| JavaScript フロントエンド | React       | [javascript](./complete/javascript/) |
| Java バックエンド        | Spring Boot | [java](./complete/java/)             |
| .NET フロントエンド       | Blazor      | [dotnet](./complete/dotnet/)         |
| コンテナ化    | Container   | [containerization](./complete/)      |

## 詳細情報...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Agent Mode](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Custom Instructions](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Changing AI Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Curated MCP Servers](https://github.com/modelcontextprotocol/servers)

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
