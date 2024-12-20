import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { GradientButton } from '../components';
import Assets from '../components/Assets';

export default function ConsultationScreen() {
  const [expandedSections, setExpandedSections] = useState({});
  const [rotateAnims] = useState(() => ({
    informationsPatient: new Animated.Value(0),
    dmp: new Animated.Value(0),
    avisIA: new Animated.Value(0),
    observations: new Animated.Value(0),
    prescription: new Animated.Value(0),
    facturation: new Animated.Value(0),
  }));

  const patientData = {
    name: 'RADI Amin',
    age: 29,
    gender: 'Male', // Change this to "Female" for testing conditional fields
    phone: '0661318810',
    email: 'belefdil.abdelhakim@gmail.com',
    weight: '90 kg',
    height: '180 cm',
    bloodGroup: 'O+',
    creatinine: '90',
    liverCondition: 'Insuffisance hépatique',
    doctor: 'Dr ADLAOUI Yassine',
    cin: 'BE12546',
    insurance: 'Assu',
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      const newValue = !prev[section];
      Animated.spring(rotateAnims[section], {
        toValue: newValue ? 1 : 0,
        useNativeDriver: true,
      }).start();
      return { ...prev, [section]: newValue };
    });
  };

  const sections = [
    {
      id: 'informationsPatient',
      title: 'Informations patient',
      icon: <Assets.Consultation.UserInfoIcon />,
      content: (
        <View style={styles.cardGrid}>
          {/* Static cards */}
          <Card label="Sem" value="-" disabled={patientData.gender === 'Male'} />
          <Card label="Allaitement" value="-" disabled={patientData.gender === 'Male'} />

          {/* Dynamic cards */}
          <Card label="Nom complet" value={patientData.name} />
          <Card label="Téléphone" value={patientData.phone} />
          <Card label="Âge" value={`${patientData.age} ans`} />
          <Card label="Sexe" value={patientData.gender} />
          <Card label="Taille" value={patientData.height} />
          <Card label="Poids" value={patientData.weight} />
          <Card label="GS" value={patientData.bloodGroup} />
          <Card label="Créatinine" value={patientData.creatinine} />
          <Card label="Médecin traitant" value={patientData.doctor} />
          <Card label="CIN" value={patientData.cin} />
          <Card label="Assurance" value={patientData.insurance} />
        </View>
      ),
    },
    {
      id: 'dmp',
      title: 'DMP',
      icon: <Assets.Consultation.DmpIcon />,
      content: <Text style={styles.sectionContent}>Dossier Médical Partagé</Text>,
    },
    {
      id: 'avisIA',
      title: 'Avis IA',
      icon: <Assets.Consultation.AiIcon />,
      content: <Text style={styles.sectionContent}>Analyse IA en cours...</Text>,
    },
    {
      id: 'observations',
      title: 'Observations',
      icon: <Assets.Consultation.ObIcon />,
      content: <Text style={styles.sectionContent}>Observations du médecin ici...</Text>,
    },
    {
      id: 'prescription',
      title: 'Prescription',
      icon: <Assets.Consultation.PreIcon />,
      content: <Text style={styles.sectionContent}>Prescriptions récentes...</Text>,
    },
    {
      id: 'facturation',
      title: 'Facturation',
      icon: <Assets.Consultation.UserInfoIcon />,
      content: (
        <View style={styles.infoGrid}>
          <InfoItem label="Montant" value="1500 €" />
          <InfoItem label="Status" value="Payé" highlight />
        </View>
      ),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Consultation</Text>
        <GradientButton title="RADI Amin" style={styles.patientButton} />
      </View>

      {sections.map((section) => (
        <Section
          key={section.id}
          {...section}
          expanded={expandedSections[section.id]}
          rotateAnim={rotateAnims[section.id]}
          onPress={() => toggleSection(section.id)}
        />
      ))}
    </ScrollView>
  );
}

const Card = ({ label, value, disabled }) => (
  <View style={[styles.card, disabled && styles.cardDisabled]}>
    <Text style={styles.cardLabel}>{label}</Text>
    <Text style={[styles.cardValue, disabled && styles.cardValueDisabled]}>{value}</Text>
  </View>
);

const InfoItem = ({ label, value, highlight }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={[styles.infoValue, highlight && styles.highlightedValue]}>{value}</Text>
  </View>
);

const Section = ({ title, icon, expanded, rotateAnim, onPress, content }) => {
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={[styles.sectionHeader, expanded && styles.sectionHeaderActive]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Text style={styles.toggleIcon}>▼</Text>
        </Animated.View>
      </TouchableOpacity>
      {expanded && <View style={styles.sectionBody}>{content}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 10,
  },
  headerContainer: {
    marginBottom: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A2138',
    marginBottom: 16,
  },
  patientButton: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  sectionHeaderActive: {
    backgroundColor: '#F0F7FF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A2138',
  },
  toggleIcon: {
    fontSize: 12,
    color: '#6B7280',
  },
  sectionBody: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardDisabled: {
    backgroundColor: '#F5F5F5',
  },
  cardLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A2138',
  },
  cardValueDisabled: {
    color: '#9CA3AF',
  },
  sectionContent: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});
