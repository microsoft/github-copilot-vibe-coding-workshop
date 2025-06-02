"""
Database operations and initialization for the SNS API.
"""
import sqlite3
import uuid
from datetime import datetime
from typing import List, Optional
from contextlib import contextmanager

from models import Post, Comment, NewPostRequest, UpdatePostRequest, NewCommentRequest, UpdateCommentRequest


DATABASE_NAME = "sns_api.db"


def init_database():
    """Initialize the SQLite database with required tables."""
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        
        # Create posts table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS posts (
                id TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        """)
        
        # Create comments table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS comments (
                id TEXT PRIMARY KEY,
                post_id TEXT NOT NULL,
                username TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
            )
        """)
        
        # Create likes table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS likes (
                post_id TEXT NOT NULL,
                username TEXT NOT NULL,
                liked_at TEXT NOT NULL,
                PRIMARY KEY (post_id, username),
                FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
            )
        """)
        
        conn.commit()


@contextmanager
def get_db_connection():
    """Get database connection context manager."""
    conn = sqlite3.connect(DATABASE_NAME)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def get_all_posts() -> List[Post]:
    """Retrieve all posts with likes and comments counts."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT 
                p.id, p.username, p.content, p.created_at, p.updated_at,
                COUNT(DISTINCT l.username) as likes_count,
                COUNT(DISTINCT c.id) as comments_count
            FROM posts p
            LEFT JOIN likes l ON p.id = l.post_id
            LEFT JOIN comments c ON p.id = c.post_id
            GROUP BY p.id, p.username, p.content, p.created_at, p.updated_at
            ORDER BY p.created_at DESC
        """)
        
        posts = []
        for row in cursor.fetchall():
            posts.append(Post(
                id=row["id"],
                username=row["username"],
                content=row["content"],
                createdAt=row["created_at"],
                updatedAt=row["updated_at"],
                likesCount=row["likes_count"],
                commentsCount=row["comments_count"]
            ))
        return posts


def create_post(post_data: NewPostRequest) -> Post:
    """Create a new post."""
    post_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat() + "Z"
    
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO posts (id, username, content, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?)
        """, (post_id, post_data.username, post_data.content, now, now))
        conn.commit()
    
    return Post(
        id=post_id,
        username=post_data.username,
        content=post_data.content,
        createdAt=now,
        updatedAt=now,
        likesCount=0,
        commentsCount=0
    )


def get_post_by_id(post_id: str) -> Optional[Post]:
    """Retrieve a post by its ID."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT 
                p.id, p.username, p.content, p.created_at, p.updated_at,
                COUNT(DISTINCT l.username) as likes_count,
                COUNT(DISTINCT c.id) as comments_count
            FROM posts p
            LEFT JOIN likes l ON p.id = l.post_id
            LEFT JOIN comments c ON p.id = c.post_id
            WHERE p.id = ?
            GROUP BY p.id, p.username, p.content, p.created_at, p.updated_at
        """, (post_id,))
        
        row = cursor.fetchone()
        if row:
            return Post(
                id=row["id"],
                username=row["username"],
                content=row["content"],
                createdAt=row["created_at"],
                updatedAt=row["updated_at"],
                likesCount=row["likes_count"],
                commentsCount=row["comments_count"]
            )
        return None


def update_post(post_id: str, post_data: UpdatePostRequest) -> Optional[Post]:
    """Update an existing post."""
    now = datetime.utcnow().isoformat() + "Z"
    
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE posts 
            SET content = ?, updated_at = ?
            WHERE id = ? AND username = ?
        """, (post_data.content, now, post_id, post_data.username))
        
        if cursor.rowcount == 0:
            return None
        
        conn.commit()
    
    return get_post_by_id(post_id)


def delete_post(post_id: str) -> bool:
    """Delete a post by its ID."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM posts WHERE id = ?", (post_id,))
        deleted = cursor.rowcount > 0
        conn.commit()
        return deleted


def get_comments_by_post_id(post_id: str) -> List[Comment]:
    """Retrieve all comments for a specific post."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, post_id, username, content, created_at, updated_at
            FROM comments
            WHERE post_id = ?
            ORDER BY created_at ASC
        """, (post_id,))
        
        comments = []
        for row in cursor.fetchall():
            comments.append(Comment(
                id=row["id"],
                postId=row["post_id"],
                username=row["username"],
                content=row["content"],
                createdAt=row["created_at"],
                updatedAt=row["updated_at"]
            ))
        return comments


def create_comment(post_id: str, comment_data: NewCommentRequest) -> Optional[Comment]:
    """Create a new comment for a post."""
    # Check if post exists
    if not get_post_by_id(post_id):
        return None
    
    comment_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat() + "Z"
    
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO comments (id, post_id, username, content, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (comment_id, post_id, comment_data.username, comment_data.content, now, now))
        conn.commit()
    
    return Comment(
        id=comment_id,
        postId=post_id,
        username=comment_data.username,
        content=comment_data.content,
        createdAt=now,
        updatedAt=now
    )


def get_comment_by_id(post_id: str, comment_id: str) -> Optional[Comment]:
    """Retrieve a specific comment by post and comment IDs."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, post_id, username, content, created_at, updated_at
            FROM comments
            WHERE id = ? AND post_id = ?
        """, (comment_id, post_id))
        
        row = cursor.fetchone()
        if row:
            return Comment(
                id=row["id"],
                postId=row["post_id"],
                username=row["username"],
                content=row["content"],
                createdAt=row["created_at"],
                updatedAt=row["updated_at"]
            )
        return None


def update_comment(post_id: str, comment_id: str, comment_data: UpdateCommentRequest) -> Optional[Comment]:
    """Update an existing comment."""
    now = datetime.utcnow().isoformat() + "Z"
    
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE comments 
            SET content = ?, updated_at = ?
            WHERE id = ? AND post_id = ? AND username = ?
        """, (comment_data.content, now, comment_id, post_id, comment_data.username))
        
        if cursor.rowcount == 0:
            return None
        
        conn.commit()
    
    return get_comment_by_id(post_id, comment_id)


def delete_comment(post_id: str, comment_id: str) -> bool:
    """Delete a comment by post and comment IDs."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM comments WHERE id = ? AND post_id = ?", (comment_id, post_id))
        deleted = cursor.rowcount > 0
        conn.commit()
        return deleted


def add_like(post_id: str, username: str) -> Optional[str]:
    """Add a like to a post."""
    # Check if post exists
    if not get_post_by_id(post_id):
        return None
    
    now = datetime.utcnow().isoformat() + "Z"
    
    with get_db_connection() as conn:
        cursor = conn.cursor()
        try:
            cursor.execute("""
                INSERT INTO likes (post_id, username, liked_at)
                VALUES (?, ?, ?)
            """, (post_id, username, now))
            conn.commit()
            return now
        except sqlite3.IntegrityError:
            # Like already exists
            return None


def remove_like(post_id: str, username: str) -> bool:
    """Remove a like from a post."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM likes WHERE post_id = ? AND username = ?", (post_id, username))
        deleted = cursor.rowcount > 0
        conn.commit()
        return deleted
