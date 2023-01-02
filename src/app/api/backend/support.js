import  {URL_BACK_ORDER_USER,URL_BACK_COMPLAINT,URL_BACK_GET_RETURNS, URL_BACK_RETURN_STATE} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export async function supportOrder(token) {
    console.log("appel support")


    return apiBackEnd.get(URL_BACK_ORDER_USER+"/"+token)
}

export async function allProductOrder(factureId) {

    return apiBackEnd.get(URL_BACK_ORDER_USER_PRODUCTS+"/"+factureId)
}

export const postReturn = async (body)=> {

    return apiBackEnd.post(URL_BACK_ORDER_USER, body)
}

export const postComplaint = async (body)=> {

    console.log("test axios ",body)
    return apiBackEnd.post(URL_BACK_COMPLAINT, body)
}

export function supportReturns() {

    return apiBackEnd.get(URL_BACK_GET_RETURNS)
}


export async function supportState(id, body){
    console.log(body)
    return await apiBackEnd.post(URL_BACK_RETURN_STATE + id, body)
}