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
    I'd like to scaffold a Spring Boot app. Follow the instructions below.

    - Use context7.
    - Your working directory is `java`.
    - Identify all the steps first, which you're going to do.
    - Use Spring Boot CLI to create the Spring Boot app project.
    - Use Gradle as the Java package manager.
    - Use the package name of `com.contoso.socialapp`.
    - Use the artifact ID of `socialapp`.
    - Use the group ID of `com.contoso`.
    - Use the package type of `jar`.
    - Use OpenJDK version of `21`.
    - Add dependencies - `Spring Web`, `Spring Boot Actuator` and `Lombok`.
    - Use the port number of `8080`.
    - Make sure to allow CORS from everywhere.
    - Build the Spring Boot app and verify if the app is built properly.
    - Run this Spring Boot app and verify if the app is running properly.
    - If either building or running the app fails, analyze the issues and fix them.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### FastAPI API 앱 마이그레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. [`product-requirements.md`](../product-requirements.md)와 [`openapi.yaml`](../openapi.yaml)을 GitHub Copilot에 추가하세요.
1. 아래와 같은 프롬프트를 사용하여 FastAPI를 Spring Boot로 마이그레이션하세요.

    ```text
    Now, we're migrating the existing FastAPI-based API app to Spring Boot API app. Follow the instructions below for the migration.
    
    - Use context7.
    - The existing FastAPI application is located at `python`.
    - Your working directory is `java/socialapp`.
    - Identify all the steps first, which you're going to do.
    - Analyze the application structure of the existing FastAPI app.
    - Migrate all the endpoints. Both corresponding endpoints should be exactly the same as each other.
    - Use SQLite as the database.
    - Use `sns_api.db` as the name of the SQLite database.
    - The database should always be initialized whenever starting the app.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - The API application should render Swagger UI page through a default endpoint.
    - The API application should render exactly the same OpenAPI document through a default endpoint.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    - If necessary, add more packages for OpenAPI and Swagger UI.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 마이그레이션이 완료되면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    I'd like to build the Spring Boot app. Follow the instructions.

    - Use context7.
    - Build the Spring Boot app and verify if the app is built properly.
    - If building the app fails, analyze the issues and fix them.
    ```

   > **참고**:
   >
   > - 빌드가 성공할 때까지 이 단계를 반복하세요.
   > - 빌드가 계속 실패하면, 오류 메시지를 확인하고 GitHub Copilot 에이전트에 문의하여 해결하세요.

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### Spring Boot 백엔드 앱 검증

1. 애플리케이션이 빌드되면, 제대로 작성되었는지 확인하세요.

    ```text
    Run the Spring Boot app and verify if the app is properly running by checking all the endpoints. Also verify the OpenAPI endpoint renders exactly the same content as `openapi.yaml`.

    If app running fails, analyze the issues and fix them. Use context7.
    ```

1. 웹 브라우저를 열고 `http://localhost:8080`으로 이동하세요.
1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. "Java" 단계를 완료했습니다. [STEP 04: JavaScript에서 .NET으로 마이그레이션](./04-dotnet.md)로 이동하겠습니다.