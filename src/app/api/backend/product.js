import { /*URL_GET_ALL_PRODUCTS,*/URL_BACK_CREATE_PRODUCT } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_ALL_PRODUCTS);
}

export const postProduct = async (product)=>{

    console.log(product)
    return apiBackEnd.post(URL_BACK_CREATE_PRODUCT,product);
}