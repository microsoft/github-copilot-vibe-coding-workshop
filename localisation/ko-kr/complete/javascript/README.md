# JavaScript 앱 샘플

## 전제 조건

준비를 위해 [README](../../README.md) 문서를 참조하세요.

## 시작하기

### FastAPI 백엔드 실행

[Python 앱 샘플](../python/)을 사용하세요.

> **참고**: GitHub Codespaces를 사용하는 경우, Python 앱 포트 `8000`이 **public**으로 설정되어 있는지 확인하세요.

### React 프론트엔드 실행

1. 저장소 루트를 가져오세요.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. npm 패키지를 설치하세요.

    ```bash
    cd $REPOSITORY_ROOT/complete/javascript
    npm install
    ```

1. 앱을 실행하세요.

    ```bash
    npm run dev
    ```

1. 웹 브라우저를 열고 `http://localhost:3000`으로 이동하세요.
1. 웹 애플리케이션이 제대로 실행되는지 확인하세요.

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
