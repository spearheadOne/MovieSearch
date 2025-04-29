import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001/api',
  params: {
    //todo add more params
  },
});

export default api;
