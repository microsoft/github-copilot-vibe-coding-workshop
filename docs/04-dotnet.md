# 04: .NET

## 시나리오

Contoso 아웃도어 컴파니의 마케팅 팀에서는 제품 홍보를 위한 마이크로 소셜 미디어 웹사이트를 빠르게 론칭하고 싶어 합니다.

JavaScript 개발자 프론트엔드 웹 API를 React 기반으로 개발하고 있었습니다만, 마케팅 팀에서 갑자기 이를 .NET 기반의 Blazor 앱으로 바꾸고 싶다는 추가적인 요구사항을 전달했습니다! 개발팀의 .NET 개발자인 당신은 이 React 앱을 .NET 기반의 Blazor 앱으로 마이그레이션을 해야 합니다.

## 사전 준비사항

[README](../README.md) 문서를 참조하여 개발 환경을 준비합니다.

## 순서

- [개발 과정 프롬프트](#개발-과정-프롬프트)
  - [커스텀 인스트럭션 복사](#커스텀-인스트럭션-복사)
  - [블레이저 웹 앱 프로젝트 준비](#블레이저-웹-앱-프로젝트-준비)
  - [React 웹 앱 마이그레이션](#react-웹-앱-마이그레이션)
  - [Java 앱 Containerization](#java-앱-containerization)
  - [Blazor 앱 Containerization](#blazor-앱-containerization)
  - [Container 오케스트레이션](#container-오케스트레이션)

## 개발 과정 프롬프트

### 커스텀 인스트럭션 복사

1. 리포지토리 루트를 확인합니다.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. 아래 명령어를 실행시켜 커스텀 인스트럭션을 복사합니다.

    ```bash
    # bash/zsh
    # 기존 디렉토리 지우기
    rm -rf $REPOSITORY_ROOT/.github && rm -rf $REPOSITORY_ROOT/.vscode

    # 새로 디렉토리 만들기
    mkdir -p $REPOSITORY_ROOT/.github
    mkdir -p $REPOSITORY_ROOT/.vscode/rules/csharp && mkdir -p $REPOSITORY_ROOT/.vscode/prompts

    # 커스텀 인스트럭션 복사하기
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/.github/. $REPOSITORY_ROOT/.github/
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/.vscode/. $REPOSITORY_ROOT/.vscode/
    ```

    ```powershell
    # PowerShell
    # 기존 디렉토리 지우기
    Remove-Item -Path "$REPOSITORY_ROOT\.github" -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "$REPOSITORY_ROOT\.vscode" -Recurse -Force -ErrorAction SilentlyContinue

    # 새로 디렉토리 만들기
    New-Item -Path "$REPOSITORY_ROOT\.github" -ItemType Directory -Force
    New-Item -Path "$REPOSITORY_ROOT\.vscode\rules\csharp" -ItemType Directory -Force
    New-Item -Path "$REPOSITORY_ROOT\.vscode\prompts" -ItemType Directory -Force

    # 커스텀 인스트럭션 복사하기
    Copy-Item -Path "$REPOSITORY_ROOT\docs\custom-instructions\dotnet\.github\*" -Destination "$REPOSITORY_ROOT\.github\" -Recurse -Force
    Copy-Item -Path "$REPOSITORY_ROOT\docs\custom-instructions\dotnet\.vscode\*" -Destination "$REPOSITORY_ROOT\.vscode\" -Recurse -Force
    ```

### 블레이저 웹 앱 프로젝트 준비

1. GitHub Copilot이 현재 에이전트모드인지 확인합니다. 모델은 `Gemini 2.5 Pro (Preview)` 또는 `Claude 3.7 Sonnet`을 선택하세요.

1. 가장 먼저 Blazor 앱을 스캐폴딩합니다. 아래와 같은 프롬프트를 활용해 보세요.

    ```text
    .NET으로 Blazor 앱을 만들려고 합니다. 먼저 Blazor 관련 .NET 프로젝트 리스트를 보여주고 선택할 수 있게 해 주세요. 그리고 나서 dotnet 디렉토리 안에 선택한 Blazor 프로젝트로 애플리케이션을 생성해 주세요.
    ```

1. Blazor 프로젝트 리스트가 보이면 Blazor Web App을 사용하겠다고 아래와 같은 프롬프트를 활용합니다.

    ```text
    Blazor Web App을 사용합니다. 프로젝트 이름은 ContosoSnsWebApp 으로 하겠습니다.
    ```

1. Blazor Web App 프로젝트가 만들어지면, 아래와 같은 프롬프트를 활용해서 솔루션 파일을 만들고 프로젝트를 연결해 주세요.

    ```text
    dotnet 디렉토리 바로 밑에 ContosoSnsWebApp 솔루션 파일을 만들고 방금 생성한 프로젝트를 연결해 주세요.
    ```

1. 이제 솔루션 파일에 프로젝트를 연결했습니다. 아래와 같은 프롬프트를 활용해서 솔루션을 빌드하여 정상적으로 작동하는지 확인합니다.

    ```text
    방금 생성한 솔루션을 빌드해 주세요. 정상적으로 빌드할 수 있다면 성공한 것입니다. 정상적으로 빌드할 수 없다면 오류를 찾아 수정하세요.
    ```

### React 웹 앱 마이그레이션

1. 이제 React 웹 앱을 .NET Blazor로 마이그레이션 할 차례입니다. 아래와 같은 프롬프트를 활용해 보세요.

    ```text
    현재 complete/javascript 디렉토리에는 React 기반의 웹 애플리케이션이 있습니다. 이를 .NET Blazor 앱으로 마이그레이션할 예정입니다. 아래 순서대로 마이그레이션을 해 주세요.
    
    1. 먼저 React 앱의 구조를 파악합니다.
    2. React 앱의 컴포넌트 구조를 최대한 똑같이 Blazor 앱의 컴포넌트로 마이그레이션 합니다.
    3. 필요한 경우 NuGet 패키지를 추가할 수 있습니다. 단, NET 9 버전과 호환 가능해야 합니다.
    4. 마이그레이션 과정에서 필요한 JavaScript 요소는 Blazor의 기능을 최대한 활용하되, 그렇지 않은 경우 JSInterop 기능을 활용해서 마이그레이션 합니다.
    5. 마이그레이션 과정에서 필요한 CSS 요소는 변경사항을 최소화하여 마이그레이션 합니다.
    ```

1. 이제 마이그레이션이 끝났습니다. 아래와 같은 프롬프트를 활용해서 다시 솔루션을 빌드하여 정상적으로 작동하는지 확인합니다.

    ```text
    방금 마이그레이션이 끝난 솔루션을 빌드해 주세요. 정상적으로 빌드할 수 있다면 성공한 것입니다. 정상적으로 빌드할 수 없다면 오류를 찾아 수정하세요.
    ```

1. 빌드 과정에서 오류가 생긴다면 아래와 같은 프롬프트를 활용해서 오류를 탐색한 후 직접 수정하도록 합니다.

    ```text
    빌드에 실패했습니다. 이유는 무엇이고 어떻게 수정할 수 있나요?
    ```

1. 빌드가 성공할 때 까지 위 과정을 반복합니다.

   > **돌발상황 발생시**
   > 
   > 빌드 과정에서 예측하지 못한 다양한 에러가 발생할 수 있습니다. 터미널에서 에러메시지를 확인해 보고 각 에러메시지에 대한 대응을 고려해 보세요. 이 때, 현재까지 변경한 내용을 우선 Keep 버튼을 클릭해서 임시 저장합니다.


1. 빌드가 성공적으로 끝났다면 아래와 같은 프롬프트를 활용해서 애플리케이션이 제대로 작동하는지 확인합니다.

    ```text
    Blazor 애플리케이션을 실행시켜 애플리케이션이 작동하는지 확인해 주세요.
    ```

### Java 앱 Containerization

1. 아래와 같은 프롬프트를 활용해서 Java 앱을 컨테이너 이미지로 생성합니다.

    ```text
    현재 complete/java 디렉토리에는 Spring Boot 애플리케이션이 있습니다. 이 애플리케이션을 Dockerfile를 활용해서 컨테이너 이미지를 만들어 주세요. Dockerfile은 리포지토리의 Root 디렉토리에 "Dockerfile.java"로 만들어져야 합니다.

    - Microsoft OpenJDK를 이용합니다.
    - JDK 버전은 21입니다.
    - Dockerfile의 내용은 반드시 Multi-stage 빌드를 활용해야 합니다.
    - JRE는 JDK 이미지로부터 추출합니다.
    - 컨테이너의 Target Port 값은 8080이 되어야 합니다.
    ```

1. Dockerfile 생성이 끝났으면 아래와 같은 프롬프트를 활용해서 컨테이너 이미지 빌드를 해 봅니다.

    ```text
    방금 생성한 "Dockerfile.java"를 이용해 컨테이너 이미지를 생성해 주세요.
    ```

1. 컨테이너 이미지를 성공적으로 생성했다면 아래와 같은 프롬프트를 활용해서 애플리케이션이 제대로 작동하는지 확인합니다.

    ```text
    방금 생성한 컨테이너 이미지를 이용해 컨테이너를 실행시켜 실제로 애플리케이션이 작동하는지 확인해 주세요. 아래 조건을 따라야 합니다.

    - 컨테이너의 Host Port 값은 5050이 되어야 합니다.
    - 필요한 경우 호스트의 경로를 볼륨 마운트하세요.
    - 데이터베이스의 볼륨 마운트 경로는 complete/java/demo/sns.db 입니다.
    ```

### Blazor 앱 Containerization

1. 아래와 같은 프롬프트를 활용해서 .NET 앱을 컨테이너 이미지로 생성합니다.

    ```text
    현재 complete/dotnet 디렉토리에는 Blazor 애플리케이션이 있습니다. 이 애플리케이션을 Dockerfile를 활용해서 컨테이너 이미지를 만들어 주세요. Dockerfile은 리포지토리의 Root 디렉토리에 "Dockerfile.dotnet"으로 만들어져야 합니다.

    - .NET 9 버전을 사용합니다.
    - Dockerfile의 내용은 반드시 Multi-stage 빌드를 활용해야 합니다.
    - 컨테이너의 Target Port 값은 8080이 되어야 합니다.
    ```

1. Dockerfile 생성이 끝났으면 아래와 같은 프롬프트를 활용해서 컨테이너 이미지 빌드를 해 봅니다.

    ```text
    방금 생성한 "Dockerfile.dotnet"을 이용해 컨테이너 이미지를 생성해 주세요.
    ```

1. 컨테이너 이미지를 성공적으로 생성했다면 아래와 같은 프롬프트를 활용해서 애플리케이션이 제대로 작동하는지 확인합니다.

    ```text
    방금 생성한 컨테이너 이미지를 이용해 컨테이너를 실행시켜 실제로 애플리케이션이 작동하는지 확인해 주세요. 아래 조건을 따라야 합니다.

    - 컨테이너의 Host Port 값은 3000이 되어야 합니다.
    ```

1. 실제로 앱을 실행시켜보면 앱이 제대로 동작하지 않는 것을 확인합니다. 이는 프론트엔드 컨테이너와 백엔드 컨테이너간 커뮤니케이션을 하지 못하기 때문인데요, 이를 위해서는 컨테이너 오케스트레이션이 필요합니다. 다음 단계로 진행하기 앞서 기존 동작중인 컨테이너를 삭제합니다.

    ```text
    현재 만들어진 모든 컨테이너를 작동여부와 상관없이 삭제해 주세요.
    ```

### Container 오케스트레이션

1. 아래와 같은 프롬프트를 활용해서 앞서 생성한 Dockerfile 두 개를 가지고 컨테이너 오케스트레이션을 위한 Docker Compose 파일을 생성합니다.

    ```text
    현재 리포지토리의 Root 디렉토리에 두 개의 Dockerfile이 있습니다. 하나는 "Dockerfile.java", 다른 하나는 "Dockerfile.dotnet"입니다. 이 두 컨테이너를 오케스트레이션하는 Docker Compose 파일을 생성해 주세요.

    - Docker Compose 파일은 리포지토리의 Root 디렉토리에 "docker-compose.yaml"으로 만들어져야 합니다.
    - 네트워크 이름은 contoso 입니다.
    - Java 앱의 컨테이너 이름은 contoso-java 입니다. Target Port는 8080이고 Host Port는 5050입니다.
    - Java 앱에서 이용하는 데이터베이스의 볼륨 마운트 경로는 complete/java/demo/sns.db 입니다.
    - .NET 앱의 컨테이너 이름은 contoso-dotnet 입니다. Target Port는 8080이고 Host Port는 3000입니다.
    ```

1. 아래와 같은 형태로 프롬프트를 작성하여 애플리케이션을 실행시킵니다.

    ```text
    이제 만들어진 Docker Compose 파일을 실행시켜 웹 애플리케이션이 작동하는지 확인해 주세요.
    ```

---

축하합니다! GitHub Copilot Bootcamp의 모든 실습을 끝냈습니다!
