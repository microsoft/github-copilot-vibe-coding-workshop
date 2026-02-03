import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import CommentList from './CommentList';
import CreateCommentModal from './CreateCommentModal';

const PostDetail = ({ post, onClose, apiAvailable }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateComment, setShowCreateComment] = useState(false);

  const loadComments = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getCommentsByPostId(post.id);
      setComments(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiAvailable) {
      loadComments();
    }
  }, [apiAvailable]);

  const handleCommentCreated = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!apiAvailable) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl my-8">
        <button
          onClick={onClose}
          className="text-2xl font-bold text-gray-500 hover:text-gray-700 float-right"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2">{post.username}</h2>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.createdAt).toLocaleDateString()}{' '}
          {new Date(post.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>

        <p className="text-gray-800 mb-4">{post.content}</p>

        <div className="flex gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
          <span>❤️ {post.likesCount} Likes</span>
          <span>💬 {post.commentsCount} Comments</span>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Comments</h3>
            <button
              onClick={() => setShowCreateComment(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
            >
              Add Comment
            </button>
          </div>

          {loading && <div className="text-center py-4">Loading comments...</div>}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              Error loading comments: {error}
            </div>
          )}

          {!loading && !error && (
            <CommentList
              comments={comments}
              postId={post.id}
              onCommentDeleted={(id) => setComments(comments.filter((c) => c.id !== id))}
            />
          )}
        </div>

        {showCreateComment && (
          <CreateCommentModal
            postId={post.id}
            onClose={() => setShowCreateComment(false)}
            onCommentCreated={handleCommentCreated}
          />
        )}
      </div>
    </div>
  );
};

export default PostDetail;
