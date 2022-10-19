import { URL_GET_ALL_PRODUCTS } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_ALL_PRODUCTS);
}