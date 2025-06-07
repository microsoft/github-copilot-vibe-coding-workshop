# 完整应用示例

以下是完整应用示例的列表。由于它们也是通过氛围编程构建的，您可以查看它们是如何构建的。

| 应用程序     | 位置                         |
|-------------|------------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## 容器化示例

### 先决条件

请参考 [README](../README.md) 文档进行准备。

### 入门指南

1. 确保 Docker 正在运行。

    ```bash
    docker info
    ```

1. 获取存储库根目录。

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. 导航到 `complete` 目录。

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. 运行容器化应用。

    ```bash
    docker compose up --build -d
    ```

1. 打开网络浏览器并导航到 `http://localhost:3030`。
1. 验证 Web 应用程序是否正常运行。
1. 通过运行以下命令清理并删除容器化应用。

    ```bash
    docker compose down --rmi all
    ```

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
