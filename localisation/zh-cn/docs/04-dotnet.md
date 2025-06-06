# 04: 从 JavaScript 迁移到 .NET

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的营销部门希望推出一个微型社交媒体网站，向现有客户和潜在客户推广他们的产品。

他们已经有一个用 JavaScript 编写的前端应用，更具体地说是用 React 编写的。然而，突然间，他们发出了新的需求，要求使用 .NET 重新开发前端应用，特别是使用 Blazor。

现在，作为一名 .NET 开发人员，您应该将现有的 React 应用迁移到 Blazor。顺便说一下，您对 JavaScript 和 React 的了解非常有限。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 开始使用

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [准备 Blazor Web 应用项目](#准备-blazor-web-应用项目)
- [迁移 React Web 应用](#迁移-react-web-应用)

### 检查 GitHub Copilot 代理模式

1. 点击 GitHub Codespace 或 VS Code 顶部的 GitHub Copilot 图标，打开 GitHub Copilot 窗口。

   ![打开 GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. 如果要求您登录或注册，请执行此操作。这是免费的。
1. 确保您正在使用 GitHub Copilot 代理模式。

   ![GitHub Copilot 代理模式](../../../docs/images/setup-03.png)

1. 选择模型为 `GPT-4.1` 或 `Claude Sonnet 4`。
1. 确保您已配置 [MCP 服务器](./00-setup.md#设置-mcp-服务器)。

### 准备自定义指令

1. 设置环境变量 `$REPOSITORY_ROOT`。

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

### 准备 Blazor Web 应用项目

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示来搭建 Blazor Web 应用项目。

    ```text
    我想搭建一个 Blazor Web 应用。请按照以下说明操作。

    - 使用 context7。
    - 您的工作目录是 `dotnet`。
    - 首先确定您要执行的所有步骤。
    - 向我展示与 Blazor 相关的 .NET 项目列表并让我选择。
    - 生成一个 Blazor 项目。
    - 使用项目名称 `Contoso.BlazorApp`。
    - 更新 `launchSettings.json` 将端口号更改为 HTTP 的 `3031`，HTTPS 的 `43031`。
    - 创建一个解决方案 `ContosoWebApp`，并将 Blazor 项目添加到此解决方案中。
    - 构建 Blazor 应用并验证应用是否正确构建。
    - 运行此 Blazor 应用并验证应用是否正常运行。
    - 如果构建或运行应用失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

### 运行 Spring Boot 后端应用

1. 确保 Spring Boot 后端应用正在运行。

    ```text
    运行位于 `java` 目录的 Spring Boot 后端 API。
    ```

   > **注意**: 您也可以使用 [`complete/java`](../complete/java/) 示例应用。

1. 如果您使用 GitHub Codespaces，请确保端口号 `8080` 设置为 `public` 而不是 `private`。否则，从前端应用访问时会出现 `401` 错误。

### 迁移 React Web 应用

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示将 React 迁移到 Blazor。

    ```text
    现在，我们要将现有的基于 React 的 Web 应用迁移到 Blazor Web 应用。请按照以下说明进行迁移。
    
    - 使用 context7。
    - 现有的 React 应用位于 `javascript`。
    - 您的工作目录是 `dotnet/Contoso.BlazorApp`。
    - 首先确定您要执行的所有步骤。
    - 有一个后端 API 应用运行在 `http://localhost:8080`。
    - 分析现有 React 应用的应用程序结构。
    - 将所有 React 组件迁移到 Blazor 组件。两个对应的组件应该尽可能完全相似。
    - 将所有必要的 CSS 元素从 React 迁移到 Blazor。
    - 在将 JavaScript 元素从 React 迁移到 Blazor 时，尽可能最大化使用 Blazor 的原生功能。如果必须使用 JavaScript，请使用 Blazor 的 JSInterop 功能。
    - 如有必要，添加与 .NET 9 兼容的 NuGet 包。
    ```

1. 迁移完成后，使用如下提示验证迁移结果。

    ```text
    我想构建 Blazor 应用。请按照以下说明操作。

    - 使用 context7。
    - 构建 Blazor 应用并验证应用是否正确构建。
    - 如果构建应用失败，分析问题并修复它们。
    ```

   > **注意**:
   >
   > - 直到构建成功，请重复此步骤。
   > - 如果构建持续失败，检查错误消息并询问 GitHub Copilot 代理来解决它们。

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。
1. 构建成功后，使用如下提示验证迁移结果。

    ```text
    我想运行 Blazor 应用。请按照以下说明操作。

    - 使用 context7。
    - 运行此 Blazor 应用并验证应用是否正常运行。
    - 在此阶段忽略后端 API 应用连接错误。
    - 如果运行应用失败，分析问题并修复它们。
    ```

### 验证 Blazor 前端应用

1. 确保 Spring Boot 后端应用正在运行。

    ```text
    运行位于 `java` 目录的 Spring Boot 后端 API。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。
1. 验证它是否正确构建。

    ```text
    运行 Blazor 应用并验证应用是否正常运行。

    如果应用运行失败，分析问题并修复它们。
    ```

1. 打开 Web 浏览器并导航到 `http://localhost:3031`。
1. 验证前端和后端应用是否都正常运行。
1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

---

好的。您已经完成了".NET"步骤。让我们继续进行[步骤 05: 容器化](./05-containerization.md)。