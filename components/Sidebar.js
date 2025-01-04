import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Assets } from './Assets';
import sidebarData from '../static/menuData';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar({  }) {
  const [activeSection, setActiveSection] = useState(null);
  const navigation = useNavigation();
  
  // Handle navigation when an icon is clicked
  const handleNavigation = (route) => {
    navigation.navigate(route);
  };
  

  // Render individual icons
  const renderIcons = (items) => {
    return items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.iconContainer}
        onPress={() => handleNavigation(item.route)}>
        {Assets.Icons[item.icon] ? (
          React.createElement(Assets.Icons[item.icon], {
            width: 30, // Set icon width
            height: 30, // Set icon height
            color: '#6C87AE', // Default icon color
          })
        ) : null}
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.sidebar}>
        {sidebarData.map((item, index) => (
          <View key={index}>
            {/* Render single icon */}
            {item.icon && (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleNavigation(item.route)}
              >
                {Assets.Icons[item.icon] ? (
                  React.createElement(Assets.Icons[item.icon], {
                    width: 30,
                    height: 30,
                    color: '#6C87AE',
                  })
                ) : null}
              </TouchableOpacity>
            )}
            {/* Render icons for dropdown sections */}
            {item.section && renderIcons(item.items)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  sidebar: {
    width: 80, // Set the sidebar width
    backgroundColor: '#f8f9fa', // Light gray background
    paddingVertical: 10, // Vertical padding
    justifyContent: 'flex-start', // Align items from the top
    alignItems: 'center', // Center icons horizontally
  },
  iconContainer: {
    marginVertical: 10, // Space between icons
    alignItems: 'center',
  },
});
