import React, { useEffect, useState} from "react";
import { View, Text, Button, TouchableOpacity, Modal, Colors } from "react-native-ui-lib";
import { GiftedChat, InputToolbar, Send } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";
import { listenForMessages } from "../../firebase";
import { startChat, receiveMessages, sendMessage } from "../redux/chat-actions";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { Alert, BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";


export const Chat = ( {navigation}) => {
  const messages = useSelector((state) => state.chat.messages);
  const chatNumber = useSelector((state) => state.chat.chatNumber);
  const reversedMessages = [...messages].reverse();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const onSend = (messages = []) => {
    messages.push({
      _id: uuidv4(),
      text: "I reply quickly",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
      },
    });
    const newMessages = messages.map((message) => ({
      ...message,
      createdAt: message.createdAt.toISOString(),
    }));

    dispatch(sendMessage(newMessages, chatNumber));
  };
  useEffect(() => {
    const start = async () => {
      await dispatch(startChat());
    };
    const listen = async (chatNumber) => {
      console.log(chatNumber);
      const res = await listenForMessages(
        dispatch,
        receiveMessages,
        chatNumber
      );
      return res;
    };
    start();
    console.log(chatNumber);
    listen(chatNumber);
    
  }, []);



  const renderInputToolbar = (props) => {
    //Add the extra styles via containerStyle
   return <InputToolbar {...props} containerStyle={{
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    borderColor: Colors.lightGrey,
  }}
     />
  }
  const renderSend = (props) => {
    return (
      <Send {...props}
      containerStyle ={{borderWidth: 0}}
      />
    )
  }

  return (
    <>
      <View style={{
        
      }}>
        <View row marginT-65 marginL-40>
          <View left>
            <TouchableOpacity body textColor onPress={() => {
              navigation.goBack();}}>
              <Text body primaryColor>
                {t("common:back")}
              </Text>
            </TouchableOpacity>
          </View>
          <View marginL-70>
            <Text h1>{t("common:chatTitle")}</Text>
          </View>
        </View>
      </View>
      
      <GiftedChat
        messages={reversedMessages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        maxInputLength={300}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
      />
      
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
