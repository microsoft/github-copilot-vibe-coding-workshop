# 04: JavaScript から .NET への移行

## シナリオ

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。

彼らはすでにJavaScript、特にReactで書かれたフロントエンドアプリを持っています。しかし、突然、.NET、特にBlazorを使用してフロントエンドアプリを再開発するという新しい要件を送ってきました。

.NET開発者として、既存のReactアプリをBlazorに移行する必要があります。ちなみに、JavaScriptとReactの知識はほとんどありません。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [カスタム指示を準備](#カスタム指示を準備)
- [Blazor Webアプリプロジェクトを準備](#blazor-webアプリプロジェクトを準備)
- [Spring Boot バックエンドアプリを実行](#spring-boot-バックエンドアプリを実行)
- [React Webアプリを移行](#react-webアプリを移行)
- [Blazor フロントエンドアプリを検証](#blazor-フロントエンドアプリを検証)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Blazor Webアプリプロジェクトを準備

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. Blazor Webアプリプロジェクトのスキャフォールドを作成するために、以下のようなプロンプトを使用します。

    ```text
    Blazor Webアプリのスキャフォールドを作成したいと思います。以下の指示に従ってください。

    - context7を使用してください。
    - 作業ディレクトリは `dotnet` です。
    - まず実行するすべてのステップを特定してください。
    - Blazorに関連する.NETプロジェクトのリストを表示して、選択するよう求めてください。
    - Blazorプロジェクトを生成してください。
    - プロジェクト名として `Contoso.BlazorApp` を使用してください。
    - `launchSettings.json` を更新して、HTTPのポート番号を `3031`、HTTPSのポート番号を `43031` に変更してください。
    - `ContosoWebApp` というソリューションを作成し、Blazorプロジェクトをこのソリューションに追加してください。
    - Blazorアプリを構築して、アプリが適切に構築されているかどうかを確認してください。
    - このBlazorアプリを実行して、アプリが適切に実行されているかどうかを確認してください。
    - アプリの構築または実行が失敗した場合は、問題を分析して修正してください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

### Spring Boot バックエンドアプリを実行

1. Spring Boot バックエンドアプリが起動して実行されていることを確認します。

    ```text
    `java` ディレクトリにあるSpring Boot バックエンドAPIを実行してください。
    ```

   > **注意**: 代わりに[`complete/java`](../complete/java/)サンプルアプリを使用することもできます。

1. GitHub Codespaces を使用している場合は、ポート番号 `8080` が `private` ではなく `public` に設定されていることを確認してください。そうでないと、フロントエンドアプリからアクセスする際に `401` エラーが発生します。

### React Webアプリを移行

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. React を Blazor に移行するために、以下のようなプロンプトを使用します。

    ```text
    既存のReactベースのWebアプリをBlazor Webアプリに移行します。移行のために以下の指示に従ってください。
    
    - context7を使用してください。
    - 既存のReactアプリケーションは `javascript` にあります。
    - 作業ディレクトリは `dotnet/Contoso.BlazorApp` です。
    - まず実行するすべてのステップを特定してください。
    - `http://localhost:8080` で実行されているバックエンドAPIアプリがあります。
    - 既存のReactアプリのアプリケーション構造を分析してください。
    - すべてのReactコンポーネントをBlazorコンポーネントに移行してください。対応する両方のコンポーネントは可能な限り互いに正確に近いものである必要があります。
    - ReactからBlazorに必要なすべてのCSS要素を移行してください。
    - ReactからBlazorにJavaScript要素を移行する際は、Blazorのネイティブ機能を可能な限り最大限に活用してください。JavaScriptを使用する必要がある場合は、BlazorのJSInterop機能を使用してください。
    - 必要に応じて、.NET 9と互換性のあるNuGetパッケージを追加してください。
    ```

1. 移行が完了したら、移行結果を確認するために以下のようなプロンプトを使用します。

    ```text
    Blazorアプリを構築したいと思います。指示に従ってください。

    - context7を使用してください。
    - Blazorアプリを構築して、アプリが適切に構築されているかどうかを確認してください。
    - アプリの構築が失敗した場合は、問題を分析して修正してください。
    ```

   > **注意**:
   >
   > - 構築が成功するまで、このステップを繰り返してください。
   > - 構築が失敗し続ける場合は、エラーメッセージを確認してGitHub Copilot エージェントに問い合わせて解決してください。

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。
1. 構築が成功したら、移行結果を確認するために以下のようなプロンプトを使用します。

    ```text
    Blazorアプリを実行したいと思います。指示に従ってください。

    - context7を使用してください。
    - このBlazorアプリを実行して、アプリが適切に実行されているかどうかを確認してください。
    - この段階では、バックエンドAPIアプリの接続エラーは無視してください。
    - アプリの実行が失敗した場合は、問題を分析して修正してください。
    ```

### Blazor フロントエンドアプリを検証

1. Spring Boot バックエンドアプリが起動して実行されていることを確認します。

    ```text
    `java` ディレクトリにあるSpring Boot バックエンドAPIを実行してください。
    ```

1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。
1. 適切に構築されているかどうかを確認します。

    ```text
    Blazorアプリを実行して、アプリが適切に実行されているかどうかを確認してください。

    アプリの実行が失敗した場合は、問題を分析して修正してください。
    ```

1. ウェブブラウザを開いて `http://localhost:3031` に移動します。
1. フロントエンドとバックエンドの両方のアプリが適切に実行されているかどうかを確認します。
1. GitHub Copilot の ![keepボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

---

よくできました。「.NET」ステップを完了しました。[STEP 05: コンテナ化](./05-containerization.md)に移りましょう。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
