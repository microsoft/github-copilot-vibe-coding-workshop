import React from 'react';
import { api } from '../services/api';

const CommentList = ({ comments, postId, onCommentDeleted }) => {
  const handleDeleteComment = async (commentId) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      try {
        await api.deleteComment(postId, commentId);
        onCommentDeleted(commentId);
      } catch (err) {
        alert('Failed to delete comment: ' + err.message);
      }
    }
  };

  if (comments.length === 0) {
    return <div className="text-center py-4 text-gray-500">No comments yet</div>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-bold">{comment.username}</h4>
              <p className="text-xs text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}{' '}
                {new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          </div>
          <p className="text-gray-800">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
