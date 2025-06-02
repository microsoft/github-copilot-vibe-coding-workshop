# Python App Sample

## Prerequisites

Refer to the [README](../../README.md) doc for preparation.

## Quick Start

### 1. Install Dependencies

#### Using `uv` (recommended):

**Linux/macOS:**

```bash
# Install uv if you haven't already
curl -LsSf https://astral.sh/uv/install.sh | sh

# Navigate to the python directory
cd complete/python

# Install dependencies from pyproject.toml
uv sync
```

**Windows (PowerShell):**

```powershell
# Install uv if you haven't already
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Navigate to the python directory
cd python

# Install dependencies from pyproject.toml
uv sync
```

#### Using `pip`:

**Linux/macOS:**

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy
```

**Windows (Command Prompt):**

```cmd
# Create virtual environment
python -m venv .venv
.venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy
```

**Windows (PowerShell):**

```powershell
# Create virtual environment
python -m venv .venv
.venv\Scripts\Activate.ps1

# Install dependencies
pip install fastapi uvicorn sqlalchemy
```

### 2. Run the Application

#### Create a database

**Linux/macOS:**

```bash
touch sns_api.db
```

**Windows (PowerShell):**

```powershell
New-Item -Name sns_api.db -Force
```

#### Using `uv`:

```bash
# Start the development server
uv run uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

#### Using `pip`:

**Linux/macOS:**

```bash
# Ensure virtual environment is activated
source .venv/bin/activate

# Start the development server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Windows (Command Prompt):**

```cmd
# Ensure virtual environment is activated
.venv\Scripts\activate

# Start the development server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Windows (PowerShell):**

```powershell
# Ensure virtual environment is activated
.venv\Scripts\Activate.ps1

# Start the development server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The API will be available at: **http://localhost:8000**

### 3. Access Documentation

- **Swagger UI**: http://localhost:8000/docs
- **OpenAPI JSON**: http://localhost:8000/openapi.json

## API Endpoints

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
- `DELETE /api/posts/{postId}/likes` - Unlike a post

## Example Usage

### Create a Post

**Linux/macOS/Windows (Git Bash):**

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "content": "Hello, world! This is my first post."
  }'
```

**Windows (PowerShell):**

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/posts" -Method POST `
  -ContentType "application/json" `
  -Body '{"username": "john_doe", "content": "Hello, world! This is my first post."}'
```

**Windows (Command Prompt):**

```cmd
curl -X POST "http://localhost:8000/api/posts" ^
  -H "Content-Type: application/json" ^
  -d "{\"username\": \"john_doe\", \"content\": \"Hello, world! This is my first post.\"}"
```

### Get All Posts

**Linux/macOS/Windows (Git Bash):**

```bash
curl -X GET "http://localhost:8000/api/posts"
```

**Windows (PowerShell):**

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/posts" -Method GET
```

**Windows (Command Prompt):**

```cmd
curl -X GET "http://localhost:8000/api/posts"
```

### Add a Comment

**Linux/macOS/Windows (Git Bash):**

```bash
curl -X POST "http://localhost:8000/api/posts/{postId}/comments" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_smith",
    "content": "Great post!"
  }'
```

**Windows (PowerShell):**

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/posts/{postId}/comments" -Method POST `
  -ContentType "application/json" `
  -Body '{"username": "jane_smith", "content": "Great post!"}'
```

### Like a Post

**Linux/macOS/Windows (Git Bash):**

```bash
curl -X POST "http://localhost:8000/api/posts/{postId}/likes" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_smith"
  }'
```

**Windows (PowerShell):**

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/posts/{postId}/likes" -Method POST `
  -ContentType "application/json" `
  -Body '{"username": "jane_smith"}'
```

## Project Structure

```text
python/
├── main.py              # FastAPI application entry point
├── pyproject.toml       # Project dependencies and configuration
├── README.md           # This file
├── sns_api.db          # SQLite database (created on first run)
└── .venv/              # Virtual environment (if using pip)
```

## Database

The application uses SQLite for data persistence with the following models:

- **Posts**: Store user posts with username, content, and timestamps
- **Comments**: Store comments linked to posts with relationships
- **Likes**: Track user likes on posts with timestamp information

The database is automatically created on application startup with all necessary tables.

## Development

### Running Tests

**With uv:**

```bash
# Install test dependencies (if added)
uv add pytest httpx

# Run tests
uv run pytest
```

**With pip (after activating virtual environment):**
```bash
# Install test dependencies
pip install pytest httpx

# Run tests
pytest
```

### Code Quality

The codebase follows Python best practices:

- Type hints for all functions
- Pydantic models for data validation
- SQLAlchemy for database operations
- FastAPI dependency injection for database sessions

## Deployment

### Production Setup

For production deployment:

**Linux/macOS:**

```bash
export DATABASE_URL="sqlite:///./sns_api.db"
export HOST="0.0.0.0"
export PORT="8000"

# Run with production settings
uvicorn main:app --host 0.0.0.0 --port 8000
```

**Windows (Command Prompt):**

```cmd
set DATABASE_URL=sqlite:///./sns_api.db
set HOST=0.0.0.0
set PORT=8000

# Run with production settings
uvicorn main:app --host 0.0.0.0 --port 8000
```

**Windows (PowerShell):**

```powershell
$env:DATABASE_URL="sqlite:///./sns_api.db"
$env:HOST="0.0.0.0"
$env:PORT="8000"

# Run with production settings
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Docker (Optional)

```dockerfile
FROM python:3.12-slim

WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN pip install uv && uv sync --frozen

COPY main.py ./
EXPOSE 8000

CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 8000 is busy, use a different port:

   **All platforms:**

   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8001 --reload
   ```

2. **Database permission errors**: Ensure write permissions in the project directory

3. **Import errors**: Make sure virtual environment is activated and dependencies are installed

4. **Virtual environment activation issues on Windows**: 

   - If PowerShell execution policy prevents script execution, run:

   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

   - Alternative: Use Command Prompt instead of PowerShell

5. **curl not found on Windows**: 

   - Install curl from https://curl.se/windows/ 
   - Or use PowerShell's `Invoke-RestMethod` as shown in examples
   - Or install Git Bash which includes curl

### Logs

Enable detailed logging by setting `echo=True` in the database engine configuration in `main.py`.
