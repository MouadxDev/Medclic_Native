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
  const [passwordStrengthColor, setPasswordStrengthColor] = useState('#FF0000'); // Default to orange

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
  
    let strength = 0;
  
    // Check for minimum length
    if (password.length >= 8) strength++;
  
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength++;
  
    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength++;
  
    // Check for numbers
    if (/[0-9]/.test(password)) strength++;
  
    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) strength++;
  
    // Determine password strength
    if (strength <= 2) {
      setPasswordStrength('Faible'); // Weak
      setPasswordStrengthColor('#FF0000'); // Orange
    } else if (strength === 3 || strength === 4) {
      setPasswordStrength('Moyenne'); // Medium
      setPasswordStrengthColor('#FFA500'); // Yellow
    } else if (strength === 5) {
      setPasswordStrength('Forte'); // Strong
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
            {/* Band 1 */}
            <View
            style={[
                styles.passwordStrengthBar,
                {
                backgroundColor: 
                    passwordStrength === 'Faible' ? '#FF0000' :  // Red for weak
                    passwordStrength === 'Moyenne' ? '#FFA500' :  // Orange for medium
                    passwordStrength === 'Forte' ? '#32CD32' :  // Green for strong
                    '#ddd'  // Default gray
                }
            ]}
            />
            {/* Band 2 */}
            <View
            style={[
                styles.passwordStrengthBar,
                {
                backgroundColor: 
                    passwordStrength === 'Faible' ? '#ddd' :  // Gray for weak
                    passwordStrength === 'Moyenne' ? '#FFA500' :  // Yellow for medium
                    passwordStrength === 'Forte' ? '#32CD32' :  // Green for strong
                    '#ddd'  // Default gray
                }
            ]}
            />
            {/* Band 3 */}
            <View
            style={[
                styles.passwordStrengthBar,
                {
                backgroundColor: 
                    passwordStrength === 'Faible' ? '#ddd' :  // Gray for weak
                    passwordStrength === 'Moyenne' ? '#ddd' :  // Gray for medium
                    passwordStrength === 'Forte' ? '#32CD32' :  // Green for strong
                    '#ddd'  // Default gray
                }
            ]}
            />
        </View>
          <Text style={[tw`pl-4`, { color: passwordStrengthColor }]}>{passwordStrength}</Text>
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
