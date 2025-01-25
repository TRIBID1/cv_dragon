import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const menuItems = [
  { id: '1', title: 'Profile', icon: 'person', description: 'Update and modify your profile' },
  { id: '2', title: 'My Area', icon: 'location-on', description: 'Update and modify your profile' },
  { id: '3', title: 'Notification', icon: 'notifications', description: 'Turn on or off notification' },
  { id: '4', title: 'My Contribution', icon: 'volunteer-activism', description: 'Update and modify your profile' },
  { id: '5', title: 'My Notes', icon: 'note', description: 'Update and modify your profile' },
  { id: '6', title: 'My Scores', icon: 'thumb-up', description: 'Update and modify your profile' },
  { id: '7', title: 'Contact', icon: 'call', description: 'Update and modify your profile' },
  { id: '8', title: 'Feedback', icon: 'feedback', description: 'Update and modify your profile' },
  { id: '9', title: 'Support', icon: 'headset-mic', description: 'Update and modify your profile' },
  { id: '10', title: 'Settings', icon: 'settings', description: 'Update and modify your profile' },
];

const MenuScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={item.icon} size={24} color="#D32F2F" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#D32F2F" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  description: {
    fontSize: 14,
    color: '#757575',
  },
});

export default MenuScreen;
