import { useState } from "react";
import { postApi } from "../api/apiService";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import FloatingActionButton from "../components/common/FloatingActionButton";
import PostingModal from "../components/modal/PostingModal";

const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
      fill="currentColor"
    />
  </svg>
);

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchTerm.trim()) return;
    try {
      setIsLoading(true);
      setError("");
      // 전체 포스트를 불러와서 username 기준으로 프론트에서 필터링
      const response = await postApi.getPosts();
      const filtered = (response.data || []).filter(
        (post) =>
          post.username &&
          post.username.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      setSearchResults(filtered);
    } catch (error) {
      setError("An error occurred during search.");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  };

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
          <SearchIcon /> Search
        </h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search users..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            disabled={isLoading || !searchTerm.trim()}
          >
            <SearchIcon />
          </button>
        </form>
        {error && <div className="text-center py-10 text-red-500">{error}</div>}
        <div className="flex flex-col gap-4">
          {searchResults.length > 0 ? (
            <>
              <div className="text-gray-700">
                Search results for &apos;{searchTerm}&apos;: {searchResults.length}
              </div>
              <ul className="flex flex-col gap-4">
                {searchResults.map((post) => (
                  <li key={post.id} className="p-4 bg-white rounded shadow flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <div className="font-bold text-gray-900">{post.username}</div>
                      <div className="text-gray-500 text-sm">{post.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
              {isLoading && <div className="text-center py-10 text-gray-500">Loading...</div>}
            </>
          ) : (
            !isLoading &&
            searchTerm && (
              <div className="text-center py-10 text-gray-400">
                No search results found.
              </div>
            )
          )}
          {!searchTerm && !isLoading && (
            <div className="text-center py-10 text-gray-400">
              Try searching for a user.
            </div>
          )}
        </div>
      </div>
      {isAuthenticated && (
        <>
          <FloatingActionButton onClick={togglePostModal} />
          <PostingModal isOpen={isPostModalOpen} onClose={togglePostModal} />
        </>
      )}
    </Layout>
  );
};

export default SearchPage;
