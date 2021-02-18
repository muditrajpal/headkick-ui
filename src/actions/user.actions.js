import axios from 'axios';
import { msgFromError }  from "utils/axiosUtils";
import showHideNotification from "components/showHideNotification";
import { API_URLS } from 'constants/api';
import { setLocalStorage,getLocalStorage,deleteLocalStorage } from 'utils/common';
import { clearLocalStorage } from 'utils/common';
import history from "historyObj";
 
export async function loginUser(dispatch, loginPayload) {

 
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = axios.post(API_URLS.SIGN_IN, loginPayload)
    let responseData = await response;
    const {user, errors } = responseData.data.result
 
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      setLocalStorage('currentUser', user)
      setLocalStorage("access_token","bearer "+ user.token)
      return user;
    }
    dispatch({ type: 'LOGIN_ERROR', error: errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

// authorize use if the user information available in localforage
export async function reauthUser(dispatch) {
  const userDetails =  getLocalStorage("currentUser");
  if(userDetails) {
    dispatch({ type: "REAUTH_USER", payload: userDetails})
  }
}
 
export async function logout(dispatch) {
  clearLocalStorage();
  dispatch({ type: "LOGOUT"});
  history.go(0)

}

export async function fetchUser(dispatch) {

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let responseData = await axios.get(API_URLS.FETCH_USER)
    const user = responseData.data.result
 
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      setLocalStorage('currentUser', user)
      return user;
    }
    dispatch({ type: 'LOGIN_SUCCESS', payload: null });
    return;
  } catch (error) {
    showHideNotification(msgFromError(error), "danger");
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
