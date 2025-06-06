# 01: Python 后端开发

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有和潜在客户推广他们的产品。

作为 Python 开发人员，您将使用 FastAPI 构建 Python 后端应用程序。目前，您使用的是 SQLite 的内存功能。

## 先决条件

请参考 [README](../../README.md) 文档进行准备。

## 入门

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义说明](#准备自定义说明)
- [准备虚拟环境](#准备虚拟环境)
- [构建 FastAPI 后端应用程序](#构建-fastapi-后端应用程序)

### 检查 GitHub Copilot 代理模式

1. 点击 GitHub Codespace 或 VS Code 顶部的 GitHub Copilot 图标，打开 GitHub Copilot 窗口。

   ![Open GitHub Copilot Chat](../../../docs/images/setup-02.png)

2. 如果系统要求您登录或注册，请执行此操作。这是免费的。
3. 确保您使用的是 GitHub Copilot 代理模式。

   ![GitHub Copilot Agent Mode](../../../docs/images/setup-03.png)

4. 选择模型为 `GPT-4.1` 或 `Claude Sonnet 4`。
5. 确保您已配置 [MCP 服务器](./00-setup.md#设置-mcp-服务器)。

### 准备自定义说明

1. 设置 `$REPOSITORY_ROOT` 环境变量。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

2. 复制自定义说明。

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

1. 确保您使用的是 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
2. 确保 `context7` MCP 服务器正在运行。
3. 使用如下提示来为 Python 应用程序开发准备虚拟环境。

    ```text
    I'd like to write a Python application. But before that, I need to set up a virtual environment. Follow the instructions below.
    
    - Use context7.
    - Your working directory is `python`.
    - Identify all the steps first, which you're going to do.
    - Use `.venv` for the virtual environment.
    - Use `uv` as the Python package manager.
    ```

### 构建 FastAPI 后端应用程序

1. 确保您使用的是 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
2. 确保 `context7` MCP 服务器正在运行。
3. 将 [`product-requirements.md`](../../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
4. 使用如下提示来构建 FastAPI 后端应用程序。

    ```text
    I'd like to build a FastAPI application as a backend API. Carefully read the entire PRD and `openapi.yaml`. Then, follow the instructions below.
    
    - Use context7.
    - Your working directory is `python`.
    - Identify all the steps first, which you're going to do.
    - Use FastAPI as the API app framework.
    - Use SQLite as the database.
    - Use `sns_api.db` as the name of the SQLite database.
    - The database should always be initialized whenever starting the app.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - Use the port number of `8000`.
    - Make sure to allow CORS from everywhere.
    - Entrypoint is `main.py`.
    - The API application should render Swagger UI page through a default endpoint.
    - The API application should render exactly the same OpenAPI document through a default endpoint.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    ```

5. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
6. 应用程序构建完成后，验证其是否正确编写。

    ```text
    Run the FastAPI app and verify if the app is properly running. Also verify the OpenAPI endpoint renders exactly the same content as `openapi.yaml`.

    If app running fails, analyze the issues and fix them.
    ```

7. 打开网页浏览器并导航到 `http://localhost:8000`。
8. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成"Python"步骤。让我们继续进行 [步骤 02: JavaScript 前端开发](./02-javascript.md)。