import {URL_BACK_DELETE, URL_BACK_MODIF, URL_GET_ROLES, URL_GET_USERS, URL_BACK_PROFILE, URL_BACK_UPDATE_USER} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_USERS);
}
export function findRole() {
    return apiBackEnd.get(URL_GET_ROLES);
}
export function anonymizeUser(id, docs) {
    return apiBackEnd.put(URL_BACK_DELETE + id, docs);
}

export  function modifUser(id, index) {
    console.log(index, "test");
  return apiBackEnd.put(URL_BACK_MODIF + id, index);
}
export  function updateUser(id , value) {
    console.log("axios profile",id, value);
  return apiBackEnd.put(URL_BACK_UPDATE_USER + id, value);
}

export function getProfile(){
    return apiBackEnd.get(URL_BACK_PROFILE)
}