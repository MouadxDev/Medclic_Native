import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient buttons
import tw from 'tailwind-react-native-classnames'; // Tailwind for quick styling
import Assets from '../components/Assets'; // Import logo
import { useUser } from '../contexts/AppContext';
import { Users } from '../services/Users';

import { Toast, useToast } from 'react-native-toast-notifications';

export default function LoginScreen({ navigation }) {
  const usersService = new Users();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser } = useUser();

  const showToast = (type, message) => {
    Toast.show(message, { type });
  };
  

  const handleLogin = async () => {
    try {
      const userData = await usersService.getAll(); 
      const user = userData.data.user;

        setUser({
          id: user.id || '',
          name: user.name || 'Unknown',
          email: user.email || '',
          userRole: user.userRole || 'guest',
          isAuthenticated: !!user.token, 
          token: user.token || null,
        });
      
      showToast('success', 'Connexion réussie')
      
    } catch (error) {
     
      showToast('error', 'Invalid email or password.')

    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View
        style={[
          tw`bg-blue-500 rounded-2xl justify-center items-center mt-1 mb-24`,
          { height: 180, width: 335 }, // Matches your design proportions
        ]}
      >
        <Image source={Assets.Logo} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Welcome Text Section */}
      <View style={tw`mb-16`}>
        <Text style={[styles.title, { fontFamily: 'PoppinsBold' }]}>Bonjour !</Text>
        <Text style={[styles.subtitle, { fontFamily: 'PoppinsRegular' }]}>
          Bienvenue, tu nous as manqué !
        </Text>
      </View>

      {/* Input Fields */}
      <View style={tw`w-full px-6`}>
        <TextInput
          style={styles.input}
          placeholder="Votre email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Buttons Section */}
      <View style={tw`w-full px-6 mt-4`}>
        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin}>
          <LinearGradient
            colors={['#37A5E8', '#255A9B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={[styles.buttonText, { fontFamily: 'PoppinsBold' }]}>
              Se connecter
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Register Text */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={tw`mt-4`}
        >
          <Text style={styles.registerText}>
            Pas encore membre ?{' '}
            <Text style={[styles.registerLink, { fontFamily: 'PoppinsRegular' }]}>
              S'inscrire maintenant
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjusted logo size
    height: 80,
  },
  title: {
    fontSize: 24,
    color: '#1978EF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#40E4AD',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'PoppinsRegular', // Apply the Poppins font
  },
  buttonGradient: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  registerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  registerLink: {
    color: '#40E4AD',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
