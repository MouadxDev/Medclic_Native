import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Assets from '../Assets';
const GradientButton = ({ title, greeting, onButtonPress }) => {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#37A5E8', '#255A9B']}
            style={styles.gradientButton}>
              
              <Assets.Action.PlusIcon width={25} height={32} />

          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Subtitle Section */}
      <Text style={styles.subtitle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'PoppinsBold',
  },
  subtitle: {
    fontSize: 16,
    color: '#667085',
    marginTop: 5,
  },
  buttonContainer: {
    marginLeft: 10,
  },
  gradientButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
});

export default GradientButton;
