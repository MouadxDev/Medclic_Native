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
import tw from 'tailwind-react-native-classnames'; // Tailwind styling
import Assets from '../components/Assets'; // Import logo

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Faible');
  const [passwordStrengthColor, setPasswordStrengthColor] = useState('#FFA500'); // Default to orange

  const handleRegister = () => {
    if (!email || !name || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Login'); // Redirect to login after registration
  };

  const checkPasswordStrength = (password) => {
    setPassword(password);

    if (password.length < 6) {
      setPasswordStrength('Faible');
      setPasswordStrengthColor('#FFA500'); // Orange
    } else if (password.length < 10) {
      setPasswordStrength('Moyenne');
      setPasswordStrengthColor('#FFD700'); // Yellow
    } else {
      setPasswordStrength('Forte');
      setPasswordStrengthColor('#32CD32'); // Green
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View
      style={[
        tw`bg-blue-500 rounded-2xl justify-center items-center mt-1 mb-2`,
        { height: 180, width: 335 }, // Matches your design proportions
      ]}
      >
        <Image source={Assets.Logo} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Welcome Text Section */}
      <View style={tw`mt-8 mb-6`}>
        <Text style={[styles.title, { fontFamily: 'PoppinsBold' }]}>
          Bienvenue à MediClic !
        </Text>
        <Text style={[styles.subtitle, { fontFamily: 'PoppinsRegular' }]}>
          Nous sommes ravis de vous accueillir.
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
          placeholder="Votre Nom"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={checkPasswordStrength}
        />
        {/* Password Strength Indicator */}
        <View style={tw`flex-row items-center justify-between mb-3`}>
          <View style={tw`flex-row flex-1`}>
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength === 'Faible' || passwordStrength === 'Moyenne' || passwordStrength === 'Forte'
                  ? { backgroundColor: '#FFA500' }
                  : {},
              ]}
            />
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength === 'Moyenne' || passwordStrength === 'Forte'
                  ? { backgroundColor: '#FFD700' }
                  : {},
              ]}
            />
            <View
              style={[
                styles.passwordStrengthBar,
                passwordStrength === 'Forte' ? { backgroundColor: '#32CD32' } : {},
              ]}
            />
          </View>
          <Text style={{ color: passwordStrengthColor }}>{passwordStrength}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Répéter le mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Buttons Section */}
      <View style={tw`w-full px-6 mt-4`}>
        {/* Register Button */}
        <TouchableOpacity onPress={handleRegister}>
          <LinearGradient
            colors={['#37A5E8', '#255A9B']}
            style={styles.buttonGradient}
          >
            <Text style={[styles.buttonText, { fontFamily: 'PoppinsBold' }]}>
              S’inscrire
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Already Have an Account */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={tw`mt-4`}
        >
          <Text style={styles.registerText}>
            Vous avez déjà un compte ?{' '}
            <Text style={[styles.registerLink, { fontFamily: 'PoppinsRegular' }]}>
              se connecter
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
    fontFamily: 'PoppinsRegular',
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
  passwordStrengthBar: {
    height: 4,
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: '#ddd',
    borderRadius: 2,
  },
});
