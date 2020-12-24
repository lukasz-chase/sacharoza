import React, { useState } from "react";
import axios from "axios";
//getting url
import { getTrendingMedia } from "../api";
//importing components
import Card from "../components/Card";
import Baner from "../components/Baner";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  //state
  const [trendingMoviesDay, setTrendingMoviesDay] = useState(null);
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState(null);
  const [trendingTvDay, setTrendingTvDay] = useState(null);
  const [trendingTvWeek, setTrendingTvWeek] = useState(null);
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [trendingTv, setTrendingTv] = useState(null);
  //fetch axios
  React.useEffect(() => {
    axios
      .get(getTrendingMedia("movie", "day"))
      .then((res) => setTrendingMoviesDay(res.data.results));
    axios
      .get(getTrendingMedia("movie", "week"))
      .then((res) => setTrendingMoviesWeek(res.data.results));
    axios
      .get(getTrendingMedia("tv", "day"))
      .then((res) => setTrendingTvDay(res.data.results));
    axios
      .get(getTrendingMedia("tv", "week"))
      .then((res) => setTrendingTvWeek(res.data.results));
  }, []);
  React.useEffect(() => {
    setTrendingMovie(trendingMoviesWeek);
    setTrendingTv(trendingTvWeek);
  }, [trendingMoviesWeek, trendingTvWeek]);
  return (
    <StyledHome>
      <Baner />
      <ColumnHeader>
        <h1>Trending movies</h1>
        <button onClick={() => setTrendingMovie(trendingMoviesDay)}>
          Today
        </button>
        <button onClick={() => setTrendingMovie(trendingMoviesWeek)}>
          This Week
        </button>
      </ColumnHeader>
      <Media>
        {trendingMovie && (
          <>
            {trendingMovie.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none" }}
              >
                <Card
                  movieTitle={movie.title}
                  key={movie.id}
                  movieImage={movie.poster_path}
                />
              </Link>
            ))}
          </>
        )}
      </Media>
      <h1>trending tv shows:</h1>
      <button onClick={() => setTrendingTv(trendingTvDay)}>Today</button>
      <button onClick={() => setTrendingTv(trendingTvWeek)}>This Week</button>
      <Media>
        {trendingTv && (
          <>
            {trendingTv.map((tvshow) => (
              <Link
                to={`/tvshow/${tvshow.id}`}
                key={tvshow.id}
                style={{ textDecoration: "none" }}
              >
                <Card
                  movieTitle={tvshow.name}
                  key={tvshow.id}
                  movieImage={tvshow.poster_path}
                />
              </Link>
            ))}
          </>
        )}
      </Media>
    </StyledHome>
  );
};
const StyledHome = styled(motion.div)`
  width: 100%;
`;
const Media = styled(motion.div)`
  min-height: 45vh;
  display: flex;
  overflow-x: Scroll;
`;
const ColumnHeader = styled(motion.div)`
  display: flex;
  button {
    display: inline-block;
  }
`;

export default Home;
