import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import { useUser } from '../contexts/AppContext';
import { Users } from '../services/Users';

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default function AnimatedMenu({ isVisible, toggleMenu }) {
  const translateX = React.useRef(new Animated.Value(SCREEN_WIDTH)).current; // Start off-screen
  const navigation = useNavigation();
  const { setUser } = useUser();
  const usersService = new Users();
  
  const handleNavigation = (route) => {
    if (route === 'Logout') {
      handleLogout();
    } else {
      navigation.navigate(route);
    }
  };

  const handleLogout = async () => {
    try {
      await usersService.logout();
      setUser({
        id: null,
        name: '',
        email: '',
        userRole: '',
        isAuthenticated: false,
        token: '',
      });
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to logout');
      console.error(error);
    
    }
  };

  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: isVisible ? 0 : SCREEN_WIDTH, // Slide in or out
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <View style={styles.container} pointerEvents={isVisible ? 'auto' : 'none'}>
      {/* Overlay */}
      {isVisible && (
        <TouchableWithoutFeedback onPress={() => toggleMenu(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sliding Menu */}
      <Animated.View style={[styles.menuContent, { transform: [{ translateX }] }]}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                {/* Avatar placeholder */}
                <Text style={styles.avatarText}>A</Text>
              </View>
            </View>
            <Text style={styles.profileName}>Dr. Alami Karim</Text>
            <Text style={styles.profileRole}>Généraliste</Text>
          </View>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Ajouter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Documents</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Notifications</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => handleNavigation('Profile')}>
            <Text style={styles.menuItem}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('DroitScreen')}>
            <Text style={styles.menuItem}>Droits</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Sécurité</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Compte</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => handleNavigation('Logout')}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.versionText}>v 1.0.0</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
    zIndex: 9,
  },
  menuContent: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT, // Adjust for status bar
    right: 0,
    width: SCREEN_WIDTH * 0.8, // 80% of the screen width
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 11,
    paddingVertical: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    color: '#007bff',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 14,
    color: '#888',
  },
  menuItems: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 15,
  },
  logout: {
    fontSize: 16,
    color: '#FF5252',
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: '#aaa',
  },
});
