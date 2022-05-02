import { getPayloadToken, getToken } from './tokenServices';

/**
 * To get all the roles of the current user
 *
 * @return {Array} roles of the current user
 * @author Peter Mollet
 */
export function accountRoles() {
    const payload = getPayloadToken();
    return payload.auth.split(',');
}

/**
 * To get the login of the current user
 *
 * @return {string} login of the current user
 * @author Peter Mollet
 */
export function accountLogin() {
    const payload = getPayloadToken();
    return payload.sub;
}

export function hasRole(role) {
    return accountRoles().includes(role);
}

/**
 * To check if the current user is authenticated
 * Check the token, and it's validity
 *
 * @return {boolean} true if user is authenticated
 * @author Peter Mollet
 */
export function isAuthenticated() {
    try {
        const token = getToken();
        //  console.log('token', token);
        const payload = getPayloadToken();
        // console.log('payload', payload);
        const roles = payload.auth.split(',');
        // console.log('roles', roles);
        const expirationDate = payload.exp;
        // console.log('expiration', expirationDate);
        const login = payload.sub;
        //console.log('login', login);
        const dateNow = new Date();
        return token && roles.length > 0 && login && expirationDate < dateNow.getTime();
    } catch {
        //  console.log('CATCH FALSE');
        return false;
    }
}
