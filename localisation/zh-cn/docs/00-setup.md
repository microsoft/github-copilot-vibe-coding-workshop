# 00: 开发环境

在这一步中，您将为工作坊设置开发环境。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [使用 GitHub Codespaces](#使用-github-codespaces)
- [使用 Visual Studio Code](#使用-visual-studio-code)
  - [安装 PowerShell 👉 Windows 用户](#安装-powershell--windows-用户)
  - [安装 git CLI](#安装-git-cli)
  - [安装 GitHub CLI](#安装-github-cli)
  - [安装 Docker Desktop](#安装-docker-desktop)
  - [安装 Visual Studio Code](#安装-visual-studio-code-1)
  - [启动 Visual Studio Code](#启动-visual-studio-code)
- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [分析产品需求文档 (PRD) 和设计 API](#分析产品需求文档-prd-和设计-api)

## 使用 GitHub Codespaces

1. 查看下图，按照点击顺序跟随以下步骤：![代码按钮图片](https://img.shields.io/badge/%3C%3E_Code-green) 👉 ![codespaces按钮图片](https://img.shields.io/badge/Codespaces-white) 👉 ![在main上创建codespace按钮图片](https://img.shields.io/badge/Create_codespace_on_main-green)，创建一个新的 GitHub Codespace 实例。根据网络状态，这可能需要 5-10 分钟。

   ![开始使用 GitHub Codespaces](./images/setup-01.png)

2. GitHub Codespace 实例准备就绪后，打开终端并运行以下命令检查所需的所有内容是否已正确安装。

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

    ```bash
    # Docker
    docker --version
    ```

    预期结果如下：

    ```text
    Python 3.12.7
    v20.18.0
    10.8.2
    openjdk 21.0.4 2024-07-16 LTS
    OpenJDK Runtime Environment Temurin-21.0.4+7 (build 21.0.4+7-LTS)
    OpenJDK 64-Bit Server VM Temurin-21.0.4+7 (build 21.0.4+7-LTS, mixed mode, sharing)
    9.0.101 [/usr/share/dotnet/sdk]
    Docker version 24.0.9, build 2936816
    ```

    > **注意**：如果您看到上述类似结果，则一切准备就绪。如果不是，请确保您已正确按照先决条件进行设置。

3. 运行以下命令检查 GitHub Copilot 扩展是否已正确安装。

    ```bash
    code --list-extensions | grep -i github.copilot
    ```

    预期结果如下：

    ```text
    GitHub.copilot
    GitHub.copilot-chat
    ```

    > **注意**：如果您看到上述结果，则 GitHub Copilot 扩展已正确安装。如果不是，请确保您已正确按照先决条件进行设置。

4. 您已准备好继续下一步！🎉

## 使用 Visual Studio Code

如果您真的想在本地机器上运行此工作坊，请按照以下步骤操作。

### 安装 PowerShell 👉 Windows 用户

如果您使用 Windows，请确保安装了 PowerShell 7+。

1. 访问 [PowerShell GitHub 发布页面](https://github.com/PowerShell/PowerShell/releases)，下载最新版本的 PowerShell。
2. 安装 PowerShell。
3. 打开 PowerShell 并运行以下命令检查版本。

    ```powershell
    $PSVersionTable.PSVersion
    ```

    预期结果如下：

    ```text
    Major  Minor  Patch  PreReleaseLabel BuildLabel
    -----  -----  -----  --------------- ----------
    7      4      6
    ```

    > **注意**：如果您看到上述类似结果，则 PowerShell 已正确安装。如果不是，请重复安装步骤。

### 安装 git CLI

1. 访问 [git 官方网站](https://git-scm.com/downloads)，下载适用于您操作系统的最新版本 git。
2. 安装 git。
3. 打开终端并运行以下命令检查版本。

    ```bash
    git --version
    ```

    预期结果如下：

    ```text
    git version 2.47.1
    ```

    > **注意**：如果您看到上述类似结果，则 git 已正确安装。如果不是，请重复安装步骤。

### 安装 GitHub CLI

1. 访问 [GitHub CLI 官方网站](https://cli.github.com/)，下载适用于您操作系统的最新版本 GitHub CLI。
2. 安装 GitHub CLI。
3. 打开终端并运行以下命令检查版本。

    ```bash
    gh --version
    ```

    预期结果如下：

    ```text
    gh version 2.63.2 (2024-12-10)
    https://github.com/cli/cli/releases/latest
    ```

    > **注意**：如果您看到上述类似结果，则 GitHub CLI 已正确安装。如果不是，请重复安装步骤。

### 安装 Docker Desktop

1. 访问 [Docker Desktop 官方网站](https://docs.docker.com/get-started/introduction/get-docker-desktop/)，下载适用于您操作系统的最新版本 Docker Desktop。
2. 安装 Docker Desktop。
3. 启动 Docker Desktop。
4. 打开终端并运行以下命令检查版本。

    ```bash
    docker --version
    ```

    预期结果如下：

    ```text
    Docker version 24.0.9, build 2936816
    ```

    > **注意**：如果您看到上述类似结果，则 Docker Desktop 已正确安装和运行。如果不是，请重复安装步骤。

### 安装 Visual Studio Code

1. 访问 [Visual Studio Code 官方网站](https://code.visualstudio.com/)，下载适用于您操作系统的最新版本 Visual Studio Code。
2. 安装 Visual Studio Code。
3. 启动 Visual Studio Code。
4. 安装 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 扩展。
5. 安装 [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) 扩展。

### 启动 Visual Studio Code

1. 打开终端并运行以下命令，在当前目录中启动 Visual Studio Code。

    ```bash
    code .
    ```

2. 运行以下命令检查 GitHub Copilot 扩展是否已正确安装。

    ```bash
    code --list-extensions | grep -i github.copilot
    ```

    预期结果如下：

    ```text
    GitHub.copilot
    GitHub.copilot-chat
    ```

    > **注意**：如果您看到上述结果，则 GitHub Copilot 扩展已正确安装。如果不是，请确保您已正确按照先决条件进行设置。

3. 您已准备好继续下一步！🎉

## 检查 GitHub Copilot 代理模式

GitHub Copilot 具有一个新功能，称为"代理模式"，可让您更有效地控制 GitHub Copilot。让我们检查它是否可用。

1. 打开 Visual Studio Code。
2. 按 `Ctrl+Shift+P`（在 macOS 上为 `Cmd+Shift+P`）打开命令面板。
3. 输入 `GitHub Copilot: Enable Agent Mode` 并按 `Enter`。

   > **注意**：如果您在命令面板中看不到此命令，请确保您已正确安装了 GitHub Copilot Chat 扩展。

4. 一旦启用代理模式，您会在 Visual Studio Code 的左侧面板看到一个代理模式图标。

   ![GitHub Copilot 代理模式](./images/setup-02.png)

5. 您已准备好继续下一步！🎉

## 准备自定义指令

自定义指令是一种让您更好地控制 GitHub Copilot 的方法。我们为每个编程语言准备了自定义指令。如果您想深入了解我们提供的自定义指令，请查看 [docs/custom-instructions](./custom-instructions/) 目录。

您可以稍后应用这些自定义指令，所以现在不用担心。

## 分析产品需求文档 (PRD) 和设计 API

现在，您已设置好开发环境，是时候分析产品需求文档 (PRD) 并设计 API 了。

1. 通过单击 [`product-requirements.md`](../product-requirements.md) 打开产品需求文档。或者，使用以下路径：`./product-requirements.md`

   > **注意**：如果您使用 GitHub Codespaces，您可以在左侧面板的文件资源管理器中找到该文件。

2. 仔细阅读 PRD 并了解要求。

3. 基于 PRD，设计 API。您可以使用 [OpenAPI 3.0 规范](https://swagger.io/specification/) 来设计 API，或者只是写下伪代码。

   > **提示**：GitHub Copilot 可以帮助您基于 PRD 设计 API。您可以询问 GitHub Copilot 类似："基于此 PRD，请为我设计一个 API"。

4. 一旦完成 API 设计，您就可以开始编码了！

5. 您已准备好继续下一步！🎉

---

## 下一步

现在您已设置好开发环境，是时候开始编码了！请继续到下一步：

- **01: Python 后端** 👉 [01-python.md](./01-python.md)
- **02: JavaScript 前端** 👉 [02-javascript.md](./02-javascript.md)
- **03: 从 Python 迁移到 Java** 👉 [03-java.md](./03-java.md)
- **04: 从 JavaScript 迁移到 .NET** 👉 [04-dotnet.md](./04-dotnet.md)
- **05: 容器化** 👉 [05-containerization.md](./05-containerization.md)