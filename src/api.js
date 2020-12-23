const apiKey = "147387c8fe980ffcd58d4f71900649d2";
const baseUrl = "https://api.themoviedb.org/";
export const getImageURL = (size, name) =>
  `https://image.tmdb.org/t/p/w${size}/${name}`;
//trending movies
export const trendingMoviesURL = `${baseUrl}3/trending/movie/week?api_key=147387c8fe980ffcd58d4f71900649d2`;
export const trendingTvShowsURL = `${baseUrl}3/trending/tv/week?api_key=147387c8fe980ffcd58d4f71900649d2`;
export const getMovieDetails = (id) =>
  `${baseUrl}3/movie/${id}?api_key=${apiKey}&language=en-US`;
export const getTvShowDetails = (id) =>
  `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
export const getSearchedItem = (item) =>
  `${baseUrl}3/search/movie?api_key=${apiKey}&language=en-US&query=${item}&page=1&include_adult=true`;
