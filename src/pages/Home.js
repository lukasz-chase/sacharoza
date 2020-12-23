import React, { useState } from "react";
import axios from "axios";
//getting url
import { trendingMoviesURL, getImageURL, trendingTvShowsURL } from "../api";
//importing components
import Card from "../components/Card";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  //state
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  //fetch axios
  React.useEffect(() => {
    axios
      .get(trendingMoviesURL)
      .then((res) => setTrendingMovies(res.data.results));
  }, []);
  React.useEffect(() => {
    axios
      .get(trendingTvShowsURL)
      .then((res) => setTrendingTvShows(res.data.results));
  }, []);
  return (
    <StyledMovies>
      <h1>this week's trending movies:</h1>
      <Movies>
        {trendingMovies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none" }}
          >
            <Card
              movieTitle={movie.title}
              key={movie.id}
              movieImage={getImageURL(500, movie.poster_path)}
            />
          </Link>
        ))}
      </Movies>
      <h1>this week's trending tv shows:</h1>
      <Movies>
        {trendingTvShows.map((tvshow) => (
          <Link
            to={`/tvshow/${tvshow.id}`}
            key={tvshow.id}
            style={{ textDecoration: "none" }}
          >
            <Card
              movieTitle={tvshow.name}
              key={tvshow.id}
              movieImage={getImageURL(500, tvshow.poster_path)}
            />
          </Link>
        ))}
      </Movies>
    </StyledMovies>
  );
};
const StyledMovies = styled(motion.div)`
  padding: 4rem 5rem;
  h1 {
    text-transform: uppercase;
  }
`;
const Movies = styled(motion.div)`
  min-height: 80vh;
  padding: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
