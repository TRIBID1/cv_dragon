import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Or use any icon library

const QuickLinks = () => {
  const links = [
    { name: 'Poll', icon: 'poll' },
    { name: 'Knowledge', icon: 'book-open-outline' },
    { name: 'Download', icon: 'download' },
    { name: 'Contribute', icon: 'hand-heart' },
    { name: 'Forms', icon: 'file-document-outline' },
    { name: 'FAQs', icon: 'comment-question-outline' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <View style={styles.grid}>
        {links.map((link, index) => (
          <TouchableOpacity key={index} style={styles.link}>
            <Icon name={link.icon} size={30} color="#000" style={styles.icon} />
            <Text style={styles.label}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});

export default QuickLinks;
