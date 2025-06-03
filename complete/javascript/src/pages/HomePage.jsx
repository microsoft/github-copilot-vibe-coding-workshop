import { useState, useEffect, useCallback } from "react";
import { postApi } from "../api/apiService";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import PostCard from "../components/post/PostCard";
import FloatingActionButton from "../components/common/FloatingActionButton";
import PostingModal from "../components/modal/PostingModal";
import NameInputModal from "../components/modal/NameInputModal";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const fetchPosts = useCallback(async () => {
    if (!isAuthenticated) return;

    try {
      setIsLoading(true);
      setError("");
      const response = await postApi.getPosts();
      setPosts(response.data);
    } catch (error) {
      setError("An error occurred while loading posts.");
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setIsNameModalOpen(true);
    } else if (isAuthenticated) {
      fetchPosts();
    }
  }, [authLoading, isAuthenticated, fetchPosts]);

  const handleOpenPostModal = () => setIsPostModalOpen(true);
  const handleClosePostModal = () => setIsPostModalOpen(false);
  const handlePostCreated = () => {
    fetchPosts();
    setIsPostModalOpen(false);
  };

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contoso Outdoor Social</h1>
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">Loading posts...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">No posts yet.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        <FloatingActionButton onClick={handleOpenPostModal} />
        <PostingModal isOpen={isPostModalOpen} onClose={handleClosePostModal} onPostCreated={handlePostCreated} />
        <NameInputModal isOpen={isNameModalOpen} onClose={() => setIsNameModalOpen(false)} />
      </div>
    </Layout>
  );
};

export default HomePage;
