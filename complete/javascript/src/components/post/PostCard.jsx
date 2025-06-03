import React from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../api/apiService";
import { useAuth } from "../../context/AuthContext";

const HeartIcon = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="2"
    />
  </svg>
);

const CommentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
      fill="currentColor"
    />
  </svg>
);

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = React.useState(post.is_liked || false);
  const [likesCount, setLikesCount] = React.useState(post.likesCount || 0);

  const handlePostClick = () => {
    navigate(`/post/${post.id}`);
  };

  const handleLikeToggle = async (e) => {
    e.stopPropagation();
    try {
      if (!user) return;
      if (isLiked) {
        const response = await postApi.unlikePost(post.id, user.username);
        setLikesCount(response.data.likes_count);
        setIsLiked(false);
      } else {
        const response = await postApi.likePost(post.id, user.username);
        setLikesCount(response.data.likes_count);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error occurred while processing like:", error);
    }
  };

  const handleCommentClick = (e) => {
    e.stopPropagation();
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      className="flex flex-col w-full max-w-2xl bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 cursor-pointer"
      onClick={handlePostClick}
    >
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-2" />
        <div className="text-base font-bold text-gray-900 dark:text-white">
          {post.username}
        </div>
      </div>
      <div className="mb-2" onClick={handlePostClick}>
        <p className="text-base text-gray-900 dark:text-white leading-relaxed break-words">
          {post.content}
        </p>
      </div>
      <div className="flex gap-6 mt-2">
        <button
          onClick={handleLikeToggle}
          className={`flex items-center gap-1 ${
            isLiked
              ? "text-red-500"
              : "text-gray-500 hover:text-red-500"
          }`}
          aria-label="Like"
        >
          <HeartIcon filled={isLiked} />
          {likesCount > 0 && <span className="text-xs">{likesCount}</span>}
        </button>
        <button
          onClick={handleCommentClick}
          className="flex items-center gap-1 text-gray-500 hover:text-blue-500"
          aria-label="Comment"
        >
          <CommentIcon />
          {post.commentsCount > 0 && (
            <span className="text-xs">{post.commentsCount}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
