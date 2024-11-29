import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

// Import screens (dynamic imports can cause issues with React Navigation)
// Replace React.lazy with static imports for simplicity and reliability
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Create Stack Navigator
const Stack = createStackNavigator();

// Authentication state (mock implementation for now)
const isAuthenticated = false; // Replace with actual authentication logic

export default function Router() {
  const [isSplashLoaded, setSplashLoaded] = useState(false); // Track SplashScreen state

  useEffect(() => {
    // Simulate loading process (e.g., API checks, animations, etc.)
    const timeout = setTimeout(() => setSplashLoaded(true), 3000); // 3-second splash screen
    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Show SplashScreen until it is loaded */}
        {!isSplashLoaded ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : isAuthenticated ? (
          // Load authenticated routes
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          // Load unauthenticated routes
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Fallback loading component
function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}
