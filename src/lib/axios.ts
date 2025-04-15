import axios from 'axios';


const api = axios.create({
    baseURL: 'www.omdbapi.com',
    params: {
        apikey: 'your_api_key_here',
        //todo add more params
    },
});

export default api;