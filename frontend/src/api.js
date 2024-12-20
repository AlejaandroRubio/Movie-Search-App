import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/movies',
});

export const seachMoviesByTitle = async (query) => {
    const response = await api.get('/seach-by-title',{params: {query}});
    return response.data;
}

export const seachMoviesByImdbId = async (query) => {
    const response = await api.get('/search-by-imdb-id',{params: {query}});

    console.log(response.data);

    return response.data;
}