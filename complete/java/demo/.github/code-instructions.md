# Spring Boot Java Development Code Generation Guide (VSCode + GitHub Copilot)

This document defines code generation rules and guidelines to follow when developing Spring Boot-based Java projects using GitHub Copilot in VSCode.

---

## 1. Basic Configuration

- **Language**: Java 17 or higher
- **Framework**: Spring Boot 3.x
- **Build Tool**: Gradle (Kotlin DSL) or Maven
- **Project Structure**: Use standard `src/main/java`, `src/main/resources` structure
- **Naming Convention**: Classes and methods use `CamelCase`, variables use `lowerCamelCase`

---

## 2. Package Structure Example

```
com.example.project
├── controller    // REST controllers
├── service       // Business logic
├── repository    // JPA repositories
├── domain        // Entities and domain models
├── dto           // Data Transfer Objects
├── config        // Configuration classes
├── exception     // Custom exceptions and handlers
```

---

## 3. Code Style

- Use **constructor injection** (`@RequiredArgsConstructor`)
- Remove boilerplate with **Lombok**:
  - `@Getter`, `@Setter`, `@ToString`, `@NoArgsConstructor`, `@AllArgsConstructor`
- Write **JavaDoc for all public classes and methods**
- Handle logs with `@Slf4j`

---

## 4. REST API Writing Rules

- Use `@RestController`, `@RequestMapping`
- Wrap responses with `ResponseEntity<>`
- Use `@Valid` with `@RequestBody` for request body validation
- Handle exceptions globally with `@ControllerAdvice`

---

## 5. JPA Writing Rules

- Required use of `@Entity`, `@Table`, `@Id`
- Prefer `@ManyToOne(fetch = FetchType.LAZY)`
- Use bidirectional mapping only when necessary
- Don't return entities directly; use DTOs

---

## 6. Testing Rules

- Integration tests: `@SpringBootTest`, controller tests: `@WebMvcTest`
- Dependency mocking: `@MockBean` or `Mockito`
- Test class naming: `ClassName + Test.java`
- Tests should be located under `src/test/java`

---

## 7. Copilot Usage Tips

- Use comments in the format `// Generate: description` to command Copilot
- Writing just method signatures or class declarations can induce auto-completion
- Always **refactor and review** generated code
- Use inline comments for required logic flow (e.g., `// Check if user exists`)

---

## Example Prompts

```java
// Generate: REST controller that manages User entities
```

```java
// Generate: Service method that finds user by email
```

---

## 8. Dependency Configuration Example (Gradle Kotlin DSL)

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.projectlombok:lombok")
    runtimeOnly("com.h2database:h2") // or your DBMS in use
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}
```

---

## 9. API Documentation

- Use `springdoc-openapi` for Swagger (OpenAPI) documentation
- Use `@Operation` in controllers, `@Schema` in DTOs or entities

---

**End.**
