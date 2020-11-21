import axios from "axios";
import { msgFromError } from "utils/axiosUtils";
import { API_URLS } from "constants/api";
import showHideNotification from "components/showHideNotification";

export const uploadImage = async (imageFile) => {
  let url = API_URLS.UPLOAD_IMAGE;
  let formCompany = new FormData();
  formCompany.append("photo", imageFile);
  formCompany.append(
    "name",
    `Img_${new Date().getTime()}.${
      imageFile.name.match(/[^/]+(jpg|jpeg|png|gif)$/)[1]
    }`
  );
  formCompany.append("type", "0");
  try {
    const { data } = await axios.post(url, formCompany);
    return data.result;
  } catch (err) {
    console.log(err);
    showHideNotification(msgFromError(err), "danger");
  }
};
