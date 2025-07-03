import React from 'react';
import { View, Text, StyleSheet,Image  } from 'react-native';
import Assets from '../components/Assets';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to MyApp!</Text> */}
      <Image source={Assets.Logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
