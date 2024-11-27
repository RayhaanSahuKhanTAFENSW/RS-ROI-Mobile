import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme, Switch } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HelpScreen(props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  theme = useTheme();

  return (
    <Surface style={{flex:1, padding: 16}} mode="flat" elevation={1}>
      <Text
        variant="headlineLarge"
        style={{
          marginHorizontal: 10,
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        Help
      </Text>

      <ScrollView style={{flex: 1}}>
        <View style={{ flexDirection: "row", marginBottom: 10}}>
          <Text
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: isSwitchOn ? 20 : 16,
              marginRight: 10,
            }}
          >
            Font Size
          </Text>
          <Switch
            value={isSwitchOn}
            onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text variant="titleLarge" style={{color: theme.colors.primary,}}>Staff Directory:</Text>
          <Text variant='titleMedium' style={{fontSize: isSwitchOn ? 20 : 16}}>The staff directory can be easily accessed by pressing the staff directory button found at middle bottom of the screen. Once clicked it will bring up a scrollable list of all the staff members in the directory.</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text variant="titleLarge" style={{color: theme.colors.primary,}}>View Staff Member:</Text>
          <Text variant='titleMedium' style={{fontSize: isSwitchOn ? 20 : 16}}>To view a staff member’s details, first open the staff directory, then press the folder button on the staff member you wish to view. This will bring up all the details for this staff member.</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text variant="titleLarge" style={{color: theme.colors.primary,}}>Edit Staff Member:</Text>
          <Text variant='titleMedium' style={{fontSize: isSwitchOn ? 20 : 16}}>To edit a staff member’s details, first open the staff directory, then press the pen icon on the top right side of the staff member you wish to edit. This will bring up the staff member’s details in text boxes that you can edit. Once you have made the desired changes, press the save button at the bottom of the screen.</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text variant="titleLarge" style={{color: theme.colors.primary,}}>Add Staff Member:</Text>
          <Text variant='titleMedium' style={{fontSize: isSwitchOn ? 20 : 16}}>To add a staff member, first open the staff directory, then press the plus icon button at the bottom right of the screen. This will open up a blank screen with empty staff details. Once you have filled them in, press the save button at the bottom of the screen.</Text>
        </View>
        <View>
          <Text variant="titleLarge" style={{color: theme.colors.primary,}}>Delete Staff Member:</Text>
          <Text variant='titleMedium' style={{fontSize: isSwitchOn ? 20 : 16}}>To delete a staff member, first open the staff directory, then press the bin icon button on the bottom right side of the staff member you wish to delete. This will open a popup confirming that you want to delete. Confirm the popup and the staff member will now be deleted.</Text>
        </View>
      </ScrollView>
    </Surface>
  )
}