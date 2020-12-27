import { produce } from "immer";

export const initialState=  {
  userDetails: "",
  token: "",
  loading: false,
  errorMessage: null,
  profileType: null,
  userFetched:false
}

export const AuthReducer = produce(
  (state, action) => {
    console.log(action)
    switch (action.type) {
      case "USER_FETCHED":
        state.userFetched=true;
        state.userDetails=action.payload;
        break;
      case "REQUEST_LOGIN":
        state.loading = true;
        break;
      case "LOGIN_SUCCESS":
      case "REAUTH_USER":
        state.userDetails = action.payload;
        state.token = action.payload;
        state.loading = false;
        state.userFetched=true;
        break;

      case "LOGOUT":
        state.token = "";
        state.userDetails = null;
        break;

      case "LOGIN_ERROR":
        state.loading = false;
        state.errorMessage = action.error;
        state.userFetched=true;
        break;
    }
  },
 initialState
);
