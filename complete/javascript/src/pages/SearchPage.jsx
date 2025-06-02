import { useState, useEffect } from "react";
import { searchApi } from "../api/apiService";
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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchTerm.trim()) return;
    try {
      setIsLoading(true);
      setError("");
      setPage(1);
      const response = await searchApi.searchUsers(searchTerm, 1);
      if (!response.data.items || response.data.items.length === 0) {
        setSearchResults([]);
        setHasMore(false);
        return;
      }
      const processedResults =
        response.data.items?.map((user) => ({
          ...user,
          username:
            typeof user.username === "string"
              ? decodeURIComponent(user.username)
              : user.username,
        })) || [];
      setSearchResults(processedResults);
      setHasMore(response.data.page < response.data.pages);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
      setError("Error occurred during search.");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (isLoading || !hasMore) return;
    try {
      setIsLoading(true);
      const nextPage = page + 1;
      const response = await searchApi.searchUsers(searchTerm, nextPage);
      const processedResults =
        response.data.items?.map((user) => ({
          ...user,
          username:
            typeof user.username === "string"
              ? decodeURIComponent(user.username)
              : user.username,
        })) || [];
      setSearchResults((prev) => [...prev, ...processedResults]);
      setPage(nextPage);
      setHasMore(response.data.page < response.data.pages);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 300 &&
        !isLoading &&
        hasMore
      ) {
        handleLoadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && document.activeElement.id === "search-input") {
        handleSearch();
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [searchTerm]);

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Search</h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="사용자 검색..."
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
                &apos;{searchTerm}&apos; 검색 결과: {searchResults.length}
              </div>
              <ul className="flex flex-col gap-4">
                {searchResults.map((user) => (
                  <li key={user.id} className="p-4 bg-white rounded shadow flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <div className="font-bold text-gray-900">{user.username}</div>
                    </div>
                  </li>
                ))}
              </ul>
              {isLoading && <div className="text-center py-10 text-gray-500">로딩 중...</div>}
              {hasMore && !isLoading && (
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mx-auto"
                >
                  더 보기
                </button>
              )}
            </>
          ) : (
            !isLoading &&
            searchTerm && (
              <div className="text-center py-10 text-gray-400">
                검색 결과가 없습니다.
              </div>
            )
          )}
          {!searchTerm && !isLoading && (
            <div className="text-center py-10 text-gray-400">
              사용자를 검색해 보세요.
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
