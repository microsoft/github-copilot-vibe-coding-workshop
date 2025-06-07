# Java 앱 샘플

게시물, 댓글, 좋아요에 대한 완전한 CRUD 작업을 제공하는 소셜 미디어 플랫폼용 포괄적인 Spring Boot REST API 애플리케이션입니다.

## 프로젝트 개요

다음 사양으로 구축된 프로덕션 준비가 완료된 Spring Boot 애플리케이션입니다:

- **패키지 명**: `com.contoso.socialapp`
- **Artifact ID**: `socialapp`
- **Group ID**: `com.contoso`
- **패키지 타입**: `jar`
- **Java 버전**: OpenJDK 21
- **빌드 도구**: Gradle
- **데이터베이스**: SQLite (내장형)
- **포트**: 8080

### 프로젝트 종속성

- **Spring Boot 3.2.5**: 코어 프레임워크
- **Spring Web**: RESTful API 엔드포인트
- **Spring Data JPA**: 데이터베이스 작업
- **Spring Boot Actuator**: 애플리케이션 모니터링
- **Spring Boot Validation**: 입력 검증
- **SQLite**: 내장형 데이터베이스
- **Hibernate Community Dialects**: SQLite 지원
- **Springdoc OpenAPI**: API 문서화 (Swagger UI)
- **Lombok**: 보일러플레이트 코드 감소

### 프로젝트 구조

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # 메인 애플리케이션 클래스
│   │               ├── config/
│   │               │   ├── WebConfig.java            # CORS 구성
│   │               │   └── OpenApiConfig.java        # Swagger/OpenAPI 구성
│   │               ├── controller/
│   │               │   ├── HealthController.java     # 상태 엔드포인트
│   │               │   ├── PostController.java       # 게시물 관리
│   │               │   └── CommentController.java    # 댓글 및 좋아요 관리
│   │               ├── model/
│   │               │   ├── Post.java                 # 게시물 엔티티
│   │               │   ├── Comment.java              # 댓글 엔티티
│   │               │   ├── Like.java                 # 좋아요 엔티티
│   │               │   └── dto/                      # 데이터 전송 객체
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # 게시물 데이터 액세스
│   │               │   ├── CommentRepository.java    # 댓글 데이터 액세스
│   │               │   └── LikeRepository.java       # 좋아요 데이터 액세스
│   │               └── service/
│   │                   ├── PostService.java          # 게시물 비즈니스 로직
│   │                   └── CommentService.java       # 댓글 비즈니스 로직
│   └── resources/
│       ├── application.properties                    # 애플리케이션 구성
│       └── data.sql                                  # 샘플 데이터 (선택사항)
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # 통합 테스트
```

## 기능

- ✅ 소셜 미디어 작업을 위한 완전한 RESTful API
- ✅ 게시물 관리 (생성, 읽기, 업데이트, 삭제)
- ✅ 완전한 CRUD 작업을 포함한 댓글 시스템
- ✅ 좋아요/취소 기능
- ✅ JPA/Hibernate를 사용한 SQLite 데이터베이스
- ✅ OpenAPI/Swagger 문서화
- ✅ localhost 및 GitHub Codespaces용 CORS 활성화
- ✅ 동적 서버 URL 구성
- ✅ 상태 확인 엔드포인트
- ✅ Spring Boot Actuator 통합
- ✅ 포괄적인 오류 처리
- ✅ Bean Validation을 사용한 입력 검증

## 빠른 시작

### 전제 조건

준비를 위해 [README](../../README.md) 문서를 참조하세요.

### 1. 환경 설정

먼저 `$REPOSITORY_ROOT` 환경 변수를 설정하세요.

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

그런 다음 java 디렉터리로 이동하세요.

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. 애플리케이션 빌드

```bash
# gradlew를 실행 가능하게 만들기 (필요한 경우)
chmod +x ./gradlew

# 프로젝트 빌드
./gradlew build
```

### 3. 애플리케이션 실행

```bash
# Gradle을 사용하여 애플리케이션 시작
./gradlew bootRun

# 대안: JAR 파일을 직접 실행
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. 애플리케이션 실행 확인

```bash
# 상태 엔드포인트 확인
curl http://localhost:8080/api/health

# 예상 응답: {"status":"healthy"}
```

### 5. API 문서 액세스

브라우저를 열고 다음으로 이동하세요:

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## API 엔드포인트

### 상태 및 환영

- `GET /api/health` - 커스텀 상태 확인 엔드포인트
- `GET /api/welcome` - 환영 메시지 엔드포인트

### 게시물 관리

- `GET /api/posts` - 모든 게시물 가져오기
- `GET /api/posts/{id}` - ID로 특정 게시물 가져오기
- `POST /api/posts` - 새 게시물 생성
- `PATCH /api/posts/{id}` - 기존 게시물 업데이트
- `DELETE /api/posts/{id}` - 게시물 삭제

### 댓글 관리

- `GET /api/posts/{postId}/comments` - 게시물의 모든 댓글 가져오기
- `GET /api/posts/{postId}/comments/{commentId}` - 특정 댓글 가져오기
- `POST /api/posts/{postId}/comments` - 게시물에 댓글 추가
- `PATCH /api/posts/{postId}/comments/{commentId}` - 댓글 업데이트
- `DELETE /api/posts/{postId}/comments/{commentId}` - 댓글 삭제

### 좋아요 관리

- `POST /api/posts/{postId}/like` - 게시물 좋아요
- `DELETE /api/posts/{postId}/like` - 게시물 좋아요 취소

### Spring Boot Actuator

- `GET /actuator/health` - Spring Boot 상태 지표
- `GET /actuator/info` - 애플리케이션 정보

## API 테스트

### cURL 예제 사용

#### 게시물 생성

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!",
    "authorName": "John Doe"
  }'
```

#### 모든 게시물 가져오기

```bash
curl http://localhost:8080/api/posts
```

#### 댓글 추가

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Great post!",
    "authorName": "Jane Smith"
  }'
```

#### 게시물 좋아요

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "john_doe"
  }'
```

### Swagger UI 사용

1. [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) 열기
2. 사용 가능한 엔드포인트 탐색
3. 임의의 엔드포인트에서 "Try it out" 클릭
4. 매개변수를 입력하고 "Execute" 클릭

## 개발

### 테스트 실행

```bash
# 모든 테스트 실행
./gradlew test

# 커버리지 리포트와 함께 실행
./gradlew test jacocoTestReport

# 특정 테스트 클래스 실행
./gradlew test --tests "SocialAppApplicationTests"
```

### 데이터베이스

애플리케이션은 SQLite를 내장형 데이터베이스로 사용합니다:

- **데이터베이스 파일**: `sns_api.db` (자동 생성)
- **위치**: 프로젝트 루트 디렉터리
- **스키마**: Hibernate에 의해 자동 생성
- **샘플 데이터**: `data.sql`에서 로드 (있는 경우)

데이터베이스를 재설정하려면 `sns_api.db` 파일을 삭제하고 애플리케이션을 다시 시작하세요.

## 구성

### 애플리케이션 속성

`application.properties`의 주요 구성 설정:

```properties
# 애플리케이션 설정
spring.application.name=socialapp
server.port=8080

# 데이터베이스 구성
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# OpenAPI/Swagger 구성
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### CORS 구성

애플리케이션은 localhost와 GitHub Codespaces를 모두 지원합니다:

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: 자동 감지되고 동적으로 구성됨

### 환경 감지

애플리케이션은 런타임 환경을 자동으로 감지합니다:

- **로컬 개발**: `http://localhost:8080` 사용
- **GitHub Codespaces**: `https://{codespace-name}-8080.{domain}` 사용

## 배포

### 프로덕션용 빌드

```bash
# 프로덕션 JAR 생성
./gradlew clean build

# JAR 위치
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 프로덕션에서 실행

```bash
# 프로덕션 프로필로 실행
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# 또는 커스텀 포트로
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## 문제 해결

### 일반적인 문제

#### 포트 이미 사용 중

```bash
# 8080 포트를 사용하는 프로세스 찾기
lsof -i :8080

# 프로세스 종료 (PID 교체)
kill -9 <PID>

# 또는 다른 포트 사용
./gradlew bootRun --args='--server.port=8081'
```

#### 빌드 실패

```bash
# 정리 후 재빌드
./gradlew clean build

# Gradle wrapper 업데이트
./gradlew wrapper --gradle-version=8.5
```

#### 데이터베이스 문제

```bash
# 데이터베이스 재설정
rm sns_api.db
./gradlew bootRun
```

### 로그 및 모니터링

- **애플리케이션 로그**: `./gradlew bootRun` 실행 시 콘솔 출력
- **상태 확인**: `GET /actuator/health`
- **애플리케이션 정보**: `GET /actuator/info`

## 보안 고려사항

⚠️ **개발 구성**: 현재 설정은 다음과 같은 개발용으로 최적화되어 있습니다:

- 모든 출처에 대해 CORS 활성화
- SQLite 데이터베이스 (프로덕션 규모에는 적합하지 않음)
- 인증/권한 부여 없음

프로덕션 배포를 위해서는 다음을 고려하세요:

- 특정 도메인으로 CORS 제한
- SQLite 대신 PostgreSQL/MySQL 사용
- 인증을 위한 Spring Security 구현
- 속도 제한 및 입력 정화 추가
- HTTPS/TLS 암호화 사용

---

**면책조항**: 이 문서는 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot)에 의해 현지화되었습니다. 따라서 실수가 포함될 수 있습니다. 부적절하거나 잘못된 번역을 발견하면 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)를 생성해 주세요.
