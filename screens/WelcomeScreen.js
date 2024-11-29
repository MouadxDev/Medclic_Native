import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames'; // Tailwind styling
import { LinearGradient } from 'expo-linear-gradient'; // For gradient backgrounds
import { useFonts } from 'expo-font'; // Expo font loader
import Assets from '../components/Assets'; // Import logo
import fonts from '../assets/fonts/fonts'; // Import centralized fonts

export default function WelcomeScreen({ navigation }) {
  // Load fonts
  const [fontsLoaded] = useFonts(fonts);

  // Show a loading spinner until fonts are loaded
  if (!fontsLoaded) {
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
          { height: 354, width: 335 }, // Explicit height and width for the logo container
        ]}
      >
        <Image source={Assets.Logo} style={tw`w-40 h-40`} resizeMode="contain" />
      </View>

      {/* Text Section */}
      <View style={tw`mb-12 px-5`}>
        <Text
          style={[
            tw`text-blue-700 text-xl text-center`,
            { fontFamily: 'PoppinsRegular' }, // Apply bold font from centralized fonts
          ]}
        >
          Découvrez votre parcours{'\n'}de santé avec Mediclinic
        </Text>
        <Text
          style={[
            tw`text-green-500 text-center mt-3`,
            { fontFamily: 'PoppinsRegular' }, // Apply regular font from centralized fonts
          ]}
        >
          Explorez les solutions de santé adaptées à vos besoins et trouvez le meilleur soin pour vous.
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={tw`w-full px-4`}>
        {/* Create Account Button with Gradient */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <LinearGradient
            colors={['#37A5E8', '#255A9B']} // Updated gradient colors
            style={tw`py-4 rounded-lg mb-4`}
          >
            <Text
              style={[
                tw`text-white text-center text-lg font-semibold`,
                { fontFamily: 'PoppinsRegular' }, // Apply bold font
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
              tw`text-blue-600 text-center text-lg font-semibold`,
              { fontFamily: 'PoppinsRegular' }, // Apply bold font
            ]}
          >
            Vous avez déjà un compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
