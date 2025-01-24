import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskListStatic = () => {
  return (
    <View style={styles.container}>
      {/* Card 1: To Do */}
      <View style={[styles.card, { backgroundColor: '#FFF5E5' }]}>
        <View style={styles.leftSection}>
          <Text style={[styles.daysLeft, { color: '#FFC107' }]}>25</Text>
          <Text style={styles.daysLabel}>Days Left</Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.title}>Sadasyata Suchi</Text>
          <View style={[styles.status, { borderColor: '#FFC107' }]}>
            <Text style={[styles.statusText, { color: '#FFC107' }]}>To Do</Text>
          </View>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>

      {/* Card 2: Due */}
      <View style={[styles.card, { backgroundColor: '#FFE5E5' }]}>
        <View style={styles.leftSection}>
          <Text style={[styles.daysLeft, { color: '#FF5252' }]}>3</Text>
          <Text style={styles.daysLabel}>Days Past</Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.title}>Sangathan Yatra</Text>
          <View style={[styles.status, { borderColor: '#FF5252' }]}>
            <Text style={[styles.statusText, { color: '#FF5252' }]}>Due</Text>
          </View>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>

      {/* Card 3: In Progress */}
      <View style={[styles.card, { backgroundColor: '#EDE7F6' }]}>
        <View style={styles.leftSection}>
          <Text style={[styles.daysLeft, { color: '#673AB7' }]}>3</Text>
          <Text style={styles.daysLabel}>Days Left</Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.title}>Sangathan Yatra</Text>
          <View style={[styles.status, { borderColor: '#673AB7' }]}>
            <Text style={[styles.statusText, { color: '#673AB7' }]}>In Progress</Text>
          </View>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>

      {/* Card 4: Completed */}
      <View style={[styles.card, { backgroundColor: '#E8F5E9' }]}>
        <View style={styles.leftSection}>
          <Text style={[styles.daysLeft, { color: '#4CAF50' }]}>3</Text>
          <Text style={styles.daysLabel}>Days Left</Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.title}>Sangathan Yatra</Text>
          <View style={[styles.status, { borderColor: '#4CAF50' }]}>
            <Text style={[styles.statusText, { color: '#4CAF50' }]}>Completed</Text>
          </View>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // Adjust as needed
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftSection: {
    alignItems: 'center',
    marginRight: 16,
  },
  daysLeft: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  daysLabel: {
    fontSize: 12,
    color: '#757575',
  },
  middleSection: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  status: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  moreIcon: {
    fontSize: 18,
    color: '#9E9E9E',
    padding: 8,
  },
});

export default TaskListStatic;
