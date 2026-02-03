"""
Data models and schemas for the Social Media API.

Pydantic models for request/response validation.
"""
from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    """Health check response model."""
    status: str = Field(..., description="Health status")
    message: str = Field(..., description="Status message")


class NewPostRequest(BaseModel):
    """Request model for creating a new post."""
    username: str = Field(..., min_length=1, max_length=100, description="Username of the post creator")
    content: str = Field(..., min_length=1, max_length=500, description="Post content")

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "john_doe",
                "content": "Just deployed my new project!"
            }
        }
    }


class UpdatePostRequest(BaseModel):
    """Request model for updating a post."""
    username: str = Field(..., min_length=1, max_length=100, description="Username of the post owner")
    content: str = Field(..., min_length=1, max_length=500, description="Updated post content")

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "john_doe",
                "content": "Updated post content"
            }
        }
    }

class LikeRequest(BaseModel):
    """Request model for liking a post."""
    username: str = Field(..., min_length=1, max_length=100, description="Username of the user liking the post")

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "john_doe"
            }
        }
    }


class LikeResponse(BaseModel):
    """Response model for like operations."""
    post_id: str = Field(..., description="ID of the liked post")
    likes: int = Field(..., description="Total number of likes on the post")
    liked_by: list = Field(..., description="List of usernames who liked the post")

    model_config = {
        "json_schema_extra": {
            "example": {
                "post_id": "550e8400-e29b-41d4-a716-446655440000",
                "likes": 5,
                "liked_by": ["user1", "user2", "user3", "user4", "user5"]
            }
        }
    }

class Post(BaseModel):
    """Post data model."""
    id: str = Field(..., description="Post ID (UUID)")
    username: str = Field(..., description="Username of the post creator")
    content: str = Field(..., description="Post content")
    created_at: datetime = Field(..., description="Creation timestamp")
    updated_at: datetime = Field(..., description="Last update timestamp")
    likes: int = Field(default=0, description="Number of likes")
    likes_by: List[str] = Field(default_factory=list, description="List of usernames who liked this post")

    model_config = {
        "json_schema_extra": {
            "example": {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "username": "john_doe",
                "content": "Just deployed my new project!",
                "created_at": "2024-01-28T10:30:00Z",
                "updated_at": "2024-01-28T10:30:00Z",
                "likes": 5,
                "likes_by": ["user1", "user2"]
            }
        }
    }


class NewCommentRequest(BaseModel):
    """Request model for creating a new comment."""
    username: str = Field(..., min_length=1, max_length=100, description="Username of the comment creator")
    content: str = Field(..., min_length=1, max_length=300, description="Comment content")

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "jane_smith",
                "content": "Great work! 🎉"
            }
        }
    }


class Comment(BaseModel):
    """Comment data model."""
    id: str = Field(..., description="Comment ID (UUID)")
    post_id: str = Field(..., description="Post ID this comment belongs to")
    username: str = Field(..., description="Username of the comment creator")
    content: str = Field(..., description="Comment content")
    created_at: datetime = Field(..., description="Creation timestamp")
    updated_at: datetime = Field(..., description="Last update timestamp")
    likes: int = Field(default=0, description="Number of likes on this comment")

    model_config = {
        "json_schema_extra": {
            "example": {
                "id": "550e8400-e29b-41d4-a716-446655440001",
                "post_id": "550e8400-e29b-41d4-a716-446655440000",
                "username": "jane_smith",
                "content": "Great work! 🎉",
                "created_at": "2024-01-28T10:35:00Z",
                "updated_at": "2024-01-28T10:35:00Z",
                "likes": 2
            }
        }
    }

class UpdateCommentRequest(BaseModel):
    """Request model for updating a comment."""
    username: str = Field(..., min_length=1, max_length=100, description="Username of the comment owner")
    content: str = Field(..., min_length=1, max_length=300, description="Updated comment content")

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "jane_smith",
                "content": "Updated comment content"
            }
        }
    }