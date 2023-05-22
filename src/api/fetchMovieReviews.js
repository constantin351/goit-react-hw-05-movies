import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

export const fetchMovieReviews = async (movieID) => { 
    return axios.get(`${baseURL}movie/${movieID}/reviews?api_key=${API_KEY}`)
}