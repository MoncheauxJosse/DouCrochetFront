import { URL_BACK_CREATE_PRODUCT,URL_BACK_CREATE_CATEGORY} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';


export function getAllCategory() {
    return apiBackEnd.get(URL_BACK_CREATE_PRODUCT);
}

export const postCategory = async (createCategory)=>{
    return apiBackEnd.post(URL_BACK_CREATE_CATEGORY, createCategory);
}