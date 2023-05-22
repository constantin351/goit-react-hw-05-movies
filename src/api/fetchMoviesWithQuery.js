import axios from "axios";

// https://api.themoviedb.org/3/search/movie?api_key=ae92408bde877ec931a5ff6e9d752bd2&language=en-US&page=1&include_adult=false === поиск

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ae92408bde877ec931a5ff6e9d752bd2";

export const fetchMoviesWithQuery = async (query) => {
   return axios.get(`${baseURL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
};

// https://api.themoviedb.org/3/search/movie?query=man&include_adult=false&language=en-US&page=1

// async function getSearchMovies(query, page = 1) {
//   const key = 'd783920aea034ba2adae6031a0bf96c0';
//   const url = `https://api.themoviedb.org/3/search/movie`;
//   const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

//   const response = await fetch(`${url}${filter}`);
//   const data = await response.json();

//   return data;
// }

// export default getSearchMovies;