import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const Chat = ({item}: {item: string}) => {  
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item}</Text>
        <Text style={styles.recentMessage}>hi how are you</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>12:00</Text>
        <View style={styles.messageCount}>
          <Text style={styles.messageCountText}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentMessage: {
    fontSize: 14,
    color: '#666',
  },
  infoContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  messageCount: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 5,
  },
  messageCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Chat