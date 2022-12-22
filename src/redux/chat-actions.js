import { chatActions } from './chat-slice';
import { uploadMessage } from '../../firebase';

export const sendMessage = (message) => {
  return async (dispatch) => {
    try {
     await uploadMessage(message);
      dispatch(chatActions.addMessage(message));
    } catch (err) {
        alert("Something went wrong, please try again later")
        return false
    }
  };
};
export const receiveMessages = (messages) => {
  return (dispatch, getState) => {
    try {
     console.log("State Object Before", getState().chat.messages)
      dispatch(chatActions.receiveMessage(messages));
      console.log("State Object After", getState().chat.messages)

    } catch (err) {
        console.log(err)
        alert("Something went wrong, please try again later")
        return false
    }
  };
};