import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      
      {/* Main Content Area */}
      <View style={styles.mainArea}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Sidebar />
        </View>
        
        {/* Content */}
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Stack header on top of the main content area
  },
  header: {
    height: 60, // Fixed height for the header
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  mainArea: {
    flex: 1, // Take the remaining space below the header
    flexDirection: 'row', // Sidebar and content side by side
  },
  sidebar: {
    width: '18%', // Adjust sidebar width as needed
    backgroundColor: '#f0f0f0',
    padding: 0,
  },
  content: {
    flex: 1, // Occupy the remaining space
    padding: 10,
  },
});
