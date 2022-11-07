import {URL_BACK_DELETE, URL_GET_USERS} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_USERS);
}

export async function anonymizeUser(id) {
    try {
        const res = await apiBackEnd.put(URL_BACK_DELETE + id);
    } catch (err) {
        console.error(err);
    }
}