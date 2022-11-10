import { createSlice } from '@reduxjs/toolkit';

import { getPayloadToken, isTokenValid, setToken } from '../services/tokenServices';

/**
 * initial state: {
 *  - isAuthenticated:  check if the user is already authenticated when openning the Application
 *  - token: the token of the user
 *  - user: the user data
 * }
 * @author Peter Mollet
 */

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            const token = action.payload;
            state.token = token;
            //decode le token
             const claims = getPayloadToken(token);
             // ajoute les donné décodé du token dans le user 
            const user = {
                username: claims.email,
                roles: claims.role,
            };
             // ajoute le user dans le store redux
             state.user = user;
            state.isAuthenticated = isTokenValid(token);
            setToken(action.payload);
        },
        signOut: (state) => {
            localStorage.clear();
            sessionStorage.clear();
            state.isAuthenticated = false;
        },
    },
});

export const { signIn, signOut } = authenticationSlice.actions;

export const selectIsLogged = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;



// appelé dans privateRoute.js 
 export const selectHasRole = (state, roles) => {

    if (!roles || roles.length === 0) return true;

    const user = state.auth.user;

    if (!user) return false;

    // console.log(roles)
    // console.log(user.roles)

    return roles.some((roles) => roles.includes(user.roles));

};
 export const isAdmin = (state) => {

    const user = state.auth.user;
    return user && user.roles
};

export default authenticationSlice.reducer;
