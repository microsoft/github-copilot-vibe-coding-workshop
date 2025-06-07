# 01: Python 백엔드 개발

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

Python 개발자로서, FastAPI를 사용하여 Python 백엔드 앱을 구축할 것입니다. 지금은 SQLite의 인메모리 기능을 사용합니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [가상 환경 준비](#가상-환경-준비)
- [FastAPI 백엔드 앱 구축](#fastapi-백엔드-앱-구축)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### 가상 환경 준비

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. Python 앱 개발을 위한 가상 환경을 준비하기 위해 아래와 같은 프롬프트를 사용하세요.

    ```text
    Python 애플리케이션을 작성하고 싶습니다. 하지만 그 전에 가상 환경을 설정해야 합니다. 아래 지침을 따르세요.
    
    - context7을 사용하세요.
    - 작업 디렉터리는 `python`입니다.
    - 수행할 모든 단계를 먼저 식별하세요.
    - 가상 환경으로 `.venv`를 사용하세요.
    - Python 패키지 관리자로 `uv`를 사용하세요.
    ```

### FastAPI 백엔드 앱 구축

1. `Claude Sonnet 4` 또는 `GPT-4.1` 모델과 함께 GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.
1. `context7` MCP 서버가 실행 중인지 확인하세요.
1. [`product-requirements.md`](../product-requirements.md)와 [`openapi.yaml`](../openapi.yaml)을 GitHub Copilot에 추가하세요.
1. FastAPI 백엔드 애플리케이션을 구축하기 위해 아래와 같은 프롬프트를 사용하세요.

    ```text
    백엔드 API로 FastAPI 애플리케이션을 구축하고 싶습니다. PRD와 `openapi.yaml` 전체를 주의 깊게 읽어보세요. 그런 다음 아래 지침을 따르세요.
    
    - context7을 사용하세요.
    - 작업 디렉터리는 `python`입니다.
    - 수행할 모든 단계를 먼저 식별하세요.
    - API 앱 프레임워크로 FastAPI를 사용하세요.
    - 데이터베이스로 SQLite를 사용하세요.
    - SQLite 데이터베이스 이름으로 `sns_api.db`를 사용하세요.
    - 앱을 시작할 때마다 데이터베이스가 항상 초기화되어야 합니다.
    - 모든 엔드포인트와 데이터 스키마를 설명하는 `openapi.yaml`을 사용하세요.
    - 포트 번호 `8000`을 사용하세요.
    - 모든 곳에서 CORS를 허용하도록 하세요.
    - 진입점은 `main.py`입니다.
    - API 애플리케이션은 기본 엔드포인트를 통해 Swagger UI 페이지를 렌더링해야 합니다.
    - API 애플리케이션은 기본 엔드포인트를 통해 정확히 동일한 OpenAPI 문서를 렌더링해야 합니다.
    - `openapi.yaml`에 정의되지 않은 것은 추가하지 마세요.
    - `openapi.yaml`에 정의된 것은 수정하지 마세요.
    ```

1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.
1. 애플리케이션이 구축되면 제대로 작성되었는지 확인하세요.

    ```text
    FastAPI 앱을 실행하고 앱이 제대로 실행되는지 확인하세요. 또한 OpenAPI 엔드포인트가 `openapi.yaml`과 정확히 동일한 내용을 렌더링하는지 확인하세요.

    앱 실행이 실패하면 문제를 분석하고 수정하세요.
    ```

1. 웹 브라우저를 열고 `http://localhost:8000`으로 이동하세요.
1. GitHub Copilot의 ![the "keep" button image](https://img.shields.io/badge/keep-blue) 버튼을 클릭하여 변경사항을 적용하세요.

---

좋습니다. "Python" 단계를 완료했습니다. [STEP 02: JavaScript 프론트엔드 개발](./02-javascript.md)로 이동하겠습니다.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
