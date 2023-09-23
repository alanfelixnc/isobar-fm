import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://dws-recruiting-bands.dwsbrazil.io/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
