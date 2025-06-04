# Contoso Social App

A Spring Boot REST API application for a social media platform.

## Project Overview

This is a Spring Boot application built with the following specifications:
- **Package Name**: `com.contoso.socialapp`
- **Artifact ID**: `socialapp`
- **Group ID**: `com.contoso`
- **Package Type**: `jar`
- **Java Version**: OpenJDK 21
- **Build Tool**: Gradle
- **Port**: 8080

## Dependencies

- **Spring Web**: For building REST APIs and web applications
- **Spring Boot Actuator**: For application monitoring and health checks
- **Lombok**: For reducing boilerplate code

## Features

- ✅ RESTful API endpoints
- ✅ CORS enabled for all origins (suitable for development)
- ✅ Health check endpoints
- ✅ Spring Boot Actuator integration
- ✅ Comprehensive logging with SLF4J
- ✅ Proper error handling
- ✅ Production-ready configuration

## API Endpoints

### Application Endpoints
- `GET /api/health` - Custom health check endpoint
- `GET /api/welcome` - Welcome message endpoint

### Spring Boot Actuator Endpoints
- `GET /actuator/health` - Spring Boot health indicator

## CORS Configuration

The application is configured to allow CORS requests from all origins with the following settings:
- **Allowed Origins**: `*` (all origins)
- **Allowed Methods**: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`, `HEAD`, `PATCH`
- **Allowed Headers**: `*` (all headers)
- **Allow Credentials**: `true`
- **Max Age**: `3600` seconds

## Building and Running

### Prerequisites
- Java 21 or later
- Gradle (included via wrapper)

### Build the Application
```bash
./gradlew build
```

### Run the Application
```bash
# Using Gradle
./gradlew bootRun

# Or using the JAR file
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### Run Tests
```bash
./gradlew test
```

## Application Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # Main application class
│   │               ├── config/
│   │               │   └── WebConfig.java            # CORS and web configuration
│   │               └── controller/
│   │                   └── HealthController.java     # REST controllers
│   └── resources/
│       └── application.properties                    # Application configuration
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # Integration tests
```

## Configuration

The application is configured via `application.properties`:

```properties
spring.application.name=socialapp
server.port=8080

# CORS Configuration for Actuator endpoints
management.endpoints.web.cors.allowed-origins=*
management.endpoints.web.cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
management.endpoints.web.cors.allowed-headers=*
```

## Development

### Adding New Features
1. Create new controller classes in `com.contoso.socialapp.controller`
2. Create service classes in `com.contoso.socialapp.service`
3. Create model classes in `com.contoso.socialapp.model`
4. Add new dependencies to `build.gradle` as needed

### Best Practices Implemented
- Constructor injection for dependency injection
- Proper logging with SLF4J
- RESTful API design
- Comprehensive CORS configuration
- Spring Boot Actuator for monitoring
- Lombok for reducing boilerplate code

## Testing

The application includes:
- Unit tests with JUnit 5
- Spring Boot Test integration
- Context loading verification

## Monitoring

Spring Boot Actuator provides the following endpoints:
- `/actuator/health` - Application health status
- Additional endpoints can be enabled as needed

## Security Considerations

⚠️ **Important**: The current CORS configuration allows all origins (`*`). This is suitable for development but should be restricted in production environments.

For production, update the CORS configuration in `WebConfig.java` to specify allowed origins:

```java
registry.addMapping("/**")
        .allowedOrigins("https://yourdomain.com", "https://app.yourdomain.com")
        // ... other configurations
```

## Next Steps

This foundation provides a solid base for building a social media application. Consider adding:
- Database integration (Spring Data JPA)
- User authentication and authorization (Spring Security)
- API documentation (OpenAPI/Swagger)
- Caching (Spring Cache)
- Message queuing (Spring AMQP)
- Additional business logic and entities
