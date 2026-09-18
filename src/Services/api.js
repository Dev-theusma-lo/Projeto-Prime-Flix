import axios from "axios";


// Base URL = https://api.themoviedb.org/3/movie/
// URL da api = /movie/now_playing?api_key=0e5311233910b55719854efa0d37dd44&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;