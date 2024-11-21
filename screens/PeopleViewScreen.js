import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function PeopleViewScreen(props) {

  function showAddPerson() {
    props.navigation.navigate("EditPerson", { id: -1 });
  }
  
  function showEditPerson(id) {
    props.navigation.navigate("EditPerson", { id: id });
  }
  
  function showViewPerson(id) {
    props.navigation.navigate("ViewPerson", { id: id });
  }

  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text  variant='displaySmall'>People View Screen</Text>

      <Button mode="contained" icon="update" onPress={() => showViewPerson(3)}>
        View Person
      </Button>

      <Button mode="contained" icon="update" onPress={() => showViewPerson(1)}>
        Edit Person
      </Button>

      <Button mode="contained" icon="update" onPress={() => showViewPerson()}>
        Add Person
      </Button>
    </Surface>
  )
}