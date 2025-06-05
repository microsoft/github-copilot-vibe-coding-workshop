# Java App Sample

A comprehensive Spring Boot REST API application for a social media platform with full CRUD operations for posts, comments, and likes.

## Project Overview

This is a production-ready Spring Boot application built with the following specifications:

- **Package Name**: `com.contoso.socialapp`
- **Artifact ID**: `socialapp`
- **Group ID**: `com.contoso`
- **Package Type**: `jar`
- **Java Version**: OpenJDK 21
- **Build Tool**: Gradle
- **Database**: SQLite (embedded)
- **Port**: 8080

### Project Dependencies

- **Spring Boot 3.2.5**: Core framework
- **Spring Web**: RESTful API endpoints
- **Spring Data JPA**: Database operations
- **Spring Boot Actuator**: Application monitoring
- **Spring Boot Validation**: Input validation
- **SQLite**: Embedded database
- **Hibernate Community Dialects**: SQLite support
- **Springdoc OpenAPI**: API documentation (Swagger UI)
- **Lombok**: Boilerplate code reduction

### Project Structure

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # Main application class
│   │               ├── config/
│   │               │   ├── WebConfig.java            # CORS configuration
│   │               │   └── OpenApiConfig.java        # Swagger/OpenAPI config
│   │               ├── controller/
│   │               │   ├── HealthController.java     # Health endpoints
│   │               │   ├── PostController.java       # Post management
│   │               │   └── CommentController.java    # Comment & like management
│   │               ├── model/
│   │               │   ├── Post.java                 # Post entity
│   │               │   ├── Comment.java              # Comment entity
│   │               │   ├── Like.java                 # Like entity
│   │               │   └── dto/                      # Data Transfer Objects
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # Post data access
│   │               │   ├── CommentRepository.java    # Comment data access
│   │               │   └── LikeRepository.java       # Like data access
│   │               └── service/
│   │                   ├── PostService.java          # Post business logic
│   │                   └── CommentService.java       # Comment business logic
│   └── resources/
│       ├── application.properties                    # Application configuration
│       └── data.sql                                  # Sample data (optional)
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # Integration tests
```

## Features

- ✅ Complete RESTful API for social media operations
- ✅ Post management (Create, Read, Update, Delete)
- ✅ Comment system with full CRUD operations
- ✅ Like/Unlike functionality
- ✅ SQLite database with JPA/Hibernate
- ✅ OpenAPI/Swagger documentation
- ✅ CORS enabled for localhost and GitHub Codespaces
- ✅ Dynamic server URL configuration
- ✅ Health check endpoints
- ✅ Spring Boot Actuator integration
- ✅ Comprehensive error handling
- ✅ Input validation with Bean Validation

## Quick Start

### Prerequisites

Refer to the [README](../../README.md) doc for preparation.

### 1. Environment Setup

First, set the environment variable of `$REPOSITORY_ROOT`.

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

Then, navigate to the java directory.

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. Build the Application

```bash
# Make gradlew executable (if needed)
chmod +x ./gradlew

# Build the project
./gradlew build
```

### 3. Run the Application

```bash
# Start the application using Gradle
./gradlew bootRun

# Alternative: Run the JAR file directly
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. Verify Application is Running

```bash
# Check health endpoint
curl http://localhost:8080/api/health

# Expected response: {"status":"healthy"}
```

### 5. Access API Documentation

Open your browser and navigate to:

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## API Endpoints

### Health & Welcome

- `GET /api/health` - Custom health check endpoint
- `GET /api/welcome` - Welcome message endpoint

### Posts Management

- `GET /api/posts` - Get all posts
- `GET /api/posts/{id}` - Get specific post by ID
- `POST /api/posts` - Create a new post
- `PATCH /api/posts/{id}` - Update an existing post
- `DELETE /api/posts/{id}` - Delete a post

### Comments Management

- `GET /api/posts/{postId}/comments` - Get all comments for a post
- `GET /api/posts/{postId}/comments/{commentId}` - Get specific comment
- `POST /api/posts/{postId}/comments` - Add a comment to a post
- `PATCH /api/posts/{postId}/comments/{commentId}` - Update a comment
- `DELETE /api/posts/{postId}/comments/{commentId}` - Delete a comment

### Likes Management

- `POST /api/posts/{postId}/like` - Like a post
- `DELETE /api/posts/{postId}/like` - Unlike a post

### Spring Boot Actuator

- `GET /actuator/health` - Spring Boot health indicator
- `GET /actuator/info` - Application information

## Testing the API

### Using cURL Examples

#### Create a Post

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!",
    "authorName": "John Doe"
  }'
```

#### Get All Posts

```bash
curl http://localhost:8080/api/posts
```

#### Add a Comment

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Great post!",
    "authorName": "Jane Smith"
  }'
```

#### Like a Post

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "john_doe"
  }'
```

### Using Swagger UI

1. Open [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
2. Explore available endpoints
3. Click "Try it out" on any endpoint
4. Fill in parameters and click "Execute"

## Development

### Running Tests

```bash
# Run all tests
./gradlew test

# Run with coverage report
./gradlew test jacocoTestReport

# Run specific test class
./gradlew test --tests "SocialAppApplicationTests"
```

### Database

The application uses SQLite as an embedded database:

- **Database file**: `sns_api.db` (created automatically)
- **Location**: Project root directory
- **Schema**: Auto-generated by Hibernate
- **Sample data**: Loaded from `data.sql` (if present)

To reset the database, simply delete the `sns_api.db` file and restart the application.

## Configuration

### Application Properties

Key configuration settings in `application.properties`:

```properties
# Application Settings
spring.application.name=socialapp
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# OpenAPI/Swagger Configuration
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### CORS Configuration

The application supports both localhost and GitHub Codespaces:

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: Auto-detected and configured dynamically

### Environment Detection

The application automatically detects the runtime environment:

- **Local Development**: Uses `http://localhost:8080`
- **GitHub Codespaces**: Uses `https://{codespace-name}-8080.{domain}`

## Deployment

### Building for Production

```bash
# Create production JAR
./gradlew clean build

# JAR location
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### Running in Production

```bash
# Run with production profile
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# Or with custom port
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 8080
lsof -i :8080

# Kill the process (replace PID)
kill -9 <PID>

# Or use a different port
./gradlew bootRun --args='--server.port=8081'
```

#### Build Failures

```bash
# Clean and rebuild
./gradlew clean build

# Update Gradle wrapper
./gradlew wrapper --gradle-version=8.5
```

#### Database Issues

```bash
# Reset database
rm sns_api.db
./gradlew bootRun
```

### Logs and Monitoring

- **Application logs**: Console output when running `./gradlew bootRun`
- **Health check**: `GET /actuator/health`
- **Application info**: `GET /actuator/info`

## Security Considerations

⚠️ **Development Configuration**: The current setup is optimized for development with:

- CORS enabled for all origins
- SQLite database (not suitable for production scale)
- No authentication/authorization

For production deployment, consider:

- Restricting CORS to specific domains
- Using PostgreSQL/MySQL instead of SQLite
- Implementing Spring Security for authentication
- Adding rate limiting and input sanitization
- Using HTTPS/TLS encryption
