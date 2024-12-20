import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomToast = ({ type, message }) => {
  const borderColor = type === 'success'
    ? '#4CAF50' // Green
    : type === 'error'
    ? '#F44336' // Red
    : '#FF9800'; // Orange (working)

  return (
    <View style={[styles.toastContainer, { borderLeftColor: borderColor }]}>
      <Text style={styles.toastMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#FDFDFD',
    borderRadius: 8,
    borderLeftWidth: 6, // Left border to indicate type
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  toastMessage: {
    width:'100%',
    color: '#333', 
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomToast;
