import React from 'react';

import { loginUser, logoutUser} from './../actions/user.actions'

import {AuthReducer, initialState} from './../reducers/auth.reducer'

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();


function AuthProvider({children}) {
    const [state, dispatch ] = React.useReducer(AuthReducer, initialState);
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if(context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider')
    }
    return context;
}

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if(context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider')
    }
    return context;
}


export {
    AuthProvider, useAuthState, useAuthDispatch, loginUser, logoutUser
}