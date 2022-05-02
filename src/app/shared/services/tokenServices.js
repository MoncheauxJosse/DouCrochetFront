import jwt_decode from 'jwt-decode';

const TOKEN_NAME = 'token';

/**
 * To save the JWT token using for the back end requests
 * Save in the local storage
 *
 * @param {string} token: to save
 * @author Peter Mollet
 */
export function setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
}

/**
 * To get the JWT token back-kend saved in the localstorage
 *
 * @return {string} token
 * @author Peter Mollet
 */
export function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

/**
 * Delete the token from the localstorage
 *
 * @author Peter Mollet
 */
export function removeToken() {
    localStorage.removeItem(TOKEN_NAME);
}

/**
 * Get the payload of the JWT Token (with experition date, login and roles)
 *
 * @return {object} payload of the token
 * @author Peter Mollet
 */
export function getPayloadToken() {
    return decodeToken();
}

/**
 * Decode the jwt token to get all the visible part (header and payload)
 *
 * @returns {object} the decoded token
 * @author Peter Mollet
 */
function decodeToken() {
    const token = getToken();
    return jwt_decode(token);
}
