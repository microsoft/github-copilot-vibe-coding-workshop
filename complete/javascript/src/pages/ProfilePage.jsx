import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userApi } from "../api/apiService";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import PostCard from "../components/post/PostCard";
import FloatingActionButton from "../components/common/FloatingActionButton";
import PostingModal from "../components/modal/PostingModal";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { userId: urlUserId } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState(false);

  const profileUserId = urlUserId
    ? parseInt(urlUserId)
    : user
    ? user.userId
    : null;

  useEffect(() => {
    if (user && profileUserId) {
      setIsMyProfile(profileUserId === user.userId);
    } else {
      setIsMyProfile(false);
    }
  }, [user, profileUserId]);

  useEffect(() => {
    if (profileUserId) {
      fetchUserProfile(profileUserId);
    } else {
      setIsLoading(false);
    }
  }, [profileUserId]);

  const fetchUserProfile = async (userId) => {
    try {
      setIsLoading(true);
      setError("");
      const response = await userApi.getUserProfile(userId);
      const profileData = response.data;
      if (profileData.username && typeof profileData.username === "string") {
        try {
          profileData.username = decodeURIComponent(profileData.username);
        } catch (e) {
          console.error("Error in profileData.username:", e);
        }
      }
      if (profileData.posts) {
        profileData.posts = profileData.posts.map((post) => {
          if (post.author && post.author.username) {
            try {
              post.author.username = decodeURIComponent(post.author.username);
            } catch (e) {
              console.error("Error in profileData.username:", e);
            }
          }
          return post;
        });
        profileData.posts.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      } else {
        profileData.posts = [];
      }
      if (profileData.comments) {
        profileData.comments = profileData.comments.map((comment) => {
          if (comment.author && comment.author.username) {
            try {
              comment.author.username = decodeURIComponent(
                comment.author.username
              );
            } catch (e) {
              console.error("Error decoding comment author username:", e);
            }
          }
          return comment;
        });
      } else {
        profileData.comments = [];
      }
      setUserProfile(profileData);
    } catch (error) {
      console.error("Error loading profile information:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      setError("Failed to load profile information.");
    } finally {
      setIsLoading(false);
    }
  };

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
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        posts: [newPost, ...userProfile.posts],
        posts_count: userProfile.posts_count + 1,
      });
    }
  };

  if (!profileUserId) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <p className="text-lg text-gray-700">로그인이 필요합니다.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            홈으로 가기
          </button>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center py-10 text-gray-500">
          프로필 정보를 불러오는 중...
        </div>
      </Layout>
    );
  }

  if (!userProfile) {
    return (
      <Layout>
        <div className="text-center py-10">
          <p className="text-red-500">사용자를 찾을 수 없습니다.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            뒤로 가기
          </button>
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
            <div className="text-xl font-bold text-gray-900">
              {userProfile.username}
            </div>
            <div className="text-gray-500 text-sm">
              {userProfile.email}
            </div>
          </div>
        </div>
        {isMyProfile && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        )}
        {error && <div className="text-red-500 text-center py-4">{error}</div>}
        <div className="flex flex-col gap-4">
          {userProfile.posts && userProfile.posts.length > 0 ? (
            userProfile.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              아직 게시물이 없습니다.
            </div>
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
