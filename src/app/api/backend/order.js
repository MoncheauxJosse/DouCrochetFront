import  {URL_BACK_ORDER_USER} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export async function OrderUser(token) {

    return apiBackEnd.get(URL_BACK_ORDER_USER +token)
}