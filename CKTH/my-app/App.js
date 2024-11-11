import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen1 from './app/screen1';
import screen2 from './app/screen2';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="SC1" component={screen1}/>
        <Stack.Screen name="SC2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
