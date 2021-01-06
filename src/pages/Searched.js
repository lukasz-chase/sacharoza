import React, { useState, useEffect, useRef } from "react";
//import components
import Card from "../components/Card";
//import styles and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//router
import { Link } from "react-router-dom";

const Searched = ({ searchedMovie, searchedTv }) => {
  const [movies, setMovies] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  const [active, setActive] = useState(null);
  useEffect(() => {
    searchedMovie && setMovies(searchedMovie.data.results);
    searchedTv && setTvShows(searchedTv.data.results);
    setActive(movies);
  }, [searchedMovie, searchedTv, movies]);
  //ref
  const movieButton = useRef(null);
  const tvButton = useRef(null);
  //handlers
  const buttonHandler = (currentBtn, media) => {
    movieButton.current.classList.remove("active");
    tvButton.current.classList.remove("active");
    currentBtn.current.classList.add("active");
    setActive(media);
  };
  return (
    <ResultContainer>
      <h1>Search Results</h1>
      <button
        ref={movieButton}
        onClick={() => buttonHandler(movieButton, movies)}
      >
        {movies && movies.length} Movies
      </button>
      <button ref={tvButton} onClick={() => buttonHandler(tvButton, tvshows)}>
        {tvshows && tvshows.length} Tv shows
      </button>
      {movies && active === movies && (
        <ResultList>
          {active.map((item) => (
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
      )}

      {tvshows && active === tvshows && (
        <ResultList>
          {active.map((item) => (
            <Link
              key={item.id}
              to={`/tv/${item.id}`}
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
      )}
    </ResultContainer>
  );
};
const ResultContainer = styled(motion.div)`
  transition: 1s ease-in;
  h1 {
    padding: 4rem 1rem;
  }
  .active {
    background-color: #ebb15a;
  }
  button {
    margin-left: 1rem;
    font-size: 2rem;
    background-color: white;
    border-radius: 1rem;
    padding: 5px;

    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
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
