import { useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../../context/AuthContext";

const NameInputModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError("Please enter your name.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await login(username);
      setUsername("");
      onClose();
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading && username.trim()) {
      handleSubmit();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        Please enter your name
      </h2>

      <div className="w-full mb-4">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          onKeyPress={handleKeyPress}
          placeholder="Name"
          disabled={isLoading}
          autoFocus
          className="w-full bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !username.trim()}
          className="bg-blue-600 text-white rounded-md px-8 py-3 text-sm transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processing..." : "Done"}
        </button>
      </div>
    </Modal>
  );
};

export default NameInputModal;
