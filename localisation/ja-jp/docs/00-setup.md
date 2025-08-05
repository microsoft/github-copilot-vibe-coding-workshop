# 00: 開発環境

このステップでは、ワークショップのための開発環境を設定します。

## 前提条件

準備のために[README](../README.md)文書を参照してください。

## はじめに

- [GitHub Codespaces を使用](#github-codespaces-を使用)
- [Visual Studio Code を使用](#visual-studio-code-を使用)
  - [PowerShell をインストール 👉 Windows ユーザー向け](#powershell-をインストール--windows-ユーザー向け)
  - [git CLI をインストール](#git-cli-をインストール)
  - [GitHub CLI をインストール](#github-cli-をインストール)
  - [Docker Desktop をインストール](#docker-desktop-をインストール)
  - [Visual Studio Code をインストール](#visual-studio-code-をインストール)
  - [Visual Studio Code を起動](#visual-studio-code-を起動)
  - [MCP サーバーを設定](#mcp-サーバーを設定)
- [GitHub Copilot エージェントモードを確認](#github-copilot-エージェントモードを確認)
- [ビーストモードを設定](#ビーストモードを設定)
- [カスタム指示を準備](#カスタム指示を準備)
- [製品要求仕様書（PRD）を分析してAPIを設計](#製品要求仕様書prdを分析してapiを設計)

## GitHub Codespaces を使用

1. このリンクをクリックしてください 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. GitHub Codespaceインスタンスの準備ができたら、ターミナルを開いて以下のコマンドを実行し、必要なものがすべて適切にインストールされているかどうかを確認します。

    ```bash
    # Python
    python --version
    ```

    ```bash
    # Node.js
    node --version
    npm --version

    ```

    ```bash
    # JDK
    java --version
    ```

    ```bash
    # .NET SDK
    dotnet --list-sdks
    ```

1. リポジトリの状態を確認します。

    ```bash
    git remote -v
    ```

   以下のように表示されるはずです。

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   上記と異なるものが表示される場合は、GitHub Codespaceインスタンスを削除して再作成してください。

1. [MCP サーバーを設定](#mcp-サーバーを設定)セクションに移動します。

**👇👇👇 代わりに、ローカルマシンでVS Codeを使用したい場合は、以下の指示に従ってください。以下のセクションは、GitHub Codespaces を使用する人には適用されません。 👇👇👇**

## Visual Studio Code を使用

### PowerShell をインストール 👉 Windows ユーザー向け

1. PowerShell がすでにインストールされているかどうかを確認します。

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   `pwsh` のコマンドパスが表示されない場合は、まだPowerShellがインストールされていないことを意味します。[PowerShell インストールページ](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)にアクセスして指示に従ってください。

1. PowerShell のバージョンを確認します。

    ```bash
    pwsh --version
    ```

   `7.5.0` 以上を推奨します。それより低い場合は、[PowerShell インストールページ](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)にアクセスして指示に従ってください。

### git CLI をインストール

1. git CLI がすでにインストールされているかどうかを確認します。

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   `git` のコマンドパスが表示されない場合は、まだgit CLIがインストールされていないことを意味します。[git CLI インストールページ](https://git-scm.com/downloads)にアクセスして指示に従ってください。

1. git CLI のバージョンを確認します。

    ```bash
    git --version
    ```

   `2.39.0` 以上を推奨します。それより低い場合は、[git CLI インストールページ](https://git-scm.com/downloads)にアクセスして指示に従ってください。

### GitHub CLI をインストール

1. GitHub CLI がすでにインストールされているかどうかを確認します。

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   `gh` のコマンドパスが表示されない場合は、まだGitHub CLIがインストールされていないことを意味します。[GitHub CLI インストールページ](https://cli.github.com/)にアクセスして指示に従ってください。

1. GitHub CLI のバージョンを確認します。

    ```bash
    gh --version
    ```

   `2.65.0` 以上を推奨します。それより低い場合は、[GitHub CLI インストールページ](https://cli.github.com/)にアクセスして指示に従ってください。

1. GitHub にサインインしているかどうかを確認します。

    ```bash
    gh auth status
    ```

   まだサインインしていない場合は、`gh auth login` を実行してサインインしてください。

### Docker Desktop をインストール

1. Docker Desktop がすでにインストールされているかどうかを確認します。

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   `docker` のコマンドパスが表示されない場合は、まだDocker Desktopがインストールされていないことを意味します。[Docker Desktop インストールページ](https://docs.docker.com/get-started/introduction/get-docker-desktop/)にアクセスして指示に従ってください。

1. Docker CLI のバージョンを確認します。

    ```bash
    docker --version
    ```

   `28.0.4` 以上を推奨します。それより低い場合は、[Docker Desktop インストールページ](https://docs.docker.com/get-started/introduction/get-docker-desktop/)にアクセスして指示に従ってください。

### Visual Studio Code をインストール

1. VS Code がすでにインストールされているかどうかを確認します。

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   `code` のコマンドパスが表示されない場合は、まだVS Codeがインストールされていないことを意味します。[Visual Studio Code インストールページ](https://code.visualstudio.com/)にアクセスして指示に従ってください。

1. VS Code のバージョンを確認します。

    ```bash
    code --version
    ```

   `1.99.0` 以上を推奨します。それより低い場合は、[Visual Studio Code インストールページ](https://code.visualstudio.com/)にアクセスして指示に従ってください。

   > **注意**: `code` コマンドを実行できない場合があります。その場合は、[この文書](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)に従って設定してください。

### Visual Studio Code を起動

1. 作業ディレクトリを作成します。
1. 以下のコマンドを実行して、このリポジトリをフォークしてローカルマシンにクローンします。

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. クローンしたディレクトリに移動します。

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. ターミナルから VS Code を実行します。

    ```bash
    code .
    ```

1. VS Code 内で新しいターミナルを開き、以下のコマンドを実行してリポジトリの状態を確認します。

    ```bash
    git remote -v
    ```

   以下のように表示されるはずです。`origin` に `microsoft` が表示される場合は、フォークしたリポジトリから再度クローンする必要があります。

    ```bash
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. 両方の拡張機能がインストールされているかどうかを確認します ― [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) と [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)。

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   何も表示されない場合は、まだそれらの拡張機能がインストールされていないことを意味します。以下のコマンドを実行して拡張機能をインストールしてください。

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### MCP サーバーを設定

1. ローカルマシンでVS Codeを使用している場合は、Docker Desktopが起動していることを確認してください。
1. `$REPOSITORY_ROOT` 環境変数を設定します。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. MCP サーバー設定をコピーします。

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/.vscode/. \
          $REPOSITORY_ROOT/.vscode/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/* `
              -Destination $REPOSITORY_ROOT/.vscode/ -Recurse -Force
    ```

1. F1 キーまたは Windows では `Ctrl`+`Shift`+`P`、Mac OS では `Cmd`+`Shift`+`P` を入力してコマンドパレットを開き、`MCP: List Servers` を検索します。
1. `context7` を選択して `Start Server` をクリックします。
1. `awesome-copilot` を選択して `Start Server` をクリックします。

## GitHub Copilot エージェントモードを確認

1. GitHub Codespace または VS Code の上部にある GitHub Copilot アイコンをクリックして、GitHub Copilot ウィンドウを開きます。

   ![GitHub Copilot Chat を開く](../../../docs/images/setup-02.png)

1. ログインまたはサインアップを求められた場合は、実行してください。無料です。
1. GitHub Copilot エージェントモードを使用していることを確認します。

   ![GitHub Copilot エージェントモード](../../../docs/images/setup-03.png)

1. モデルを `GPT-4.1` または `Claude Sonnet 4` のいずれかに選択します。

## ビーストモードを設定

1. `/mcp.awesome-copilot.get_search_prompt` を入力し、続いて "beast mode" のようなキーワードを入力します

   ビーストチャットモードのリストが表示されます。`4.1 Beast Chat Mode` のようなプロンプトを入力します。すると、`.github/chatmodes` ディレクトリに保存されます。

1. `Agent` モードの代わりに `4.1-Beast` モードを選択します。自動的にLLMが `GPT 4.1` に変更されます。

1. `$REPOSITORY_ROOT` 環境変数を設定します。

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. ワークスペース設定をコピーします。

    ```bash
    # bash/zsh
    cp $REPOSITORY_ROOT/docs/.vscode/settings.json \
       $REPOSITORY_ROOT/.vscode/settings.json
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/settings.json `
              -Destination $REPOSITORY_ROOT/.vscode/settings.json -Force
    ```

## カスタム指示を準備

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/setup/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/setup/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

## 製品要求仕様書（PRD）を分析してAPIを設計

1. `Claude Sonnet 4` または `GPT-4.1` のモデルでGitHub Copilot エージェントモードを使用していることを確認します。
1. [`product-requirements.md`](../product-requirements.md) を GitHub Copilot に追加します。
1. GitHub Copilot エージェントにOpenAPI文書を生成してもらうために、以下のようなプロンプトを入力します。このOpenAPI文書がアプリケーション全体のベースになります。

    ```text
    PRDをお渡しします。PRD全体を注意深く読み、以下を実行してください。
    
    - まず実行するすべてのステップを特定してください。
    - YAML形式でOpenAPI文書を生成してください。
    - OpenAPI文書はすべてのAPIエンドポイント、パラメータ、リクエスト/レスポンスペイロードを含める必要があります。
    - APIサーバーは `http://localhost:8080` で、ベースURLは `/api` と仮定してください。
    - リポジトリルートの `openapi.yaml` ファイルに保存してください。
    ```

1. リポジトリルートに `openapi.yaml` が生成されたことを確認します。
1. GitHub Copilot の `[keep]` ボタンをクリックして `openapi.yaml` ファイルを取得します。

---

よくできました。「開発環境」ステップを完了しました。[STEP 01: Python バックエンド開発](./01-python.md)に移りましょう。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
