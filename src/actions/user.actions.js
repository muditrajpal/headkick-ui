import localForage from 'localforage';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/api';
 
export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(loginPayload),
  };
 
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
 
export async function logout(dispatch) {
  localForage.removeItem('currentUser').then(function() {
    dispatch({ type: "LOGOUT"})
  }).catch(function(err) {
      console.log(err);
  });
}