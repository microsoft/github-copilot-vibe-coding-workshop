# Java 应用示例

一个全面的 Spring Boot REST API 应用程序，用于社交媒体平台，提供帖子、评论和点赞的完整 CRUD 操作。

## 项目概述

这是一个生产就绪的 Spring Boot 应用程序，具有以下规范：

- **包名**: `com.contoso.socialapp`
- **Artifact ID**: `socialapp`
- **Group ID**: `com.contoso`
- **包类型**: `jar`
- **Java 版本**: OpenJDK 21
- **构建工具**: Gradle
- **数据库**: SQLite（嵌入式）
- **端口**: 8080

### 项目依赖

- **Spring Boot 3.2.5**: 核心框架
- **Spring Web**: RESTful API 端点
- **Spring Data JPA**: 数据库操作
- **Spring Boot Actuator**: 应用程序监控
- **Spring Boot Validation**: 输入验证
- **SQLite**: 嵌入式数据库
- **Hibernate Community Dialects**: SQLite 支持
- **Springdoc OpenAPI**: API 文档（Swagger UI）
- **Lombok**: 样板代码减少

### 项目结构

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # 主应用程序类
│   │               ├── config/
│   │               │   ├── WebConfig.java            # CORS 配置
│   │               │   └── OpenApiConfig.java        # Swagger/OpenAPI 配置
│   │               ├── controller/
│   │               │   ├── HealthController.java     # 健康端点
│   │               │   ├── PostController.java       # 帖子管理
│   │               │   └── CommentController.java    # 评论和点赞管理
│   │               ├── model/
│   │               │   ├── Post.java                 # 帖子实体
│   │               │   ├── Comment.java              # 评论实体
│   │               │   ├── Like.java                 # 点赞实体
│   │               │   └── dto/                      # 数据传输对象
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # 帖子数据访问
│   │               │   ├── CommentRepository.java    # 评论数据访问
│   │               │   └── LikeRepository.java       # 点赞数据访问
│   │               └── service/
│   │                   ├── PostService.java          # 帖子业务逻辑
│   │                   └── CommentService.java       # 评论业务逻辑
│   └── resources/
│       ├── application.properties                    # 应用程序配置
│       └── data.sql                                  # 示例数据（可选）
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # 集成测试
```

## 功能

- ✅ 完整的社交媒体操作 RESTful API
- ✅ 帖子管理（创建、读取、更新、删除）
- ✅ 具有完整 CRUD 操作的评论系统
- ✅ 点赞/取消点赞功能
- ✅ 带有 JPA/Hibernate 的 SQLite 数据库
- ✅ OpenAPI/Swagger 文档
- ✅ 为 localhost 和 GitHub Codespaces 启用 CORS
- ✅ 动态服务器 URL 配置
- ✅ 健康检查端点
- ✅ Spring Boot Actuator 集成
- ✅ 全面的错误处理
- ✅ 使用 Bean Validation 进行输入验证

## 快速开始

### 先决条件

请参考 [README](../../../../README.md) 文档进行准备。

### 1. 环境设置

首先，设置 `$REPOSITORY_ROOT` 环境变量。

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

然后，导航到 java 目录。

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. 构建应用程序

```bash
# 使 gradlew 可执行（如果需要）
chmod +x ./gradlew

# 构建项目
./gradlew build
```

### 3. 运行应用程序

```bash
# 使用 Gradle 启动应用程序
./gradlew bootRun

# 或者：直接运行 JAR 文件
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. 验证应用程序是否运行

```bash
# 检查健康端点
curl http://localhost:8080/api/health

# 预期响应：{"status":"healthy"}
```

### 5. 访问 API 文档

在浏览器中打开并导航到：

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## API 端点

### 健康和欢迎

- `GET /api/health` - 自定义健康检查端点
- `GET /api/welcome` - 欢迎消息端点

### 帖子管理

- `GET /api/posts` - 获取所有帖子
- `GET /api/posts/{id}` - 通过 ID 获取特定帖子
- `POST /api/posts` - 创建新帖子
- `PATCH /api/posts/{id}` - 更新现有帖子
- `DELETE /api/posts/{id}` - 删除帖子

### 评论管理

- `GET /api/posts/{postId}/comments` - 获取帖子的所有评论
- `GET /api/posts/{postId}/comments/{commentId}` - 获取特定评论
- `POST /api/posts/{postId}/comments` - 向帖子添加评论
- `PATCH /api/posts/{postId}/comments/{commentId}` - 更新评论
- `DELETE /api/posts/{postId}/comments/{commentId}` - 删除评论

### 点赞管理

- `POST /api/posts/{postId}/like` - 点赞帖子
- `DELETE /api/posts/{postId}/like` - 取消点赞帖子

### Spring Boot Actuator

- `GET /actuator/health` - Spring Boot 健康指示器
- `GET /actuator/info` - 应用程序信息

## 测试 API

### 使用 cURL 示例

#### 创建帖子

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!",
    "authorName": "John Doe"
  }'
```

#### 获取所有帖子

```bash
curl http://localhost:8080/api/posts
```

#### 添加评论

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Great post!",
    "authorName": "Jane Smith"
  }'
```

#### 点赞帖子

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "john_doe"
  }'
```

### 使用 Swagger UI

1. 打开 [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
2. 探索可用端点
3. 在任何端点上点击"试用"
4. 填写参数并点击"执行"

## 开发

### 运行测试

```bash
# 运行所有测试
./gradlew test

# 运行带覆盖率报告
./gradlew test jacocoTestReport

# 运行特定测试类
./gradlew test --tests "SocialAppApplicationTests"
```

### 数据库

应用程序使用 SQLite 作为嵌入式数据库：

- **数据库文件**: `sns_api.db`（自动创建）
- **位置**: 项目根目录
- **架构**: 由 Hibernate 自动生成
- **示例数据**: 从 `data.sql` 加载（如果存在）

要重置数据库，只需删除 `sns_api.db` 文件并重新启动应用程序。

## 配置

### 应用程序属性

`application.properties` 中的关键配置设置：

```properties
# 应用程序设置
spring.application.name=socialapp
server.port=8080

# 数据库配置
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# OpenAPI/Swagger 配置
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### CORS 配置

应用程序支持 localhost 和 GitHub Codespaces：

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: 自动检测和动态配置

### 环境检测

应用程序自动检测运行时环境：

- **本地开发**: 使用 `http://localhost:8080`
- **GitHub Codespaces**: 使用 `https://{codespace-name}-8080.{domain}`

## 部署

### 为生产构建

```bash
# 创建生产 JAR
./gradlew clean build

# JAR 位置
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 在生产中运行

```bash
# 使用生产配置文件运行
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# 或使用自定义端口
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## 故障排除

### 常见问题

#### 端口已在使用

```bash
# 查找使用端口 8080 的进程
lsof -i :8080

# 终止进程（替换 PID）
kill -9 <PID>

# 或使用不同端口
./gradlew bootRun --args='--server.port=8081'
```

#### 构建失败

```bash
# 清理并重新构建
./gradlew clean build

# 更新 Gradle wrapper
./gradlew wrapper --gradle-version=8.5
```

#### 数据库问题

```bash
# 重置数据库
rm sns_api.db
./gradlew bootRun
```

### 日志和监控

- **应用程序日志**: 运行 `./gradlew bootRun` 时的控制台输出
- **健康检查**: `GET /actuator/health`
- **应用程序信息**: `GET /actuator/info`

## 安全考虑

⚠️ **开发配置**: 当前设置针对开发进行了优化，具有：

- 为所有来源启用 CORS
- SQLite 数据库（不适合生产规模）
- 无身份验证/授权

对于生产部署，请考虑：

- 将 CORS 限制为特定域
- 使用 PostgreSQL/MySQL 而不是 SQLite
- 实施 Spring Security 进行身份验证
- 添加速率限制和输入清理
- 使用 HTTPS/TLS 加密