import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useUsername } from '../context/UsernameContext';

const PostList = ({ onPostClick, onCreatePostClick, apiAvailable }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { username } = useUsername();

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getPosts();
      setPosts(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiAvailable) {
      loadPosts();
    }
  }, [apiAvailable]);

  if (!apiAvailable) {
    return null;
  }

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        Error loading posts: {error}
        <button
          onClick={loadPosts}
          className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Posts</h2>
        <button
          onClick={onCreatePostClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No posts yet. Create one to get started!
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onPostClick(post)}
              className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg">{post.username}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}{' '}
                    {new Date(post.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-3">{post.content}</p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>❤️ {post.likesCount} Likes</span>
                <span>💬 {post.commentsCount} Comments</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
