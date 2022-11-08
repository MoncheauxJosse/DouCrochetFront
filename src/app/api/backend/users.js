import {URL_BACK_DELETE, URL_BACK_MODIF, URL_GET_ROLES, URL_GET_USERS} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_USERS);
}
export function findRole() {
    return apiBackEnd.get(URL_GET_ROLES);
}
export async function anonymizeUser(id) {
    try {
        const res = await apiBackEnd.put(URL_BACK_DELETE + id);
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    } catch (err) {
        console.error(err);
    }
}

export async function modifUser(id) {
    try {
        const res = await apiBackEnd.put(URL_BACK_MODIF + id);
        console.log(res);
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    } catch (err) {
        console.error(err);
    }
}