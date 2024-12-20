import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const OMD_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = 'http://www.omdbapi.com/'

export const getMoviesByTitle = async (query: string) => {

    const ApiFullUrl = `${OMDB_BASE_URL}?apikey=${OMD_API_KEY}&t=${query}&plot=full&type=movie`;
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