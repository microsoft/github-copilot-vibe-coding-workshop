import { useState } from "react";
import Modal from "./Modal";
import { postApi } from "../../api/apiService";
import { useAuth } from "../../context/AuthContext";

const PostingModal = ({ isOpen, onClose, onPostCreated }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const handleContentChange = (e) => {
    setContent(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async () => {
    if (!content.trim()) {
      setError("Please enter content.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await postApi.createPost(content, user.username);
      setContent("");
      onClose();
      if (onPostCreated) {
        onPostCreated(response.data);
      }
    } catch (error) {
      setError("An error occurred while creating the post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (
      content.trim() &&
      !window.confirm("You have unsaved content. Are you sure you want to cancel?")
    ) {
      return;
    }
    setContent("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <div className="w-full mb-4">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Enter your content."
          disabled={isLoading}
          autoFocus
          className="w-full min-h-[150px] bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-base text-gray-900 dark:text-white placeholder-gray-400 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !content.trim()}
          className="bg-blue-600 text-white rounded-md px-8 py-3 text-sm transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processing..." : "Submit"}
        </button>
        <button
          onClick={handleCancel}
          disabled={isLoading}
          className="bg-gray-200 text-gray-800 rounded-md px-8 py-3 text-sm transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default PostingModal;
