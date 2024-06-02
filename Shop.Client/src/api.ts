import axios from 'axios';
import { ProductBaseData } from './types';

const API_HOST = `http://${import.meta.env.VITE_LOCAL_PATH}:${import.meta.env.VITE_LOCAL_PORT}/${import.meta.env.VITE_API_PATH}`;

export async function getProducts(): Promise<ProductBaseData[]> {
    const { data } = await axios.get(`${API_HOST}/products`);
    console.log(data);
    return data || [];
}
