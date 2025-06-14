# 05: コンテナ化

## シナリオ

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。

彼らは現在、Javaベースのバックエンドアプリと.NETベースのフロントエンドアプリの両方を持っています。どのプラットフォームにもデプロイできるように、これらをコンテナ化したいと考えています。

DevOpsエンジニアとして、両方のアプリをコンテナ化する必要があります。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [カスタム指示を準備](#カスタム指示を準備)
- [Java アプリケーションをコンテナ化](#java-アプリケーションをコンテナ化)
- [.NET アプリケーションをコンテナ化](#net-アプリケーションをコンテナ化)
- [コンテナをオーケストレート](#コンテナをオーケストレート)

### GitHub Copilot エージェントモードを確認

1. GitHub Codespace または VS Code の上部にある GitHub Copilot アイコンをクリックして、GitHub Copilot ウィンドウを開きます。

   ![GitHub Copilot Chat を開く](../../../docs/images/setup-02.png)

1. ログインまたはサインアップを求められた場合は、実行してください。無料です。
1. GitHub Copilot エージェントモードを使用していることを確認します。

   ![GitHub Copilot エージェントモード](../../../docs/images/setup-03.png)

1. モデルを `GPT-4.1` または `Claude Sonnet 4` のいずれかに選択します。
1. [MCP サーバー](./00-setup.md#mcp-サーバーを設定)を設定していることを確認します。

### カスタム指示を準備

1. `$REPOSITORY_ROOT` 環境変数を設定します。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. カスタム指示をコピーします。

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

### Java アプリケーションをコンテナ化

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. Java アプリのコンテナイメージを構築するために、以下のようなプロンプトを使用します。

    ```text
    Javaアプリのコンテナイメージを構築したいと思います。以下の指示に従ってください。

    - まず実行するすべてのステップを特定してください。
    - Javaアプリは `java/socialapp` にあります。
    - 作業ディレクトリはリポジトリルートです。
    - Dockerfile `Dockerfile.java` を作成してください。
    - Microsoft OpenJDK 21を使用してください。
    - マルチステージビルドアプローチを使用してください。
    - JDKからJREを抽出してください。
    - コンテナイメージのターゲットポート番号として `8080` を使用してください。
    - ホストからコンテナイメージに環境変数 `CODESPACE_NAME` と `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` の両方を追加してください。
    - コンテナイメージにSQLiteデータベースファイル `sns_api.db` を作成してください。ホストからファイルをコピーしないでください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

1. `Dockerfile.java` が作成されたら、以下のプロンプトでコンテナイメージを構築します。

    ```text
    `Dockerfile.java` を使用してコンテナイメージを構築してください。

    - コンテナイメージ名として `contoso-backend` を使用してください。
    - コンテナイメージタグとして `latest` を使用してください。
    - コンテナイメージが適切に構築されているかどうかを確認してください。
    - 構築が失敗した場合は、問題を分析して修正してください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

1. 構築が成功したら、以下のプロンプトでコンテナイメージを実行します。

    ```text
    構築したばかりのコンテナイメージを使用して、コンテナを実行し、アプリが適切に実行されているかどうかを確認してください。
    
    - ホストポートとして `8080` を使用してください。
    - `CODESPACE_NAME` と `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` の両方の値は GitHub Codespaces のものである必要があります。
    ```

### .NET アプリケーションをコンテナ化

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. .NET アプリのコンテナイメージを構築するために、以下のようなプロンプトを使用します。

    ```text
    .NETアプリのコンテナイメージを構築したいと思います。以下の指示に従ってください。

    - まず実行するすべてのステップを特定してください。
    - .NETアプリは `dotnet` にあります。
    - 作業ディレクトリはリポジトリルートです。
    - Dockerfile `Dockerfile.dotnet` を作成してください。
    - .NET 9を使用してください。
    - マルチステージビルドアプローチを使用してください。
    - コンテナイメージのターゲットポート番号として `8080` を使用してください。
    - コンテナに環境変数 `ApiSettings__BaseUrl` を追加してください。これはJavaアプリの `http://localhost:8080/api` を指すようにしてください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

1. `Dockerfile.dotnet` が作成されたら、以下のプロンプトでコンテナイメージを構築します。

    ```text
    `Dockerfile.dotnet` を使用してコンテナイメージを構築してください。

    - コンテナイメージ名として `contoso-frontend` を使用してください。
    - コンテナイメージタグとして `latest` を使用してください。
    - コンテナイメージが適切に構築されているかどうかを確認してください。
    - 構築が失敗した場合は、問題を分析して修正してください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

1. 構築が成功したら、以下のプロンプトでコンテナイメージを実行します。

    ```text
    構築したばかりのコンテナイメージを使用して、コンテナを実行し、アプリが適切に実行されているかどうかを確認してください。
    
    - ホストポートとして `3030` を使用してください。
    - 環境変数 `ApiSettings__BaseUrl` に `http://localhost:8080/api` の値を渡してください。
    ```

1. フロントエンドとバックエンドの両方のアプリが、まだ互いを知らないため通信していないことを確認します。以下のようなプロンプトを実行します。

    ```text
    JavaとNETの両方のコンテナとそれぞれのコンテナイメージを削除してください。
    ```

### コンテナをオーケストレート

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. Docker Compose ファイルを構築するために、以下のようなプロンプトを使用します。

    ```text
    Docker Composeファイルを作成したいと思います。以下の指示に従ってください。
    
    - まず実行するすべてのステップを特定してください。
    - 作業ディレクトリはリポジトリルートです。
    - バックエンドアプリとして `Dockerfile.java` を使用してください。
    - フロントエンドアプリとして `Dockerfile.dotnet` を使用してください。
    - Docker Composeファイルとして `compose.yaml` を作成してください。
    - ネットワーク名として `contoso` を使用してください。
    - Javaアプリのコンテナ名として `contoso-backend` を使用してください。ターゲットポートは8080、ホストポートは8080です。
    - .NETアプリのコンテナ名として `contoso-frontend` を使用してください。ターゲットポートは8080、ホストポートは3030です。
    - ホストからJavaコンテナに環境変数 `CODESPACE_NAME` と `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` の両方を追加してください。
    - .NETコンテナに環境変数 `ApiSettings__BaseUrl` を追加してください。これはJavaアプリの `/api` を指すようにしてください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

1. `compose.yaml` ファイルが作成されたら、それを実行して両方のアプリが適切に実行されているかどうかを確認します。

    ```text
    Docker composeファイルを実行して、すべてのアプリが適切に実行されているかどうかを確認してください。
    ```

1. ウェブブラウザを開いて `http://localhost:3030` に移動し、アプリが適切に起動して実行されているかどうかを確認します。

---

おめでとうございます！🎉 すべてのワークショップセッションを正常に完了しました！

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
