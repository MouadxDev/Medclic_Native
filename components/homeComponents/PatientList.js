import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PatientList({ patients, onViewAll }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Patients</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>
            Afficher tous   →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Patients List */}
      {patients.map((patient, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>Photo</Text>
            <Image source={{ uri: patient.photo }} style={styles.photo} />
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Patient</Text>
            <Text style={styles.value}>{patient.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Prescription</Text>
            <Text style={styles.value}>{patient.prescriptionCount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Documents</Text>
            <Text style={styles.value}>{patient.documentCount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Rendez-vous</Text>
            <Text style={styles.value}>{patient.appointmentTime}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Notes</Text>
            <Text style={styles.value}>{patient.notesCount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Action</Text>
            <Text style={styles.dots}>•••</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#007aff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dots: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#aaa',
  },
});
