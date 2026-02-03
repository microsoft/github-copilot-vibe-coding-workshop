import React, { createContext, useState, useCallback } from 'react';

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const setCurrentUsername = useCallback((name) => {
    setUsername(name);
  }, []);

  return (
    <UsernameContext.Provider value={{ username, setCurrentUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsername = () => {
  const context = React.useContext(UsernameContext);
  if (!context) {
    throw new Error('useUsername must be used within UsernameProvider');
  }
  return context;
};
