import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'
import { Appbar } from 'react-native-paper'

const Settingslayout = () => {
  return (
    <>
      <Appbar.Header style = {{backgroundColor: "#075E54"}}>
        <Appbar.BackAction onPress={() => {}}/>
      <Appbar.Content title={(
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: "white" }}>Settings</Text>
        </View>
      )}/>
      </Appbar.Header>
      <Slot/>
    </>
  )
}

export default Settingslayout

const styles = StyleSheet.create({})