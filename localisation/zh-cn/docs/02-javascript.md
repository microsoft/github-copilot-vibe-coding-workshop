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
    ```

### 构建 React 前端应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 将 [`product-requirements.md`](../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
1. 使用如下提示构建 React 前端应用程序。

    ```text
    我想构建一个 React 应用程序作为前端 Web 应用。仔细阅读整个 PRD 和 `openapi.yaml`。然后，按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `javascript`。
    - 首先确定您要执行的所有步骤。
    - 使用 React 作为前端应用框架。
    - 后端 API URL 是 `http://localhost:8000`。
    - 使用端口号 `3000`。
    - 创建一个简单但功能齐全的社交媒体应用程序。
    - 应用程序应该允许用户创建、查看、编辑和删除帖子。
    - 应用程序应该允许用户对帖子进行评论。
    - 应用程序应该允许用户为帖子点赞。
    - 使用现代 UI 库如 Tailwind CSS 或 Material-UI。
    - 确保应用程序是响应式的。
    ```

1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

### 验证 React 前端应用

1. 确保 FastAPI 后端正在 `http://localhost:8000` 上运行。
1. 使用如下提示运行 React 应用程序。

    ```text
    运行 React 应用并验证应用是否正常运行。确保应用可以与后端 API 通信。

    如果应用运行失败，请分析问题并修复它们。
    ```

1. 打开网络浏览器并导航到 `http://localhost:3000`。
1. 验证您可以创建帖子、查看帖子、添加评论和点赞。
1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成"JavaScript"步骤。让我们进入 [步骤 03: 从 Python 迁移到 Java](./03-java.md)。