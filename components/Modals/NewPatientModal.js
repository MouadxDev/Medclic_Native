import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewPatientModal = ({ onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Nouveau patient</Text>

      <Text style={styles.label}>Lieu*</Text>
      <TextInput placeholder="Cabinet infirmier Maarif" style={styles.input} />

      <Text style={styles.label}>Nom*</Text>
      <TextInput placeholder="Nom" style={styles.input} />

      <Text style={styles.label}>Prénom*</Text>
      <TextInput placeholder="Prénom" style={styles.input} />

      <Text style={styles.label}>Sexe*</Text>
      <TextInput placeholder="Masculin" style={styles.input} />

      <Text style={styles.label}>Date de naissance*</Text>
      <TextInput placeholder="mm/dd/aaaa" style={styles.input} />

      <Text style={styles.label}>Téléphone*</Text>
      <TextInput placeholder="Téléphone" style={styles.input} />

      <Text style={styles.label}>Email*</Text>
      <TextInput placeholder="Email" style={styles.input} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeText}>Fermer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.validateButton} onPress={() => {}}>
          <Text style={styles.validateText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPatientModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  closeText: {
    color: '#007BFF',
  },
  validateButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  validateText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
