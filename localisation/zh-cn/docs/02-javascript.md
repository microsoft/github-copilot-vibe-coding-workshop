# 02: JavaScript 前端开发

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

作为 JavaScript 开发人员，您将使用 React 构建与 Python 后端 API 应用程序通信的 JavaScript 前端应用程序。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [准备应用程序项目](#准备应用程序项目)
- [准备 Figma MCP 服务器](#准备-figma-mcp-服务器)
- [从 Figma 生成 UI 组件](#从-figma-生成-ui-组件)
- [运行 FastAPI 后端应用](#运行-fastapi-后端应用)
- [构建 React 前端应用](#构建-react-前端应用)
- [验证 React 前端应用](#验证-react-前端应用)

### 检查 GitHub Copilot 代理模式

1. 点击 GitHub Codespace 或 VS Code 顶部的 GitHub Copilot 图标，打开 GitHub Copilot 窗口。

   ![打开 GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. 如果要求您登录或注册，请执行操作。这是免费的。
1. 确保您使用的是 GitHub Copilot 代理模式。

   ![GitHub Copilot 代理模式](../../../docs/images/setup-03.png)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 准备应用程序项目

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示构建 React Web 应用项目。

    ```text
    我想构建一个 React Web 应用。请按照以下说明操作。
    
    - 确保这是 Web 应用，而不是移动应用。
    - 您的工作目录是 `javascript`。
    - 首先确定您要执行的所有步骤。
    - 使用 ViteJS 作为前端应用框架。
    - 初始化项目时使用默认设置。
    - 初始化时使用 `SimpleSocialMediaApplication` 作为项目名称。
    - 使用端口号 `3000`。
    - 只初始化项目。不要再往下做。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

### 准备 Figma MCP 服务器

1. 确保您已配置 [MCP 服务器](./00-setup.md#设置-mcp-服务器)。
1. 从 [Figma](https://www.figma.com/) 获取个人访问令牌 (PAT)。
1. 通过按 F1 或在 Windows 上按 `Ctrl`+`Shift`+`P` 或在 Mac OS 上按 `Cmd`+`Shift`+`P` 打开命令面板，然后搜索 `MCP: List Servers`。
1. 选择 `Framelink Figma MCP`，然后点击 `Start Server`。
1. 输入您从 Figma 获得的 PAT。

### 从 Figma 生成 UI 组件

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保您正在运行 Figma MCP 服务器。
1. 将 [Figma 设计模板](https://www.figma.com/community/file/1495954632647006209) 复制到您的账户。

   ![Figma 设计模板页面](../../../docs/images/javascript-01.png)

1. 右击每个部分 - `Home`、`Search`、`Post Details`、`Post Modal` 和 `Name Input Modal` 👉 选择 `Copy/Paste as` 👉 选择 `Copy link to selection` 获取每个部分的链接。记录所有五个链接。

### 运行 FastAPI 后端应用

1. 确保 FastAPI 后端应用正在运行。

    ```text
    运行位于 `python` 目录的 FastAPI 后端 API。
    ```

   > **注意**：您可以使用 [`complete/python`](../complete/python/) 示例应用替代。

1. 如果您使用 GitHub Codespaces，确保端口号 `8000` 设置为 `public` 而不是 `private`。否则，从前端应用访问时会出现 `401` 错误。

### 构建 React 前端应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 确保您拥有从[上一节](#从-figma-生成-ui-组件)检索到的 5 个 Figma 部分链接。
1. 将 [`product-requirements.md`](../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
1. 使用如下提示基于需求和 OpenAPI 文档构建应用程序。

    ```text
    我想构建一个 React Web 应用。请按照以下说明操作。
    
    - 您的工作目录是 `javascript`。
    - 首先确定您要执行的所有步骤。
    - 有一个后端 API 应用运行在 `http://localhost:8000`。
    - 使用描述所有端点和数据架构的 `openapi.yaml`。
    - 使用端口号 `3000`。
    - 创建此链接中定义的所有 UI 组件：{{FIGMA_SECTION_LINK}}。
    - 不要添加与 UI 组件无关的任何内容。
    - 不要添加 `openapi.yaml` 中未定义的任何内容。
    - 不要修改 `openapi.yaml` 中定义的任何内容。
    - 当后端 API 因任何原因不可用或无法访问时，给出可视化指示。
    ```

1. 对其余四个 Figma 设计链接重复四次。
1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

### 验证 React 前端应用

1. 确保 FastAPI 后端应用正在运行。

    ```text
    运行位于 `python` 目录的 FastAPI 后端 API。
    ```

1. 验证是否构建正确。

    ```text
    运行 React 应用并验证应用是否正常运行。

    如果应用运行失败，请分析问题并修复它们。
    ```

1. 打开 Web 浏览器并导航到 `http://localhost:3000`。
1. 验证前端和后端应用是否正常运行。
1. 点击 GitHub Copilot 的 `[keep]` 按钮接受更改。

---

好的。您已经完成了"JavaScript"步骤。让我们继续 [步骤 03：从 Python 迁移到 Java](./03-java.md)。

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
