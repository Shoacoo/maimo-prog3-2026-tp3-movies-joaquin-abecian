const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const LANG = "language=es-ES";

export const endpoints = {
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}&${LANG}`,
  popularMovies:  `${API_URL}/movie/popular?api_key=${API_KEY}&${LANG}`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}&${LANG}`,
  nowPlaying:     `${API_URL}/movie/now_playing?api_key=${API_KEY}&${LANG}`,
  upcoming:       `${API_URL}/movie/upcoming?api_key=${API_KEY}&${LANG}`,
};

export const getMovieDetail = (id) =>
  `${API_URL}/movie/${id}?api_key=${API_KEY}&${LANG}`;

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";