# Python アプリサンプル

ユーザーが投稿の作成、取得、更新、削除、コメントの追加、投稿のいいね/いいね取り消しを行えるシンプルソーシャルネットワーキングサービス（SNS）の完全なFastAPIバックエンド実装です。

## 前提条件

準備のために[README](../../README.md)文書を参照してください。

## はじめに

### 1. 環境設定

まず、`$REPOSITORY_ROOT` 環境変数を設定します。

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

次に、pythonディレクトリに移動して仮想環境を作成します：

```bash
cd $REPOSITORY_ROOT/complete/python
```

仮想環境を作成

```bash
# uv使用（推奨）
uv venv .venv
```

```bash
# 標準Python使用（代替）
python -m venv .venv
```

### 2. 仮想環境をアクティベート

```bash
# Linux/macOS
source .venv/bin/activate
```

```bash
# Windows コマンドプロンプト
.venv\Scripts\activate
```

### 3. 依存関係をインストール

```bash
# uv使用（推奨）
uv pip install fastapi uvicorn python-multipart pyyaml
```

```bash
# pip使用（代替）
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. OpenAPI仕様をコピー

親ディレクトリからOpenAPI仕様をコピーします。

```bash
# Linux/macOS
cp ../openapi.yaml .
```

```powershell
# Windows コマンドプロンプト
xcopy ..\openapi.yaml .
```

### 5. アプリケーションを実行

開発サーバーを起動

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

アプリケーションは以下で利用可能になります：

- **API ベースURL**: `http://localhost:8000/api/`
- **Swagger UI**: `http://localhost:8000/docs`
- **OpenAPI仕様**: `http://localhost:8000/openapi.json`

## API エンドポイント

### 投稿

- `GET /api/posts` - すべての投稿を一覧表示
- `POST /api/posts` - 新しい投稿を作成
- `GET /api/posts/{postId}` - 特定の投稿を取得
- `PATCH /api/posts/{postId}` - 投稿を更新
- `DELETE /api/posts/{postId}` - 投稿を削除

### コメント

- `GET /api/posts/{postId}/comments` - 投稿のコメントを一覧表示
- `POST /api/posts/{postId}/comments` - コメントを作成
- `GET /api/posts/{postId}/comments/{commentId}` - 特定のコメントを取得
- `PATCH /api/posts/{postId}/comments/{commentId}` - コメントを更新
- `DELETE /api/posts/{postId}/comments/{commentId}` - コメントを削除

### いいね

- `POST /api/posts/{postId}/likes` - 投稿にいいね
- `DELETE /api/posts/{postId}/likes?username={username}` - 投稿のいいねを取り消し

## APIのテスト

### Swagger UIを使用

1. `http://localhost:8000/docs` に移動
2. すべてのAPIエンドポイントをインタラクティブに探索してテスト
3. リクエスト/レスポンススキーマと例を表示

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
