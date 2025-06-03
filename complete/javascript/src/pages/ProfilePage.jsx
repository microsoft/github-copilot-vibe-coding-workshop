import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from "../api/apiService";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import PostCard from "../components/post/PostCard";
import FloatingActionButton from "../components/common/FloatingActionButton";
import PostingModal from "../components/modal/PostingModal";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { userId: urlUserId } = useParams();
  // userId가 아니라 username을 기준으로 동작하도록 변경
  const username = urlUserId || (user && user.username);
  const isMyProfile = user && username === user.username;

  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  useEffect(() => {
    if (!username) {
      setIsLoading(false);
      return;
    }
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await postApi.getPosts();
        // username이 일치하는 포스트만 필터링
        const posts = (response.data || []).filter(
          (post) => post.username === username
        );
        // 최신순 정렬
        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setUserPosts(posts);
      } catch (err) {
        setError("Failed to load profile information.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [username]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  const togglePostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  };

  const handlePostCreated = (newPost) => {
    setUserPosts((prev) => [newPost, ...prev]);
  };

  if (!username) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <p className="text-lg text-gray-700">Login is required.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center py-10 text-gray-500">
          Loading profile information...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200" />
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {username}
            </div>
          </div>
        </div>
        {isMyProfile && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-6"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {error && <div className="text-red-500 text-center py-4">{error}</div>}
        <div className="flex flex-col gap-4">
          {userPosts && userPosts.length > 0 ? (
            userPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="text-center py-10 text-gray-500">No posts yet.</div>
          )}
        </div>
        <FloatingActionButton onClick={togglePostModal} />
        <PostingModal
          isOpen={isPostModalOpen}
          onClose={togglePostModal}
          onPostCreated={handlePostCreated}
        />
      </div>
    </Layout>
  );
};

export default ProfilePage;
