import axios from "axios";

// https://api.themoviedb.org/3/search/movie?api_key=ae92408bde877ec931a5ff6e9d752bd2&language=en-US&page=1&include_adult=false === поиск

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

const fetchMoviesWithQuery = async (query) => {
   return axios.get(`${baseURL}search/movie?api_key=${API_KEY}&query=${query}&page=1`);
};

export default fetchMoviesWithQuery;