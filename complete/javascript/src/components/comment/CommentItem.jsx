import React from "react";
import { useAuth } from "../../context/AuthContext";
import { commentApi } from "../../api/apiService";

const CommentItem = ({ comment, onCommentDelete, onCommentUpdate, postId }) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState(comment.content);
  const isAuthor = user && user.username === comment.username;

  const handleEditClick = () => {
    setIsEditing(true);
    setEditContent(comment.content);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    if (editContent.trim() === "") return;

    try {
      await commentApi.updateComment(postId, comment.id, editContent, user.username);
      onCommentUpdate({ ...comment, content: editContent });
      setIsEditing(false);
    } catch (error) {
      console.error("Error occurred while editing comment:", error);
    }
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        await commentApi.deleteComment(postId, comment.id);
        onCommentDelete(comment.id);
      } catch (error) {
        console.error("Error occurred while deleting comment:", error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full py-3 border-b border-gray-300">
      <div className="flex items-center mb-2">
        <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 mr-2" />
        <div className="text-sm font-bold text-gray-900 dark:text-white">
          {comment.username}
        </div>
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-2">
          <textarea
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-2 text-sm text-gray-900 dark:text-white resize-vertical"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSaveEdit}
              className="bg-blue-600 text-white rounded-md px-3 py-1 text-xs"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-200 text-gray-800 rounded-md px-3 py-1 text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <p className="text-sm text-gray-900 dark:text-white leading-relaxed break-words flex-1">
            {comment.content}
          </p>
          {isAuthor && (
            <div className="flex gap-2 ml-2">
              <button
                onClick={handleEditClick}
                className="text-xs text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="text-xs text-gray-500 hover:underline"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
