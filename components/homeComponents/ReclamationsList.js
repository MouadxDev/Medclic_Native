import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ReclamationsList = ({ reclamations }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Réclamations</Text>
        <Text style={styles.viewAll}>Afficher tous →</Text>
      </View>

      {/* Reclamations List */}
      {reclamations.map((reclamation, index) => (
        <View key={index} style={styles.card}>
          {/* Photo and Patient Name */}
          <View style={styles.row}>
            <Text style={styles.title}>Photo</Text>
            <Image source={{ uri: reclamation.photo }} style={styles.photo} />
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Patient</Text>
            <Text style={styles.value}>{reclamation.name}</Text>
          </View>

          {/* Date, Service, and Status */}
          <View style={styles.row}>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.value}>{reclamation.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Service</Text>
            <Text style={styles.value}>{reclamation.service}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Status</Text>
            <View style={styles.statusRow}>
              <View
                style={[
                  styles.statusDot,
                  {
                    backgroundColor:
                      reclamation.status === 'Annulé' ? '#E40D0D' : '#40E4AD',
                  },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  {
                    color:
                      reclamation.status === 'Annulé' ? '#E40D0D' : '#40E4AD',
                  },
                ]}
              >
                {reclamation.status}
              </Text>
            </View>
          </View>

          {/* Action */}
          <View style={styles.row}>
            <Text style={styles.title}>Action</Text>
            <Text style={styles.dots}>•••</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

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
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  statusText: {
    fontWeight: '600',
    fontSize: 14,
  },
  dots: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#aaa',
  },
});

export default ReclamationsList;
