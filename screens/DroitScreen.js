import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Image,
  Animated,
  Platform,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { GradientButton } from '../components';
import { useFonts } from 'expo-font';
import fonts from '../assets/fonts/fonts';

const DroitScreen = () => {
  const [fontsLoaded] = useFonts(fonts);
  const defaultImageUrl = 'https://i.pravatar.cc/300';
  if (!fontsLoaded) {
    return null;
  }

  const [users, setUsers] = useState([
    { id: 1, name: 'Radi Amine', role: 'Cabinet infirmier Maarif', image: 'https://i.pravatar.cc/300' },
    { id: 2, name: 'Aicha B.', role: 'Cabinet infirmier Maarif', image: 'https://i.pravatar.cc/300' },
    { id: 3, name: 'Mohamed C.', role: 'Cabinet infirmier Maarif', image: 'https://i.pravatar.cc/300' },
    { id: 4, name: 'Sara D.', role: 'Cabinet infirmier Maarif', image: 'https://i.pravatar.cc/300' },
    { id: 5, name: 'Kamal E.', role: 'Cabinet infirmier Maarif', image: 'https://i.pravatar.cc/300' },
  ]);

  const [permissions, setPermissions] = useState([
    {
      section: 'Mes Rendez Vous',
      icon: 'calendar',
      collapsed: true,
      actions: [
        { key: 'ajouterRendezVous', label: 'Ajouter Rendez Vous', enabled: true },
        { key: 'deplacerRendezVous', label: 'Déplacer Rendez Vous', enabled: true },
        { key: 'adresserPatient', label: 'Adresser Patient', enabled: false },
        { key: 'ajouterNote', label: 'Ajouter Note', enabled: false },
        { key: 'ajouterPlaintes', label: 'Ajouter Plaintes', enabled: false },
      ],
    },
    {
      section: 'Mes Calendriers',
      icon: 'calendar-outline',
      collapsed: true,
      actions: [
        { key: 'voirCalendrier', label: 'Voir Calendrier', enabled: false },
        { key: 'configurerCalendrier', label: 'Configurer Calendrier', enabled: false },
      ],
    },
    {
      section: 'Mes Absences',
      icon: 'time',
      collapsed: true,
      actions: [
        { key: 'voirAbsences', label: 'Voir Absences', enabled: false },
        { key: 'ajouterAbsence', label: 'Ajouter Absence', enabled: false },
      ],
    },
    {
      section: 'Mes Patients',
      icon: 'people',
      collapsed: true,
      actions: [
        { key: 'voirPatients', label: 'Voir Patients', enabled: false },
        { key: 'ajouterNotes', label: 'Ajouter Notes', enabled: false },
      ],
    },
  ]);

  const removeAllUsers = () => setUsers([]);
  const removeUser = (id) => setUsers(users.filter(user => user.id !== id));

  const toggleSection = (index) => {
    setPermissions(prev =>
      prev.map((section, i) =>
        i === index ? { ...section, collapsed: !section.collapsed } : section
      )
    );
  };

  const togglePermission = (sectionIndex, actionIndex) => {
    setPermissions(prev =>
      prev.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              actions: section.actions.map((action, j) =>
                j === actionIndex ? { ...action, enabled: !action.enabled } : action
              ),
            }
          : section
      )
    );
  };

  const areAllPermissionsEnabled = () => {
    return permissions.every(section =>
      section.actions.every(action => action.enabled)
    );
  };

  const toggleAllPermissions = () => {
    const newValue = !areAllPermissionsEnabled();
    setPermissions(prev =>
      prev.map(section => ({
        ...section,
        actions: section.actions.map(action => ({
          ...action,
          enabled: newValue,
        })),
      }))
    );
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      activeOpacity={0.7}
    >
      <View style={styles.userInfo}>
        <Image
          source={{ uri: item.image || defaultImageUrl }}
          style={styles.userAvatar}
          onError={(error) => console.warn('Image failed to load:', error.nativeEvent.error)}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userRole}>{item.role}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => removeUser(item.id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <FontAwesome name="trash" size={20} color="#F15454" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <GradientButton
          title="Droits"
          Filters={false}
          Actions={true}
        />
      </View>

      {/* Users Section */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleContainer}>
            <Ionicons name="people" size={24} color="#3D8CEF" />
            <Text style={styles.cardTitle}>Utilisateurs ({users.length})</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteAllButton}
            onPress={removeAllUsers}
          >
            <FontAwesome name="trash" size={16} color="#F15454" />
            <Text style={styles.deleteAllText}>Supprimer tout</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.usersList} nestedScrollEnabled>
          {users.map(user => (
            <View key={user.id}> {/* Add key here */}
              {renderUserItem({ item: user })}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Permissions Section */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleContainer}>
            <Ionicons name="settings" size={24} color="#3D8CEF" />
            <Text style={styles.cardTitle}>Permissions</Text>
          </View>
          <View style={styles.toggleAllContainer}>
            <Switch
              value={areAllPermissionsEnabled()}
              onValueChange={toggleAllPermissions}
              trackColor={{ false: '#F0F0F0', true: '#3D8CEF' }}
              thumbColor={Platform.OS === 'ios' ? '#FFFFFF' : areAllPermissionsEnabled() ? '#FFFFFF' : '#F4F3F4'}
            />
            <Text style={styles.toggleAllText}>Activer tous</Text>
          </View>
        </View>

        {permissions.map((section, sectionIndex) => {
          const enabledCount = section.actions.filter(action => action.enabled).length;
          const totalActions = section.actions.length;

          return (
            <View key={section.section} style={styles.section}>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => toggleSection(sectionIndex)}
              >
                <View style={styles.sectionTitleContainer}>
                  <Ionicons name={section.icon} size={20} color="#3D8CEF" />
                  <Text style={styles.sectionTitle}>{section.section}</Text>
                </View>
                <View style={styles.sectionHeaderRight}>
                  <View style={styles.counterBadge}>
                    <Text style={styles.counterText}>{enabledCount}/{totalActions}</Text>
                  </View>
                  <Ionicons
                    name={section.collapsed ? 'chevron-down' : 'chevron-up'}
                    size={20}
                    color="#666666"
                  />
                </View>
              </TouchableOpacity>

              {!section.collapsed && (
                  <View style={styles.sectionContent}>
                    {section.actions.map((action, actionIndex) => (
                      <View key={action.key} style={styles.permissionItem}> {/* Ensure key is unique */}
                        <Text style={styles.permissionLabel}>{action.label}</Text>
                        <Switch
                          value={action.enabled}
                          onValueChange={() => togglePermission(sectionIndex, actionIndex)}
                          trackColor={{ false: '#F0F0F0', true: '#3D8CEF' }}
                          thumbColor={Platform.OS === 'ios' ? '#FFFFFF' : action.enabled ? '#FFFFFF' : '#F4F3F4'}
                        />
                      </View>
                    ))}
                  </View>
                )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F6FF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: '#333333',
  },
  deleteAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
  },
  deleteAllText: {
    color: '#F15454',
    fontSize: 12,
    fontFamily: 'PoppinsRegular',
  },
  usersList: {
    maxHeight: 300,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userDetails: {
    gap: 4,
  },
  userName: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: '#333333',
  },
  userRole: {
    fontSize: 12,
    fontFamily: 'PoppinsRegular',
    color: '#666666',
  },
  toggleAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  toggleAllText: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    color: '#666666',
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'PoppinsLight',
    color: '#333333',
  },
  sectionHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  counterBadge: {
    backgroundColor: '#F0F6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  counterText: {
    fontSize: 12,
    fontFamily: 'PoppinsRegular',
    color: '#3D8CEF',
  },
  sectionContent: {
    padding: 16,
    gap: 12,
  },
  permissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  permissionLabel: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    color: '#333333',
  },
});

export default DroitScreen;