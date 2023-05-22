import axios from "axios";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=ae92408bde877ec931a5ff6e9d752bd2&language=en-US === запрос полной инфо для стр кино

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

export const fetchMovieDetailsWithID = async(movieID) => { 
    return axios.get(`${baseURL}movie/${movieID}?api_key=${API_KEY}`)
}