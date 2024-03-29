import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IMCScreen from './src/pages/IMCScreen';
import IMMScreen from './src/pages/IMMScreen';
import HomeScreen from './src/pages/HomeScreen';
import WeightBoneScreen from './src/pages/WeightBoneScreen';
import CalcAbdomen from './src/pages/CalcAbdomen';
import CalcIAC from './src/pages/CalcIAC';
import IGCScreen from './src/pages/IGCScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="IMC" component={IMCScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="IMM" component={IMMScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center', title: 'Peso Osseo' }} name="WeightBone" component={WeightBoneScreen} />
        <Stack.Screen options={{ headerTitleAlign: 'center', title: 'Perimetro do Abdômen' }} name="CalcAbdomen" component={CalcAbdomen} />
        <Stack.Screen options={{ headerTitleAlign: 'center', title: 'IAC' }} name="IAC" component={CalcIAC} />
        <Stack.Screen options={{ headerTitleAlign: 'center', title: 'IGC' }} name="IGC" component={IGCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
