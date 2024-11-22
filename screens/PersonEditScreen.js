import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { addPerson, fetchDepartments, fetchPersonById, updatePerson } from '../utils/api';

export default function PersonEditScreen(props) {

  const {id} = props.route.params;

  const [person, setPerson] = useState({
    name: "New Person",
    phone: "123456",
    street: "New Street",
    city: "New City",
    state: "NSW",
    zip: "1234",
    country: "Australia",
    departmentId: 1,
  });
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departmentsData = await fetchDepartments();
        setDepartments(departmentsData);
        if (id !== -1) {
          const personData = await fetchPersonById(id);
          setPerson(personData);
        }
      } catch (err) {
        console.error(err);
        setOffline(true);
        setError("Unable to fetch data, offline mode");
      }
    };
  
    fetchData();
  }, []);

  async function handleSubmit() {
    try {
      if (id === -1) {
        await addPerson(person);
      } else {
        await updatePerson(id, person);
      }
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
      setError("Failed to save data.");
    }
  };

  // #region Navigation
  function showPeopleView() {
    props.navigation.navigate("PeopleView");
  }
  // #endregion

  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text  variant='displayMedium'>PersonEditScreen</Text>
      <Text variant='displaySmall'>Person Info</Text>
      <Text>{person?.name}</Text>
      <Text>{person?.phone}</Text>
      <Text>{person?.street}</Text>
      <Text>{person?.city}</Text>
      <Text>{person?.state}</Text>
      <Text>{person?.zip}</Text>
      <Text>{person?.country}</Text>
      <Text>{person?.departmentId}</Text>
      <Text variant='displaySmall'>Departments</Text>
      {departments.map((department) => (
        <Text key={department.id}>{department.name}</Text>
      ))}
      <Button mode="contained" icon="update" onPress={() => showPeopleView()}>
        Back
      </Button>

      <Button mode="contained" icon="update" onPress={() => handleSubmit()}>
        Save or New
      </Button>
    </Surface>
  )
} 