import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';

import { useUser } from '../contexts/AppContext';

import MyPatientsScreen from '../screens/MyPatientsScreen';
import ConsultationScreen from '../screens/ConsultationScreen';
import AbsencesScreen from '../screens/AbsencesScreen';
import MyRDVsScreen from '../screens/MyRDVsScreen';
import ComplaintScreen from '../screens/ComplaintScreen';
import MyDocumentsScreen from '../screens/MyDocumentsScreen';



// Create Stack Navigator
const Stack = createStackNavigator();

// Authentication state (mock implementation for now)


export default function Router() {
  const { user } = useUser();
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
        ) :  user.isAuthenticated  ? (
          // Load authenticated routes
          <>
             <Stack.Screen
              name="Home"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <HomeScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            <Stack.Screen
              name="MyPatientsScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <MyPatientsScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            <Stack.Screen
              name="MyRDVsScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <MyRDVsScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            <Stack.Screen
              name="AbsencesScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <AbsencesScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            <Stack.Screen
              name="ConsultationScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <ConsultationScreen />
                </Layout>
              )}
              
            </Stack.Screen>
            
            <Stack.Screen
              name="ComplaintScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <ComplaintScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            <Stack.Screen
              name="MyDocumentsScreen"
              options={{ headerShown: false }} >

              {() => (
                <Layout>
                  <MyDocumentsScreen />
                </Layout>
              )}
              
            </Stack.Screen>

            
            
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          // Unauthenticated flow: Start with WelcomeScreen
          <>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
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


