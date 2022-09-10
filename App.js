import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IMCScreen from './src/pages/IMCScreen';
import HomeScreen from './src/pages/HomeScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="IMC" component={IMCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
