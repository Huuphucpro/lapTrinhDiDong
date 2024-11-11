import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './app/screen1';  // Adjust the path if needed
import Screen2 from './app/screen2';  // Adjust the path if needed

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{ title: 'Home'  }} 
        />
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{ title: 'Task Manager' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
