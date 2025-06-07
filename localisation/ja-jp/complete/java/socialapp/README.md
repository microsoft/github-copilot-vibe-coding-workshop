# Javaアプリケーション サンプル

ソーシャルメディアプラットフォーム向けの完全なSpring Boot REST APIアプリケーションで、投稿、コメント、いいねの完全なCRUD操作を提供します。

## プロジェクト概要

これは以下の仕様で構築された本格的なSpring Bootアプリケーションです：

- **パッケージ名**: `com.contoso.socialapp`
- **アーティファクトID**: `socialapp`
- **グループID**: `com.contoso`
- **パッケージタイプ**: `jar`
- **Javaバージョン**: OpenJDK 21
- **ビルドツール**: Gradle
- **データベース**: SQLite（組み込み）
- **ポート**: 8080

### プロジェクトの依存関係

- **Spring Boot 3.2.5**: コアフレームワーク
- **Spring Web**: RESTful APIエンドポイント
- **Spring Data JPA**: データベース操作
- **Spring Boot Actuator**: アプリケーション監視
- **Spring Boot Validation**: 入力検証
- **SQLite**: 組み込みデータベース
- **Hibernate Community Dialects**: SQLiteサポート
- **Springdoc OpenAPI**: APIドキュメント（Swagger UI）
- **Lombok**: 定型コードの削減

### プロジェクト構造

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # メインアプリケーションクラス
│   │               ├── config/
│   │               │   ├── WebConfig.java            # CORS設定
│   │               │   └── OpenApiConfig.java        # Swagger/OpenAPI設定
│   │               ├── controller/
│   │               │   ├── HealthController.java     # ヘルスエンドポイント
│   │               │   ├── PostController.java       # 投稿管理
│   │               │   └── CommentController.java    # コメント・いいね管理
│   │               ├── model/
│   │               │   ├── Post.java                 # 投稿エンティティ
│   │               │   ├── Comment.java              # コメントエンティティ
│   │               │   ├── Like.java                 # いいねエンティティ
│   │               │   └── dto/                      # データ転送オブジェクト
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # 投稿データアクセス
│   │               │   ├── CommentRepository.java    # コメントデータアクセス
│   │               │   └── LikeRepository.java       # いいねデータアクセス
│   │               └── service/
│   │                   ├── PostService.java          # 投稿ビジネスロジック
│   │                   └── CommentService.java       # コメントビジネスロジック
│   └── resources/
│       ├── application.properties                    # アプリケーション設定
│       └── data.sql                                  # サンプルデータ（オプション）
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # 統合テスト
```

## 機能

- ✅ ソーシャルメディア操作の完全なRESTful API
- ✅ 投稿管理（作成、読み取り、更新、削除）
- ✅ 完全なCRUD操作を持つコメントシステム
- ✅ いいね/いいね解除機能
- ✅ JPA/HibernateによるSQLiteデータベース
- ✅ OpenAPI/Swaggerドキュメント
- ✅ localhostおよびGitHub Codespacesに対応したCORS
- ✅ 動的サーバーURL設定
- ✅ ヘルスチェックエンドポイント
- ✅ Spring Boot Actuator統合
- ✅ 包括的なエラーハンドリング
- ✅ Bean Validationによる入力検証

## クイックスタート

### 前提条件

準備については、[README](../../README.md)ドキュメントを参照してください。

### 1. 環境設定

まず、`$REPOSITORY_ROOT`の環境変数を設定します。

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

次に、javaディレクトリに移動します。

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. アプリケーションのビルド

```bash
# gradlewを実行可能にする（必要に応じて）
chmod +x ./gradlew

# プロジェクトをビルド
./gradlew build
```

### 3. アプリケーションの実行

```bash
# Gradleを使用してアプリケーションを開始
./gradlew bootRun

# 代替方法: JARファイルを直接実行
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. アプリケーションが動作していることを確認

```bash
# ヘルスエンドポイントを確認
curl http://localhost:8080/api/health

# 期待される応答: {"status":"healthy"}
```

### 5. APIドキュメントへのアクセス

ブラウザを開いて以下にアクセス：

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## APIエンドポイント

### ヘルス・ウェルカム

- `GET /api/health` - カスタムヘルスチェックエンドポイント
- `GET /api/welcome` - ウェルカムメッセージエンドポイント

### 投稿管理

- `GET /api/posts` - すべての投稿を取得
- `GET /api/posts/{id}` - IDで特定の投稿を取得
- `POST /api/posts` - 新しい投稿を作成
- `PATCH /api/posts/{id}` - 既存の投稿を更新
- `DELETE /api/posts/{id}` - 投稿を削除

### コメント管理

- `GET /api/posts/{postId}/comments` - 投稿のすべてのコメントを取得
- `GET /api/posts/{postId}/comments/{commentId}` - 特定のコメントを取得
- `POST /api/posts/{postId}/comments` - 投稿にコメントを追加
- `PATCH /api/posts/{postId}/comments/{commentId}` - コメントを更新
- `DELETE /api/posts/{postId}/comments/{commentId}` - コメントを削除

### いいね管理

- `POST /api/posts/{postId}/like` - 投稿にいいね
- `DELETE /api/posts/{postId}/like` - 投稿のいいねを解除

### Spring Boot Actuator

- `GET /actuator/health` - Spring Bootヘルスインジケーター
- `GET /actuator/info` - アプリケーション情報

## APIのテスト

### cURLの例

#### 投稿を作成

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "私の最初の投稿",
    "content": "これは私の最初の投稿の内容です！",
    "authorName": "山田太郎"
  }'
```

#### すべての投稿を取得

```bash
curl http://localhost:8080/api/posts
```

#### コメントを追加

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "素晴らしい投稿です！",
    "authorName": "佐藤花子"
  }'
```

#### 投稿にいいね

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "john_doe"
  }'
```

### Swagger UIの使用

1. [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)を開く
2. 利用可能なエンドポイントを探索
3. 任意のエンドポイントで「Try it out」をクリック
4. パラメータを入力して「Execute」をクリック

## 開発

### テストの実行

```bash
# すべてのテストを実行
./gradlew test

# カバレッジレポート付きで実行
./gradlew test jacocoTestReport

# 特定のテストクラスを実行
./gradlew test --tests "SocialAppApplicationTests"
```

### データベース

アプリケーションはSQLiteを組み込みデータベースとして使用：

- **データベースファイル**: `sns_api.db`（自動作成）
- **場所**: プロジェクトルートディレクトリ
- **スキーマ**: Hibernateによる自動生成
- **サンプルデータ**: `data.sql`から読み込み（存在する場合）

データベースをリセットするには、`sns_api.db`ファイルを削除してアプリケーションを再起動してください。

## 設定

### アプリケーションプロパティ

`application.properties`の主要設定：

```properties
# アプリケーション設定
spring.application.name=socialapp
server.port=8080

# データベース設定
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# OpenAPI/Swagger設定
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### CORS設定

アプリケーションはlocalhostとGitHub Codespacesの両方をサポート：

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: 自動検出および動的設定

### 環境検出

アプリケーションは実行時環境を自動検出：

- **ローカル開発**: `http://localhost:8080`を使用
- **GitHub Codespaces**: `https://{codespace-name}-8080.{domain}`を使用

## デプロイ

### プロダクション用ビルド

```bash
# プロダクションJARを作成
./gradlew clean build

# JARの場所
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### プロダクション環境での実行

```bash
# プロダクションプロファイルで実行
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# またはカスタムポートで実行
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## トラブルシューティング

### よくある問題

#### ポートが既に使用されている

```bash
# ポート8080を使用しているプロセスを検索
lsof -i :8080

# プロセスを終了（PIDを置き換え）
kill -9 <PID>

# または異なるポートを使用
./gradlew bootRun --args='--server.port=8081'
```

#### ビルドエラー

```bash
# クリーンして再ビルド
./gradlew clean build

# Gradleラッパーを更新
./gradlew wrapper --gradle-version=8.5
```

#### データベースの問題

```bash
# データベースをリセット
rm sns_api.db
./gradlew bootRun
```

### ログと監視

- **アプリケーションログ**: `./gradlew bootRun`実行時のコンソール出力
- **ヘルスチェック**: `GET /actuator/health`
- **アプリケーション情報**: `GET /actuator/info`

## セキュリティに関する考慮事項

⚠️ **開発設定**: 現在のセットアップは開発用に最適化されており、以下の設定になっています：

- すべてのオリジンに対してCORSが有効
- SQLiteデータベース（プロダクション規模には適さない）
- 認証/認可なし

プロダクションデプロイメントでは以下を検討してください：

- CORSを特定のドメインに制限
- SQLiteの代わりにPostgreSQL/MySQLを使用
- 認証のためにSpring Securityを実装
- レート制限と入力サニタイゼーションを追加
- HTTPS/TLS暗号化を使用

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
