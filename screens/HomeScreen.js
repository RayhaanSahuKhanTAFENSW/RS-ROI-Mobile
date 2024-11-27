import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HomeScreen(props) {
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
        Home
      </Text>
      <ScrollView>
        <View style={{alignItems: "center", marginBottom: 15}}>
          <Image source={require("../assets/roi-logo.png")}
                style={{width: 320, height: 180, resizeMode: "contain"}}/>
        </View>

        <View
              style={{
                height: 70,
                flexDirection: "row",
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: theme.colors.elevation.level2,
                alignItems: "center",
                borderRadius: 5,
                padding: 10
              }}
            >
          <View style={{flex: 1}}>
            <Text variant="titleMedium">Remaining Leave Days</Text>
          </View>
          <View style={{justifyContent: "flex-end"}}>
            <Text variant="titleMedium" style={{fontWeight: "bold"}}>15</Text>
          </View>
        </View>
        
        <View
              style={{
                height: 70,
                flexDirection: "row",
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: theme.colors.elevation.level2,
                alignItems: "center",
                borderRadius: 5,
                padding: 10
              }}
            >
          <View style={{flex: 1}}>
            <Text variant="titleMedium">Upcoming Holidays</Text>
          </View>
          <View style={{justifyContent: "flex-end"}}>
            <Text variant="titleMedium" style={{fontWeight: "bold"}}>15</Text>
          </View>
        </View>
      </ScrollView>
    </Surface>
  )
}