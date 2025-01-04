import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


export default function ProfileScreen() {


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🔒</Text>
        </View>
      </View>

      {/* Header */}
      <Text style={styles.title}>Modifier mon profil</Text>
      <Text style={styles.subtitle}>
        Je souhaite modifier mon profil qui me permet d’accéder à la plateforme
      </Text>

      {/* Profile Fields */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nom</Text>
        <TextInput style={styles.input} value="Radi" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Prénom</Text>
        <TextInput style={styles.input} value="Amine" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date de naissance (29 ans)</Text>
        <TextInput style={styles.input} value="11 / 03 / 1995" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Sexe</Text>
        <TextInput style={styles.input} value="Femme" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Téléphone</Text>
        <TextInput style={styles.input} value="0685847321" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="belefdil.ali@gmail.com" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} value="8 avenue du phare" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Ville</Text>
        <TextInput style={styles.input} value="Temara" />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Modifier mon profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    color: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 30,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
