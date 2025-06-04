# Python App Sample

A complete FastAPI backend implementation for a Simple Social Networking Service (SNS) that allows users to create, retrieve, update, and delete posts; add comments; and like/unlike posts.

## 🏗️ Architecture Overview

- **Framework**: FastAPI with Python 3.12+
- **Database**: SQLite (`sns_api.db`)
- **API Documentation**: Swagger UI + OpenAPI 3.1 specification
- **CORS**: Enabled for cross-origin requests
- **Data Validation**: Pydantic models with comprehensive validation

## 📁 Project Structure

```text
python/
├── main.py              # FastAPI application entry point
├── models.py            # Pydantic data models and schemas
├── database.py          # SQLite database operations
├── openapi.yaml         # OpenAPI 3.0.1 specification
├── sns_api.db          # SQLite database file (auto-created)
├── README.md           # This documentation
└── .venv/              # Virtual environment (created during setup)
```

## 🚀 Quick Start

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

Then, navigate to the python directory and create a virtual environment:

```bash
cd $REPOSITORY_ROOT/complete/python
```

Create virtual environment

```bash
# Using uv (recommended)
uv venv .venv
```

```bash
# Using standard Python (alternative)
python -m venv .venv
```

### 2. Activate Virtual Environment

```bash
# On Linux/macOS
source .venv/bin/activate
```

```bash
# On Windows Command Prompt
.venv\Scripts\activate
```

### 3. Install Dependencies

```bash
# Using uv (recommended)
uv pip install fastapi uvicorn python-multipart pyyaml
```bash

```bash
# Using pip (alternative)
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. Copy OpenAPI Specification

Copy the OpenAPI spec from parent directory.

```bash
# On Linux/macOS
cp ../openapi.yaml .
```bash

```powershell
# On Windows Command Prompt
xcopy ..\openapi.yaml .
```

### 5. Run the Application

Start the development server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The application will be available at:

- **API Base URL**: `http://localhost:8000/api/`
- **Swagger UI**: `http://localhost:8000/docs`
- **OpenAPI Specification**: `http://localhost:8000/openapi.json`

## 📊 Database Schema

The application uses SQLite with the following tables:

### Posts Table

- `id` (TEXT, PRIMARY KEY) - UUID
- `username` (TEXT, NOT NULL) - Author username
- `content` (TEXT, NOT NULL) - Post content
- `created_at` (TEXT, NOT NULL) - ISO timestamp
- `updated_at` (TEXT, NOT NULL) - ISO timestamp

### Comments Table

- `id` (TEXT, PRIMARY KEY) - UUID
- `post_id` (TEXT, NOT NULL) - Foreign key to posts
- `username` (TEXT, NOT NULL) - Author username
- `content` (TEXT, NOT NULL) - Comment content
- `created_at` (TEXT, NOT NULL) - ISO timestamp
- `updated_at` (TEXT, NOT NULL) - ISO timestamp

### Likes Table

- `post_id` (TEXT, NOT NULL) - Foreign key to posts
- `username` (TEXT, NOT NULL) - User who liked
- `liked_at` (TEXT, NOT NULL) - ISO timestamp
- Primary key: `(post_id, username)`

## 🔌 API Endpoints

### Posts

- `GET /api/posts` - List all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/{postId}` - Get a specific post
- `PATCH /api/posts/{postId}` - Update a post
- `DELETE /api/posts/{postId}` - Delete a post

### Comments

- `GET /api/posts/{postId}/comments` - List comments for a post
- `POST /api/posts/{postId}/comments` - Create a comment
- `GET /api/posts/{postId}/comments/{commentId}` - Get a specific comment
- `PATCH /api/posts/{postId}/comments/{commentId}` - Update a comment
- `DELETE /api/posts/{postId}/comments/{commentId}` - Delete a comment

### Likes

- `POST /api/posts/{postId}/likes` - Like a post
- `DELETE /api/posts/{postId}/likes?username={username}` - Unlike a post

## 🧪 Testing the API

### Using cURL

#### Create a Post

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "content": "Hello World! This is my first post."}'
```

#### Get All Posts

```bash
curl -X GET "http://localhost:8000/api/posts"
```

#### Add a Comment

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/comments" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_smith", "content": "Great post!"}'
```

#### Like a Post

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/likes" \
  -H "Content-Type: application/json" \
  -d '{"username": "alice_johnson"}'
```

### Using Swagger UI

1. Navigate to `http://localhost:8000/docs`
2. Explore and test all API endpoints interactively
3. View request/response schemas and examples

## 📝 Data Models

### Request Models

- `NewPostRequest`: `{username: str, content: str}`
- `UpdatePostRequest`: `{username: str, content: str}`
- `NewCommentRequest`: `{username: str, content: str}`
- `UpdateCommentRequest`: `{username: str, content: str}`
- `LikeRequest`: `{username: str}`

### Response Models

- `Post`: Full post object with metadata and counts
- `Comment`: Full comment object with metadata
- `LikeResponse`: Like confirmation with timestamp

## ⚙️ Configuration

### Environment Variables

The application uses default settings but can be customized:

- **Database**: SQLite file `sns_api.db` (auto-created)
- **Host**: `0.0.0.0` (all interfaces)
- **Port**: `8000`
- **CORS**: Enabled for all origins

### Production Considerations

For production deployment, consider:

1. **Database**: Switch to PostgreSQL or MySQL
2. **Environment Variables**: Use for sensitive configuration
3. **Security**: Add authentication and authorization
4. **CORS**: Restrict to specific domains
5. **Logging**: Implement structured logging
6. **Monitoring**: Add health checks and metrics

## 🛠️ Development

### File Organization

- **`main.py`**: FastAPI app configuration, middleware, and route definitions
- **`models.py`**: Pydantic models for data validation and serialization
- **`database.py`**: SQLite operations, connection management, and CRUD functions

### Code Style

The project follows:

- Python PEP 8 style guidelines
- FastAPI best practices
- Functional programming patterns
- Type hints throughout
- Comprehensive error handling

### Adding New Features

1. Define Pydantic models in `models.py`
2. Add database operations in `database.py`
3. Create API endpoints in `main.py`
4. Update OpenAPI specification if needed

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port with `--port 8001`
2. **Virtual environment issues**: Recreate with `rm -rf .venv && uv venv .venv`
3. **Database locked**: Stop all running instances of the application
4. **Import errors**: Ensure virtual environment is activated

### Debug Mode

Run with additional logging:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [SQLite Documentation](https://sqlite.org/docs.html)
- [OpenAPI Specification](https://swagger.io/specification/)
