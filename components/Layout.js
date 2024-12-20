import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import Sidebar from './Sidebar';
import Header from './Header';
import AnimatedMenu from './AnimatedMenu';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Layout({ children }) {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
  const [menuVisible, setMenuVisible] = useState(false);
  
  const [sidebarVisible, setSidebarVisible] = useState(false); // Track sidebar visibility
  const translateX = useRef(new Animated.Value(-SCREEN_WIDTH * 0.18)).current; // Sidebar starts off-screen

  const toggleSidebar = (show) => {
    Animated.timing(translateX, {
      toValue: show ? 0 : -SCREEN_WIDTH * 0.18, // Slide in or out
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSidebarVisible(show)); // Update state after animation
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Trigger gesture if horizontal swipe exceeds threshold
        return Math.abs(gestureState.dx) > 20 && Math.abs(gestureState.dy) < 20;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Allow dragging to control sidebar position
        if (gestureState.dx > 0 && !sidebarVisible) {
          translateX.setValue(Math.min(gestureState.dx - SCREEN_WIDTH * 0.18, 0));
        } else if (gestureState.dx < 0 && sidebarVisible) {
          translateX.setValue(Math.max(gestureState.dx, -SCREEN_WIDTH * 0.18));
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Decide to open or close sidebar based on swipe distance
        if (gestureState.dx > 50) {
          toggleSidebar(true);
        } else if (gestureState.dx < -50) {
          toggleSidebar(false);
        } else {
          toggleSidebar(sidebarVisible);
        }
      },
    })
  ).current;

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]} {...panResponder.panHandlers}>
      {/* Header */}
      <View style={styles.header}>
        <Header onMenuPress={() => setMenuVisible(true)} />
      </View>

      {/* Main Content Area */}
      <View style={styles.mainArea}>
        {/* Sidebar */}
        <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
          <Sidebar />
        </Animated.View>

        {/* Content */}
        <View style={[styles.content]}>
          {children}
        </View>
      </View>

          {/* Animated Menu */}
          <AnimatedMenu isVisible={menuVisible} toggleMenu={setMenuVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
  },
  mainArea: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '18%',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    height: '100%',
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 5,
  },
});
