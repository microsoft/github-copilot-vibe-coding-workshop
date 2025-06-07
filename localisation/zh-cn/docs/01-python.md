# 01: Python 后端开发

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

作为 Python 开发人员，您将使用 FastAPI 构建 Python 后端应用程序。目前，您使用 SQLite 的内存功能。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [准备虚拟环境](#准备虚拟环境)
- [构建 FastAPI 后端应用](#构建-fastapi-后端应用)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 准备虚拟环境

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示准备 Python 应用开发的虚拟环境。

    ```text
    我想写一个 Python 应用程序。但在此之前，我需要设置一个虚拟环境。请按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `python`。
    - 首先确定您要执行的所有步骤。
    - 使用 `.venv` 作为虚拟环境。
    - 使用 `uv` 作为 Python 包管理器。
    ```

### 构建 FastAPI 后端应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 将 [`product-requirements.md`](../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
1. 使用如下提示构建 FastAPI 后端应用程序。

    ```text
    我想构建一个 FastAPI 应用程序作为后端 API。仔细阅读整个 PRD 和 `openapi.yaml`。然后，按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `python`。
    - 首先确定您要执行的所有步骤。
    - 使用 FastAPI 作为 API 应用框架。
    - 使用 SQLite 作为数据库。
    - 使用 `sns_api.db` 作为 SQLite 数据库的名称。
    - 每当启动应用时，数据库应始终被初始化。
    - 使用描述所有端点和数据架构的 `openapi.yaml`。
    - 使用端口号 `8000`。
    - 确保允许来自任何地方的 CORS。
    - 入口点是 `main.py`。
    - API 应用程序应通过默认端点呈现 Swagger UI 页面。
    - API 应用程序应通过默认端点呈现与 `openapi.yaml` 完全相同的 OpenAPI 文档。
    - 不要添加任何 `openapi.yaml` 中未定义的内容。
    - 不要修改 `openapi.yaml` 中定义的任何内容。
    ```

1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
1. 应用程序构建完成后，验证它是否编写正确。

    ```text
    运行 FastAPI 应用并验证应用是否正常运行。还要验证 OpenAPI 端点是否呈现与 `openapi.yaml` 完全相同的内容。

    如果应用运行失败，请分析问题并修复它们。
    ```

1. 打开网络浏览器并导航到 `http://localhost:8000`。
1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成"Python"步骤。让我们进入 [步骤 02: JavaScript 前端开发](./02-javascript.md)。

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
