"""
In-memory database operations for the Social Media API.

This module manages all data persistence using in-memory storage.
Data is volatile and will be reset when the application restarts.

Uses simple Python data structures:
- dict: For O(1) lookups by ID
- list: For relationships (likes_by)
- TypedDict: For data structure definitions
"""
from typing import List, Optional, TypedDict
from datetime import datetime
from uuid import uuid4

from models import Post, NewPostRequest, UpdatePostRequest, Comment, NewCommentRequest


# ==================== In-Memory Data Models ====================

class PostData(TypedDict):
    """Internal storage model for posts."""
    id: str
    username: str
    content: str
    created_at: datetime
    updated_at: datetime
    likes: int
    likes_by: List[str]


class CommentData(TypedDict):
    """Internal storage model for comments."""
    id: str
    post_id: str
    username: str
    content: str
    created_at: datetime
    updated_at: datetime
    likes: int


class LikeData(TypedDict):
    """Internal storage model for likes."""
    post_id: str
    username: str


# ==================== In-Memory Storage ====================
# Using dictionaries for O(1) lookup performance
_posts_db: dict[str, PostData] = {}       # posts: {post_id -> PostData}
_comments_db: dict[str, CommentData] = {} # comments: {comment_id -> CommentData}
_likes_db: dict[str, LikeData] = {}       # likes: {like_id -> LikeData} (tracking for efficiency)


def init_database() -> None:
    """Initialize the database. Currently a no-op for in-memory storage."""
    global _posts_db, _comments_db, _likes_db
    _posts_db = {}
    _comments_db = {}
    _likes_db = {}


# ==================== Helper Functions ====================

def _post_to_model(post_data: PostData) -> Post:
    """Convert internal PostData to Pydantic Post model."""
    return Post(
        id=post_data["id"],
        username=post_data["username"],
        content=post_data["content"],
        created_at=post_data["created_at"],
        updated_at=post_data["updated_at"],
        likes=post_data["likes"],
        likes_by=post_data["likes_by"]
    )


def _comment_to_model(comment_data: CommentData) -> Comment:
    """Convert internal CommentData to Pydantic Comment model."""
    return Comment(
        id=comment_data["id"],
        post_id=comment_data["post_id"],
        username=comment_data["username"],
        content=comment_data["content"],
        created_at=comment_data["created_at"],
        updated_at=comment_data["updated_at"],
        likes=comment_data["likes"]
    )


# ==================== Posts Operations ====================

def get_all_posts() -> List[Post]:
    """Retrieve all posts from the database."""
    return [_post_to_model(post_data) for post_data in _posts_db.values()]


def get_post_by_id(post_id: str) -> Optional[Post]:
    """Retrieve a specific post by ID."""
    post_data = _posts_db.get(post_id)
    if post_data:
        return _post_to_model(post_data)
    return None


def create_post(post_data: NewPostRequest) -> Post:
    """Create a new post and store it in the database."""
    post_id = str(uuid4())
    now = datetime.utcnow()
    
    new_post: PostData = {
        "id": post_id,
        "username": post_data.username,
        "content": post_data.content,
        "created_at": now,
        "updated_at": now,
        "likes": 0,
        "likes_by": []
    }
    
    _posts_db[post_id] = new_post
    return _post_to_model(new_post)


def update_post(post_id: str, post_data: UpdatePostRequest) -> Optional[Post]:
    """Update an existing post if the username matches the owner.
    
    Returns None if post not found or username doesn't match.
    """
    if post_id not in _posts_db:
        return None
    
    post = _posts_db[post_id]
    
    # Verify ownership: username must match post creator
    if post["username"] != post_data.username:
        return None
    
    post["content"] = post_data.content
    post["updated_at"] = datetime.utcnow()
    
    return _post_to_model(post)


def delete_post(post_id: str) -> bool:
    """Delete a post and its associated comments and likes."""
    if post_id not in _posts_db:
        return False
    
    # Delete the post
    del _posts_db[post_id]
    
    # Delete all comments associated with this post
    comments_to_delete = [
        cid for cid, comment in _comments_db.items() 
        if comment["post_id"] == post_id
    ]
    for comment_id in comments_to_delete:
        del _comments_db[comment_id]
    
    # Delete all likes for this post
    likes_to_delete = [
        lid for lid, like in _likes_db.items() 
        if like["post_id"] == post_id
    ]
    for like_id in likes_to_delete:
        del _likes_db[like_id]
    
    return True


# ==================== Comments Operations ====================

def get_comments_by_post_id(post_id: str) -> List[Comment]:
    """Retrieve all comments for a specific post."""
    return [
        _comment_to_model(comment) 
        for comment in _comments_db.values() 
        if comment["post_id"] == post_id
    ]


def get_comment_by_id(comment_id: str) -> Optional[Comment]:
    """Retrieve a specific comment by ID."""
    comment_data = _comments_db.get(comment_id)
    if comment_data:
        return _comment_to_model(comment_data)
    return None


def get_comment_by_post_and_id(post_id: str, comment_id: str) -> Optional[Comment]:
    """Retrieve a specific comment by post ID and comment ID.
    
    Returns None if comment not found or doesn't belong to the post.
    """
    comment_data = _comments_db.get(comment_id)
    if comment_data and comment_data["post_id"] == post_id:
        return _comment_to_model(comment_data)
    return None


def create_comment(post_id: str, comment_data: NewCommentRequest) -> Optional[Comment]:
    """Create a new comment for a post."""
    if post_id not in _posts_db:
        return None
    
    comment_id = str(uuid4())
    now = datetime.utcnow()
    
    new_comment: CommentData = {
        "id": comment_id,
        "post_id": post_id,
        "username": comment_data.username,
        "content": comment_data.content,
        "created_at": now,
        "updated_at": now,
        "likes": 0
    }
    
    _comments_db[comment_id] = new_comment
    return _comment_to_model(new_comment)


def update_comment(comment_id: str, content: str) -> Optional[Comment]:
    """Update an existing comment."""
    if comment_id not in _comments_db:
        return None
    
    comment = _comments_db[comment_id]
    comment["content"] = content
    comment["updated_at"] = datetime.utcnow()
    
    return _comment_to_model(comment)


def update_comment_with_ownership(post_id: str, comment_id: str, comment_data) -> Optional[Comment]:
    """Update an existing comment if the username matches the owner.
    
    Returns None if comment not found, doesn't belong to post, or username doesn't match.
    """
    if comment_id not in _comments_db:
        return None
    
    comment = _comments_db[comment_id]
    
    # Verify comment belongs to post
    if comment["post_id"] != post_id:
        return None
    
    # Verify ownership: username must match comment creator
    if comment["username"] != comment_data.username:
        return None
    
    comment["content"] = comment_data.content
    comment["updated_at"] = datetime.utcnow()
    
    return _comment_to_model(comment)


def delete_comment(comment_id: str) -> bool:
    """Delete a comment."""
    if comment_id not in _comments_db:
        return False
    
    del _comments_db[comment_id]
    return True


def delete_comment_by_post_and_id(post_id: str, comment_id: str) -> bool:
    """Delete a comment if it belongs to the given post.
    
    Returns False if comment not found or doesn't belong to the post.
    """
    if comment_id not in _comments_db:
        return False
    
    comment = _comments_db[comment_id]
    
    # Verify comment belongs to post
    if comment["post_id"] != post_id:
        return False
    
    del _comments_db[comment_id]
    return True


# ==================== Likes Operations ====================

def add_like(post_id: str, username: str) -> Optional[Post]:
    """Add a like to a post from a user."""
    if post_id not in _posts_db:
        return None
    
    post = _posts_db[post_id]
    
    # Create like ID for tracking duplicates
    like_id = f"{post_id}#{username}"
    
    # Avoid duplicate likes
    if like_id not in _likes_db:
        like_data: LikeData = {
            "post_id": post_id,
            "username": username
        }
        _likes_db[like_id] = like_data
        post["likes_by"].append(username)
        post["likes"] = len(post["likes_by"])
    
    return _post_to_model(post)


def remove_like(post_id: str, username: str) -> Optional[Post]:
    """Remove a like from a post."""
    if post_id not in _posts_db:
        return None
    
    post = _posts_db[post_id]
    like_id = f"{post_id}#{username}"
    
    if like_id in _likes_db:
        del _likes_db[like_id]
        if username in post["likes_by"]:
            post["likes_by"].remove(username)
            post["likes"] = len(post["likes_by"])
    
    return _post_to_model(post)
