import { URL_BACK_GET_ORDERS } from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_BACK_GET_ORDERS);
}