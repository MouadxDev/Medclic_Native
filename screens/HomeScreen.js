import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { 
  CalendarComponet,
    Greeting, 
    PatientList,
    PatientOverview, 
    ReclamationsList, 
    StatCards 
    } from '../components';
import { useUser } from '../contexts/AppContext';
import { DashboardController } from '../services/Dashboard';



export default function HomeScreen() {


  const { user } = useUser();
  const userName = user.userRole === 'professional' ? `Dr. ${user.name}` : user.name;
  
  const [dashboardData, setDashboardData] = useState({
    stats: [],
    patients: [],
    reclamations: [],
    calendarData: {
      date: {
        month: '12, 2024',
        selectedDate: 10,
      },
      appointments: [],
      waitingRoomStats: {
        total: 1,
        pending: 1,
        completed: 1,
      },
    },
    patientOverviewData: {
      man: [],
      woman: [],
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const controller = new DashboardController();
        const data = await controller.fetchDashboardData(user.id);
        console.log('Fetched Dashboard Data:', data); // Debugging
        setDashboardData(data);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error.message);
      }
    }
  
    fetchData();
  }, [user.id]);
  


  console.log("data from the home :",dashboardData)
  

  const patientOverviewData = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], // Months
    datasets: [
      {
        data: dashboardData.patientOverviewData.man || [], // Male patient visits
        color: () => '#3A6FF8', // Blue line for male patients
      },
      {
        data: [1000, 2500, 1200, 2000, 1400, 1800, 1700, 1900, 1800, 5000, 1900, 2100], // Female patient visits
        color: () => '#E126FF', // Pink line for female patients
      },
    ],
    genders: [
      { label: 'Hommes', color: '#3A6FF8' }, // Male
      { label: 'Femmes', color: '#E126FF' }, // Female
    ],
  };
  


  

  return (
    <ScrollView style={styles.container}>
      
      {/* Greeting */}
      <Greeting
        userName={userName}
        greeting="Passez une bonne journée au travail"
      />

      {/* Stat Cards */}
       <StatCards cards={dashboardData.stats} />

      {/* Patient Overview */}
      <PatientOverview
        chartData={patientOverviewData}
        filter="Mensuel"
      />

      {/* Patient List */}
      <PatientList patients={dashboardData.patients} />

      {/* Reclamations List */}
      <ReclamationsList reclamations={dashboardData.reclamations} /> 

      {/* Calendar and Waiting Room Stats */}
      <CalendarComponet data={dashboardData.calendarData} />

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
