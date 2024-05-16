import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatusItem from '@/components/StatusItem'

const StatusScreen = () => {
  return (
    <>
      <View style = {styles.container}>
        <StatusItem imageUri="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" userName = "My Status" time = "Today 12:00" />
      </View>

      <Text style = {styles.recentText}>Recent Updates</Text>

      <View>
        <StatusItem imageUri="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" userName = "John" time = "Today 12:00" />
        <StatusItem imageUri="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" userName = "Don" time = "Today 12:00" />
        <StatusItem imageUri="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" userName = "John" time = "Today 12:00" />
      </View>

      <Text style = {styles.recentText}>Viewed Updates</Text>
      <View>
        <StatusItem imageUri="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" userName = "John" time = "Today 12:00" />
        <StatusItem imageUri="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" userName = "Don" time = "Today 12:00" />
        <StatusItem imageUri="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" userName = "John" time = "Today 12:00" />
      </View>
    </>
  )
}

export default StatusScreen

const styles = StyleSheet.create({
  recentText :{
    color: "gray",
    margin: 10,
  },
  container:{
    marginTop: 10,
    borderBottomColor: '#ccc',
  }
})