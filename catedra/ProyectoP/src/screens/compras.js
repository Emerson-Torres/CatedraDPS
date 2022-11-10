import React from "react";
import { StatusBar } from 'react-native'
import { Text } from "react-native";
import { View } from "react-native";

export default function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#694fad" translucent = {true}/>
      <Text>Compras!</Text>
    </View>
  );
}