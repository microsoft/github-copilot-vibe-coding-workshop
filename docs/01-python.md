# 01: Python

## 시나리오

Contoso 아웃도어 컴파니의 마케팅 팀에서는 제품 홍보를 위한 마이크로 소셜 미디어 웹사이트를 빠르게 론칭하고 싶어 합니다. 개발팀의 Python 개발자인 당신은 GitHub Codespaces 안에서 GitHub Copilot을 이용해 간단한 백엔드 API를 만들어 달라는 요청을 받았습니다. 이에 따라 FastAPI를 사용하여 SNS 기능을 구현하고, 간단히 SQLite 데이터베이스를 연동해 CRUD를 수행하려고 합니다.

## 사전 준비사항

[README](../README.md) 문서를 참조하여 개발 환경을 준비합니다.

## 순서

- [개발 과정 프롬프트](#개발-과정-프롬프트)
  - [FastAPI 앱 프로젝트 준비](#fastapi-앱-프로젝트-준비)
  - [CRUD API 구현](#crud-api-구현)
  - [가상환경으로 앱 실행](#가상환경으로-앱-실행)
  - [API 확인](#api-확인)
  - [기본 데이터베이스 테이블 생성](#기본-데이터베이스-테이블-생성)
- [서비스 종료](#서비스-종료)

## 개발 과정 프롬프트

아래는 FastAPI 앱을 개발하여 간단한 SNS 기능을 구현하는 과정입니다.

- FastAPI 앱 프로젝트 준비
- CRUD API 구현
- 가상환경으로 앱 실행
- API 확인
- 기본 데이터베이스 테이블 생성

### FastAPI 앱 프로젝트 준비

1. 가상환경 생성

   Python 프로젝트 디렉토리를 생성하고, 다음 명령어로 가상환경(venv)을 만듭니다:

    ```bash
    python -m venv .venv
    ```

1. 가상환경 활성화 및 FastAPI 설치

   **Windows**

    ```pwsh
    .venv/Scripts/activate
    ```

   **MacOS**, **Linux** 또는 **GitHub Codespaces**

    ```bash
    source .venv/bin/activate
    ```

    ```bash
    pip install fastapi uvicorn
    ```

1. main.py 빈 파일 생성

### CRUD API 구현

FastAPI를 활용하여 소셜 네트워크 서비스의 모든 핵심 기능을 REST API로 구현합니다.

```text
FastAPI를 사용하여 openapi.yaml 명세를 기반으로 소셜 네트워크 서비스의 백엔드 API를 구현해. openapi.yaml의 정의에 따라 포스트, 댓글, 좋아요 기능을 포함하는 모든 엔드포인트를 구현한다. 명세에 맞게 적절한 HTTP 메소드, 상태 코드, 요청/응답 형식을 구현하낟. Pydantic 모델을 사용하여 데이터 검증을 구현하고, 예외 처리도 포함해주세요. 데이터는 데이터베이스 없이 간단한 메모리로 관리한다. main.py 파일 하나에 모두 구현한다.
```

### 가상환경으로 앱 실행

```bash
source .venv/bin/activate
```

```bash
uvicorn python.main:app --reload
```

### API 확인

브라우저에서 http://127.0.0.1:8000/docs 접속

### 기본 데이터베이스 테이블 생성

애플리케이션에 필요한 데이터를 저장할 SQLite 데이터베이스 스키마를 구성합니다.

```text
SQLite 데이터베이스를 사용하여 openapi.yaml 명세를 참고하여 현재 정의된 API를 구현한다. 애플리케이션 시작 시 자동으로 데이터베이스와 테이블을 생성하는 코드를 구현하되, 테이블이 이미 존재하는 경우 다시 생성하지 않도록 'CREATE TABLE IF NOT EXISTS' 구문을 사용하세요. 
```

서버를 재시작한 후에도 SQLite 데이터베이스에 저장된 포스트 데이터가 유지되는지 확인합니다.

## 서비스 종료

FastAPI 서버 등 현재 실행 중인 백엔드 서비스를 종료하려면, 터미널에서 **Ctrl + C**를 누르세요.  
이렇게 하면 서버가 정상적으로 종료되어 포트(예: 8000번)를 다른 백엔드 서비스가 사용할 수 있습니다.

만약 서버가 백그라운드에서 실행 중이거나 포트가 여전히 점유 중이라면, 아래 명령어로 프로세스를 확인하고 종료할 수 있습니다.

```bash
lsof -i :8000
kill <PID>
```

lsof 명령어를 수행하면 아래처럼 나옵니다. "--reload" 옵션으로 서비스를 띄웠기 때문에 코드 변경을 감시하는 서버가 하나 더 띄워져서 두 개가 나옵니다. 

```bash
(base) tykimos@MacBook-Air-2 crewai % lsof -i :8000
COMMAND   PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
Python  12707 tykimos    3u  IPv4 0x9fddcce1c1588271      0t0  TCP localhost:irdmi (LISTEN)
Python  12710 tykimos    3u  IPv4 0x9fddcce1c1588271      0t0  TCP localhost:irdmi (LISTEN)
```

이 경우 코드 변경 감시 서버만 종료하면 되지만 확인이 힘들다면 둘 다 종료시킵니다.

```bash
kill 12707
kill 12710
```

그럼 다른 백엔드 서비스를 동일한 포트에서 실행할 수 있습니다.
