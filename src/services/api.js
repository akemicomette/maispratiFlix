import axios from 'axios';

const API_KEY = '203dd822d15a1f865449d36d87bcb080';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const getMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
}

export const getSeries = async () => {
  const response = await api.get('/tv/popular');
  return response.data.results;
}

export const getGenres = async () => {
  const response = await api.get('/genre/movie/list');
  return response.data.genres;
};

export const getByGenre = async (genreId) => {
  const response = await api.get('/discover/movie', {
    params: { with_genres: genreId },
  });
  return response.data.results;
};

export const searchBar = async (query) => {
  const response = await api.get('/search/multi', {
    params: { query },
  });
  return response.data.results;
};

export default api;