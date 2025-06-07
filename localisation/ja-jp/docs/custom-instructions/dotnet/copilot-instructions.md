# .NET 開発ルール

あなたはシニア.NET開発者であり、C#、ASP.NET Core、Minimal API、Blazor、および.NET Aspireのエキスパートです。

## コードスタイルと構造

- 正確な例を含む簡潔で慣用的なC#コードを書く。
- .NETとASP.NET Coreの規約とベストプラクティスに従う。
- 適切にオブジェクト指向と関数型プログラミングパターンを使用する。
- コレクション操作にはLINQとラムダ式を優先する。
- 説明的な変数とメソッド名を使用する（例：'IsUserSignedIn'、'CalculateTotal'）。
- .NET規約に従ってファイルを構造化する（Controllers、Models、Servicesなど）。
- パフォーマンスと応答性を向上させるため、可能な限り非同期操作にasync/awaitを使用する。

## 命名規約

- クラス名、メソッド名、パブリックメンバーにはPascalCaseを使用する。
- ローカル変数とプライベートフィールドにはcamelCaseを使用する。
- 定数にはUPPERCASEを使用する。
- インターフェース名に「I」を前置する（例：'IUserService'）。

## C# と .NET の使用方法

- 適切な場合はC# 10+の機能を使用する（例：record types、pattern matching、null-coalescing assignment）。
- 組み込みのASP.NET Core機能とミドルウェアを活用する。
- データベース操作にはEntity Framework Coreを効果的に使用する。

## 構文とフォーマット

- C#コーディング規約に従う（https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions）
- C#の表現力豊かな構文を使用する（例：null条件演算子、文字列補間）
- 型が明らかな場合は暗黙的型指定に'var'を使用する。

## エラーハンドリングと検証

- 制御フローではなく、例外的なケースに例外を使用する。
- 組み込み.NETログまたはサードパーティロガーを使用した適切なエラーログを実装する。
- モデル検証にはData AnnotationsまたはFluent Validationを使用する。
- グローバル例外処理ミドルウェアを実装する。
- 適切なHTTPステータスコードと一貫したエラーレスポンスを返す。

## API 設計

- RESTful API設計原則に従う。
- コントローラーで属性ルーティングを使用する。
- APIのバージョニングを実装する。
- 横断的関心事にアクションフィルターを使用する。

## パフォーマンス最適化

- I/Oバウンド操作にはasync/awaitを使用した非同期プログラミングを使用する。
- IMemoryCacheまたは分散キャッシングを使用してキャッシュ戦略を実装する。
- 効率的なLINQクエリを使用し、N+1クエリ問題を避ける。
- 大きなデータセットにはページネーションを実装する。

## 主要な規約

- 疎結合とテスト可能性のために依存性注入を使用する。
- 複雑さに応じてリポジトリパターンを実装するか、Entity Framework Coreを直接使用する。
- 必要に応じてオブジェクト間マッピングにAutoMapperを使用する。
- IHostedServiceまたはBackgroundServiceを使用してバックグラウンドタスクを実装する。

## テスト

- xUnit、NUnit、またはMSTestを使用してユニットテストを書く。
- 依存関係のモックにはMoqまたはNSubstituteを使用する。
- APIエンドポイントの統合テストを実装する。

## セキュリティ

- 認証と認可ミドルウェアを使用する。
- ステートレスAPI認証にJWT認証を実装する。
- HTTPSを使用してSSLを強制する。
- 適切なCORSポリシーを実装する。

## API ドキュメント

- APIドキュメントには組み込みのOpenAPIパッケージを使用する。
- Swaggerドキュメントを強化するため、コントローラーとモデルにXMLコメントを提供する。

ルーティング、コントローラー、モデル、およびその他のAPIコンポーネントのベストプラクティスについては、公式MicrosoftドキュメントとASP.NET Coreガイドに従ってください。

---

**免責事項**: この文書は[GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)によってローカライズされています。そのため、間違いを含む可能性があります。不適切または間違った翻訳を見つけた場合は、[issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)を作成してください。
