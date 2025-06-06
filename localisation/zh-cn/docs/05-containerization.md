# 05: 容器化

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的营销部门希望推出一个微型社交媒体网站，向现有客户和潜在客户推广他们的产品。

他们现在拥有基于 Java 的后端应用和基于 .NET 的前端应用。他们希望将它们容器化，以便可以部署到任何平台。

现在，作为一名 DevOps 工程师，您应该对这两个应用进行容器化。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 开始使用

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [容器化 Java 应用程序](#容器化-java-应用程序)
- [容器化 .NET 应用程序](#容器化-net-应用程序)
- [编排容器](#编排容器)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 容器化 Java 应用程序

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 使用如下提示为 Java 应用构建容器镜像。

    ```text
    我想为 Java 应用构建一个容器镜像。请按照以下说明操作。

    - Java 应用位于 `java`。
    - 您的工作目录是存储库根目录。
    - 首先确定您要执行的所有步骤。
    - 创建一个 Dockerfile，`Dockerfile.java`。
    - 使用 Microsoft OpenJDK 21。
    - 使用多阶段构建方法。
    - 从 JDK 中提取 JRE。
    - 容器镜像使用目标端口号 `8080`。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

1. 创建 `Dockerfile.java` 后，使用以下提示构建容器镜像。

    ```text
    使用 `Dockerfile.java` 构建容器镜像。

    - 使用 `contoso-backend` 作为容器镜像名称。
    - 使用 `latest` 作为容器镜像标签。
    - 验证容器镜像是否正确构建。
    - 如果构建失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

1. 构建成功后，使用以下提示运行容器镜像。

    ```text
    使用刚刚构建的容器镜像，运行一个容器并验证应用是否正常运行。
    
    - 使用主机端口 `8080`。
    ```

### 容器化 .NET 应用程序

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 使用如下提示为 .NET 应用构建容器镜像。

    ```text
    我想为 .NET 应用构建一个容器镜像。请按照以下说明操作。

    - .NET 应用位于 `dotnet`。
    - 您的工作目录是存储库根目录。
    - 首先确定您要执行的所有步骤。
    - 创建一个 Dockerfile，`Dockerfile.dotnet`。
    - 使用 .NET 9。
    - 使用多阶段构建方法。
    - 容器镜像使用目标端口号 `8080`。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

1. 创建 `Dockerfile.dotnet` 后，使用以下提示构建容器镜像。

    ```text
    使用 `Dockerfile.dotnet` 构建容器镜像。

    - 使用 `contoso-frontend` 作为容器镜像名称。
    - 使用 `latest` 作为容器镜像标签。
    - 验证容器镜像是否正确构建。
    - 如果构建失败，分析问题并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

1. 构建成功后，使用以下提示运行容器镜像。

    ```text
    使用刚刚构建的容器镜像，运行一个容器并验证应用是否正常运行。
    
    - 使用主机端口 `3030`。
    ```

1. 确保前端和后端应用彼此之间不进行通信，因为它们还不知道彼此。运行如下提示。

    ```text
    无论如何，删除当前正在运行的两个容器。
    ```

### 编排容器

1. 确保您正在使用 GitHub Copilot 代理模式，模型为 `Claude Sonnet 4` 或 `GPT-4.1`。
1. 使用如下提示构建 Docker Compose 文件。

    ```text
    我想创建一个 Docker Compose 文件。请按照以下说明操作。
    
    - 您的工作目录是存储库根目录。
    - 使用 `Dockerfile.java` 作为后端应用。
    - 使用 `Dockerfile.dotnet` 作为前端应用。
    - 创建 `compose.yaml` 作为 Docker Compose 文件。
    - 使用 `contoso` 作为网络名称。
    - 使用 `contoso-backend` 作为 Java 应用的容器名称。其目标端口是 8080，主机端口是 8080。
    - 使用 `contoso-frontend` 作为 .NET 应用的容器名称。其目标端口是 8080，主机端口是 3030。
    - 为 Java 应用使用的数据库挂载卷，`java/socialapp/sns_api.db`。
    ```

1. 点击 GitHub Copilot 的 ![keep button image](https://img.shields.io/badge/keep-blue) 按钮来接受更改。

1. 创建 `compose.yaml` 文件后，运行它并验证两个应用是否正常运行。

    ```text
    现在，运行 Docker compose 文件并验证应用是否正常运行。
    ```

1. 打开 Web 浏览器并导航到 `http://localhost:3030`，验证应用是否正常运行。

---

恭喜！🎉 您已经成功完成了所有研讨会课程！