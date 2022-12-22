import { formActions } from "./form-slice";
import {sendReport, uploadImage} from '../../firebase'

export const sendReportAction = (report) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      console.log("sending data")
     console.log("sending report to firebase")
     console.log(report)
      const res = await sendReport(report)
      return res
    };
    try {
      return await sendRequest();
    } catch (err) {
        alert("Something went wrong, please try again later")
        return false
    }
  };
};

export const changeData = (data) => {
  return async (dispatch) => {
    dispatch(formActions.setData(data));
  };
}