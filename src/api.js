const apiKey = "147387c8fe980ffcd58d4f71900649d2";
const baseUrl = "https://api.themoviedb.org/";
export const getImageURL = (size, name) =>
  `https://image.tmdb.org/t/p/w${size}/${name}`;
//trending media
export const getTrendingMedia = (media, time) =>
  `${baseUrl}3/trending/${media}/${time}?api_key=147387c8fe980ffcd58d4f71900649d2`;
export const getMediaDetails = (media, id) =>
  `${baseUrl}3/${media}/${id}?api_key=${apiKey}&language=en-US`;
export const getMediaCredits = (media, id) =>
  `${baseUrl}3/${media}/${id}/credits?api_key=${apiKey}&language=en-US`;
export const getSearchedMovie = (item) =>
  `${baseUrl}3/search/movie?api_key=${apiKey}&language=en-US&query=${item}&page=1&include_adult=false`;
export const getSearchedTv = (item) =>
  `${baseUrl}3/search/tv?api_key=${apiKey}&language=en-US&query=${item}&page=1&include_adult=false`;