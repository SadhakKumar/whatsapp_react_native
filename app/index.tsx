import * as React from 'react';
import { StyleSheet, Text, View,useWindowDimensions } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './(home)/ChatScreen';
import StatusScreen from './(home)/StatusScreen';
import CallScreen from './(home)/CallScreen';
import { Appbar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { FloatingAction } from "react-native-floating-action";

export default function App() {
  const navigation = useNavigation()
  const Tab = createMaterialTopTabNavigator();
  const layout = useWindowDimensions();

  return (
    <>
    <Appbar.Header style = {{backgroundColor: "#075E54"}}>
        <Appbar.Content title={(
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: "white", fontWeight:'bold'}}>WhatsApp</Text>
          </View>
        )}/>
        <Appbar.Action icon="magnify" onPress={() => {}} color="white"/>
        <Appbar.Action icon="dots-vertical" onPress={() =>  {navigation.navigate('(settings)')}} color="white"/>
      </Appbar.Header>
      <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: 'white', fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        tabBarStyle: { backgroundColor: '#075E54' },
      }}
      >
      <Tab.Screen 
        name="Camera" 
        component={ChatScreen} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => ( 
            <Ionicons name="camera" size= {24} color="white" />
          )
        }}
      />
        <Tab.Screen name="Chats" component={ChatScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View style ={styles.tab}>
                <Text style ={styles.texts}>Chats</Text>
                <View style={styles.messageCount}>
                  <Text style={styles.messageCountText}>9</Text>
                </View>
              </View>
              
            )
          }}
        />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallScreen} />
      </Tab.Navigator>

      <FloatingAction
        actions={[]}
        onPressMain={() => {}}
        color = "#075E54"
        floatingIcon={<Ionicons name="chatbox-ellipses" size={24} color="white" />}
      />

    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tab:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texts:{
    textAlign: 'center',
    width: 50,
    color: 'white',
    fontWeight: 'bold', 
  },
  messageCount: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  messageCountText: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
  },
})