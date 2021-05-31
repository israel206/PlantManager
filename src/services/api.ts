import axios from 'axios';

const api = axios.create({
  // IP da minha máquina
  baseURL: 'https://169.254.209.74:3333',
});

export default api;