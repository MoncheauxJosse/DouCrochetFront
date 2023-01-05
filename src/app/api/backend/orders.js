import {URL_BACK_GET_ORDERS, URL_BACK_MODIF_ORDERS_STATE } from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_BACK_GET_ORDERS);
}
export  function modifOrderState(id, index) {
  return apiBackEnd.put(URL_BACK_MODIF_ORDERS_STATE + id, index);
}




