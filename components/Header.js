import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Assets from '../components/Assets'; // Import logo from Assets

export default function Header({ onMenuPress }) {
  return (
    <View style={styles.header}>
      {/* Logo on the left */}
      <Image source={Assets.Logo} style={styles.logo} resizeMode="contain" />
      {/* Menu icon on the right */}
      <TouchableOpacity onPress={onMenuPress}>
        <Assets.Action.Menu />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60, // Fixed height for the header
    backgroundColor: '#007bff', // Blue background color
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push logo to left, menu to right
    alignItems: 'center', // Vertically center the items
    paddingHorizontal: 15, // Horizontal padding
  },
  logo: {
    width: 120, // Adjust width as needed
    height: 30, // Adjust height as needed
  },
});
