import React, { createContext, useContext, useState } from 'react';
import { Text } from 'react-native'; // Ensure you import Text

// Default Values
const defaults = {
  user: {
    id: null,
    name: '',
    email: '',
    userRole:'',
    isAuthenticated: false,
    token: '',
  },
  theme: 'light',
};

// Contexts
const UserContext = createContext(defaults.user);
const ThemeContext = createContext(defaults.theme);
    
// Providers
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaults.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaults.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Combined Provider
export const AppProvider = ({ children }) => (
  <UserProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UserProvider>
);

// Hooks for Access
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Export Defaults for Easy Extension
export const appDefaults = defaults;