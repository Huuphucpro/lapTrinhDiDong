import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Screen2() {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'To check email', completed: true },
    { id: '2', task: 'UI task web page', completed: true },
    { id: '3', task: 'Learn javascript basic', completed: true },
    { id: '4', task: 'Learn HTML Advance', completed: true },
    { id: '5', task: 'Medical App UI', completed: true },
    { id: '6', task: 'Learn Java', completed: true },
  ]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Icon name="user-circle" size={50} color="#9b59b6" />
          <View style={styles.profileText}>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subText}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9b59b6" />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Icon name="check-circle" size={20} color="green" />
            <Text style={styles.taskText}>{item.task}</Text>
            <Icon name="pencil" size={20} color="red" />
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileText: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00BFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
