import { useState } from 'react';
import { useUsername } from './context/UsernameContext';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePostModal from './components/CreatePostModal';
import UsernameModal from './components/UsernameModal';
import APIStatusIndicator from './components/APIStatusIndicator';
import './App.css';

function App() {
  const { username } = useUsername();
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [showUsernameModal, setShowUsernameModal] = useState(!username);

  const handlePostCreated = () => {
    setShowCreatePost(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <APIStatusIndicator onStatusChange={setApiAvailable} />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-900">Social Media</h1>
          {username && (
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-700">@{username}</span>
              <button
                onClick={() => setShowUsernameModal(true)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-sm"
              >
                Change Username
              </button>
            </div>
          )}
        </div>

        {apiAvailable && username && (
          <>
            <PostList
              onPostClick={setSelectedPost}
              onCreatePostClick={() => setShowCreatePost(true)}
              apiAvailable={apiAvailable}
            />

            {selectedPost && (
              <PostDetail
                post={selectedPost}
                onClose={() => setSelectedPost(null)}
                apiAvailable={apiAvailable}
              />
            )}

            {showCreatePost && (
              <CreatePostModal
                isOpen={showCreatePost}
                onClose={() => setShowCreatePost(false)}
                onPostCreated={handlePostCreated}
              />
            )}
          </>
        )}

        {!apiAvailable && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Backend API Unavailable</h2>
            <p>
              The application cannot connect to the backend API at http://localhost:8000. Please ensure the
              API server is running and try again.
            </p>
          </div>
        )}
      </div>

      <UsernameModal isOpen={showUsernameModal} onClose={() => setShowUsernameModal(false)} />
    </div>
  );
}

export default App;
