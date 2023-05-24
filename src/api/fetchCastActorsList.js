import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=ae92408bde877ec931a5ff6e9d752bd2&language=en-US

const fetchCastActorsList = async (movieID) => { 
    return axios.get(`${baseURL}movie/${movieID}/credits?api_key=${API_KEY}`)
}

export default fetchCastActorsList;