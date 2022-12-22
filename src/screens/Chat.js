import React, { useEffect, useMemo } from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { GiftedChat } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";
import { listenForMessages } from "../../firebase";
import { receiveMessages, sendMessage } from "../redux/chat-actions";
import {v4 as uuidv4} from 'uuid';

export const Chat = () => {
  const messages = useSelector((state) => state.chat.messages);
  const reversedMessages = [...messages].reverse();
  const dispatch = useDispatch();

  const onSend = (messages = []) => {
    messages.push({
            _id: uuidv4(),
            text: 'I reply quickly',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        
    })
    const newMessages = messages.map(message => ({
        ...message,
        createdAt: message.createdAt.toISOString()
      }));
    
    dispatch(sendMessage(newMessages));
  };
  useEffect(() => {
    const sendRequest = async () => {
        const res = await listenForMessages(dispatch, receiveMessages);
        return res;
    }
    sendRequest()
  }, []);
  return (
    <>
      <GiftedChat
        messages={reversedMessages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
      <Button onPress={() => {
        console.log("Messages", messages);
      }}>
        <Text>Send</Text>
      </Button>
    </>
  );
};

// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'

// export function Chat() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }
