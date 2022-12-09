import axios from 'axios';

export const M_CLIENT = axios.create({
    baseURL: 'https://prod.minjuling.shop',
})


export const K_CLIENT = axios.create({
    baseURL: 'https://prod.server-class.shop/',
})