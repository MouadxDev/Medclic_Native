import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function PatientOverview({ chartData, filter }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Patient Overview</Text>

        <View style={styles.legend}>
          {chartData.genders.map((gender, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: gender.color }]}
              />
              <Text style={styles.legendText}>{gender.label}</Text>

            </View>
          ))}
        </View>
      </View>
      <LineChart
        data={chartData}
        width={300}
        height={200}
        bezier
        chartConfig={{
          backgroundColor: '#fdfdfd',
          backgroundGradientFrom: '#fdfdfd',
          backgroundGradientTo: '#fdfdfd',
          color: (opacity = 1) => `rgba(169, 169, 169, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(33, 37, 41, ${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#fdfdfd',
          },
          propsForBackgroundLines: {
            stroke: '#ced4da',
            strokeDasharray: '4',
          },
        }}
        style={styles.chartStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fdfdfd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#212529',
  },
  chartStyle: {
    borderRadius: 8,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
  },
});
