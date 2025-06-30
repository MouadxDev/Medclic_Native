import React, { createContext, useContext, useState, useEffect } from 'react';
import { Text } from 'react-native'; // Ensure you import Text
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaults = {
  user: {
    id: null,
    name: '',
    email: '',
    userRole: '',
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

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }                      
    };
    loadUser();
  }, []);

  const updateUser = async (newUser) => {
    setUser(newUser);
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
    if (newUser.token) {
      await AsyncStorage.setItem('token', newUser.token);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaults.theme);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };
    loadTheme();
  }, []);

  const updateTheme = async (newTheme) => {
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
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