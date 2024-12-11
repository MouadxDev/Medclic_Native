import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ProgressChart } from 'react-native-chart-kit';

const CalendarComponent = ({ data }) => {
  // State to hold the current date dynamically
  const [selectedDate, setSelectedDate] = useState('');


  
  useEffect(() => {
    // Construct the initial date from the server data
    const { month, selectedDate: day } = data.date;
    const [monthNumber, year] = month.split(', ').map((item) => item.trim()); // Extract month and year
    const formattedDate = `${year}-${monthNumber.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDate(formattedDate); // Set the initial selected date
  }, [data.date]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); // Update the selected date dynamically
  };

  return (
    <ScrollView style={styles.container}>
      {/* Calendar Section */}
      <View style={styles.calendarSection}>

        <Calendar
          current={selectedDate} // Dynamically set the current date
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#3D8CEF' },
          }}
          theme={{
            selectedDayBackgroundColor: '#3D8CEF',
            todayTextColor: '#3D8CEF',
            arrowColor: '#3D8CEF',
            textDayFontWeight: '500',
            textMonthFontWeight: 'bold',
          }}
        />
      </View>

      {/* Appointments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prochain rendez-vous</Text>
        {data.appointments.map((appointment, index) => (
          <TouchableOpacity key={index} style={styles.appointment}>
            <View style={styles.dot} />
            <View>
              <Text style={styles.time}>{appointment.time}</Text>
              <Text style={styles.title}>{appointment.title}</Text>
              <Text style={styles.subtitle}>{appointment.doctor}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* Waiting Room Stats Section */}

      <View style={styles.waitingRoomSection}>
        <View style={styles.waitingRoomHeader}>
          <Text style={styles.sectionTitle}>Salle d’attente</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Afficher tous →</Text>
          </TouchableOpacity>
        </View>

        {/* Chart Container */}
        <View style={styles.chartWrapper}>
          {/* Progress Chart */}
          <ProgressChart
            data={{
              data: [
                data.waitingRoomStats.pending / data.waitingRoomStats.total, // "En attente" percentage
                data.waitingRoomStats.completed / data.waitingRoomStats.total, // "Terminé" percentage
              ],
            }}
            width={200}
            height={200}
            strokeWidth={15}
            radius={50}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1, index) => {
                return index === 0
                  ? `rgba(61, 140, 239, ${opacity})` // Blue for "En attente"
                  : `rgba(64, 228, 173, ${opacity})`; // Green for "Terminé"
              },
              labelColor: () => '#333',
            }}
            hideLegend={true} // Hide legend within the chart
          />

          {/* Total Text in the Middle */}
          <View style={styles.centerText}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalNumber}>{data.waitingRoomStats.total}</Text>
          </View>
        </View>

        {/* Legend Section */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#3D8CEF' }]} />
            <Text style={styles.legendText}>En attente</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#40E4AD' }]} />
            <Text style={styles.legendText}>Terminé</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#555',
  },
  
  waitingRoomSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  chartWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  totalNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D8CEF',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#555',
  },


  waitingRoomSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  waitingRoomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,

  },
  viewAll: {
    fontSize: 14,
    color: '#3D8CEF',
    fontWeight: '600',
  },

  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  calendarSection: {
    marginVertical: 16,
    marginHorizontal: 7,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  appointment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3D8CEF',
    marginRight: 12,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    color: '#555',
    fontSize: 12,
  },
});

export default CalendarComponent;
