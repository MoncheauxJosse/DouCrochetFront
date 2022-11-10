import { URL_BACK_CREATE_PRODUCT, URL_DELETE_PRODUCT, URL_BACK_GET_ONE_PRODUCT,URL_GET_ALL_PRODUCTS,URL_GET_ALL_NEW_PRODUCTS } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_ALL_PRODUCTS);
}

export function getAllNouveau() {
    return apiBackEnd.get(URL_GET_ALL_NEW_PRODUCTS);
}

export const postProduct = async (product)=>{
    console.log("axios")
    console.log(product)
    return apiBackEnd.post(URL_BACK_CREATE_PRODUCT, product);
}

export async function detailProduct(id) {
    console.log("id axios", id)
    return apiBackEnd.get(URL_BACK_GET_ONE_PRODUCT + id)
}

export const deleteProduct = async (id) => {
    return apiBackEnd.delete(URL_DELETE_PRODUCT + id);
}