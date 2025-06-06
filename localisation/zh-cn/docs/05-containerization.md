# 05: 容器化

## 场景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。

现在您已经构建了 Python（FastAPI）、JavaScript（React）、Java（Spring Boot）和 .NET（Blazor）应用程序，是时候将它们容器化以实现更好的部署和可扩展性了。

## 先决条件

请参考 [README](../README.md) 文档进行准备。

## 入门指南

- [检查 GitHub Copilot 代理模式](#检查-github-copilot-代理模式)
- [准备自定义指令](#准备自定义指令)
- [为应用程序创建 Dockerfile](#为应用程序创建-dockerfile)
- [创建 Docker Compose 配置](#创建-docker-compose-配置)
- [构建和运行容器化应用](#构建和运行容器化应用)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 为应用程序创建 Dockerfile

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示为每个应用程序创建 Dockerfile。

    ```text
    我想为我的应用程序创建 Dockerfile。请为以下每个应用程序创建优化的 Dockerfile：
    
    - 使用 context7。
    - Python FastAPI 应用程序（位于 `python` 目录）
    - JavaScript React 应用程序（位于 `javascript` 目录）
    - Java Spring Boot 应用程序（位于 `java` 目录）
    - .NET Blazor 应用程序（位于 `dotnet` 目录）
    
    每个 Dockerfile 应该：
    - 使用适当的基础镜像
    - 优化层缓存
    - 使用多阶段构建（如果适用）
    - 包含健康检查
    - 遵循最佳实践
    ```

### 创建 Docker Compose 配置

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 确保 `context7` MCP 服务器正在运行。
1. 使用如下提示创建 Docker Compose 配置。

    ```text
    我想创建一个 Docker Compose 配置来编排我的所有应用程序。请创建一个 `docker-compose.yml` 文件，其中包含：
    
    - 使用 context7。
    - Python FastAPI 后端服务
    - Java Spring Boot 后端服务
    - JavaScript React 前端服务
    - .NET Blazor 前端服务
    - 适当的网络配置
    - 卷挂载（如果需要）
    - 环境变量配置
    - 端口映射
    - 健康检查
    - 依赖关系管理
    
    确保服务可以相互通信，并且前端可以访问后端 API。
    ```

### 构建和运行容器化应用

1. 确保您使用的是带有 `Claude Sonnet 4` 或 `GPT-4.1` 模型的 GitHub Copilot 代理模式。
1. 使用如下提示构建和运行应用程序。

    ```text
    现在我想构建并运行容器化的应用程序。请执行以下操作：
    
    - 使用 context7。
    - 构建所有 Docker 镜像
    - 使用 Docker Compose 启动所有服务
    - 验证所有服务是否正常运行
    - 测试服务之间的连接
    - 提供访问应用程序的说明
    
    如果有任何问题，请诊断并修复它们。
    ```

1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。
1. 验证所有服务是否正常运行：

    ```bash
    # 检查所有容器状态
    docker compose ps
    
    # 查看日志
    docker compose logs
    ```

1. 打开网络浏览器并测试应用程序：
   - React 前端：`http://localhost:3000`
   - Blazor 前端：`http://localhost:5000`
   - Python API：`http://localhost:8000/docs`
   - Java API：`http://localhost:8080/swagger-ui.html`

1. 验证所有功能是否正常工作。
1. 点击 GitHub Copilot 的 ![保持按钮图片](https://img.shields.io/badge/keep-blue) 按钮以接受更改。

---

恭喜！🎉 您已完成了整个工作坊。您已经成功：

1. ✅ 使用 FastAPI 构建了 Python 后端
2. ✅ 使用 React 构建了 JavaScript 前端
3. ✅ 将 Python 应用迁移到了 Java Spring Boot
4. ✅ 将 JavaScript 应用迁移到了 .NET Blazor
5. ✅ 将所有应用程序容器化

您现在拥有一个完整的云原生社交媒体应用程序，可以部署到任何支持 Docker 的环境中！