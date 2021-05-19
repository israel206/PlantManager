import axios from 'axios';

const api = axios.create({
  // IP da minha máquina
  baseURL: 'https://192.168.144.1:3333',
});

export default api;