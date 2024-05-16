import {FlatList, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Chat from '@/components/Chat'
import { useNavigation } from '@react-navigation/native'


const ChatScreen = () => {
  const navigation = useNavigation()
  const chats = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
  ];

  return (
  
      
     <View style = {styles.container}>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() =>  {navigation.navigate('(chats)')}}>
            <Chat item={item.key} />
          </TouchableOpacity>
          
        )}
      />
      
    </View>
    
   
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

})