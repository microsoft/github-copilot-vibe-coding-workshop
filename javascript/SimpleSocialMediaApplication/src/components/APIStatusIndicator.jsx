import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

const APIStatusIndicator = ({ onStatusChange }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      const available = await api.isAvailable();
      setIsAvailable(available);
      onStatusChange(available);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);

    return () => clearInterval(interval);
  }, [onStatusChange]);

  if (isAvailable) {
    return null;
  }

  return (
    <div className="bg-red-500 text-white px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      <span className="font-semibold">Backend API is unavailable. Please check your connection.</span>
    </div>
  );
};

export default APIStatusIndicator;
