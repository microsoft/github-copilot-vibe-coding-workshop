# 完成アプリサンプル

こちらは完成アプリサンプルのリストです。これらもバイブコーディングされているため、どのように構築されているかを確認できます。

| アプリケーション | 場所                        |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## コンテナ化サンプル

### 前提条件

準備のために[README](../README.md)文書を参照してください。

### はじめに

1. Dockerが実行されていることを確認します。

    ```bash
    docker info
    ```

1. リポジトリルートを取得します。

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. `complete` ディレクトリに移動します。

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. コンテナ化されたアプリを実行します。

    ```bash
    docker compose up --build -d
    ```

1. Webブラウザを開いて `http://localhost:3030` に移動します。
1. Webアプリケーションが適切に実行されているかどうかを確認します。
1. 以下のコマンドを実行してコンテナ化されたアプリを削除し、クリーンアップします。

    ```bash
    docker compose down --rmi all
    ```