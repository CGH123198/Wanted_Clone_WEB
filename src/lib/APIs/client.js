import axios from 'axios';

export const M_CLIENT = axios.create({
    baseURL: 'https://dev.minjuling.shop',
})


export const K_CLIENT = axios.create({
    baseURL: 'https://dev.server-class.shop/',
})