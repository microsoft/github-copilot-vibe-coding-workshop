# 03: Python에서 Java로 마이그레이션

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

Python 개발자가 회사를 떠났기 때문에, 이해관계자들은 기존 Python 백엔드 API 앱을 Spring Boot를 사용하여 Java로 마이그레이션하도록 요청했습니다.

이제 Java 개발자로서, 기존 FastAPI 앱을 Spring Boot로 마이그레이션해야 합니다. 참고로 Python과 FastAPI에 대한 지식은 매우 적습니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [Spring Boot 프로젝트 준비](#spring-boot-프로젝트-준비)
- [FastAPI API 앱 마이그레이션](#fastapi-api-앱-마이그레이션)
- [Spring Boot 백엔드 앱 검증](#spring-boot-백엔드-앱-검증)

### GitHub Copilot 에이전트 모드 확인

1. GitHub Codespace 또는 VS Code 상단의 GitHub Copilot 아이콘을 클릭하고 GitHub Copilot 창을 여세요.

   ![Open GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. 로그인 또는 가입을 요청받으면 진행하세요. 무료입니다.
1. GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.

   ![GitHub Copilot Agent Mode](../../../docs/images/setup-03.png)

1. 모델을 `GPT-4.1` 또는 `Claude Sonnet 4` 중 하나로 선택하세요.
1. [MCP 서버](./00-setup.md#mcp-서버-설정)를 구성했는지 확인하세요.

### 커스텀 지시사항 준비

1. `$REPOSITORY_ROOT` 환경 변수를 설정하세요.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. 커스텀 지시사항을 복사하세요.

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

### Spring Boot 프로젝트 준비

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. Spring Boot CLI를 설치하세요.

    ```bash
    sdk install springboot
    ```

1. 아래와 같은 프롬프트를 사용하여 Spring Boot 앱 프로젝트를 스캐폴드하세요.

    ```text
    Spring Boot 앱을 스캐폴드하고 싶습니다. 아래 지침을 따르세요.

    - context7을 사용하세요.
    - 작업 디렉토리는 `java`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - Spring Boot CLI를 사용하여 Spring Boot 앱 프로젝트를 생성하세요.
    - Java 패키지 매니저로 Gradle을 사용하세요.
    - 패키지 이름으로 `com.contoso.socialapp`을 사용하세요.
    - artifact ID로 `socialapp`을 사용하세요.
    - group ID로 `com.contoso`를 사용하세요.
    - 패키지 타입으로 `jar`를 사용하세요.
    - OpenJDK 버전 `21`을 사용하세요.
    - 의존성 추가 - `Spring Web`, `Spring Boot Actuator`, `Lombok`.
    - 포트 번호는 `8080`을 사용하세요.
    - 모든 곳에서 CORS를 허용하세요.
    - Spring Boot 앱을 빌드하고 앱이 제대로 빌드되는지 확인하세요.
    - 이 Spring Boot 앱을 실행하고 앱이 제대로 실행되는지 확인하세요.
    - 빌드나 앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### FastAPI API 앱 마이그레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. [`product-requirements.md`](../product-requirements.md)와 [`openapi.yaml`](../openapi.yaml)을 GitHub Copilot에 추가하세요.
1. 아래와 같은 프롬프트를 사용하여 FastAPI를 Spring Boot로 마이그레이션하세요.

    ```text
    이제 기존 FastAPI 기반 API 앱을 Spring Boot API 앱으로 마이그레이션하겠습니다. 마이그레이션을 위해 아래 지침을 따르세요.
    
    - context7을 사용하세요.
    - 기존 FastAPI 애플리케이션은 `python`에 위치합니다.
    - 작업 디렉토리는 `java/socialapp`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - 기존 FastAPI 앱의 애플리케이션 구조를 분석하세요.
    - 모든 엔드포인트를 마이그레이션하세요. 두 해당 엔드포인트는 서로 정확히 동일해야 합니다.
    - 데이터베이스로 SQLite를 사용하세요.
    - SQLite 데이터베이스 이름으로 `sns_api.db`를 사용하세요.
    - 앱을 시작할 때마다 데이터베이스가 항상 초기화되어야 합니다.
    - 모든 엔드포인트와 데이터 스키마를 설명하는 `openapi.yaml`을 사용하세요.
    - API 애플리케이션은 기본 엔드포인트를 통해 Swagger UI 페이지를 렌더링해야 합니다.
    - API 애플리케이션은 기본 엔드포인트를 통해 정확히 동일한 OpenAPI 문서를 렌더링해야 합니다.
    - `openapi.yaml`에 정의되지 않은 것은 추가하지 마세요.
    - `openapi.yaml`에 정의된 것을 수정하지 마세요.
    - 필요한 경우 OpenAPI와 Swagger UI를 위한 추가 패키지를 추가하세요.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 마이그레이션이 완료되면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    Spring Boot 앱을 빌드하고 싶습니다. 지침을 따르세요.

    - context7을 사용하세요.
    - Spring Boot 앱을 빌드하고 앱이 제대로 빌드되는지 확인하세요.
    - 앱 빌드가 실패하면 문제를 분석하고 수정하세요.
    ```

   > **참고**:
   >
   > - 빌드가 성공할 때까지 이 단계를 반복하세요.
   > - 빌드가 계속 실패하면, 오류 메시지를 확인하고 GitHub Copilot 에이전트에 문의하여 해결하세요.

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### Spring Boot 백엔드 앱 검증

1. 애플리케이션이 빌드되면, 제대로 작성되었는지 확인하세요.

    ```text
    Spring Boot 앱을 실행하고 모든 엔드포인트를 확인하여 앱이 제대로 실행되는지 확인하세요. 또한 OpenAPI 엔드포인트가 `openapi.yaml`과 정확히 동일한 콘텐츠를 렌더링하는지 확인하세요.

    앱 실행이 실패하면 문제를 분석하고 수정하세요. context7을 사용하세요.
    ```

1. 웹 브라우저를 열고 `http://localhost:8080`으로 이동하세요.
1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. "Java" 단계를 완료했습니다. [STEP 04: JavaScript에서 .NET으로 마이그레이션](./04-dotnet.md)로 이동하겠습니다.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
