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
    I'd like to build a container image of a Java app. Follow the instructions below.

    - The Java app is located at `java`.
    - Your working directory is the repository root.
    - Identify all the steps first, which you're going to do.
    - Create a Dockerfile, `Dockerfile.java`.
    - Use Microsoft OpenJDK 21.
    - Use multi-stage build approach.
    - Extract JRE from JDK.
    - Use the target port number of `8080` for the container image.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `Dockerfile.java`가 생성되면, 다음 프롬프트로 컨테이너 이미지를 빌드하세요.

    ```text
    Use `Dockerfile.java` and build a container image.

    - Use `contoso-backend` as the container image name.
    - Use `latest` as the container image tag.
    - Verify if the container image is built properly.
    - If the build fails, analyze the issues and fix them.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. 빌드가 성공하면, 다음 프롬프트로 컨테이너 이미지를 실행하세요.

    ```text
    Use the container image just built, run a container and verify if the app is running properly.
    
    - Use the host port of `8080`.
    ```

### .NET 애플리케이션 컨테이너화

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 .NET 앱의 컨테이너 이미지를 빌드하세요.

    ```text
    I'd like to build a container image of a .NET app. Follow the instructions below.

    - The .NET app is located at `dotnet`.
    - Your working directory is the repository root.
    - Identify all the steps first, which you're going to do.
    - Create a Dockerfile, `Dockerfile.dotnet`.
    - Use .NET 9.
    - Use multi-stage build approach.
    - Use the target port number of `8080` for the container image.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `Dockerfile.dotnet`이 생성되면, 다음 프롬프트로 컨테이너 이미지를 빌드하세요.

    ```text
    Use `Dockerfile.dotnet` and build a container image.

    - Use `contoso-frontend` as the container image name.
    - Use `latest` as the container image tag.
    - Verify if the container image is built properly.
    - If the build fails, analyze the issues and fix them.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. 빌드가 성공하면, 다음 프롬프트로 컨테이너 이미지를 실행하세요.

    ```text
    Use the container image just built, run a container and verify if the app is running properly.
    
    - Use the host port of `3030`.
    ```

1. 프론트엔드와 백엔드 앱이 서로를 알지 못하므로 아직 통신하지 않는지 확인하세요. 아래와 같은 프롬프트를 실행하세요.

    ```text
    Regardless or not, remove both containers currently running.
    ```

### 컨테이너 오케스트레이션

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 Docker Compose 파일을 빌드하세요.

    ```text
    I'd like to create a Docker Compose file. Follow the instructions below.
    
    - Your working directory is the repository root.
    - Use `Dockerfile.java` as a backend app.
    - Use `Dockerfile.dotnet` as a frontend app.
    - Create `compose.yaml` as the Docker Compose file.
    - Use `contoso` as the network name.
    - Use `contoso-backend` as the container name of the Java app. Its target port is 8080, and host port is 8080.
    - Use `contoso-frontend` as the container name of the .NET app. Its target port is 8080, and host port is 3030.
    - Mount the volume for the database that the Java app uses, `java/socialapp/sns_api.db`.
    ```

1. GitHub Copilot의 ![the keep button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

1. `compose.yaml` 파일이 생성되면, 실행하고 두 앱이 모두 제대로 실행되는지 확인하세요.

    ```text
    Now, run the Docker compose file and verify if the apps are running properly.
    ```

1. 웹 브라우저를 열고 `http://localhost:3030`으로 이동하여, 앱이 제대로 실행되고 있는지 확인하세요.

---

축하합니다! 🎉 모든 워크샵 세션을 성공적으로 완료했습니다!