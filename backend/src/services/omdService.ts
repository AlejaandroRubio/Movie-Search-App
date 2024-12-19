import axios from 'axios';

//const OMD_API_KEY = process.env.OMDB_API_KEY;
const OMD_API_KEY = 'ad11a2c0';
const OMDB_BASE_URL = 'http://www.omdbapi.com/'; // Asegúrate de usar "http" (no https)

export const getMoviesByTitle = async (query: string) => {

    const ApiFullUrl = `${OMDB_BASE_URL}?apikey=${OMD_API_KEY}&t=${query}`;
    const response = await axios.get(ApiFullUrl);
    let movies = response.data;
    return movies;
}

export const getMoviesByIMDBId = async (query: string) => {

    const ApiFullUrl = `${OMDB_BASE_URL}?apikey=${OMD_API_KEY}&i=${query}`;
    const response = await axios.get(ApiFullUrl);
    let movies = response.data;
    return movies;

}