const apiKey = "147387c8fe980ffcd58d4f71900649d2";
const baseUrl = "https://api.themoviedb.org/";
export const getImageURL = (size, name) =>
  `https://image.tmdb.org/t/p/w${size}/${name}`;
//trending media
export const getTrendingMedia = (media, time) =>
  `${baseUrl}3/trending/${media}/${time}?api_key=147387c8fe980ffcd58d4f71900649d2`;
export const getMediaDetails = (media, id) =>
  `${baseUrl}3/${media}/${id}?api_key=${apiKey}`;
export const getMediaCredits = (media, id) =>
  `${baseUrl}3/${media}/${id}/credits?api_key=${apiKey}`;
export const getTvCredits = (media, id) =>
  `${baseUrl}3/${media}/${id}/aggregate_credits?api_key=${apiKey}`;
export const getSearchedMovie = (item) =>
  `${baseUrl}3/search/movie?api_key=${apiKey}&query=${item}&page=1&include_adult=false`;
export const getSearchedTv = (item) =>
  `${baseUrl}3/search/tv?api_key=${apiKey}&query=${item}&page=1&include_adult=false`;
export const getPersonsImage = (id) =>
  `${baseUrl}3/person/${id}/images?apki_key=${apiKey}`;
export const getMediaVideo = (media, id) =>
  `${baseUrl}3/${media}/${id}/videos?api_key=${apiKey}`;
export const getSimilarMedia = (media, id) =>
  `${baseUrl}3/${media}/${id}/similar?api_key=${apiKey}&page=1`;
export const getPopularMedia = (media, page) =>
  `${baseUrl}3/${media}/popular?api_key=${apiKey}&page=${page}`;
export const getUpcomingMedia = (media, page) =>
  `${baseUrl}3/${media}/upcoming?api_key=${apiKey}&page=${page}`;
export const getTopRatedMedia = (media, page) =>
  `${baseUrl}3/${media}/top_rated?api_key=${apiKey}&page=${page}`;
export const getNowPlayingMedia = (media, page) =>
  `${baseUrl}3/${media}/now_playing?api_key=${apiKey}&page=${page}`;
export const getOnAir = (media, page) =>
  `${baseUrl}3/${media}/on_the_air?api_key=${apiKey}&page=${page}`;
export const getTodaysTv = (media, page) =>
  `${baseUrl}3/${media}/airing_today?api_key=${apiKey}&page=${page}`;
export const getSeasons = (id, number) =>
  `${baseUrl}3/tv/${id}/season/${number}?api_key=${apiKey}`;
export const getExternalId = (media, id) =>
  `${baseUrl}3/${media}/${id}/external_ids?api_key=${apiKey}`;
export const authentication = () =>
  `${baseUrl}3/authentication/token/new?api_key=${apiKey}`;
export const sessionUrl = (requestToken) =>
  `${baseUrl}3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`;
export const getAccount = (session) =>
  `${baseUrl}/3/account?api_key=${apiKey}&session_id=${session}`;
export const setFavorite = (session, accountId) =>
  `${baseUrl}3/account/${accountId}/favorite?api_key=${apiKey}&session_id=${session}`;
export const addToWatchList = (session, accountId) =>
  `${baseUrl}3/account/${accountId}/watchlist?api_key=${apiKey}&session_id=${session}`;
export const getFavorites = (session, accountId, media) =>
  `${baseUrl}3/account/${accountId}/favorite/${media}?api_key=${apiKey}&session_id=${session}&page=1`;
export const getWatchList = (session, accountId, media) =>
  `${baseUrl}3/account/${accountId}/watchlist/${media}?api_key=${apiKey}&session_id=${session}&page=1`;
