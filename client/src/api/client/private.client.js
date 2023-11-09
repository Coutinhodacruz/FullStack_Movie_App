import axios from "axios";
import * as querystring from "querystring";

const baseURL = 'http://127.0.0.1:5000/api/v1'

const privateClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => querystring.stringify(params)
    }
})

privateClient.interceptors.request(async config => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("actkn")}`
        }
    }
})

privateClient.interceptors.response.use((response) => {
    if (response && response.data ) return response.data
    return response
}, (err) => {
    throw err.response.data
})

export default privateClient;