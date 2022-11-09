import { URL_BACK_CREATE_PRODUCT} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';


export function getAllCategory() {
    return apiBackEnd.get(URL_BACK_CREATE_PRODUCT);
}