import React, { useState } from 'react';
import { useUsername } from '../context/UsernameContext';

const UsernameModal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const { setCurrentUsername } = useUsername();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCurrentUsername(inputValue.trim());
      setInputValue('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Enter Username</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Username (1-50 characters)"
            maxLength="50"
            minLength="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default UsernameModal;
