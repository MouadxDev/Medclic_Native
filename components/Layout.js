import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarText}>Sidebar</Text>
        {/* Add sidebar navigation items here */}
      </View>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>
        {/* Dynamic content */}
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  sidebarText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
