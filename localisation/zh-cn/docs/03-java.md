# 03: 从 Python 迁移到 Java

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

由于 Python 开发人员离开了公司，利益相关者要求将现有的 Python 后端 API 应用迁移到 Java，使用 Spring Boot。

现在，作为 Java 开发人员，您应该将现有的 FastAPI 应用迁移到 Spring Boot。顺便说一下，您对 Python 和 FastAPI 了解很少。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [准备 Spring Boot 项目](#准备-spring-boot-项目)
- [迁移 FastAPI API 应用](#迁移-fastapi-api-应用)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 准备 Spring Boot 项目

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示初始化 Spring Boot 项目。

    ```text
    我想创建一个 Spring Boot 项目作为后端 API。请按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `java`。
    - 首先确定您要执行的所有步骤。
    - 使用 Spring Boot Initializr 创建项目。
    - 使用 Java 21。
    - 使用 Gradle 作为构建工具。
    - 使用 `com.contoso` 作为组 ID。
    - 使用 `socialapp` 作为构件 ID。
    - 添加必要的依赖项：Spring Web、Spring Data JPA、SQLite、Swagger/OpenAPI。
    ```

### 迁移 FastAPI API 应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 将 [`product-requirements.md`](../product-requirements.md)、[`openapi.yaml`](../openapi.yaml) 和 Python 应用源代码添加到 GitHub Copilot。
1. 使用如下提示迁移 FastAPI 应用程序。

    ```text
    我想将现有的 FastAPI 应用程序迁移到 Spring Boot。仔细分析现有的 Python 代码、PRD 和 `openapi.yaml`。然后，按照以下说明操作。
    
    - 使用 context7。
    - 您的工作目录是 `java`。
    - 首先确定您要执行的所有步骤。
    - 使用 Spring Boot 作为 API 应用框架。
    - 使用 SQLite 作为数据库。
    - 使用 `sns_api.db` 作为 SQLite 数据库的名称。
    - 每当启动应用时，数据库应始终被初始化。
    - 使用描述所有端点和数据架构的 `openapi.yaml`。
    - 使用端口号 `8080`。
    - 确保允许来自任何地方的 CORS。
    - API 应用程序应通过默认端点呈现 Swagger UI 页面。
    - API 应用程序应通过默认端点呈现与 `openapi.yaml` 完全相同的 OpenAPI 文档。
    - 不要添加任何 `openapi.yaml` 中未定义的内容。
    - 不要修改 `openapi.yaml` 中定义的任何内容。
    - 确保功能与原始 Python 应用程序完全相同。
    ```

1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
1. 应用程序构建完成后，验证它是否正常工作。

    ```text
    运行 Spring Boot 应用并验证应用是否正常运行。还要验证 OpenAPI 端点是否呈现与 `openapi.yaml` 完全相同的内容。

    如果应用运行失败，请分析问题并修复它们。
    ```

1. 打开网络浏览器并导航到 `http://localhost:8080`。
1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成"Java"步骤。让我们进入 [步骤 04: 从 JavaScript 迁移到 .NET](./04-dotnet.md)。