"""
Simple Social Media API - FastAPI Backend

A basic Social Networking Service (SNS) API with in-memory database
that allows users to create, retrieve, update, and delete posts.
"""
from typing import List
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from models import (
    HealthResponse, Post, NewPostRequest, UpdatePostRequest, 
    Comment, NewCommentRequest, UpdateCommentRequest, LikeRequest, LikeResponse
)
from database import init_database, get_all_posts, create_post, get_post_by_id, update_post, delete_post, get_comments_by_post_id, create_comment, get_comment_by_post_and_id, update_comment_with_ownership, delete_comment_by_post_and_id, add_like, remove_like


# Lifespan context manager for startup/shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database when application starts."""
    init_database()
    yield


# Initialize FastAPI app
app = FastAPI(
    title="Simple Social Media API",
    description="A basic Social Networking Service (SNS) API with in-memory database for managing posts and comments.",
    version="1.0.0",
    contact={
        "name": "Contoso Product Team",
        "email": "support@contoso.com"
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
    },
    lifespan=lifespan
)

# Add CORS middleware to allow requests from everywhere
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Health check endpoint
@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Health check endpoint - Verify API is running and healthy."""
    return HealthResponse(
        status="healthy",
        message="API is running successfully"
    )


# Posts endpoints
@app.get("/api/posts", response_model=List[Post], status_code=status.HTTP_200_OK, tags=["Posts"])
async def get_posts():
    """List all posts in reverse chronological order - Retrieve all recent posts to browse what others are sharing."""
    try:
        posts = get_all_posts()
        # Sort by created_at in descending order (most recent first)
        return sorted(posts, key=lambda p: p.created_at, reverse=True)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while retrieving posts"
        )


@app.post("/api/posts", response_model=Post, status_code=status.HTTP_201_CREATED, tags=["Posts"])
async def create_new_post(post_data: NewPostRequest):
    """Create a new post - Create a new post to share something with others."""
    try:
        return create_post(post_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while creating the post"
        )


@app.get("/api/posts/{post_id}", response_model=Post, status_code=status.HTTP_200_OK, tags=["Posts"])
async def get_post(post_id: str):
    """Get a specific post by ID."""
    try:
        post = get_post_by_id(post_id)
        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        return post
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while retrieving the post"
        )


@app.patch("/api/posts/{post_id}", response_model=Post, status_code=status.HTTP_200_OK, tags=["Posts"])
async def update_post_endpoint(post_id: str, post_data: UpdatePostRequest):
    """Update a post - Only the post owner can update the content."""
    try:
        post = update_post(post_id, post_data)
        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Post not found or you do not have permission to update it"
            )
        return post
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while updating the post"
        )


@app.delete("/api/posts/{post_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Posts"])
async def delete_post_endpoint(post_id: str):
    """Delete a post by ID."""
    try:
        success = delete_post(post_id)
        if not success:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while deleting the post"
        )


@app.get("/api/posts/{post_id}/comments", response_model=List[Comment], status_code=status.HTTP_200_OK, tags=["Comments"])
async def get_post_comments(post_id: str):
    """Get all comments for a specific post - Returns empty list if no comments exist."""
    try:
        # First verify post exists
        post = get_post_by_id(post_id)
        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        # Return comments (empty list if none)
        return get_comments_by_post_id(post_id)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while retrieving comments"
        )


@app.post("/api/posts/{post_id}/comments", response_model=Comment, status_code=status.HTTP_201_CREATED, tags=["Comments"])
async def create_post_comment(post_id: str, comment_data: NewCommentRequest):
    """Create a new comment on a post."""
    try:
        # Create comment (returns None if post doesn't exist)
        comment = create_comment(post_id, comment_data)
        if not comment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        return comment
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while creating the comment"
        )


@app.get("/api/posts/{post_id}/comments/{comment_id}", response_model=Comment, status_code=status.HTTP_200_OK, tags=["Comments"])
async def get_post_comment(post_id: str, comment_id: str):
    """Get a specific comment from a post."""
    try:
        comment = get_comment_by_post_and_id(post_id, comment_id)
        if not comment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Comment with ID '{comment_id}' not found on post '{post_id}'"
            )
        return comment
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while retrieving the comment"
        )


@app.patch("/api/posts/{post_id}/comments/{comment_id}", response_model=Comment, status_code=status.HTTP_200_OK, tags=["Comments"])
async def update_post_comment(post_id: str, comment_id: str, comment_data: UpdateCommentRequest):
    """Update a comment - Only the comment owner can update the content."""
    try:
        comment = update_comment_with_ownership(post_id, comment_id, comment_data)
        if not comment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Comment not found or you do not have permission to update it"
            )
        return comment
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while updating the comment"
        )


@app.delete("/api/posts/{post_id}/comments/{comment_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Comments"])
async def delete_post_comment(post_id: str, comment_id: str):
    """Delete a comment from a post."""
    try:
        success = delete_comment_by_post_and_id(post_id, comment_id)
        if not success:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Comment with ID '{comment_id}' not found"
            )
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while deleting the comment"
        )


# Likes endpoints
@app.post("/api/posts/{post_id}/likes", response_model=LikeResponse, status_code=status.HTTP_200_OK, tags=["Likes"])
async def like_post(post_id: str, like_data: LikeRequest):
    """Like a post - A user can only like a post once."""
    try:
        post = add_like(post_id, like_data.username)
        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        return LikeResponse(
            post_id=post.id,
            likes=post.likes,
            liked_by=post.likes_by
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while liking the post"
        )


@app.delete("/api/posts/{post_id}/likes", response_model=LikeResponse, status_code=status.HTTP_200_OK, tags=["Likes"])
async def unlike_post(post_id: str, like_data: LikeRequest):
    """Unlike a post - Remove user's like if it exists."""
    try:
        post = remove_like(post_id, like_data.username)
        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Post with ID '{post_id}' not found"
            )
        return LikeResponse(
            post_id=post.id,
            likes=post.likes,
            liked_by=post.likes_by
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="An unexpected error occurred while unliking the post"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
