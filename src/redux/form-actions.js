import { formActions } from "./form-slice";

export const sendData = (name) => {
  return async (dispatch) => {
    const sendRequest = async () => {
        console.log("sending data")
      const res = await fetch(
        "https://stop-elder-abuse-default-rtdb.firebaseio.com/data.json",
        {
          method: "PUT",
          body: JSON.stringify(name),
        }
      );
      const data = await res.json();
      console.log(data)
    };
    try {
      await sendRequest();
    } catch (err) {}
  };
};

export const changeData = (data) => {
  return async (dispatch) => {
    dispatch(formActions.setData(data));
  };
}