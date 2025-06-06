# 04: JavaScript에서 .NET으로 마이그레이션

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

이들은 이미 JavaScript, 더 구체적으로는 React로 작성된 프론트엔드 앱을 가지고 있습니다. 하지만 갑자기 .NET, 특히 Blazor를 사용하여 프론트엔드 앱을 재개발하라는 새로운 요구사항을 보냈습니다.

이제 .NET 개발자로서, 기존 React 앱을 Blazor로 마이그레이션해야 합니다. 참고로 JavaScript와 React에 대한 지식은 매우 적습니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [Blazor 웹 앱 프로젝트 준비](#blazor-웹-앱-프로젝트-준비)
- [React 웹 앱 마이그레이션](#react-웹-앱-마이그레이션)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Blazor 웹 앱 프로젝트 준비

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 Blazor 웹 앱 프로젝트를 스캐폴드하세요.

    ```text
    I'd like to scaffold a Blazor web app. Follow the instructions below.

    - Use context7.
    - Your working directory is `dotnet`.
    - Identify all the steps first, which you're going to do.
    - Show me the list of .NET projects related to Blazor and ask me to choose.
    - Generate a Blazor project.
    - Use the project name of `Contoso.BlazorApp`.
    - Update `launchSettings.json` to change the port number of `3031` for HTTP, `43031` for HTTPS.
    - Create a solution, `ContosoWebApp`, and add the Blazor project into this solution.
    - Build the Blazor app and verify if the app is built properly.
    - Run this Blazor app and verify if the app is running properly.
    - If either building or running the app fails, analyze the issues and fix them.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### Spring Boot 백엔드 앱 실행

1. Spring Boot 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    Run the Spring Boot backend API, which is located at the `java` directory.
    ```

   > **참고**: 대신 [`complete/java`](../complete/java/) 샘플 앱을 사용할 수도 있습니다.

1. GitHub Codespaces를 사용하는 경우, 포트 번호 `8080`이 `private` 대신 `public`으로 설정되어 있는지 확인하세요. 그렇지 않으면 프론트엔드 앱에서 액세스할 때 `401` 오류가 발생할 수 있습니다.

### React 웹 앱 마이그레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 React를 Blazor로 마이그레이션하세요.

    ```text
    Now, we're migrating the existing React-based web app to Blazor web app. Follow the instructions below for the migration.
    
    - Use context7.
    - The existing React application is located at `javascript`.
    - Your working directory is `dotnet/Contoso.BlazorApp`.
    - Identify all the steps first, which you're going to do.
    - There's a backend API app running on `http://localhost:8080`.
    - Analyze the application structure of the existing React app.
    - Migrate all the React components to Blazor ones. Both corresponding components should be as exactly close to each other as possible.
    - Migrate all necessary CSS elements from React to Blazor.
    - While migrating JavaScript elements from React to Blazor, maximize using Blazor's native features as much as possible. If you have to use JavaScript, use Blazor's JSInterop features.
    - If necessary, add NuGet packages that are compatible with .NET 9.
    ```

1. 마이그레이션이 완료되면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    I'd like to build the Blazor app. Follow the instructions.

    - Use context7.
    - Build the Blazor app and verify if the app is built properly.
    - If building the app fails, analyze the issues and fix them.
    ```

   > **참고**:
   >
   > - 빌드가 성공할 때까지 이 단계를 반복하세요.
   > - 빌드가 계속 실패하면, 오류 메시지를 확인하고 GitHub Copilot 에이전트에 문의하여 해결하세요.

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 빌드가 성공하면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    I'd like to run the Blazor app. Follow the instructions.

    - Use context7.
    - Run this Blazor app and verify if the app is running properly.
    - Ignore backend API app connection error at this stage.
    - If running the app fails, analyze the issues and fix them.
    ```

### Blazor 프론트엔드 앱 검증

1. Spring Boot 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    Run the Spring Boot backend API, which is located at the `java` directory.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 제대로 빌드되었는지 확인하세요.

    ```text
    Run the Blazor app and verify if the app is properly running.

    If app running fails, analyze the issues and fix them.
    ```

1. 웹 브라우저를 열고 `http://localhost:3031`로 이동하세요.
1. 프론트엔드와 백엔드 앱이 모두 제대로 실행되고 있는지 확인하세요.
1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. ".NET" 단계를 완료했습니다. [STEP 05: 컨테이너화](./05-containerization.md)로 이동하겠습니다.