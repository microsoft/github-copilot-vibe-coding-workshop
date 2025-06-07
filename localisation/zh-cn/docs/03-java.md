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
- [验证 Spring Boot 后端应用](#验证-spring-boot-后端应用)

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
1. 安装 Spring Boot CLI。

    ```bash
    sdk install springboot
    ```

1. 使用如下提示构建 Spring Boot 应用项目。

    ```text
    我想构建一个 Spring Boot 应用。请按照以下说明操作。

    - 使用 context7。
    - 您的工作目录是 `java`。
    - 首先确定您要执行的所有步骤。
    - 使用 Spring Boot CLI 创建 Spring Boot 应用项目。
    - 使用 Gradle 作为 Java 包管理器。
    - 使用包名 `com.contoso.socialapp`。
    - 使用构件 ID `socialapp`。
    - 使用组 ID `com.contoso`。
    - 使用包类型 `jar`。
    - 使用 OpenJDK 版本 `21`。
    - 添加依赖项 - `Spring Web`、`Spring Boot Actuator` 和 `Lombok`。
    - 使用端口号 `8080`。
    - 确保允许来自任何地方的 CORS。
    - 构建 Spring Boot 应用并验证应用是否正确构建。
    - 运行此 Spring Boot 应用并验证应用是否正常运行。
    - 如果构建或运行应用失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

### 迁移 FastAPI API 应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 将 [`product-requirements.md`](../product-requirements.md) 和 [`openapi.yaml`](../openapi.yaml) 添加到 GitHub Copilot。
1. 使用如下提示将 FastAPI 迁移到 Spring Boot。

    ```text
    现在，我们正在将现有的基于 FastAPI 的 API 应用迁移到 Spring Boot API 应用。请按照以下迁移说明操作。
    
    - 使用 context7。
    - 现有的 FastAPI 应用程序位于 `python`。
    - 您的工作目录是 `java/socialapp`。
    - 首先确定您要执行的所有步骤。
    - 分析现有 FastAPI 应用的应用程序结构。
    - 迁移所有端点。对应的端点应完全相同。
    - 使用 SQLite 作为数据库。
    - 使用 `sns_api.db` 作为 SQLite 数据库的名称。
    - 每当启动应用时，数据库应始终被初始化。
    - 使用描述所有端点和数据架构的 `openapi.yaml`。
    - API 应用程序应通过默认端点呈现 Swagger UI 页面。
    - API 应用程序应通过默认端点呈现完全相同的 OpenAPI 文档。
    - 不要添加 `openapi.yaml` 中未定义的任何内容。
    - 不要修改 `openapi.yaml` 中定义的任何内容。
    - 如果需要，为 OpenAPI 和 Swagger UI 添加更多包。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。
1. 迁移完成后，使用如下提示验证迁移结果。

    ```text
    我想构建 Spring Boot 应用。请按照说明操作。

    - 使用 context7。
    - 构建 Spring Boot 应用并验证应用是否正确构建。
    - 如果构建应用失败，分析问题并修复它们。
    ```

   > **注意**：
   >
   > - 直到构建成功，重复此步骤。
   > - 如果构建持续失败，检查错误消息并询问 GitHub Copilot 代理来解决它们。

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

### 验证 Spring Boot 后端应用

1. 应用程序构建完成后，验证是否正确编写。

    ```text
    运行 Spring Boot 应用并通过检查所有端点验证应用是否正常运行。还要验证 OpenAPI 端点呈现与 `openapi.yaml` 完全相同的内容。

    如果应用运行失败，请分析问题并修复它们。使用 context7。
    ```

1. 打开 Web 浏览器并导航到 `http://localhost:8080`。
1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

---

好的。您已经完成了"Java"步骤。让我们继续 [步骤 04：从 JavaScript 迁移到 .NET](./04-dotnet.md)。

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
