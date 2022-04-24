import React, { useEffect, useState } from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
//api
import { getFavorites, getWatchList } from "../api";
import Slider from "../components/Slider";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [favoriteMovies, setFavoritesMovies] = useState([]);
  const [favoriteShows, setFavoritesShows] = useState([]);
  const [moviesOnWatchList, setMoviesOnWatchList] = useState([]);
  const [showsOnWatchList, setShowsOnWatchList] = useState([]);

  useEffect(() => {
    axios
      .get(getFavorites(user.session, user.id, "tv"))
      .then((res) => setFavoritesShows(res.data.results));
    axios
      .get(getFavorites(user.session, user.id, "movies"))
      .then((res) => setFavoritesMovies(res.data.results));
  }, [user.session, user.id, favoriteMovies, favoriteShows]);
  useEffect(() => {
    axios
      .get(getWatchList(user.session, user.id, "tv"))
      .then((res) => setShowsOnWatchList(res.data.results));
    axios
      .get(getWatchList(user.session, user.id, "movies"))
      .then((res) => setMoviesOnWatchList(res.data.results));
  }, [user.session, user.id, moviesOnWatchList, showsOnWatchList]);

  return (
    <AccountWrapper>
      <div className="banner">
        <h1>Hello, {user.username}</h1>
      </div>
      <h1>Favorite Movies</h1>
      <Slider media="movie" items={favoriteMovies} />
      <h1>Favorite Tv Shows</h1>
      <Slider media="tv" items={favoriteShows} />
      <h1>Movies On Watchlist</h1>
      <Slider media="movie" items={moviesOnWatchList} />
      <h1>Tv Shows On Watchlist</h1>
      <Slider media="tv" items={showsOnWatchList} />
    </AccountWrapper>
  );
};
const AccountWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0rem;
  .banner {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7cd43;
    margin-bottom: 4vh;
  }
`;
export default Account;
