import {
    createSlice
} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [{
            _id: 1,
            text: 'Hello, how are you?',
            createdAt: "2021-03-01T12:00:00.000Z",
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        }]


    },
    reducers: {
        addMessage(state, action) {
            const newMessages = action.payload;
            const existingMessages = state.messages;
            const updatedMessages = [...existingMessages];
          
            newMessages.forEach((message) => {
              if (!existingMessages.find((m) => m._id === message._id)) {
                updatedMessages.push(message);
              }
            });
            console.log("Updated Messages", updatedMessages)
            return {
              ...state,
              messages: updatedMessages,
            };
        },
        receiveMessage(state, action) {
            const newMessages = action.payload;
            const existingMessages = state.messages;
            const updatedMessages = [...existingMessages];
          
            newMessages.forEach((message) => {
              if (!existingMessages.find((m) => m._id === message._id)) {
                updatedMessages.push(message);
              }
            });
            console.log("Updated Messages", updatedMessages)
            return {
              ...state,
              messages: updatedMessages,
            };
        }
    },
});

export const chatActions = chatSlice.actions;
export default chatSlice;