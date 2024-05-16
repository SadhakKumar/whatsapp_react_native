import { StyleSheet, Text, View } from 'react-native'
import { Slot,Stack } from 'expo-router'
import { Appbar,Avatar } from 'react-native-paper'



const ChatLayout = () => {
  return (
    
    <>
      <Appbar.Header style = {{backgroundColor: "#075E54"}}>
      
        <Appbar.BackAction onPress={() => {}}/>
        <Appbar.Content
          title={(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar.Image source={require('../../assets/images/icon.png')} size={32} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 18, color: "white" }}>Programmer1</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>Online</Text>
              </View>
            </View>
          )}
        />
        <Appbar.Action icon="video" onPress={() => {}} color="white"/>
        <Appbar.Action icon="phone" onPress={() => {}} color="white"/>
        <Appbar.Action icon="dots-vertical" onPress={() => {}} color="white"/>
      </Appbar.Header>
      <Slot/>
    </>
  )
}


export default ChatLayout