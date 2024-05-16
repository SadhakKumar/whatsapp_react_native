import { StyleSheet, Text, View } from 'react-native'
import { Slot,Stack } from 'expo-router'
import { Appbar } from 'react-native-paper'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { createStackNavigator } from '@react-navigation/stack';
import App from './index'
import ChatLayout from "./(chats)/_layout"
import { FloatingAction } from "react-native-floating-action";
import Ionicons from '@expo/vector-icons/Ionicons';


const RootLayout = () => {
  // const Stack = createStackNavigator()
  return (
    <>
      <Stack>
        <Stack.Screen name = "index" options={{headerShown : false}}/>
        <Stack.Screen name = "(chats)"  options={{headerShown: false}}/>
        <Stack.Screen name = "(settings)"  options={{headerShown: false}}/>
      </Stack>
      
    </>
      
  )
}

export default RootLayout