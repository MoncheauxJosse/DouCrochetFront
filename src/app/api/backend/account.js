import jwtDecode from 'jwt-decode';
import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}
export function register(value){
    return apiBackEnd.post(URL_BACK_REGISTER, value);
}