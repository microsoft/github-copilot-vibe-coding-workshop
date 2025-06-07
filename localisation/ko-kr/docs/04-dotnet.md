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
- [Spring Boot 백엔드 앱 실행](#spring-boot-백엔드-앱-실행)
- [React 웹 앱 마이그레이션](#react-웹-앱-마이그레이션)
- [Blazor 프론트엔드 앱 검증](#blazor-프론트엔드-앱-검증)

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
    Blazor 웹 앱을 스캐폴드하고 싶습니다. 아래 지침을 따르세요.

    - context7을 사용하세요.
    - 작업 디렉토리는 `dotnet`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - Blazor와 관련된 .NET 프로젝트 목록을 보여주고 선택하도록 요청하세요.
    - Blazor 프로젝트를 생성하세요.
    - 프로젝트 이름으로 `Contoso.BlazorApp`을 사용하세요.
    - HTTP는 `3031`, HTTPS는 `43031` 포트 번호로 변경하도록 `launchSettings.json`을 업데이트하세요.
    - `ContosoWebApp` 솔루션을 생성하고 이 솔루션에 Blazor 프로젝트를 추가하세요.
    - Blazor 앱을 빌드하고 앱이 제대로 빌드되는지 확인하세요.
    - 이 Blazor 앱을 실행하고 앱이 제대로 실행되는지 확인하세요.
    - 빌드나 앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### Spring Boot 백엔드 앱 실행

1. Spring Boot 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    `java` 디렉토리에 위치한 Spring Boot 백엔드 API를 실행하세요.
    ```

   > **참고**: 대신 [`complete/java`](../complete/java/) 샘플 앱을 사용할 수도 있습니다.

1. GitHub Codespaces를 사용하는 경우, 포트 번호 `8080`이 `private` 대신 `public`으로 설정되어 있는지 확인하세요. 그렇지 않으면 프론트엔드 앱에서 액세스할 때 `401` 오류가 발생할 수 있습니다.

### React 웹 앱 마이그레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 React를 Blazor로 마이그레이션하세요.

    ```text
    이제 기존 React 기반 웹 앱을 Blazor 웹 앱으로 마이그레이션하겠습니다. 마이그레이션을 위해 아래 지침을 따르세요.
    
    - context7을 사용하세요.
    - 기존 React 애플리케이션은 `javascript`에 위치합니다.
    - 작업 디렉토리는 `dotnet/Contoso.BlazorApp`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - `http://localhost:8080`에서 실행 중인 백엔드 API 앱이 있습니다.
    - 기존 React 앱의 애플리케이션 구조를 분석하세요.
    - 모든 React 컴포넌트를 Blazor 컴포넌트로 마이그레이션하세요. 두 해당 컴포넌트는 서로 최대한 정확히 유사해야 합니다.
    - React에서 Blazor로 필요한 모든 CSS 요소를 마이그레이션하세요.
    - React에서 Blazor로 JavaScript 요소를 마이그레이션하는 동안 Blazor의 네이티브 기능을 최대한 활용하세요. JavaScript를 사용해야 하는 경우 Blazor의 JSInterop 기능을 사용하세요.
    - 필요한 경우 .NET 9와 호환되는 NuGet 패키지를 추가하세요.
    ```

1. 마이그레이션이 완료되면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    Blazor 앱을 빌드하고 싶습니다. 지침을 따르세요.

    - context7을 사용하세요.
    - Blazor 앱을 빌드하고 앱이 제대로 빌드되는지 확인하세요.
    - 앱 빌드가 실패하면 문제를 분석하고 수정하세요.
    ```

   > **참고**:
   >
   > - 빌드가 성공할 때까지 이 단계를 반복하세요.
   > - 빌드가 계속 실패하면, 오류 메시지를 확인하고 GitHub Copilot 에이전트에 문의하여 해결하세요.

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 빌드가 성공하면, 아래와 같은 프롬프트를 사용하여 마이그레이션 결과를 확인하세요.

    ```text
    Blazor 앱을 실행하고 싶습니다. 지침을 따르세요.

    - context7을 사용하세요.
    - 이 Blazor 앱을 실행하고 앱이 제대로 실행되는지 확인하세요.
    - 이 단계에서는 백엔드 API 앱 연결 오류를 무시하세요.
    - 앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

### Blazor 프론트엔드 앱 검증

1. Spring Boot 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    `java` 디렉토리에 위치한 Spring Boot 백엔드 API를 실행하세요.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 제대로 빌드되었는지 확인하세요.

    ```text
    Blazor 앱을 실행하고 앱이 제대로 실행되는지 확인하세요.

    앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

1. 웹 브라우저를 열고 `http://localhost:3031`로 이동하세요.
1. 프론트엔드와 백엔드 앱이 모두 제대로 실행되고 있는지 확인하세요.
1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. ".NET" 단계를 완료했습니다. [STEP 05: 컨테이너화](./05-containerization.md)로 이동하겠습니다.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
