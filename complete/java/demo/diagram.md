# SNS API Service Diagram

## Overall System Architecture

```
+--------------------------------------------+
|                FastAPI Application         |
+--------------------------------------------+
| - title: "Simple SNS API"                 |
| - CORS middleware added                    |
| - API router configuration (/api)         |
+--------------------------------------------+
               |
               | uses
               v
+--------------------------------------------+
|                Database                    |
+--------------------------------------------+
| - SQLite                                   |
| - Tables: posts, comments, likes           |
+--------------------------------------------+
               |
               | contains
               v
+--------------------------------------------+
|                Data Models                 |
+--------------------------------------------+
|          |           |           |         |
|          v           v           v         |
+----------+    +------+    +------+         |
|   Post   |    |Comment|    | Like |         |
+----------+    +------+    +------+         |
+--------------------------------------------+
               |
               | implements
               v
+--------------------------------------------+
|                API Endpoints               |
+--------------------------------------------+
| Post-related:                              |
| - GET /api/posts                          |
| - POST /api/posts                         |
| - GET /api/posts/{postId}                 |
| - PATCH /api/posts/{postId}               |
| - DELETE /api/posts/{postId}              |
|                                            |
| Comment-related:                           |
| - GET /api/posts/{postId}/comments        |
| - POST /api/posts/{postId}/comments       |
| - GET /api/posts/{postId}/comments/{id}   |
| - PATCH /api/posts/{postId}/comments/{id} |
| - DELETE /api/posts/{postId}/comments/{id}|
|                                            |
| Like-related:                              |
| - POST /api/posts/{postId}/likes          |
| - DELETE /api/posts/{postId}/likes        |
+--------------------------------------------+
```

## Detailed Data Model Diagram

```
+----------------+       +----------------+       +----------------+
|     Post       |       |    Comment     |       |      Like      |
+----------------+       +----------------+       +----------------+
| id: int        |       | id: int        |       | postId: int    |
| userName: str  |       | postId: int    |       | userName: str  |
| content: str   |       | userName: str  |       |                |
| createdAt: str |       | content: str   |       |                |
| updatedAt: str |       | createdAt: str |       |                |
| likeCount: int |       | updatedAt: str |       |                |
| commentCount:int|       |                |       |                |
+----------------+       +----------------+       +----------------+
        |                        |                        |
        | 1                      | *                      | *
        v                        v                        v
+----------------+       +----------------+       +----------------+
|   PostCreate   |       | CommentCreate  |       |   LikeBase    |
+----------------+       +----------------+       +----------------+
| userName: str  |       | userName: str  |       | userName: str  |
| content: str   |       | content: str   |       |                |
+----------------+       +----------------+       +----------------+
        |                        |
        v                        v
+----------------+       +----------------+
|   PostUpdate   |       | CommentUpdate  |
+----------------+       +----------------+
| content: str   |       | content: str   |
+----------------+       +----------------+
```

## Database Schema Diagram

```
+----------------+       +----------------+       +----------------+
|     posts      |       |    comments    |       |     likes      |
+----------------+       +----------------+       +----------------+
| id             |       | id             |       | postId         |
| userName       |       | postId         |       | userName       |
| content        |       | userName       |       +----------------+
| createdAt      |       | content        |              ^
| updatedAt      |       | createdAt      |              |
| likeCount      |       | updatedAt      |              |
| commentCount   |       +----------------+              |
+----------------+              ^                        |
        ^                       |                        |
        |                       +------------------------+
        |                       |                        |
        +-----------------------+------------------------+
                       Foreign Key Relationships
```

## API Flow Diagram

```
Client → HTTP Request → FastAPI Application → API Router → Business Logic → 
SQLite Database → Results → Pydantic Model Conversion → JSON Response → Client
```

## API Endpoint Descriptions

1. **Post-related APIs**
   - `GET /api/posts`: Retrieve all posts
   - `POST /api/posts`: Create a new post
   - `GET /api/posts/{postId}`: Retrieve a specific post
   - `PATCH /api/posts/{postId}`: Update a specific post
   - `DELETE /api/posts/{postId}`: Delete a specific post

2. **Comment-related APIs**
   - `GET /api/posts/{postId}/comments`: Retrieve comments for a specific post
   - `POST /api/posts/{postId}/comments`: Create a comment on a specific post
   - `GET /api/posts/{postId}/comments/{commentId}`: Retrieve a specific comment
   - `PATCH /api/posts/{postId}/comments/{commentId}`: Update a specific comment
   - `DELETE /api/posts/{postId}/comments/{commentId}`: Delete a specific comment

3. **Like-related APIs**
   - `POST /api/posts/{postId}/likes`: Add a like to a specific post
   - `DELETE /api/posts/{postId}/likes`: Remove a like from a specific post
