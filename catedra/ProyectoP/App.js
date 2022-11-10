import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Navigation from "./src/navigation/Navigation";

import NavigationAdmin from "./src/navigation/NavigationAdmin";

import Login from './src/components/login';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Loguin'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Navigation}/>
        <Stack.Screen name='HomeAdmin' component={NavigationAdmin}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}
