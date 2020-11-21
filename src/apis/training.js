import axios from "axios";
import { msgFromError } from "utils/axiosUtils";
import { API_URLS } from "constants/api";
import showHideNotification from "components/showHideNotification";

export const fetchTrainingList = async (params) => {
  let url = API_URLS.FETCH_TRAINING_LIST;
  try {
    const { data } = await axios.get(url,{params});
    return data;
  } catch (err) {
      console.log(err)
    showHideNotification(msgFromError(err), "danger");
  }
};

export const fetchTrainingDetail = async (params) => {
  let url = API_URLS.FETCH_TRAINING_DETAILS;
  try {
    const { data } = await axios.get(url,{params});
    return data;
  } catch (err) {
      console.log(err)
    showHideNotification(msgFromError(err), "danger");
  }
};


export const addUpdateTraining = async (params) => {
  let url = API_URLS.ADD_UPDATE_TRAINING_DETAILS;
  try {
    const { data } = await axios.post(url,params);
    showHideNotification("Training Updated", "success");
    return data.result;
  } catch (err) {
      console.log(err)
    showHideNotification(msgFromError(err), "danger");
  }
};

