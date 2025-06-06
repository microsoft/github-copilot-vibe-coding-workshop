# 03: 从 Python 迁移到 Java

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有和潜在客户推广他们的产品。

由于 Python 开发人员离开了公司，利益相关者要求将现有的 Python 后端 API 应用程序迁移到 Java，使用 Spring Boot。

现在，作为 Java 开发人员，您应该将现有的 FastAPI 应用程序迁移到 Spring Boot。顺便说一下，您对 Python 和 FastAPI 了解很少。

## 先决条件

请参考 [README](../../README.md) 文档进行准备。

## 入门

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义说明](#准备自定义说明)
- [准备 Spring Boot 项目](#准备-spring-boot-项目)
- [迁移 FastAPI API 应用程序](#迁移-fastapi-api-应用程序)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 准备 Spring Boot 项目

1. 确保您使用的是 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
2. 确保 `context7` MCP 服务器正在运行。
3. 安装 Spring Boot CLI。

    ```bash
    sdk install springboot
    ```

4. 使用如下提示来构建 Spring Boot 应用程序项目。

    ```text
    I'd like to scaffold a Spring Boot app. Follow the instructions below.

    - Use context7.
    - Your working directory is `java`.
    - Identify all the steps first, which you're going to do.
    - Use Spring Boot CLI to create the Spring Boot app project.
    - Use Gradle as the Java package manager.
    - Use the package name of `com.contoso.socialapp`.
    - Use the artifact ID of `socialapp`.
    - Use the group ID of `com.contoso`.
    - Use the package type of `jar`.
    - Use OpenJDK version of `21`.
    - Add dependencies - `Spring Web`, `Spring Boot Actuator` and `Lombok`.
    - Use the port number of `8080`.
    - Make sure to allow CORS from everywhere.
    - Build the Spring Boot app and verify if the app is built properly.
    - Run this Spring Boot app and verify if the app is running properly.
    - If either building or running the app fails, analyze the issues and fix them.
    ```

5. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

### 迁移 FastAPI API 应用程序

1. 确保您使用的是 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
2. 确保 `context7` MCP 服务器正在运行。
3. 将 [`product-requirements.md`](../../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
4. 使用如下提示将 FastAPI 迁移到 Spring Boot。

    ```text
    Now, we're migrating the existing FastAPI-based API app to Spring Boot API app. Follow the instructions below for the migration.
    
    - Use context7.
    - The existing FastAPI application is located at `python`.
    - Your working directory is `java/socialapp`.
    - Identify all the steps first, which you're going to do.
    - Analyze the application structure of the existing FastAPI app.
    - Migrate all the endpoints. Both corresponding endpoints should be exactly the same as each other.
    - Use SQLite as the database.
    - Use `sns_api.db` as the name of the SQLite database.
    - The database should always be initialized whenever starting the app.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - The API application should render Swagger UI page through a default endpoint.
    - The API application should render exactly the same OpenAPI document through a default endpoint.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    - If necessary, add more packages for OpenAPI and Swagger UI.
    ```

5. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
6. 迁移结束后，使用如下提示来验证迁移结果。

    ```text
    I'd like to build the Spring Boot app. Follow the instructions.

    - Use context7.
    - Build the Spring Boot app and verify if the app is built properly.
    - If building the app fails, analyze the issues and fix them.
    ```

   > **注意**:
   >
   > - 直到构建成功，重复此步骤。
   > - 如果构建持续失败，请检查错误消息并向 GitHub Copilot 代理询问以找出解决方案。

7. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

### 验证 Spring Boot 后端应用程序

1. 应用程序构建完成后，验证其是否正确编写。

    ```text
    Run the Spring Boot app and verify if the app is properly running by checking all the endpoints. Also verify the OpenAPI endpoint renders exactly the same content as `openapi.yaml`.

    If app running fails, analyze the issues and fix them. Use context7.
    ```

2. 打开网页浏览器并导航到 `http://localhost:8080`。
3. 点击 GitHub Copilot 的 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

好的。您已完成"Java"步骤。让我们继续进行 [步骤 04: 从 JavaScript 迁移到 .NET](./04-dotnet.md)。