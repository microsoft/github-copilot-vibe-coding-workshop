# 05: 容器化

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

他们现在拥有基于 Java 的后端应用程序和基于 .NET 的前端应用程序。他们希望将它们容器化，以便可以在任何平台上部署。

现在，作为 DevOps 工程师，您应该将这两个应用程序都容器化。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [容器化 Java 应用程序](#容器化-java-应用程序)
- [容器化 .NET 应用程序](#容器化-net-应用程序)
- [编排容器](#编排容器)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 容器化 Java 应用程序

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 使用如下提示为 Java 应用构建容器镜像。

    ```text
    我想为 Java 应用构建容器镜像。请按照以下说明操作。

    - 首先确定您要执行的所有步骤。
    - Java 应用位于 `java/socialapp`。
    - 您的工作目录是存储库根目录。
    - 创建一个 Dockerfile，`Dockerfile.java`。
    - 使用 Microsoft OpenJDK 21。
    - 使用多阶段构建方法。
    - 从 JDK 提取 JRE。
    - 为容器镜像使用目标端口号 `8080`。
    - 从主机向容器镜像添加环境变量 `CODESPACE_NAME` 和 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`。
    - 在容器镜像中创建 SQLite 数据库文件 `sns_api.db`。不要从主机复制文件。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

1. 创建 `Dockerfile.java` 后，使用以下提示构建容器镜像。

    ```text
    使用 `Dockerfile.java` 并构建容器镜像。

    - 使用 `contoso-backend` 作为容器镜像名称。
    - 使用 `latest` 作为容器镜像标签。
    - 验证容器镜像是否正确构建。
    - 如果构建失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

1. 构建成功后，使用以下提示运行容器镜像。

    ```text
    使用刚刚构建的容器镜像，运行容器并验证应用是否正常运行。
    
    - 使用主机端口 `8080`。
    - `CODESPACE_NAME` 和 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` 的值都应该是来自 GitHub Codespaces 的值。
    ```

### 容器化 .NET 应用程序

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 使用如下提示为 .NET 应用构建容器镜像。

    ```text
    我想为 .NET 应用构建容器镜像。请按照以下说明操作。

    - 首先确定您要执行的所有步骤。
    - .NET 应用位于 `dotnet`。
    - 您的工作目录是存储库根目录。
    - 创建一个 Dockerfile，`Dockerfile.dotnet`。
    - 使用 .NET 9。
    - 使用多阶段构建方法。
    - 为容器镜像使用目标端口号 `8080`。
    - 向容器添加环境变量 `ApiSettings__BaseUrl`。它应该指向 Java 应用程序 `http://localhost:8080/api`。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

1. 创建 `Dockerfile.dotnet` 后，使用以下提示构建容器镜像。

    ```text
    使用 `Dockerfile.dotnet` 并构建容器镜像。

    - 使用 `contoso-frontend` 作为容器镜像名称。
    - 使用 `latest` 作为容器镜像标签。
    - 验证容器镜像是否正确构建。
    - 如果构建失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

1. 构建成功后，使用以下提示运行容器镜像。

    ```text
    使用刚刚构建的容器镜像，运行容器并验证应用是否正常运行。
    
    - 使用主机端口 `3030`。
    - 传递环境变量 `ApiSettings__BaseUrl` 值 `http://localhost:8080/api`。
    ```

1. 确保前端和后端应用暂时无法相互通信，因为它们还不知道彼此。运行如下提示。

    ```text
    删除 Java 和 .NET 容器以及它们各自的容器镜像。
    ```

### 编排容器

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 使用如下提示构建 Docker Compose 文件。

    ```text
    我想创建一个 Docker Compose 文件。请按照以下说明操作。
    
    - 首先确定您要执行的所有步骤。
    - 您的工作目录是存储库根目录。
    - 使用 `Dockerfile.java` 作为后端应用。
    - 使用 `Dockerfile.dotnet` 作为前端应用。
    - 创建 `compose.yaml` 作为 Docker Compose 文件。
    - 使用 `contoso` 作为网络名称。
    - 使用 `contoso-backend` 作为 Java 应用的容器名称。其目标端口是 8080，主机端口是 8080。
    - 使用 `contoso-frontend` 作为 .NET 应用的容器名称。其目标端口是 8080，主机端口是 3030。
    - 从主机向 Java 容器添加环境变量 `CODESPACE_NAME` 和 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`。
    - 向 .NET 容器添加环境变量 `ApiSettings__BaseUrl`。它应该指向 Java 应用的 `/api`。
    ```

1. 点击 GitHub Copilot 的 ![保留按钮图片](https://img.shields.io/badge/keep-blue) 按钮接受更改。

1. 创建 `compose.yaml` 文件后，运行它并验证两个应用是否正常运行。

    ```text
    运行 Docker compose 文件并验证所有应用是否正常运行。
    ```

1. 打开 Web 浏览器并导航到 `http://localhost:3030`，验证应用是否正常运行。

---

好的。您已经完成了"容器化"步骤。恭喜您完成了整个工作坊！

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
