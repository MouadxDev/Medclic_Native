import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { PieChart } from 'react-native-chart-kit';

const CalendarComponent = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(data.calendar.selectedDate);

  // Function to handle date selection
  const handleDateSelect = (day) => {
    setSelectedDate(parseInt(day.day)); // Update selected date
  };

  return (
    <View style={styles.container}>
      {/* Calendar Section */}
      <Calendar
        current={`${data.calendar.month.split(',')[1].trim()}-07`} // Automatically use current month/year
        onDayPress={(day) => handleDateSelect(day)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#3D8CEF' },
        }}
        theme={{
          selectedDayBackgroundColor: '#3D8CEF',
          todayTextColor: '#3D8CEF',
          arrowColor: '#3D8CEF',
        }}
      />

      {/* Appointments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prochain rendez-vous</Text>
        {data.appointments.map((appointment, index) => (
          <View key={index} style={styles.appointment}>
            <View style={styles.dot} />
            <View>
              <Text style={styles.time}>{appointment.time}</Text>
              <Text style={styles.title}>{appointment.title}</Text>
              <Text style={styles.subtitle}>{appointment.doctor}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Waiting Room Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Salle d’attente</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={[
              {
                name: 'En attente',
                count: data.waitingRoomStats.pending,
                color: '#3D8CEF',
                legendFontColor: '#333',
              },
              {
                name: 'Terminé',
                count: data.waitingRoomStats.completed,
                color: '#40E4AD',
                legendFontColor: '#333',
              },
            ]}
            width={150}
            height={150}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
          />
          <Text style={styles.total}>Total: {data.waitingRoomStats.total}</Text>
        </View>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#3D8CEF' }]} />
            <Text>En attente</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#40E4AD' }]} />
            <Text>Terminé</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3D8CEF',
    marginRight: 10,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
    fontSize: 12,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  total: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default CalendarComponent;
