import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import {storage,getStorage, ref,getDownloadURL,uploadBytes} from '../../firebaseConfig';
import uuid from "uuid";

const Settings = () => {
  
  const [image, setImage] = useState<string>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImageAsync(result.assets[0].uri);
    }
  };

  async function uploadImageAsync(uri:string) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.split('/').pop();
    const storageRef = ref(getStorage(), `profile/${filename}`);
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    console.log(url);
  }

  return (
    <View style={styles.container}>
      {/* Profile section */}
      <TouchableOpacity style={styles.profileContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <Ionicons name="person-circle" size={60} color="#757575" />
        )}
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileStatus}>Available</Text>
        </View>
      </TouchableOpacity>

      {/* Account tile */}
      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="key" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Account</Text>
          <Text style={styles.tileDescription}>Manage your account settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="chatbox-ellipses" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Chats</Text>
          <Text style={styles.tileDescription}>Manage your chats settings</Text>
        </View>
      </TouchableOpacity>



      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="notifications" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Notification</Text>
          <Text style={styles.tileDescription}>Manage your Notification settings</Text>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="laptop" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Storage and Data</Text>
          <Text style={styles.tileDescription}>Manage your Data settings</Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="help" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Help</Text>
          <Text style={styles.tileDescription}>Help centre, contact us, ..</Text>
        </View>
      </TouchableOpacity>    

      <TouchableOpacity style={styles.tileContainer}>
        <Ionicons name="body" size={24} color="#757575" />
        <View style={styles.tileTextContainer}>
          <Text style={styles.tileName}>Invite a Friend</Text>
          <Text style={styles.tileDescription}>Help centre, contact us, ..</Text>
        </View>
      </TouchableOpacity>   

      <Text style={styles.fromText}>From</Text>

      {/* Facebook text */}
      <Text style={styles.facebookText}>Facebook</Text>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileStatus: {
    fontSize: 16,
    color: '#757575',
  },
  tileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  tileTextContainer: {
    marginLeft: 20,
  },
  tileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tileDescription: {
    fontSize: 14,
    color: '#757575',
  },
  fromText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  facebookText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default Settings;
