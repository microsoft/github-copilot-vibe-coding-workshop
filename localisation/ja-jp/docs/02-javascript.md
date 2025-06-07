# 02: JavaScript フロントエンド開発

## シナリオ

Contosoは様々なアウトドア活動用製品を販売する会社です。Contosoのマーケティング部門は、既存顧客と潜在顧客に向けて製品をプロモートするためのマイクロソーシャルメディアWebサイトを立ち上げたいと考えています。

JavaScript開発者として、Python バックエンドAPIアプリと通信するReactを使用してJavaScriptフロントエンドアプリを構築することになります。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [カスタム指示を準備](#カスタム指示を準備)
- [アプリケーションプロジェクトを準備](#アプリケーションプロジェクトを準備)
- [Figma MCP サーバーを準備](#figma-mcp-サーバーを準備)
- [FigmaからUIコンポーネントを生成](#figmaからuiコンポーネントを生成)
- [FastAPI バックエンドアプリを実行](#fastapi-バックエンドアプリを実行)
- [React フロントエンドアプリを構築](#react-フロントエンドアプリを構築)
- [React フロントエンドアプリを検証](#react-フロントエンドアプリを検証)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### アプリケーションプロジェクトを準備

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. React Webアプリプロジェクトのスキャフォールドを作成するために、以下のようなプロンプトを使用します。

    ```text
    React Webアプリのスキャフォールドを作成したいと思います。以下の指示に従ってください。
    
    - モバイルアプリではなく、Webアプリであることを確認してください。
    - 作業ディレクトリは `javascript` です。
    - まず実行するすべてのステップを特定してください。
    - フロントエンドアプリフレームワークとして ViteJS を使用してください。
    - プロジェクト初期化時にはデフォルト設定を使用してください。
    - 初期化時のプロジェクト名として `SimpleSocialMediaApplication` を使用してください。
    - ポート番号は `3000` を使用してください。
    - プロジェクトの初期化のみを行ってください。それ以上は進めないでください。
    ```

1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

### Figma MCP サーバーを準備

1. [MCP サーバー](./00-setup.md#mcp-サーバーを設定)を設定していることを確認します。
1. [Figma](https://www.figma.com/)から個人アクセストークン（PAT）を取得します。
1. F1 キーまたは Windows では `Ctrl`+`Shift`+`P`、Mac OS では `Cmd`+`Shift`+`P` を入力してコマンドパレットを開き、`MCP: List Servers` を検索します。
1. `Framelink Figma MCP` を選択して `Start Server` をクリックします。
1. Figmaから発行されたPATを入力します。

### FigmaからUIコンポーネントを生成

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. Figma MCP サーバーが実行されていることを確認します。
1. [Figmaデザインテンプレート](https://www.figma.com/community/file/1495954632647006209)をアカウントにコピーします。

   ![Figmaデザインテンプレートページ](../../../docs/images/javascript-01.png)

1. 各セクション（`Home`、`Search`、`Post Details`、`Post Modal`、`Name Input Modal`）を右クリック 👉 `Copy/Paste as` を選択 👉 `Copy link to selection` を選択して、各セクションへのリンクを取得します。5つのリンクすべてをメモしてください。

### FastAPI バックエンドアプリを実行

1. FastAPI バックエンドアプリが起動して実行されていることを確認します。

    ```text
    `python` ディレクトリにあるFastAPI バックエンドAPIを実行してください。
    ```

   > **注意**: 代わりに[`complete/python`](../complete/python/)サンプルアプリを使用することもできます。

1. GitHub Codespaces を使用している場合は、ポート番号 `8000` が `private` ではなく `public` に設定されていることを確認してください。そうでないと、フロントエンドアプリからアクセスする際に `401` エラーが発生します。

### React フロントエンドアプリを構築

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. `context7` MCP サーバーが起動して実行されていることを確認します。
1. [前のセクション](#figmaからuiコンポーネントを生成)から取得した5つのFigmaセクションリンクがすべて揃っていることを確認します。
1. [`product-requirements.md`](../product-requirements.md) と [`openapi.yaml`](../openapi.yaml) を GitHub Copilot に追加します。
1. 要件とOpenAPI文書に基づいてアプリケーションを構築するために、以下のようなプロンプトを使用します。

    ```text
    React Webアプリを構築したいと思います。以下の指示に従ってください。
    
    - 作業ディレクトリは `javascript` です。
    - まず実行するすべてのステップを特定してください。
    - `http://localhost:8000` で実行されているバックエンドAPIアプリがあります。
    - すべてのエンドポイントとデータスキーマを記述した `openapi.yaml` を使用してください。
    - ポート番号は `3000` を使用してください。
    - このリンクで定義されたすべてのUIコンポーネントを作成してください：{{FIGMA_SECTION_LINK}}。
    - UIコンポーネントに関連しないものは追加しないでください。
    - `openapi.yaml` で定義されていないものは追加しないでください。
    - `openapi.yaml` で定義されているものは変更しないでください。
    - 何らかの理由でバックエンドAPIが利用できない、または到達できない場合は視覚的な表示を行ってください。
    ```

1. 残りの4つのFigmaデザインリンクに対して、さらに4回繰り返します。
1. GitHub Copilot の ![「keep」ボタンの画像](https://img.shields.io/badge/keep-blue) ボタンをクリックして変更を適用します。

### React フロントエンドアプリを検証

1. FastAPI バックエンドアプリが起動して実行されていることを確認します。

    ```text
    `python` ディレクトリにあるFastAPI バックエンドAPIを実行してください。
    ```

1. 適切に構築されているかどうかを確認します。

    ```text
    Reactアプリを実行して、アプリが適切に実行されているかどうかを確認してください。

    アプリの実行が失敗した場合は、問題を分析して修正してください。
    ```

1. ウェブブラウザを開いて `http://localhost:3000` に移動します。
1. フロントエンドとバックエンドの両方のアプリが適切に実行されているかどうかを確認します。
1. GitHub Copilot の `[keep]` ボタンをクリックして変更を適用します。

---

よくできました。「JavaScript」ステップを完了しました。[STEP 03: Python から Java への移行](./03-java.md)に移りましょう。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
