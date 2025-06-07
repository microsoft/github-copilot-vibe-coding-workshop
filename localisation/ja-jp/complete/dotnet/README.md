# .NETアプリケーション サンプル

## 前提条件

準備については、[README](../../README.md)ドキュメントを参照してください。

## はじめに

### Spring Bootバックエンドの実行

[Java App Sample](../java/)を使用してください。

> **注意**: GitHub Codespacesを使用する場合、Javaアプリケーションのポート`8080`が**public**に設定されていることを確認してください。

### Blazorフロントエンドの実行

1. リポジトリのルートを取得します。

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. アプリケーションを実行します。

    ```bash
    dotnet watch run --project $REPOSITORY_ROOT/complete/dotnet/Contoso.BlazorApp
    ```

1. Webアプリケーションが正常に動作しているかを確認します。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
