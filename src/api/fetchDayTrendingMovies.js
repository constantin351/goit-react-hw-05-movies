import axios from "axios";

//https://api.themoviedb.org/3/trending/movie/day?api_key=ae92408bde877ec931a5ff6e9d752bd2 -- трендовых за день

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

const fetchDayTrendingMovies = async () => {
   return axios.get(`${baseURL}trending/movie/day?api_key=${API_KEY}&page=1`);
};

export default fetchDayTrendingMovies;