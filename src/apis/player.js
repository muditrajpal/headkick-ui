import axios from "axios";
import { msgFromError } from "utils/axiosUtils";
import { API_URLS } from "constants/api";
import showHideNotification from "components/showHideNotification";

export const fetchPlayerList = async (params) => {
  let url = API_URLS.FETCH_PLAYERS_LIST;
  try {
    const { data } = await axios.get(url,{params});
    return data;
  } catch (err) {
      console.log(err)
    showHideNotification(msgFromError(err), "danger");
  }
};
