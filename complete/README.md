# Complete App Samples

Here are the list of complete app samples. Because they are also vibe-coded, you can check out how they're built.

| Application | Location                    |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## Containerization Sample

### Prerequisites

Refer to the [README](../README.md) doc for preparation.

### Getting Started

1. Make sure that Docker Desktop is running.

    ```bash
    docker info
    ```

1. Run the containerized apps.

    ```bash
    docker compose up -d
    ```

1. Open a web browser and navigate to `http://localhost:3000`.
1. Verify if the web application is running properly.
1. 아래 명령어를 실행시켜 컨테이너 앱을 삭제합니다.

    ```bash
    docker compose down --rmi all
    ```
