# 05: 컨테이너화

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

이제 Java 기반 백엔드 앱과 .NET 기반 프론트엔드 앱을 모두 가지고 있습니다. 이들은 모든 플랫폼에 배포할 수 있도록 컨테이너화하고 싶어합니다.

이제 DevOps 엔지니어로서, 두 앱을 모두 컨테이너화해야 합니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [Java 애플리케이션 컨테이너화](#java-애플리케이션-컨테이너화)
- [.NET 애플리케이션 컨테이너화](#net-애플리케이션-컨테이너화)
- [컨테이너 오케스트레이션](#컨테이너-오케스트레이션)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Java 애플리케이션 컨테이너화

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 Java 앱의 컨테이너 이미지를 빌드하세요.

    ```text
    Java 앱의 컨테이너 이미지를 빌드하고 싶습니다. 아래 지침을 따르세요.

    - 먼저 수행할 모든 단계를 식별하세요.
    - Java 앱은 `java/socialapp`에 위치합니다.
    - 작업 디렉토리는 저장소 루트입니다.
    - `Dockerfile.java` Dockerfile을 생성하세요.
    - Microsoft OpenJDK 21을 사용하세요.
    - 멀티 스테이지 빌드 방식을 사용하세요.
    - JDK에서 JRE를 추출하세요.
    - 컨테이너 이미지의 대상 포트 번호로 `8080`을 사용하세요.
    - 호스트에서 컨테이너 이미지로 환경 변수 `CODESPACE_NAME`과 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` 모두를 추가하세요.
    - 컨테이너 이미지에 SQLite 데이터베이스 파일 `sns_api.db`를 생성하세요. 호스트에서 파일을 복사하지 마세요.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `Dockerfile.java`가 생성되면, 다음 프롬프트로 컨테이너 이미지를 빌드하세요.

    ```text
    `Dockerfile.java`를 사용하여 컨테이너 이미지를 빌드하세요.

    - 컨테이너 이미지 이름으로 `contoso-backend`를 사용하세요.
    - 컨테이너 이미지 태그로 `latest`를 사용하세요.
    - 컨테이너 이미지가 제대로 빌드되는지 확인하세요.
    - 빌드가 실패하면 문제를 분석하고 수정하세요.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. 빌드가 성공하면, 다음 프롬프트로 컨테이너 이미지를 실행하세요.

    ```text
    방금 빌드한 컨테이너 이미지를 사용하여 컨테이너를 실행하고 앱이 제대로 실행되는지 확인하세요.
    
    - 호스트 포트로 `8080`을 사용하세요.
    - `CODESPACE_NAME`과 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` 값 모두 GitHub Codespaces의 값이어야 합니다.
    ```

### .NET 애플리케이션 컨테이너화

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 .NET 앱의 컨테이너 이미지를 빌드하세요.

    ```text
    .NET 앱의 컨테이너 이미지를 빌드하고 싶습니다. 아래 지침을 따르세요.

    - 먼저 수행할 모든 단계를 식별하세요.
    - .NET 앱은 `dotnet`에 위치합니다.
    - 작업 디렉토리는 저장소 루트입니다.
    - `Dockerfile.dotnet` Dockerfile을 생성하세요.
    - .NET 9를 사용하세요.
    - 멀티 스테이지 빌드 방식을 사용하세요.
    - 컨테이너 이미지의 대상 포트 번호로 `8080`을 사용하세요.
    - 컨테이너에 환경 변수 `ApiSettings__BaseUrl`을 추가하세요. 이는 Java 앱 `http://localhost:8080/api`를 가리켜야 합니다.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `Dockerfile.dotnet`이 생성되면, 다음 프롬프트로 컨테이너 이미지를 빌드하세요.

    ```text
    `Dockerfile.dotnet`을 사용하여 컨테이너 이미지를 빌드하세요.

    - 컨테이너 이미지 이름으로 `contoso-frontend`를 사용하세요.
    - 컨테이너 이미지 태그로 `latest`를 사용하세요.
    - 컨테이너 이미지가 제대로 빌드되는지 확인하세요.
    - 빌드가 실패하면 문제를 분석하고 수정하세요.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. 빌드가 성공하면, 다음 프롬프트로 컨테이너 이미지를 실행하세요.

    ```text
    방금 빌드한 컨테이너 이미지를 사용하여 컨테이너를 실행하고 앱이 제대로 실행되는지 확인하세요.
    
    - 호스트 포트로 `3030`을 사용하세요.
    - 환경 변수 `ApiSettings__BaseUrl`에 `http://localhost:8080/api` 값을 전달하세요.
    ```

1. 프론트엔드와 백엔드 앱이 서로를 알지 못하므로 아직 통신하지 않는지 확인하세요. 아래와 같은 프롬프트를 실행하세요.

    ```text
    Java와 .NET 컨테이너 모두와 각각의 컨테이너 이미지를 제거하세요.
    ```

### 컨테이너 오케스트레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 Docker Compose 파일을 빌드하세요.

    ```text
    Docker Compose 파일을 생성하고 싶습니다. 아래 지침을 따르세요.
    
    - 먼저 수행할 모든 단계를 식별하세요.
    - 작업 디렉토리는 저장소 루트입니다.
    - 백엔드 앱으로 `Dockerfile.java`를 사용하세요.
    - 프론트엔드 앱으로 `Dockerfile.dotnet`을 사용하세요.
    - Docker Compose 파일로 `compose.yaml`을 생성하세요.
    - 네트워크 이름으로 `contoso`를 사용하세요.
    - Java 앱의 컨테이너 이름으로 `contoso-backend`를 사용하세요. 대상 포트는 8080이고 호스트 포트는 8080입니다.
    - .NET 앱의 컨테이너 이름으로 `contoso-frontend`를 사용하세요. 대상 포트는 8080이고 호스트 포트는 3030입니다.
    - 호스트에서 Java 컨테이너로 환경 변수 `CODESPACE_NAME`과 `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` 모두를 추가하세요.
    - .NET 컨테이너에 환경 변수 `ApiSettings__BaseUrl`을 추가하세요. 이는 Java 앱의 `/api`를 가리켜야 합니다.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `compose.yaml` 파일이 생성되면, 실행하고 두 앱이 모두 제대로 실행되는지 확인하세요.

    ```text
    Docker compose 파일을 실행하고 모든 앱들이 제대로 실행되는지 확인하세요.
    ```

1. 웹 브라우저를 열고 `http://localhost:3030`으로 이동하여, 앱이 제대로 실행되고 있는지 확인하세요.

---

축하합니다! 🎉 모든 워크샵 세션을 성공적으로 완료했습니다!

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
