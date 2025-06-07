# 03: Python から Java への移行

## シナリオ

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。

Python開発者が退職したため、ステークホルダーは既存のPythonバックエンドAPIアプリをSpring Bootを使用してJavaに移行するよう依頼しました。

Java開発者として、既存のFastAPIアプリをSpring Bootに移行する必要があります。ちなみに、PythonとFastAPIの知識はほとんどありません。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [カスタム指示を準備](#カスタム指示を準備)
- [Spring Boot プロジェクトを準備](#spring-boot-プロジェクトを準備)
- [FastAPI APIアプリを移行](#fastapi-apiアプリを移行)
- [Spring Boot バックエンドアプリを検証](#spring-boot-バックエンドアプリを検証)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Spring Boot プロジェクトを準備

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. Spring Boot CLI をインストールします。

    ```bash
    sdk install springboot
    ```

1. Spring Boot アプリプロジェクトのスキャフォールドを作成するために、以下のようなプロンプトを使用します。

    ```text
    Spring Bootアプリのスキャフォールドを作成したいと思います。以下の指示に従ってください。

    - context7を使用してください。
    - 作業ディレクトリは `java` です。
    - まず実行するすべてのステップを特定してください。
    - Spring Boot CLIを使用してSpring Bootアプリプロジェクトを作成してください。
    - Java パッケージマネージャーとしてGradleを使用してください。
    - パッケージ名として `com.contoso.socialapp` を使用してください。
    - アーティファクトIDとして `socialapp` を使用してください。
    - グループIDとして `com.contoso` を使用してください。
    - パッケージタイプとして `jar` を使用してください。
    - OpenJDKバージョンとして `21` を使用してください。
    - 依存関係を追加してください - `Spring Web`、`Spring Boot Actuator`、`Lombok`。
    - ポート番号は `8080` を使用してください。
    - どこからでもCORSを許可するようにしてください。
    - Spring Bootアプリを構築して、アプリが適切に構築されているかどうかを確認してください。
    - このSpring Bootアプリを実行して、アプリが適切に実行されているかどうかを確認してください。
    - アプリの構築または実行が失敗した場合は、問題を分析して修正してください。
    ```

1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

### FastAPI APIアプリを移行

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. [`product-requirements.md`](../product-requirements.md) と [`openapi.yaml`](../openapi.yaml) を GitHub Copilot に追加します。
1. FastAPI を Spring Boot に移行するために、以下のようなプロンプトを使用します。

    ```text
    既存のFastAPIベースのAPIアプリをSpring Boot APIアプリに移行します。移行のために以下の指示に従ってください。
    
    - context7を使用してください。
    - 既存のFastAPIアプリケーションは `python` にあります。
    - 作業ディレクトリは `java/socialapp` です。
    - まず実行するすべてのステップを特定してください。
    - 既存のFastAPIアプリのアプリケーション構造を分析してください。
    - すべてのエンドポイントを移行してください。対応する両方のエンドポイントは互いに完全に同じである必要があります。
    - データベースとしてSQLiteを使用してください。
    - SQLiteデータベースの名前として `sns_api.db` を使用してください。
    - データベースはアプリ開始時に常に初期化される必要があります。
    - すべてのエンドポイントとデータスキーマを記述した `openapi.yaml` を使用してください。
    - APIアプリケーションはデフォルトエンドポイントを通じてSwagger UIページをレンダリングする必要があります。
    - APIアプリケーションはデフォルトエンドポイントを通じて全く同じOpenAPI文書をレンダリングする必要があります。
    - `openapi.yaml` で定義されていないものは追加しないでください。
    - `openapi.yaml` で定義されているものは変更しないでください。
    - 必要に応じて、OpenAPIとSwagger UIのためのパッケージを追加してください。
    ```

1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。
1. 移行が完了したら、移行結果を確認するために以下のようなプロンプトを使用します。

    ```text
    Spring Bootアプリを構築したいと思います。指示に従ってください。

    - context7を使用してください。
    - Spring Bootアプリを構築して、アプリが適切に構築されているかどうかを確認してください。
    - アプリの構築が失敗した場合は、問題を分析して修正してください。
    ```

   > **注意**:
   >
   > - 構築が成功するまで、このステップを繰り返してください。
   > - 構築が失敗し続ける場合は、エラーメッセージを確認してGitHub Copilot エージェントに問い合わせて解決してください。

1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

### Spring Boot バックエンドアプリを検証

1. アプリケーションが構築されたら、適切に書かれているかどうかを確認します。

    ```text
    Spring Bootアプリを実行して、すべてのエンドポイントをチェックしてアプリが適切に実行されているかどうかを確認してください。また、OpenAPIエンドポイントが `openapi.yaml` と全く同じ内容をレンダリングするかどうかも確認してください。

    アプリの実行が失敗した場合は、問題を分析して修正してください。context7を使用してください。
    ```

1. ウェブブラウザを開いて `http://localhost:8080` に移動します。
1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

---

よくできました。「Java」ステップを完了しました。[STEP 04: JavaScript から .NET への移行](./04-dotnet.md)に移りましょう。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
