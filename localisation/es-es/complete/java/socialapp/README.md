# Muestra de Aplicación Java

Una aplicación Spring Boot REST API integral para una plataforma de redes sociales con operaciones CRUD completas para publicaciones, comentarios y me gusta.

## Descripción General del Proyecto

Esta es una aplicación Spring Boot lista para producción construida con las siguientes especificaciones:

- **Nombre del Paquete**: `com.contoso.socialapp`
- **Artifact ID**: `socialapp`
- **Group ID**: `com.contoso`
- **Tipo de Paquete**: `jar`
- **Versión de Java**: OpenJDK 21
- **Herramienta de Construcción**: Gradle
- **Base de Datos**: SQLite (embebida)
- **Puerto**: 8080

### Dependencias del Proyecto

- **Spring Boot 3.2.5**: Framework central
- **Spring Web**: Endpoints de API RESTful
- **Spring Data JPA**: Operaciones de base de datos
- **Spring Boot Actuator**: Monitoreo de aplicación
- **Spring Boot Validation**: Validación de entrada
- **SQLite**: Base de datos embebida
- **Hibernate Community Dialects**: Soporte para SQLite
- **Springdoc OpenAPI**: Documentación de API (Swagger UI)
- **Lombok**: Reducción de código repetitivo

### Estructura del Proyecto

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # Clase principal de aplicación
│   │               ├── config/
│   │               │   ├── WebConfig.java            # Configuración CORS
│   │               │   └── OpenApiConfig.java        # Configuración Swagger/OpenAPI
│   │               ├── controller/
│   │               │   ├── HealthController.java     # Endpoints de salud
│   │               │   ├── PostController.java       # Gestión de publicaciones
│   │               │   └── CommentController.java    # Gestión de comentarios y me gusta
│   │               ├── model/
│   │               │   ├── Post.java                 # Entidad Post
│   │               │   ├── Comment.java              # Entidad Comment
│   │               │   ├── Like.java                 # Entidad Like
│   │               │   └── dto/                      # Objetos de Transferencia de Datos
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # Acceso a datos de Post
│   │               │   ├── CommentRepository.java    # Acceso a datos de Comment
│   │               │   └── LikeRepository.java       # Acceso a datos de Like
│   │               └── service/
│   │                   ├── PostService.java          # Lógica de negocio de Post
│   │                   └── CommentService.java       # Lógica de negocio de Comment
│   └── resources/
│       ├── application.properties                    # Configuración de aplicación
│       └── data.sql                                  # Datos de muestra (opcional)
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # Pruebas de integración
```

## Características

- ✅ API RESTful completa para operaciones de redes sociales
- ✅ Gestión de publicaciones (Crear, Leer, Actualizar, Eliminar)
- ✅ Sistema de comentarios con operaciones CRUD completas
- ✅ Funcionalidad de Me gusta/No me gusta
- ✅ Base de datos SQLite con JPA/Hibernate
- ✅ Documentación OpenAPI/Swagger
- ✅ CORS habilitado para localhost y GitHub Codespaces
- ✅ Configuración dinámica de URL del servidor
- ✅ Endpoints de verificación de salud
- ✅ Integración con Spring Boot Actuator
- ✅ Manejo integral de errores
- ✅ Validación de entrada con Bean Validation

## Inicio Rápido

### Prerrequisitos

Consulta el documento [README](../../README.md) para la preparación.

### 1. Configuración del Entorno

Primero, establece la variable de entorno de `$REPOSITORY_ROOT`.

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

Luego, navega al directorio java.

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. Construir la Aplicación

```bash
# Hacer gradlew ejecutable (si es necesario)
chmod +x ./gradlew

# Construir el proyecto
./gradlew build
```

### 3. Ejecutar la Aplicación

```bash
# Iniciar la aplicación usando Gradle
./gradlew bootRun

# Alternativa: Ejecutar el archivo JAR directamente
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. Verificar que la Aplicación está Ejecutándose

```bash
# Verificar endpoint de salud
curl http://localhost:8080/api/health

# Respuesta esperada: {"status":"healthy"}
```

### 5. Acceder a la Documentación de API

Abre tu navegador y navega a:

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## Endpoints de API

### Salud y Bienvenida

- `GET /api/health` - Endpoint personalizado de verificación de salud
- `GET /api/welcome` - Endpoint de mensaje de bienvenida

### Gestión de Publicaciones

- `GET /api/posts` - Obtener todas las publicaciones
- `GET /api/posts/{id}` - Obtener publicación específica por ID
- `POST /api/posts` - Crear una nueva publicación
- `PATCH /api/posts/{id}` - Actualizar una publicación existente
- `DELETE /api/posts/{id}` - Eliminar una publicación

### Gestión de Comentarios

- `GET /api/posts/{postId}/comments` - Obtener todos los comentarios para una publicación
- `GET /api/posts/{postId}/comments/{commentId}` - Obtener comentario específico
- `POST /api/posts/{postId}/comments` - Agregar un comentario a una publicación
- `PATCH /api/posts/{postId}/comments/{commentId}` - Actualizar un comentario
- `DELETE /api/posts/{postId}/comments/{commentId}` - Eliminar un comentario

### Gestión de Me Gusta

- `POST /api/posts/{postId}/like` - Dar me gusta a una publicación
- `DELETE /api/posts/{postId}/like` - Quitar me gusta a una publicación

### Spring Boot Actuator

- `GET /actuator/health` - Indicador de salud de Spring Boot
- `GET /actuator/info` - Información de la aplicación

## Probando la API

### Usando Ejemplos de cURL

#### Crear una Publicación

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi Primera Publicación",
    "content": "¡Este es el contenido de mi primera publicación!",
    "authorName": "Juan Pérez"
  }'
```

#### Obtener Todas las Publicaciones

```bash
curl http://localhost:8080/api/posts
```

#### Agregar un Comentario

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "¡Excelente publicación!",
    "authorName": "Ana García"
  }'
```

#### Dar Me Gusta a una Publicación

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "juan_perez"
  }'
```

### Usando Swagger UI

1. Abre [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
2. Explora los endpoints disponibles
3. Haz clic en "Try it out" en cualquier endpoint
4. Completa los parámetros y haz clic en "Execute"

## Desarrollo

### Ejecutando Pruebas

```bash
# Ejecutar todas las pruebas
./gradlew test

# Ejecutar con reporte de cobertura
./gradlew test jacocoTestReport

# Ejecutar clase de prueba específica
./gradlew test --tests "SocialAppApplicationTests"
```

### Base de Datos

La aplicación usa SQLite como base de datos embebida:

- **Archivo de base de datos**: `sns_api.db` (creado automáticamente)
- **Ubicación**: Directorio raíz del proyecto
- **Esquema**: Auto-generado por Hibernate
- **Datos de muestra**: Cargados desde `data.sql` (si está presente)

Para resetear la base de datos, simplemente elimina el archivo `sns_api.db` y reinicia la aplicación.

## Configuración

### Propiedades de la Aplicación

Configuraciones clave en `application.properties`:

```properties
# Configuraciones de Aplicación
spring.application.name=socialapp
server.port=8080

# Configuración de Base de Datos
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# Configuración OpenAPI/Swagger
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### Configuración CORS

La aplicación soporta tanto localhost como GitHub Codespaces:

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: Auto-detectado y configurado dinámicamente

### Detección de Entorno

La aplicación detecta automáticamente el entorno de ejecución:

- **Desarrollo Local**: Usa `http://localhost:8080`
- **GitHub Codespaces**: Usa `https://{codespace-name}-8080.{domain}`

## Despliegue

### Construyendo para Producción

```bash
# Crear JAR de producción
./gradlew clean build

# Ubicación del JAR
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### Ejecutando en Producción

```bash
# Ejecutar con perfil de producción
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# O con puerto personalizado
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## Solución de Problemas

### Problemas Comunes

#### Puerto Ya en Uso

```bash
# Encontrar proceso usando puerto 8080
lsof -i :8080

# Matar el proceso (reemplazar PID)
kill -9 <PID>

# O usar un puerto diferente
./gradlew bootRun --args='--server.port=8081'
```

#### Fallas de Construcción

```bash
# Limpiar y reconstruir
./gradlew clean build

# Actualizar Gradle wrapper
./gradlew wrapper --gradle-version=8.5
```

#### Problemas de Base de Datos

```bash
# Resetear base de datos
rm sns_api.db
./gradlew bootRun
```

### Logs y Monitoreo

- **Logs de aplicación**: Salida de consola al ejecutar `./gradlew bootRun`
- **Verificación de salud**: `GET /actuator/health`
- **Información de aplicación**: `GET /actuator/info`

## Consideraciones de Seguridad

⚠️ **Configuración de Desarrollo**: La configuración actual está optimizada para desarrollo con:

- CORS habilitado para todos los orígenes
- Base de datos SQLite (no adecuada para escala de producción)
- Sin autenticación/autorización

Para despliegue en producción, considera:

- Restringir CORS a dominios específicos
- Usar PostgreSQL/MySQL en lugar de SQLite
- Implementar Spring Security para autenticación
- Agregar limitación de velocidad y sanitización de entrada
- Usar cifrado HTTPS/TLS

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
