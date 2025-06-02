import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { commentApi } from "../../api/apiService";

const CommentInput = ({ postId, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim() || !user) return;

    setIsLoading(true);

    try {
      const response = await commentApi.createComment(
        postId,
        content,
        user.username
      );
      setContent("");
      if (onCommentAdded) {
        onCommentAdded(response.data);
      }
    } catch (error) {
      alert("An error occurred while adding the comment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-4 pt-4 border-t border-gray-300">
      <form className="flex gap-2 items-start" onSubmit={handleSubmit}>
        <textarea
          className="flex-1 min-h-[60px] bg-gray-100 dark:bg-gray-800 rounded-md p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
          value={content}
          onChange={handleContentChange}
          placeholder="Add a comment"
          disabled={isLoading || !user}
        />
        <button
          type="submit"
          disabled={!content.trim() || isLoading || !user}
          className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm h-10 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
