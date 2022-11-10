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
    } catch (err) {
        console.error(err);
    }
}

export  function modifUser(id, index) {
    console.log(index, "test");
  return apiBackEnd.put(URL_BACK_MODIF + id, index);
}