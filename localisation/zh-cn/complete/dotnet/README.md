# .NET 应用示例

## 先决条件

请参考 [README](../../README.md) 文档进行准备。

## 入门指南

### 运行 Spring Boot 后端

使用 [Java 应用示例](../java/)。

> **注意**：如果您使用 GitHub Codespaces，请确保 Java 应用端口 `8080` 设置为**公共**。

### 运行 Blazor 前端

1. 获取存储库根目录。

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. 运行应用。

    ```bash
    dotnet watch run --project $REPOSITORY_ROOT/complete/dotnet/Contoso.BlazorApp
    ```

1. 验证 Web 应用程序是否正常运行。

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
