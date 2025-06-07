# 완성된 앱 샘플

완성된 앱 샘플 목록입니다. 이들도 바이브 코딩으로 만들어졌기 때문에, 어떻게 구축되었는지 확인할 수 있습니다.

| 애플리케이션 | 위치                        |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## 컨테이너화 샘플

### 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

### 시작하기

1. Docker가 실행 중인지 확인하세요.

    ```bash
    docker info
    ```

1. 저장소 루트를 가져오세요.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. `complete` 디렉터리로 이동하세요.

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. 컨테이너화된 앱을 실행하세요.

    ```bash
    docker compose up --build -d
    ```

1. 웹 브라우저를 열고 `http://localhost:3030`으로 이동하세요.
1. 웹 애플리케이션이 제대로 실행되는지 확인하세요.
1. 다음 명령을 실행하여 컨테이너화된 앱을 제거하고 정리하세요.

    ```bash
    docker compose down --rmi all
    ```

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
