# 02: JavaScript 프론트엔드 개발

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

JavaScript 개발자로서, Python 백엔드 API 앱과 통신하는 React를 사용하여 JavaScript 프론트엔드 앱을 구축할 것입니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [애플리케이션 프로젝트 준비](#애플리케이션-프로젝트-준비)
- [Figma MCP 서버 준비](#figma-mcp-서버-준비)
- [Figma에서 UI 컴포넌트 생성](#figma에서-ui-컴포넌트-생성)
- [FastAPI 백엔드 앱 실행](#fastapi-백엔드-앱-실행)
- [React 프론트엔드 앱 구축](#react-프론트엔드-앱-구축)
- [React 프론트엔드 앱 확인](#react-프론트엔드-앱-확인)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 애플리케이션 프로젝트 준비

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델로 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. 아래와 같은 프롬프트를 사용하여 React 웹 앱 프로젝트를 스캐폴드하세요.

    ```text
    React 웹 앱을 스캐폴드하고 싶습니다. 아래 지침을 따르세요.
    
    - 모바일 앱이 아닌 웹 앱인지 확인하세요.
    - 작업 디렉토리는 `javascript`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - 프론트엔드 앱 프레임워크로 ViteJS를 사용하세요.
    - 프로젝트 초기화 시 기본 설정을 사용하세요.
    - 초기화할 때 프로젝트 이름으로 `SimpleSocialMediaApplication`을 사용하세요.
    - 포트 번호는 `3000`을 사용하세요.
    - 프로젝트 초기화만 하세요. 더 이상 진행하지 마세요.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### Figma MCP 서버 준비

1. [MCP 서버](./00-setup.md#mcp-서버-설정)를 구성했는지 확인하세요.
1. [Figma](https://www.figma.com/)에서 개인 액세스 토큰(PAT)을 발급받으세요.
1. F1 또는 Windows에서 `Ctrl`+`Shift`+`P`, Mac OS에서 `Cmd`+`Shift`+`P`를 눌러 명령 팔레트를 열고 `MCP: List Servers`를 검색하세요.
1. `Framelink Figma MCP`를 선택한 후 `Start Server`를 클릭하세요.
1. Figma에서 발급받은 PAT를 입력하세요.

### Figma에서 UI 컴포넌트 생성

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델로 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. Figma MCP 서버가 실행 중인지 확인하세요.
1. [Figma 디자인 템플릿](https://www.figma.com/community/file/1495954632647006209)을 계정에 복사하세요.

   ![Figma design template page](../../../docs/images/javascript-01.png)

1. 각 섹션 - `Home`, `Search`, `Post Details`, `Post Modal`, `Name Input Modal`을 마우스 우클릭 👉 `Copy/Paste as` 선택 👉 `Copy link to selection` 선택하여 각 섹션의 링크를 가져오세요. 5개 링크를 모두 메모해 두세요.

### FastAPI 백엔드 앱 실행

1. FastAPI 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    `python` 디렉토리에 위치한 FastAPI 백엔드 API를 실행하세요.
    ```

   > **참고**: 대신 [`complete/python`](../complete/python/) 샘플 앱을 사용할 수도 있습니다.

1. GitHub Codespaces를 사용하는 경우, 포트 번호 `8000`이 `private` 대신 `public`으로 설정되어 있는지 확인하세요. 그렇지 않으면 프론트엔드 앱에서 접근할 때 `401` 오류가 발생합니다.

### React 프론트엔드 앱 구축

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델로 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. [이전 섹션](#figma에서-ui-컴포넌트-생성)에서 가져온 5개의 Figma 섹션 링크를 모두 보유하고 있는지 확인하세요.
1. [`product-requirements.md`](../product-requirements.md)와 [`openapi.yaml`](../openapi.yaml)를 GitHub Copilot에 추가하세요.
1. 요구사항과 OpenAPI 문서를 기반으로 애플리케이션을 구축하기 위해 아래와 같은 프롬프트를 사용하세요.

    ```text
    React 웹 앱을 구축하고 싶습니다. 아래 지침을 따르세요.
    
    - 작업 디렉토리는 `javascript`입니다.
    - 먼저 수행할 모든 단계를 식별하세요.
    - `http://localhost:8000`에서 실행 중인 백엔드 API 앱이 있습니다.
    - 모든 엔드포인트와 데이터 스키마를 설명하는 `openapi.yaml`을 사용하세요.
    - 포트 번호는 `3000`을 사용하세요.
    - 이 링크에 정의된 모든 UI 컴포넌트를 생성하세요: {{FIGMA_SECTION_LINK}}.
    - UI 컴포넌트와 관련이 없는 것은 추가하지 마세요.
    - `openapi.yaml`에 정의되지 않은 것은 추가하지 마세요.
    - `openapi.yaml`에 정의된 것을 수정하지 마세요.
    - 어떤 이유로든 백엔드 API를 사용할 수 없거나 연결할 수 없을 때 시각적 표시를 제공하세요.
    ```

1. 나머지 4개의 Figma 디자인 링크에 대해 4번 더 반복하세요.
1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

### React 프론트엔드 앱 확인

1. FastAPI 백엔드 앱이 실행 중인지 확인하세요.

    ```text
    `python` 디렉토리에 위치한 FastAPI 백엔드 API를 실행하세요.
    ```

1. 제대로 빌드되었는지 확인하세요.

    ```text
    React 앱을 실행하고 앱이 제대로 실행되는지 확인하세요.

    앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

1. 웹 브라우저를 열고 `http://localhost:3000`으로 이동하세요.
1. 프론트엔드와 백엔드 앱이 모두 제대로 실행되는지 확인하세요.
1. GitHub Copilot의 `[keep]` 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. "JavaScript" 단계를 완료했습니다. [STEP 03: Python에서 Java로 마이그레이션](./03-java.md)로 이동하겠습니다.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
