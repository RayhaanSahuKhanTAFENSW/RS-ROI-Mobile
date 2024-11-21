import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
// Import Screens

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Main'
        component={MainNavigator}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});