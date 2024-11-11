import { View } from 'react-native';
import Main from './app/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './app/Main';
import Home from './app/stacks/Home';
import Update from './app/stacks/Update';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={main} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
