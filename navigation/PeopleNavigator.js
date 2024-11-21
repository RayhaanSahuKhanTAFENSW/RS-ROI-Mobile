import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import PeopleViewScreen from '../screens/PeopleViewScreen';
import PersonEditScreen from '../screens/PersonEditScreen';
import PersonViewScreen from '../screens/PersonViewScreen';
// Import Screens

const Stack = createStackNavigator();

export default function PeopleNavigator() {
  return (
    <Stack.Navigator initialRouteName='PeopleView' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='PeopleView'
        component={PeopleViewScreen}
      />
      <Stack.Screen
        name='EditPerson'
        component={PersonEditScreen}
      />
      <Stack.Screen
        name='ViewPerson'
        component={PersonViewScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});