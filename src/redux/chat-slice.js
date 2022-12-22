import {
    createSlice
} from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatNumber: null,
        messages: [{
            _id: 1,
            text: 'Hey, an agent will be with you soon. In the meantime, please describe your issue. We\'ll message you as soon as we get someone on the line for you.',
            createdAt: new Date ().toISOString(),
            user: {
                _id: 2,
                name: 'Florida DCF',
                avatar: 'https://placeimg.com/140/140/any',
            }
        }]


    },
    reducers: {
        startChat (state, action) {
            return {
                ...state,
                chatNumber: action.payload
            }
        },
        addMessage(state, action) {
            const newMessages = action.payload;
            const existingMessages = state.messages;
            const updatedMessages = [...existingMessages];
          
            newMessages.forEach((message) => {
              if (!existingMessages.find((m) => m._id === message._id)) {
                updatedMessages.push(message);
              }
            });
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
            return {
              ...state,
              messages: updatedMessages,
            };
        }
    },
});

export const chatActions = chatSlice.actions;
export default chatSlice;