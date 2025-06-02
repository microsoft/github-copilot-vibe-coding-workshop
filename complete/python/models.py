"""
Pydantic models based on OpenAPI schema definitions.
"""
from datetime import datetime
from typing import List, Optional
from uuid import UUID
from pydantic import BaseModel, Field


# Request/Response Models
class NewPostRequest(BaseModel):
    username: str = Field(..., min_length=1, max_length=50, description="Username of the post author")
    content: str = Field(..., min_length=1, max_length=2000, description="Content of the post")


class UpdatePostRequest(BaseModel):
    username: str = Field(..., min_length=1, max_length=50, description="Username of the post author (for validation)")
    content: str = Field(..., min_length=1, max_length=2000, description="Updated content of the post")


class NewCommentRequest(BaseModel):
    username: str = Field(..., min_length=1, max_length=50, description="Username of the comment author")
    content: str = Field(..., min_length=1, max_length=1000, description="Content of the comment")


class UpdateCommentRequest(BaseModel):
    username: str = Field(..., min_length=1, max_length=50, description="Username of the comment author (for validation)")
    content: str = Field(..., min_length=1, max_length=1000, description="Updated content of the comment")


class LikeRequest(BaseModel):
    username: str = Field(..., description="Username of the user liking the post")


class LikeResponse(BaseModel):
    postId: str = Field(..., description="ID of the liked post")
    username: str = Field(..., description="Username of the user who liked the post")
    likedAt: datetime = Field(..., description="Timestamp when the post was liked")


class Post(BaseModel):
    id: str = Field(..., description="Unique identifier for the post")
    username: str = Field(..., min_length=1, max_length=50, description="Username of the post author")
    content: str = Field(..., min_length=1, max_length=2000, description="Content of the post")
    createdAt: datetime = Field(..., description="Timestamp when the post was created")
    updatedAt: datetime = Field(..., description="Timestamp when the post was last updated")
    likesCount: int = Field(..., ge=0, description="Number of likes on the post")
    commentsCount: int = Field(..., ge=0, description="Number of comments on the post")


class Comment(BaseModel):
    id: str = Field(..., description="Unique identifier for the comment")
    postId: str = Field(..., description="ID of the post this comment belongs to")
    username: str = Field(..., min_length=1, max_length=50, description="Username of the comment author")
    content: str = Field(..., min_length=1, max_length=1000, description="Content of the comment")
    createdAt: str = Field(..., description="Timestamp when the comment was created")
    updatedAt: str = Field(..., description="Timestamp when the comment was last updated")


class Error(BaseModel):
    error: str = Field(..., description="Error type")
    message: str = Field(..., description="Error message")
    details: Optional[List[str]] = Field(None, description="Additional error details")
