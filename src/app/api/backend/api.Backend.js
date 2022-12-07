import axios from 'axios';

import handleHttpError from '../../components/lib/form-and-error-components/HandleHttpError';
import { getToken } from '../../services/tokenServices';

/**
 * Instance axios to the BACKEND
 *
 * @author Peter Mollet
 */
const apiBackEnd = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_BACKEND_URL,
});
export default apiBackEnd;



/**
 * Interceptor of request to automatically put the JWTToken in the header
 *
 * @author Peter Mollet
 */
apiBackEnd.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${getToken()}`;
    return request;
});

/**
 * Interceptor of response, to see status code in the console and to handle the error
 *
 * @author Peter Mollet
 */
apiBackEnd.interceptors.response.use(
    (response) => {
        console.log(response.status);
        return response;
    },
    (error) => {
        handleHttpError(error);
        return Promise.reject(error);
    },
);
