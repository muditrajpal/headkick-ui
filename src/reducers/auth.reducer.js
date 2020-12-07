import React from "react";
 
export const initialState = {
  userDetails: "",
  token: "",
  loading: false,
  errorMessage: null,
  profileType: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload,
        token: action.payload.token,
        loading: false,
      };
    case "REAUTH_USER":
      return {
        ...initialState,
        userDetails: action.payload,
        token: action.payload.token,
        loading: false,
      }
    case "LOGOUT":
      return initialState;
    case "REQUEST_LOGOUT":
      return {
        ...initialState,
        loading: true
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
        userDetails: "",
        token: "",
        loading: true
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};