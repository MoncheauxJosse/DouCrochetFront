import  {URL_BACK_ORDER_USER} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export async function supportOrder(token) {

    return apiBackEnd.get(URL_BACK_ORDER_USER+"/"+token)
}

export const postReturn = async (body)=> {

    return apiBackEnd.post(URL_BACK_ORDER_USER, body)
}