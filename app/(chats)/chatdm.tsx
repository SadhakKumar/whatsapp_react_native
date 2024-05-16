import {Text,View, FlatList, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground, ViewBase } from 'react-native';
import ChatBubble from '@/components/ChatBubble';
import React,{useEffect,useState} from 'react'
import {collection, firestore,getDocs,setDoc} from '../../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface msg {
  index:number,
  sender: boolean,
  message: string
}
const chatdm = () => {

  const [chatDataState, setChatDataState] = useState<msg[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const chatRef = collection(firestore, 'chat');
      const querySnapshot = await getDocs(chatRef);

      const messages: {index:number, sender: boolean, message: string}[] = []; // Change the type to an array
      querySnapshot.forEach((doc) => {
        const { index,sender,message } = doc.data();
        
        messages.push({index,sender,message});
      });
      console.log(messages);
      setChatDataState(messages);
    };
    fetchData();
  }, []);

  return (
    
    <ImageBackground source={require('../../assets/whatsapp2.jpg')} style ={styles.image}>
      <View style={styles.containertop}>
        {/* Chat bubbles */}
        <FlatList
          data={chatDataState.sort((a,b) => a.index - b.index)}
          renderItem={({item}) => <ChatBubble sender={item.sender} message={item.message} />}
          keyExtractor={item => item.index.toString()}
        />
        
        {/* Text input */}
        <View style={styles.container}>
          <View style = {styles.innercontainer}>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="body" size={24} color="#757575" />
          </TouchableOpacity>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message..."
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="attach" size={24} color="#757575" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera" size={24} color="#757575" />
          </TouchableOpacity>
          </View>
          {/* Send button */}
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#25D366" />
          </TouchableOpacity>
          
        </View>
        
      </View>
    </ImageBackground>
    
  
    
  );
};

const styles = StyleSheet.create({
  containertop: {
    flex: 1,
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    opacity: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 5,
    
  },
  innercontainer:{
    flex:1,
    flexDirection: 'row',
    backgroundColor:"white",
    borderRadius:30
  },
  iconButton: {
    padding: 8,
  },
  textInputContainer: {
    flex: 1,
    borderRadius: 10,
    // backgroundColor: '#f2f2f2',
    // marginHorizontal: 2,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    padding: 8,
  },

});

export default chatdm