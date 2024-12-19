import axios from 'axios';

//const OMD_API_KEY = process.env.OMDB_API_KEY;
const OMD_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = process.env.OMDB_BASE_URL;

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