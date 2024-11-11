import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../assets/imgscreen1.png')} />
      </View>
      <View style={styles.mid}>
        <View style={styles.midTextContainer}>
          <Text style={styles.midText}>MANAGE YOUR</Text>
          <Text style={styles.midText}>TASK</Text>
        </View>
        <TextInput 
          style={styles.input} 
          onChangeText={onChangeNumber} 
          value={number} 
          placeholder="Enter your name" 
        />
      </View>
      <View style={styles.bot}>
        <TouchableOpacity 
          style={styles.buttonBot} 
          onPress={() => navigation.navigate('Screen2')}
        >
          <Text style={styles.buttonText}>Get Started </Text>
          <Icon name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  top: {
    flex: 4,
  },
  mid: {
    flex: 3,
    paddingVertical: 30,
  },
  midTextContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  midText: {
    fontWeight: '600',
    fontSize: 25,
    color: '#8353E2',
  },
  input: {
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#000',
  },
  bot: {
    flex: 3,
  },
  buttonBot: {
    flexDirection: 'row',
    backgroundColor: '#00BDD6',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
