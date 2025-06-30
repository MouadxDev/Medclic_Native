import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames'; // Tailwind styling
import { LinearGradient } from 'expo-linear-gradient'; // For gradient backgrounds
import { useFonts } from 'expo-font'; // Expo font loader
import Assets from '../components/Assets'; // Import logo
import fonts from '../assets/fonts/fonts'; // Import centralized fonts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../contexts/AppContext'; // Import User Context
import { Users } from '../services/Users'; // Import Users service

export default function WelcomeScreen({ navigation }) {
  const { setUser } = useUser(); // Access setUser from context
  const usersService = new Users(); // Create instance of Users service
  const [loading, setLoading] = useState(true); // Loading state
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    const checkStoredToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        const userData = await usersService.checkToken(storedToken);
        if (userData) {
          // If token is valid, log the user in
          setUser({
            id: userData.id || '',
            name: userData.name || 'Unknown',
            email: userData.email || '',
            userRole: userData.userRole || 'guest',
            isAuthenticated: true,
            token: storedToken,
          });
          navigation.replace('Home'); // Redirect to home screen
        } else {
          await AsyncStorage.removeItem('token');
          navigation.replace('Login');
        }
      } else {
        navigation.replace('Login');
      }
      setLoading(false);
    };

    checkStoredToken();
  }, []);

  if (loading || !fontsLoaded) {
    return (
      <View style={[tw`flex-1 justify-center items-center`, { backgroundColor: '#fff' }]}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-white px-3`}>
      {/* Logo Section with Blue Background */}
      <View
        style={[
          tw`bg-blue-500 rounded-2xl justify-center items-center mt-16 mb-8`,
          { height: 354, width: 335 },
        ]}
      >
        <Image source={Assets.Logo} style={tw`w-40 h-40`} resizeMode="contain" />
      </View>

      {/* Text Section */}
      <View style={tw`mb-12 px-5`}>
        <Text
          style={[
            tw`text-blue-700 text-xl text-center`,
            { fontFamily: 'PoppinsRegular' },
          ]}
        >
          Découvrez votre parcours{''}de santé avec Mediclic
        </Text>
        <Text
          style={[
            tw`text-center mt-3`,
            { fontFamily: 'PoppinsRegular', color: '#40E4AD' },
          ]}
        >
          Explorez les solutions de santé adaptées à vos besoins et trouvez le meilleur soin pour vous.
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={tw`w-full px-4`}>
        {/* Create Account Button with Gradient */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <LinearGradient
            colors={['#37A5E8', '#255A9B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={tw`py-4 rounded-lg mb-4`}
          >
            <Text
              style={[
                tw`text-white text-center font-semibold`,
                { fontFamily: 'PoppinsRegular' },
              ]}
            >
              Créer un compte
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Already Have an Account Button */}
        <TouchableOpacity
          style={tw`border border-blue-500 py-4 rounded-lg`}
          onPress={() => navigation.navigate('Login')}
        >
          <Text
            style={[
              tw`text-blue-600 text-center font-semibold`,
              { fontFamily: 'PoppinsRegular' },
            ]}
          >
            Vous avez déjà un compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
