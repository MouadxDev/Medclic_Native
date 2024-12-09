import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Greeting({ userName, greeting }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour, {userName}</Text>
      <Text style={styles.subtitle}>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C87AE',
  },
});
