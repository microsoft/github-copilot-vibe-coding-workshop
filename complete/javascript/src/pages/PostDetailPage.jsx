import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postApi, commentApi } from "../api/apiService";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import CommentItem from "../components/comment/CommentItem";
import CommentInput from "../components/comment/CommentInput";

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

const BackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
      fill="currentColor"
    />
  </svg>
);

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPostDetail = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await postApi.getPost(postId);
      setPost(response.data);
      setIsLiked(response.data.isLiked || false);
      setLikesCount(response.data.likesCount || 0);
      setEditContent(response.data.content);
    } catch (error) {
      console.error("Error loading post detail:", error);
      setError("Error occurred while loading the post.");
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  const fetchComments = useCallback(async () => {
    try {
      setIsCommentsLoading(true);
      const response = await commentApi.getComments(postId);
      const items = response.data; // 응답이 배열임
      setComments(items);
    } catch (error) {
      console.error("Error loading comments:", error);
    } finally {
      setIsCommentsLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [fetchComments, postId]);

  const handleLikeToggle = async () => {
    if (!user) return;
    try {
      if (isLiked) {
        const response = await postApi.unlikePost(postId, user.username);
        setLikesCount(response.data.likesCount);
        setIsLiked(false);
      } else {
        const response = await postApi.likePost(postId, user.username);
        setLikesCount(response.data.likesCount);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
    if (post) {
      setPost({
        ...post,
        commentsCount: (post.commentsCount || 0) + 1,
      });
    }
  };

  const handleCommentDelete = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
    if (post) {
      setPost({
        ...post,
        commentsCount: Math.max((post.commentsCount || 0) - 1, 0),
      });
    }
  };

  const handleCommentUpdate = (updatedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === updatedComment.id ? updatedComment : comment
      )
    );
  };

  const isAuthor = user && post && user.username === post.username;

  const handleEditClick = () => {
    setIsEditing(true);
    setEditContent(post.content);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditContent(post.content);
  };

  const handleEditSave = async () => {
    if (!editContent.trim()) {
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await postApi.updatePost(
        postId,
        editContent,
        user.username
      );
      setPost(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Error occurred while updating the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClick = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }
    try {
      setIsSubmitting(true);
      await postApi.deletePost(postId, user.username);
      alert("Post deleted.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error occurred while deleting the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <p className="text-center py-4 text-gray-400">Loading...</p>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
          <p className="text-red-500 text-center mb-2">
            {error || "Post not found."}
          </p>
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            <BackIcon /> Go Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-2xl flex flex-col py-4 mx-auto">
        <div className="flex items-center mb-4">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1 px-2 py-1 rounded-full hover:bg-gray-100 text-gray-700"
          >
            <BackIcon /> Go Back
          </button>
          <h1 className="text-lg font-bold ml-4 text-gray-900 dark:text-white">
            Post Detail
          </h1>
        </div>
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-2" />
            <div className="text-base font-bold text-gray-900 dark:text-white">
              {post.username}
            </div>
          </div>
          <div className="mb-4">
            {isEditing ? (
              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full text-base p-2 border border-gray-300 rounded"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  disabled={isSubmitting}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleEditSave}
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white rounded px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditCancel}
                    disabled={isSubmitting}
                    className="bg-gray-200 text-gray-800 rounded px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-base text-gray-900 dark:text-white leading-relaxed whitespace-pre-wrap break-words">
                {post.content}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4 mt-2">
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
            <span className="text-sm text-gray-600">
              Comments {post.commentsCount}
            </span>
            {isAuthor && !isEditing && (
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={handleEditClick}
                  className="bg-blue-600 text-white rounded px-3 py-1 text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="bg-red-500 text-white rounded px-3 py-1 text-xs"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <section className="w-full">
          <h2 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
            Comments
          </h2>
          <CommentInput postId={postId} onCommentAdded={handleCommentAdded} />
          {comments.length > 0 ? (
            <div className="flex flex-col gap-2 mt-4">
              {comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  postId={postId}
                  onCommentDelete={handleCommentDelete}
                  onCommentUpdate={handleCommentUpdate}
                />
              ))}
            </div>
          ) : (
            !isCommentsLoading && (
              <p className="text-center py-8 text-gray-400">
                No comments yet. Be the first to comment!
              </p>
            )
          )}
          {isCommentsLoading && (
            <p className="text-center py-4 text-gray-400">Loading comments...</p>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default PostDetailPage;
