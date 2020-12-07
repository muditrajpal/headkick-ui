import localForage from 'localforage';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/api';

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  // body: JSON.stringify(loginPayload),
};
 
export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = axios.post(`${ROOT_URL}/auth/signin`, JSON.stringify(loginPayload), requestOptions)
    let responseData = await response;
    const {user, errors } = responseData.data.result
 
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      localForage.setItem('currentUser', user)
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
  const userDetails = await localForage.getItem("currentUser");
  if(userDetails) {
    dispatch({ type: "REAUTH_USER", payload: userDetails})
  }
}
 
export async function logoutUser(dispatch, logoutPayload) {
  dispatch({ type: 'REQUEST_LOGOUT' });
  let response = axios.post(`${ROOT_URL}/auth/signout`, JSON.stringify(logoutPayload), requestOptions)
  let responseData = await response;
  const {status} = responseData.data.result

  if (status === 200) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    localForage.removeItem('currentUser')
    return {status}
  } else {
    dispatch({ type: 'LOGOUT_ERROR', error: "Unable to logout user at server!" });
  }
}