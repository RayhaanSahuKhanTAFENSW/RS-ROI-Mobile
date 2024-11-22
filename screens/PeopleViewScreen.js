import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { deletePerson, fetchPeople } from '../utils/api';

export default function PeopleViewScreen(props) {

  const isFocused = useIsFocused();

  const [people, setPeople] = useState([]);
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [selectedPersonName, setSelectedPersonName] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetchPeople();
      setPeople(data);
    } catch (err) {
      console.error(err);
      setOffline(true);
      setError("Unable to fetch data, offline mode");
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  async function handleDelete() {
    if (selectedPersonId !== null) {
      try {
        const success = await deletePerson(selectedPersonId);
        if (success) {
          fetchData();
          hideDialog();
        } else {
          setError("Failed to delete. Please try again.");
        }
      } catch (err) {
        console.error("Error deleting:", err);
        setError("Failed to delete. Check your connection.");
        hideDialog();
      }
    }
  }

  async function handleDeleteTest() {
    const lastPerson = people[people.length - 1].id;
    try {
      const success = await deletePerson(lastPerson);
      if (success) {
        fetchData();
      } else {
        setError("Failed to delete. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting:", err);
      setError("Failed to delete. Check your connection.");
    }
  }

  // #region Navigation

  function showAddPerson() {
    props.navigation.navigate("EditPerson", { id: -1 });
  }
  
  function showEditPerson(id) {
    props.navigation.navigate("EditPerson", { id: id });
  }
  
  function showViewPerson(id) {
    props.navigation.navigate("ViewPerson", { id: id });
  }
  
  // #endregion

  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text  variant='displaySmall'>People View Screen</Text>

      {people.map((person) => (
        <Text key={person.id}>{person.name}</Text>
      ))}

      <Button mode="contained" icon="human" onPress={() => showViewPerson(3)}>
        View Person
      </Button>

      <Button mode="contained" icon="pen" onPress={() => showEditPerson(1)}>
        Edit Person
      </Button>

      <Button mode="contained" icon="plus" onPress={() => showAddPerson()}>
        Add Person
      </Button>

      <Button mode="contained" icon="delete" onPress={() => handleDeleteTest()}>
        Delete Person
      </Button>
    </Surface>
  )
}