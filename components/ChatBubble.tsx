import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ChatBubbleProps = {
  sender: boolean;
  message: string;
};

const ChatBubble = ({ sender, message }: ChatBubbleProps) => {
  return (
    <View style={[styles.container, sender ? styles.senderBubble : styles.receiverBubble]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '70%',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  senderBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Sender bubble color
  },
  receiverBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF', // Receiver bubble color
  },
  message: {
    fontSize: 16,
  },
});

export default ChatBubble;
