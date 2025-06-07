# Muestra de Aplicación Python

Una implementación completa de backend FastAPI para un Servicio Simple de Redes Sociales (SNS) que permite a los usuarios crear, recuperar, actualizar y eliminar publicaciones; agregar comentarios; y dar/quitar me gusta a las publicaciones.

## 🏗️ Descripción General de la Arquitectura

- **Framework**: FastAPI con Python 3.12+
- **Base de Datos**: SQLite (`sns_api.db`)
- **Documentación de API**: Swagger UI + especificación OpenAPI 3.1
- **CORS**: Habilitado para solicitudes de origen cruzado
- **Validación de Datos**: Modelos Pydantic con validación integral

## 📁 Estructura del Proyecto

```text
python/
├── main.py              # Punto de entrada de la aplicación FastAPI
├── models.py            # Modelos de datos y esquemas Pydantic
├── database.py          # Operaciones de base de datos SQLite
├── openapi.yaml         # Especificación OpenAPI 3.0.1
├── sns_api.db          # Archivo de base de datos SQLite (auto-creado)
├── README.md           # Esta documentación
└── .venv/              # Entorno virtual (creado durante la configuración)
```

## 🚀 Inicio Rápido

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

Luego, navega al directorio python y crea un entorno virtual:

```bash
cd $REPOSITORY_ROOT/complete/python
```

Crear entorno virtual

```bash
# Usando uv (recomendado)
uv venv .venv
```

```bash
# Usando Python estándar (alternativo)
python -m venv .venv
```

### 2. Activar Entorno Virtual

```bash
# En Linux/macOS
source .venv/bin/activate
```

```bash
# En Windows Command Prompt
.venv\Scripts\activate
```

### 3. Instalar Dependencias

```bash
# Usando uv (recomendado)
uv pip install fastapi uvicorn python-multipart pyyaml
```

```bash
# Usando pip (alternativo)
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. Copiar Especificación OpenAPI

Copia la especificación OpenAPI del directorio padre.

```bash
# En Linux/macOS
cp ../openapi.yaml .
```

```powershell
# En Windows Command Prompt
xcopy ..\openapi.yaml .
```

### 5. Ejecutar la Aplicación

Iniciar el servidor de desarrollo

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

La aplicación estará disponible en:

- **URL Base de API**: `http://localhost:8000/api/`
- **Swagger UI**: `http://localhost:8000/docs`
- **Especificación OpenAPI**: `http://localhost:8000/openapi.json`

## 📊 Esquema de Base de Datos

La aplicación usa SQLite con las siguientes tablas:

### Tabla Posts

- `id` (TEXT, PRIMARY KEY) - UUID
- `username` (TEXT, NOT NULL) - Nombre de usuario del autor
- `content` (TEXT, NOT NULL) - Contenido de la publicación
- `created_at` (TEXT, NOT NULL) - Marca de tiempo ISO
- `updated_at` (TEXT, NOT NULL) - Marca de tiempo ISO

### Tabla Comments

- `id` (TEXT, PRIMARY KEY) - UUID
- `post_id` (TEXT, NOT NULL) - Clave foránea a posts
- `username` (TEXT, NOT NULL) - Nombre de usuario del autor
- `content` (TEXT, NOT NULL) - Contenido del comentario
- `created_at` (TEXT, NOT NULL) - Marca de tiempo ISO
- `updated_at` (TEXT, NOT NULL) - Marca de tiempo ISO

### Tabla Likes

- `post_id` (TEXT, NOT NULL) - Clave foránea a posts
- `username` (TEXT, NOT NULL) - Usuario que dio me gusta
- `liked_at` (TEXT, NOT NULL) - Marca de tiempo ISO
- Clave primaria: `(post_id, username)`

## 🔌 Endpoints de API

### Posts

- `GET /api/posts` - Listar todas las publicaciones
- `POST /api/posts` - Crear una nueva publicación
- `GET /api/posts/{postId}` - Obtener una publicación específica
- `PATCH /api/posts/{postId}` - Actualizar una publicación
- `DELETE /api/posts/{postId}` - Eliminar una publicación

### Comments

- `GET /api/posts/{postId}/comments` - Listar comentarios para una publicación
- `POST /api/posts/{postId}/comments` - Crear un comentario
- `GET /api/posts/{postId}/comments/{commentId}` - Obtener un comentario específico
- `PATCH /api/posts/{postId}/comments/{commentId}` - Actualizar un comentario
- `DELETE /api/posts/{postId}/comments/{commentId}` - Eliminar un comentario

### Likes

- `POST /api/posts/{postId}/likes` - Dar me gusta a una publicación
- `DELETE /api/posts/{postId}/likes?username={username}` - Quitar me gusta a una publicación

## 🧪 Probando la API

### Usando cURL

#### Crear una Publicación

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "content": "¡Hola Mundo! Esta es mi primera publicación."}'
```

#### Obtener Todas las Publicaciones

```bash
curl -X GET "http://localhost:8000/api/posts"
```

#### Agregar un Comentario

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/comments" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_smith", "content": "¡Excelente publicación!"}'
```

#### Dar Me Gusta a una Publicación

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/likes" \
  -H "Content-Type: application/json" \
  -d '{"username": "alice_johnson"}'
```

### Usando Swagger UI

1. Navega a `http://localhost:8000/docs`
2. Explora y prueba todos los endpoints de API de forma interactiva
3. Ve esquemas de solicitud/respuesta y ejemplos

## 📝 Modelos de Datos

### Modelos de Solicitud

- `NewPostRequest`: `{username: str, content: str}`
- `UpdatePostRequest`: `{username: str, content: str}`
- `NewCommentRequest`: `{username: str, content: str}`
- `UpdateCommentRequest`: `{username: str, content: str}`
- `LikeRequest`: `{username: str}`

### Modelos de Respuesta

- `Post`: Objeto de publicación completo con metadatos y conteos
- `Comment`: Objeto de comentario completo con metadatos
- `LikeResponse`: Confirmación de me gusta con marca de tiempo

## ⚙️ Configuración

### Variables de Entorno

La aplicación usa configuraciones por defecto pero puede ser personalizada:

- **Base de Datos**: Archivo SQLite `sns_api.db` (auto-creado)
- **Host**: `0.0.0.0` (todas las interfaces)
- **Puerto**: `8000`
- **CORS**: Habilitado para todos los orígenes

### Consideraciones de Producción

Para despliegue en producción, considera:

1. **Base de Datos**: Cambia a PostgreSQL o MySQL
2. **Variables de Entorno**: Usa para configuración sensible
3. **Seguridad**: Agrega autenticación y autorización
4. **CORS**: Restringe a dominios específicos
5. **Logging**: Implementa logging estructurado
6. **Monitoreo**: Agrega verificaciones de salud y métricas

## 🛠️ Desarrollo

### Organización de Archivos

- **`main.py`**: Configuración de aplicación FastAPI, middleware y definiciones de rutas
- **`models.py`**: Modelos Pydantic para validación y serialización de datos
- **`database.py`**: Operaciones SQLite, gestión de conexiones y funciones CRUD

### Estilo de Código

El proyecto sigue:

- Directrices de estilo Python PEP 8
- Mejores prácticas de FastAPI
- Patrones de programación funcional
- Anotaciones de tipo en todo el código
- Manejo integral de errores

### Agregando Nuevas Características

1. Define modelos Pydantic en `models.py`
2. Agrega operaciones de base de datos en `database.py`
3. Crea endpoints de API en `main.py`
4. Actualiza la especificación OpenAPI si es necesario

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Puerto ya en uso**: Cambia el puerto con `--port 8001`
2. **Problemas de entorno virtual**: Recrea con `rm -rf .venv && uv venv .venv`
3. **Base de datos bloqueada**: Detén todas las instancias ejecutándose de la aplicación
4. **Errores de importación**: Asegúrate de que el entorno virtual esté activado

### Modo Debug

Ejecuta con logging adicional:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## 📚 Recursos Adicionales

- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Documentación de Pydantic](https://docs.pydantic.dev/)
- [Documentación de SQLite](https://sqlite.org/docs.html)
- [Especificación OpenAPI](https://swagger.io/specification/)

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
