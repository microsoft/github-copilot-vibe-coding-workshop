# 00: 개발 환경

이 단계에서는 워크샵을 위한 개발 환경을 설정합니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Codespaces 사용](#github-codespaces-사용)
- [Visual Studio Code 사용](#visual-studio-code-사용)
  - [PowerShell 설치 👉 Windows 사용자용](#powershell-설치--windows-사용자용)
  - [git CLI 설치](#git-cli-설치)
  - [GitHub CLI 설치](#github-cli-설치)
  - [Docker Desktop 설치](#docker-desktop-설치)
  - [Visual Studio Code 설치](#visual-studio-code-설치)
  - [Visual Studio Code 시작](#visual-studio-code-시작)
  - [MCP 서버 설정](#mcp-서버-설정)
- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [비스트 모드 구성](#비스트-모드-구성)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [제품 요구사항 문서(PRD) 분석 및 API 설계](#제품-요구사항-문서prd-분석-및-api-설계)

## GitHub Codespaces 사용

1. 이 링크를 클릭하세요 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. GitHub Codespace 인스턴스가 준비되면, 터미널을 열고 다음 명령을 실행하여 필요한 모든 것이 제대로 설치되었는지 확인하세요.

    ```bash
    # Python
    python --version
    ```

    ```bash
    # Node.js
    node --version
    npm --version

    ```

    ```bash
    # JDK
    java --version
    ```

    ```bash
    # .NET SDK
    dotnet --list-sdks
    ```

1. 저장소 상태를 확인하세요.

    ```bash
    git remote -v
    ```

   다음을 확인할 수 있어야 합니다.

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   위와 다른 것이 보이면 GitHub Codespace 인스턴스를 삭제하고 다시 생성하세요.

1. [MCP 서버 설정](#mcp-서버-설정) 섹션으로 이동하세요.

**👇👇👇 대신 로컬 머신에서 VS Code를 사용하고 싶다면 아래 지침을 따르세요. 아래 섹션은 GitHub Codespaces를 사용하는 사람들에게는 적용되지 않습니다. 👇👇👇**

## Visual Studio Code 사용

### PowerShell 설치 👉 Windows 사용자용

1. PowerShell이 이미 설치되어 있는지 확인하세요.

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   `pwsh`의 명령 경로가 보이지 않으면 PowerShell이 아직 설치되지 않았다는 의미입니다. [PowerShell 설치 페이지](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)를 방문하여 지침을 따르세요.

1. PowerShell 버전을 확인하세요.

    ```bash
    pwsh --version
    ```

   `7.5.0` 이상이 권장됩니다. 더 낮은 버전이라면 [PowerShell 설치 페이지](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)를 방문하여 지침을 따르세요.

### git CLI 설치

1. git CLI가 이미 설치되어 있는지 확인하세요.

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   `git`의 명령 경로가 보이지 않으면 git CLI가 아직 설치되지 않았다는 의미입니다. [git CLI 설치 페이지](https://git-scm.com/downloads)를 방문하여 지침을 따르세요.

1. git CLI 버전을 확인하세요.

    ```bash
    git --version
    ```

   `2.39.0` 이상이 권장됩니다. 더 낮은 버전이라면 [git CLI 설치 페이지](https://git-scm.com/downloads)를 방문하여 지침을 따르세요.

### GitHub CLI 설치

1. GitHub CLI가 이미 설치되어 있는지 확인하세요.

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   `gh`의 명령 경로가 보이지 않으면 GitHub CLI가 아직 설치되지 않았다는 의미입니다. [GitHub CLI 설치 페이지](https://cli.github.com/)를 방문하여 지침을 따르세요.

1. GitHub CLI 버전을 확인하세요.

    ```bash
    gh --version
    ```

   `2.65.0` 이상이 권장됩니다. 더 낮은 버전이라면 [GitHub CLI 설치 페이지](https://cli.github.com/)를 방문하여 지침을 따르세요.

1. GitHub에 로그인했는지 확인하세요.

    ```bash
    gh auth status
    ```

   아직 로그인하지 않았다면 `gh auth login`을 실행하고 로그인하세요.

### Docker Desktop 설치

1. Docker Desktop이 이미 설치되어 있는지 확인하세요.

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   `docker`의 명령 경로가 보이지 않으면 Docker Desktop이 아직 설치되지 않았다는 의미입니다. [Docker Desktop 설치 페이지](https://docs.docker.com/get-started/introduction/get-docker-desktop/)를 방문하여 지침을 따르세요.

1. Docker CLI 버전을 확인하세요.

    ```bash
    docker --version
    ```

   `28.0.4` 이상이 권장됩니다. 더 낮은 버전이라면 [Docker Desktop 설치 페이지](https://docs.docker.com/get-started/introduction/get-docker-desktop/)를 방문하여 지침을 따르세요.

### Visual Studio Code 설치

1. VS Code가 이미 설치되어 있는지 확인하세요.

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   `code`의 명령 경로가 보이지 않으면 VS Code가 아직 설치되지 않았다는 의미입니다. [Visual Studio Code 설치 페이지](https://code.visualstudio.com/)를 방문하여 지침을 따르세요.

1. VS Code 버전을 확인하세요.

    ```bash
    code --version
    ```

   `1.99.0` 이상이 권장됩니다. 더 낮은 버전이라면 [Visual Studio Code 설치 페이지](https://code.visualstudio.com/)를 방문하여 지침을 따르세요.

   > **참고**: `code` 명령을 실행할 수 없을 수 있습니다. 이 경우 설정을 위해 [이 문서](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)를 따르세요.

### Visual Studio Code 시작

1. 작업 디렉터리를 생성하세요.
1. 다음 명령을 실행하여 이 저장소를 포크하고 로컬 머신에 복제하세요.

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. 복제된 디렉터리로 이동하세요.

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. 터미널에서 VS Code를 실행하세요.

    ```bash
    code .
    ```

1. VS Code 내에서 새 터미널을 열고 다음 명령을 실행하여 저장소 상태를 확인하세요.

    ```bash
    git remote -v
    ```

   다음을 확인할 수 있어야 합니다. `origin`에 `microsoft`가 보이면 포크된 저장소에서 다시 복제해야 합니다.

    ```bash
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. 두 확장 프로그램이 모두 설치되어 있는지 확인하세요 &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)과 [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat).

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   아무것도 보이지 않으면 해당 확장 프로그램이 아직 설치되지 않았다는 의미입니다. 다음 명령을 실행하여 확장 프로그램을 설치하세요.

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### MCP 서버 설정

1. 로컬 머신에서 VS Code를 사용하는 경우 Docker Desktop이 실행 중인지 확인하세요.
1. `$REPOSITORY_ROOT` 환경 변수를 설정하세요.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. MCP 서버 설정을 복사하세요.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/.vscode/. \
          $REPOSITORY_ROOT/.vscode/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/* `
              -Destination $REPOSITORY_ROOT/.vscode/ -Recurse -Force
    ```

1. F1을 입력하거나 Windows에서 `Ctrl`+`Shift`+`P`, Mac OS에서 `Cmd`+`Shift`+`P`를 눌러 명령 팔레트를 열고 `MCP: List Servers`를 검색하세요.
1. `context7`을 선택한 다음 `Start Server`를 클릭하세요.
1. `awesome-copilot`을 선택한 다음 `Start Server`를 클릭하세요.

## GitHub Copilot 에이전트 모드 확인

1. GitHub Codespace 또는 VS Code 상단의 GitHub Copilot 아이콘을 클릭하고 GitHub Copilot 창을 여세요.

   ![Open GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. 로그인 또는 가입을 요청받으면 진행하세요. 무료입니다.
1. GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.

   ![GitHub Copilot Agent Mode](../../../docs/images/setup-03.png)

1. 모델을 `GPT-4.1` 또는 `Claude Sonnet 4` 중 하나로 선택하세요.

## 비스트 모드 구성

1. `/mcp.awesome-copilot.get_search_prompt`를 입력한 후 "beast mode"와 같은 키워드를 입력하세요

   비스트 채팅 모드 목록이 표시됩니다. `4.1 Beast Chat Mode`와 유사한 프롬프트를 입력하세요. 그러면 `.github/chatmodes` 디렉토리에 저장됩니다.

1. `Agent` 모드 대신 `4.1-Beast` 모드를 선택하세요. 자동으로 LLM이 `GPT 4.1`로 변경됩니다.

1. `$REPOSITORY_ROOT` 환경 변수를 설정하세요.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. 워크스페이스 설정을 복사하세요.

    ```bash
    # bash/zsh
    cp $REPOSITORY_ROOT/docs/.vscode/settings.json \
       $REPOSITORY_ROOT/.vscode/settings.json
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/settings.json `
              -Destination $REPOSITORY_ROOT/.vscode/settings.json -Force
    ```

## 커스텀 지시사항 준비

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/setup/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/setup/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

## 제품 요구사항 문서(PRD) 분석 및 API 설계

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. [`product-requirements.md`](../product-requirements.md)를 GitHub Copilot에 추가하세요.
1. GitHub Copilot 에이전트가 OpenAPI 문서를 생성하도록 다음과 같은 프롬프트를 입력하세요. 이 OpenAPI 문서는 전체 애플리케이션의 기반이 됩니다.

    ```text
    다음은 PRD입니다. PRD 전체를 주의 깊게 읽고 다음을 수행해 주세요.
    
    - 수행할 모든 단계를 먼저 식별합니다.
    - YAML 형식으로 OpenAPI 문서를 생성합니다.
    - OpenAPI 문서는 모든 API 엔드포인트, 매개변수 및 요청/응답 페이로드를 포함해야 합니다.
    - API 서버는 `http://localhost:8080`이고 기본 URL은 `/api`라고 가정합니다.
    - 저장소 루트의 `openapi.yaml` 파일에 저장합니다.
    ```

1. 저장소 루트에 `openapi.yaml`이 생성되었는지 확인하세요.
1. GitHub Copilot의 `[keep]` 버튼을 클릭하여 `openapi.yaml` 파일을 가져오세요.

---

좋습니다. "개발 환경" 단계를 완료했습니다. [STEP 01: Python 백엔드 개발](./01-python.md)로 이동하겠습니다.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
