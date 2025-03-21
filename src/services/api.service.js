import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000";
//export const BASE_URL_API = BASE_URL+"/api";
export const BASE_URL_API = `${BASE_URL}/api`;

export default function Api() {
    const token = "ABC.XVZ.ZXC"

    const api = axios.create({
        baseURL: BASE_URL_API,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    //interceptor de peticiones
    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            //error 401 (auth)
            if (error.response?.status === 401) {
                location.href = "/auth/login"
            }
            return Promise.reject(error);
        }
    )
    return api;
}