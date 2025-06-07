# 01: Python バックエンド開発

## シナリオ

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。

Python開発者として、FastAPIを使用してPythonバックエンドアプリを構築することになります。今のところ、SQLiteのインメモリ機能を使用します。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [カスタム指示を準備](#カスタム指示を準備)
- [仮想環境を準備](#仮想環境を準備)
- [FastAPI バックエンドアプリを構築](#fastapi-バックエンドアプリを構築)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 仮想環境を準備

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. Python アプリ開発のための仮想環境を準備するために、以下のようなプロンプトを使用します。

    ```text
    Pythonアプリケーションを作成したいと思います。しかし、その前に仮想環境を設定する必要があります。以下の指示に従ってください。
    
    - context7を使用してください。
    - 作業ディレクトリは `python` です。
    - まず実行するすべてのステップを特定してください。
    - 仮想環境には `.venv` を使用してください。
    - Pythonパッケージマネージャーとして `uv` を使用してください。
    ```

### FastAPI バックエンドアプリを構築

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. [`product-requirements.md`](../product-requirements.md) と [`openapi.yaml`](../openapi.yaml) を GitHub Copilot に追加します。
1. FastAPI バックエンドアプリケーションを構築するために、以下のようなプロンプトを使用します。

    ```text
    バックエンドAPIとしてFastAPIアプリケーションを構築したいと思います。PRD全体と `openapi.yaml` を注意深く読んでください。そして、以下の指示に従ってください。
    
    - context7を使用してください。
    - 作業ディレクトリは `python` です。
    - まず実行するすべてのステップを特定してください。
    - API アプリフレームワークとして FastAPI を使用してください。
    - データベースとして SQLite を使用してください。
    - SQLite データベースの名前として `sns_api.db` を使用してください。
    - データベースはアプリ開始時に常に初期化される必要があります。
    - すべてのエンドポイントとデータスキーマを記述した `openapi.yaml` を使用してください。
    - ポート番号は `8000` を使用してください。
    - どこからでもCORSを許可するようにしてください。
    - エントリポイントは `main.py` です。
    - API アプリケーションはデフォルトエンドポイントを通じてSwagger UIページをレンダリングする必要があります。
    - API アプリケーションはデフォルトエンドポイントを通じて全く同じOpenAPI文書をレンダリングする必要があります。
    - `openapi.yaml` で定義されていないものは追加しないでください。
    - `openapi.yaml` で定義されているものは変更しないでください。
    ```

1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。
1. アプリケーションが構築されたら、適切に書かれているかどうかを確認します。

    ```text
    FastAPIアプリを実行して、アプリが適切に実行されているかどうかを確認してください。また、OpenAPIエンドポイントが `openapi.yaml` と全く同じ内容をレンダリングするかどうかも確認してください。

    アプリの実行が失敗した場合は、問題を分析して修正してください。
    ```

1. ウェブブラウザを開いて `http://localhost:8000` に移動します。
1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

---

よくできました。「Python」ステップを完了しました。[STEP 02: JavaScript フロントエンド開発](./02-javascript.md)に移りましょう。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
