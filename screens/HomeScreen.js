import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { 
    Calendar,
    Greeting, 
    PatientList,
    PatientOverview, 
    ReclamationsList, 
    StatCards 
    } from '../components';
import { useUser } from '../contexts/AppContext';




export default function HomeScreen() {

  const { user } = useUser();
  const userName = user.userRole === 'professional' ? `Dr. ${user.name}` : user.name;
  
  // Static Data for Testing
  const statCardsData = [
    { count: 4676, label: 'Patients', color: '#7A6EFE', icon: 'PatientstatIcon' },
    { count: 500, label: 'Prescriptions', color: '#FF5363', icon: 'PrescriptionstatIcon' },
    { count: 6, label: 'Absences', color: '#FFA901', icon: 'AbsencestatIcon' },
    { count: 1676, label: 'Réclamations', color: '#24A8FA', icon: 'ReclamationstatIcon' },
  ];

  const patientsData = [
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Annette Black',
      prescriptionCount: 3,
      documentCount: 3,
      appointmentTime: 'Today, 08:30 am - 10:30 am',
      notesCount: 2,
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Ronald Richards',
      prescriptionCount: 4,
      documentCount: 2,
      appointmentTime: 'Tomorrow, 10:00 am - 11:00 am',
      notesCount: 1,
    },
  ];

  const reclamationsData = [
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Annette Black',
      date: 'Dec 18, 2021',
      service: 'Echographie Abdominale',
      status: 'Annulé',
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Ronald Richards',
      date: 'Dec 19, 2021',
      service: 'Echographie Abdominale',
      status: 'Terminé',
    },
  ];

  const patientOverviewData = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], // Months
    datasets: [
      {
        data: [3000, 5000, 4500, 6000, 5500, 7000, 6500, 8000, 7500, 8500, 8000, 9000], // Male patient visits
        color: () => '#3A6FF8', // Blue line for male patients
      },
      {
        data: [1000, 1500, 1200, 1600, 1400, 1800, 1700, 1900, 1800, 2000, 1900, 2100], // Female patient visits
        color: () => '#E126FF', // Pink line for female patients
      },
    ],
    genders: [
      { label: 'Hommes', color: '#3A6FF8' }, // Male
      { label: 'Femmes', color: '#E126FF' }, // Female
    ],
  };
  

  const calendarData = {
    calendar: {
      month: 'Juillet, 2022',
      selectedDate: 6,
    },
    appointments: [
      {
        time: 'Today, 08:30 am - 10:30 am',
        title: 'Nurse Visit 20',
        doctor: 'Dr. Carol D. Pollack-rundle',
      },
      {
        time: 'Today, 11:00 am - 12:30 pm',
        title: 'Annual Visit 15',
        doctor: 'Dr. Donald F. Watren',
      },
      {
        time: 'Today, 02:00 pm - 03:00 pm',
        title: 'Established Patient 30',
        doctor: 'Dr. Gina F. Durham',
      },
    ],
    waitingRoomStats: {
      total: 251,
      completed: 120,
      pending: 131,
    },
  };
 

  return (
    <ScrollView style={styles.container}>
      
      {/* Greeting */}
      <Greeting
        userName={userName}
        greeting="Passez une bonne journée au travail"
      />

      {/* Stat Cards */}
      <StatCards cards={statCardsData} />

      {/* Patient Overview */}
      <PatientOverview
        chartData={patientOverviewData}
        filter="Mensuel"
      />

      {/* Patient List */}
      <PatientList patients={patientsData} />

      {/* Reclamations List */}
      <ReclamationsList reclamations={reclamationsData} /> 

      {/* Calendar and Waiting Room Stats */}
      <Calendar data={calendarData} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
