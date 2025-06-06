# 04: 从 JavaScript 迁移到 .NET

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

由于 JavaScript 开发人员离开了公司，利益相关者要求将现有的 JavaScript 前端应用迁移到 .NET，使用 Blazor。

现在，作为 .NET 开发人员，您应该将现有的 React 应用迁移到 Blazor。顺便说一下，您对 JavaScript 和 React 了解很少。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [准备 Blazor 项目](#准备-blazor-项目)
- [迁移 React 前端应用](#迁移-react-前端应用)

### 检查 GitHub Copilot 代理模式

1. 点击 GitHub Codespace 或 VS Code 顶部的 GitHub Copilot 图标，打开 GitHub Copilot 窗口。

   ![打开 GitHub Copilot Chat](./images/setup-02.png)

1. 如果要求您登录或注册，请执行操作。这是免费的。
1. 确保您使用的是 GitHub Copilot 代理模式。

   ![GitHub Copilot 代理模式](./images/setup-03.png)

1. 选择模型为 `GPT-4.1` 或 `Claude Sonnet 4`。
1. 确保您已配置了 [MCP 服务器](./00-setup.md#设置-mcp-服务器)。

### 准备自定义指令

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 准备 Blazor 项目

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示初始化 Blazor 项目。

    ```text
    我想创建一个 Blazor 项目作为前端 Web 应用。请按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `dotnet`。
    - 首先确定您要执行的所有步骤。
    - 使用 Blazor Server 或 Blazor WebAssembly（推荐 Server）。
    - 使用 .NET 9。
    - 使用 `Contoso.BlazorApp` 作为项目名称。
    - 添加必要的依赖项来与后端 API 通信。
    ```

### 迁移 React 前端应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 将 [`product-requirements.md`](../product-requirements.md)、[`openapi.yaml`](../openapi.yaml) 和 JavaScript 应用源代码添加到 GitHub Copilot。
1. 使用如下提示迁移 React 应用程序。

    ```text
    我想将现有的 React 应用程序迁移到 Blazor。仔细分析现有的 JavaScript 代码、PRD 和 `openapi.yaml`。然后，按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `dotnet`。
    - 首先确定您要执行的所有步骤。
    - 使用 Blazor 作为前端应用框架。
    - 后端 API URL 是 Java 应用程序运行的地址（通常是 `http://localhost:8080`）。
    - 使用端口号 `5000`。
    - 创建一个简单但功能齐全的社交媒体应用程序。
    - 应用程序应该允许用户创建、查看、编辑和删除帖子。
    - 应用程序应该允许用户对帖子进行评论。
    - 应用程序应该允许用户为帖子点赞。
    - 使用 Bootstrap 或类似的 CSS 框架。
    - 确保应用程序是响应式的。
    - 确保功能与原始 React 应用程序完全相同。
    ```

1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
1. 应用程序构建完成后，验证它是否正常工作。

    ```text
    运行 Blazor 应用并验证应用是否正常运行。确保应用可以与后端 API 通信。

    如果应用运行失败，请分析问题并修复它们。
    ```

1. 确保 Java 后端正在 `http://localhost:8080` 上运行。
1. 打开网络浏览器并导航到 `http://localhost:5000`。
1. 验证您可以创建帖子、查看帖子、添加评论和点赞。
1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成".NET"步骤。让我们进入 [步骤 05: 容器化](./05-containerization.md)。