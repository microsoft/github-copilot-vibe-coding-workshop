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
  - [安装 Visual Studio Code](#安装-visual-studio-code)
  - [启动 Visual Studio Code](#启动-visual-studio-code)
  - [设置 MCP 服务器](#设置-mcp-服务器)
- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [配置野兽模式](#配置野兽模式)
- [准备自定义指令](#准备自定义指令)
- [分析产品需求文档 (PRD) 和设计 API](#分析产品需求文档-prd-和设计-api)

## 使用 GitHub Codespaces

1. 点击此链接 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. GitHub Codespace 实例准备就绪后，打开终端并运行以下命令检查所需的所有内容是否已正确安装。

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

1. 检查您的存储库状态。

    ```bash
    git remote -v
    ```

   您应该能够看到以下内容。

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   如果您看到与上述不同的内容，请删除 GitHub Codespace 实例并重新创建。

1. 移至 [设置 MCP 服务器](#设置-mcp-服务器) 部分。

**👇👇👇 相反，如果您想在本地机器上使用 VS Code，请按照下面的说明操作。下面的部分不适用于使用 GitHub Codespaces 的用户。👇👇👇**

## 使用 Visual Studio Code

### 安装 PowerShell 👉 Windows 用户

1. 检查您是否已经安装了 PowerShell。

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   如果您没有看到 `pwsh` 的命令路径，这意味着您还没有安装 PowerShell。请访问 [PowerShell 安装页面](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) 并按照说明操作。

1. 检查您的 PowerShell 版本。

    ```bash
    pwsh --version
    ```

   建议使用 `7.5.0` 或更高版本。如果您的版本低于该版本，请访问 [PowerShell 安装页面](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) 并按照说明操作。

### 安装 git CLI

1. 检查您是否已经安装了 git CLI。

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   如果您没有看到 `git` 的命令路径，这意味着您还没有安装 git CLI。请访问 [git CLI 安装页面](https://git-scm.com/downloads) 并按照说明操作。

1. 检查您的 git CLI 版本。

    ```bash
    git --version
    ```

   建议使用 `2.39.0` 或更高版本。如果您的版本低于该版本，请访问 [git CLI 安装页面](https://git-scm.com/downloads) 并按照说明操作。

### 安装 GitHub CLI

1. 检查您是否已经安装了 GitHub CLI。

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   如果您没有看到 `gh` 的命令路径，这意味着您还没有安装 GitHub CLI。请访问 [GitHub CLI 安装页面](https://cli.github.com/) 并按照说明操作。

1. 检查您的 GitHub CLI 版本。

    ```bash
    gh --version
    ```

   建议使用 `2.65.0` 或更高版本。如果您的版本低于该版本，请访问 [GitHub CLI 安装页面](https://cli.github.com/) 并按照说明操作。

1. 检查您是否已经登录到 GitHub。

    ```bash
    gh auth status
    ```

   如果您还没有登录，请运行 `gh auth login` 并登录。

### 安装 Docker Desktop

1. 检查您是否已经安装了 Docker Desktop。

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   如果您没有看到 `docker` 的命令路径，这意味着您还没有安装 Docker Desktop。请访问 [Docker Desktop 安装页面](https://docs.docker.com/get-started/introduction/get-docker-desktop/) 并按照说明操作。

1. 检查您的 Docker CLI 版本。

    ```bash
    docker --version
    ```

   建议使用 `28.0.4` 或更高版本。如果您的版本低于该版本，请访问 [Docker Desktop 安装页面](https://docs.docker.com/get-started/introduction/get-docker-desktop/) 并按照说明操作。

### 安装 Visual Studio Code

1. 检查您是否已经安装了 VS Code。

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   如果您没有看到 `code` 的命令路径，这意味着您还没有安装 VS Code。请访问 [Visual Studio Code 安装页面](https://code.visualstudio.com/) 并按照说明操作。

1. 检查您的 VS Code 版本。

    ```bash
    code --version
    ```

   建议使用 `1.99.0` 或更高版本。如果您的版本低于该版本，请访问 [Visual Studio Code 安装页面](https://code.visualstudio.com/) 并按照说明操作。

   > **注意**：您可能无法执行 `code` 命令。在这种情况下，请按照 [此文档](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) 进行设置。

### 启动 Visual Studio Code

1. 创建一个工作目录。
1. 运行命令来分叉此存储库并将其克隆到您的本地机器。

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. 导航到克隆的目录。

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. 从终端运行 VS Code。

    ```bash
    code .
    ```

1. 在 VS Code 中打开一个新终端并运行以下命令检查您的存储库状态。

    ```bash
    git remote -v
    ```

   您应该能够看到以下内容。如果您在 `origin` 中看到 `microsoft`，应该从您分叉的存储库重新克隆。

    ```bash
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. 检查两个扩展是否都已安装 &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 和 [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)。

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   如果您什么都没看到，这意味着您还没有安装这些扩展。运行以下命令来安装扩展。

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### 设置 MCP 服务器

1. 如果您在本地机器上使用 VS Code，请确保 Docker Desktop 正在运行。
1. 设置 `$REPOSITORY_ROOT` 环境变量。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. 复制 MCP 服务器设置。

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

1. 通过按 F1 或在 Windows 上按 `Ctrl`+`Shift`+`P` 或在 Mac OS 上按 `Cmd`+`Shift`+`P` 打开命令面板，然后搜索 `MCP: List Servers`。
1. 选择 `context7` 然后点击 `Start Server`。
1. 选择 `awesome-copilot` 然后点击 `Start Server`。

## 检查 GitHub Copilot 代理模式

1. 点击 GitHub Codespace 或 VS Code 顶部的 GitHub Copilot 图标，打开 GitHub Copilot 窗口。

   ![打开 GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. 如果要求您登录或注册，请这样做。这是免费的。
1. 确保您正在使用 GitHub Copilot 代理模式。

   ![GitHub Copilot 代理模式](../../../docs/images/setup-03.png)

1. 选择模型为 `GPT-4.1` 或 `Claude Sonnet 4`。

## 配置野兽模式

1. 输入 `/mcp.awesome-copilot.get_search_prompt`，然后输入类似 "beast mode" 的关键词

   它应该显示野兽聊天模式列表。输入类似 `4.1 Beast Chat Mode` 的提示。然后它将保存在 `.github/chatmodes` 目录下。

1. 选择 `4.1-Beast` 模式而不是 `Agent` 模式。它将自动将 LLM 更改为 `GPT 4.1`。

1. 设置 `$REPOSITORY_ROOT` 环境变量。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. 复制工作区设置。

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

## 准备自定义指令

1. 设置 `$REPOSITORY_ROOT` 环境变量。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. 复制自定义指令。

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

## 分析产品需求文档 (PRD) 和设计 API

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 将 [`product-requirements.md`](../product-requirements.md) 添加到 GitHub Copilot。
1. 为 GitHub Copilot 代理输入类似以下的提示，以便为您生成 OpenAPI 文档。这个 OpenAPI 文档将是您整个应用程序的基础。

    ```text
    这是为您准备的 PRD。仔细阅读整个 PRD 并为我做以下工作。
    
    - 首先确定所有步骤，您将要做什么。
    - 生成 YAML 格式的 OpenAPI 文档。
    - OpenAPI 文档应该捕获所有 API 端点、参数和请求/响应负载。
    - 假设 API 服务器是 `http://localhost:8080`，基础 URL 是 `/api`。
    - 将其保存到存储库根目录的 `openapi.yaml` 文件中。
    ```

1. 验证 `openapi.yaml` 在存储库根目录中生成。
1. 点击 GitHub Copilot 的 `[keep]` 按钮来保留 `openapi.yaml` 文件。

---

好的。您已经完成了"开发环境"步骤。让我们继续 [步骤 01：Python 后端开发](./01-python.md)。

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
