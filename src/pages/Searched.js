import React, { useState, useEffect } from "react";
//import components
import Card from "../components/Card";
import Toggle from "../components/Toggle";
//import styles and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//router
import { Link } from "react-router-dom";

const Searched = ({ searchedMovie, searchedTv }) => {
  const [movies, setMovies] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  useEffect(() => {
    searchedMovie && setMovies(searchedMovie.data.results);
    searchedTv && setTvShows(searchedTv.data.results);
  }, [searchedMovie, searchedTv]);
  return (
    <ResultContainer>
      <h1>{movies && movies.length} Movies</h1>
      {movies && (
        <Toggle>
          <ResultList>
            {movies.map((item) => (
              <Link
                key={item.id}
                to={`/movie/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={item.id}
                  movieTitle={item.title}
                  movieImage={item.poster_path}
                />
              </Link>
            ))}
          </ResultList>
        </Toggle>
      )}
      <h1>{tvshows && tvshows.length} Tv shows</h1>
      {tvshows && (
        <Toggle>
          <ResultList>
            {tvshows.map((item) => (
              <Link
                key={item.id}
                to={`/tvshow/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={item.id}
                  movieTitle={item.title}
                  tvTitle={item.name}
                  movieImage={item.poster_path}
                />
              </Link>
            ))}
          </ResultList>
        </Toggle>
      )}
    </ResultContainer>
  );
};
const ResultContainer = styled(motion.div)`
  transition: 1s ease-in;
  h1 {
    padding: 4rem 0rem;
    text-align: center;
  }
`;
const ResultList = styled(motion.div)`
  min-height: 30vh;
  padding: 0vh 2vh;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

export default Searched;
