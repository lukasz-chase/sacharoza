import React, { useState, useEffect, useRef } from "react";
//import components
import Slider from "../components/Slider";
//import styles and animation
import styled from "styled-components";
import { motion } from "framer-motion";

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
  const animateButton = useRef(null);
  //handlers
  const buttonHandler = (number, media) => {
    animateButton.current.style.transform = `translateX(${number})`;
    setActive(media);
  };
  return (
    <ResultContainer>
      <h1>Search Results</h1>
      <div className="buttons">
        <ButtonComp ref={animateButton} className="animateColor"></ButtonComp>
        <ButtonComp onClick={() => buttonHandler(0, movies)}>
          {movies && movies.length} Movies
        </ButtonComp>
        <ButtonComp onClick={() => buttonHandler("100%", tvshows)}>
          {tvshows && tvshows.length} Tv shows
        </ButtonComp>
      </div>
      {movies && active === movies && (
        <Slider
          media="movie"
          items={movies}
          flexWrap="wrap"
          overflowX="hidden"
        />
      )}
      {tvshows && active === tvshows && (
        <Slider media="tv" items={tvshows} flexWrap="wrap" overflowX="hidden" />
      )}
    </ResultContainer>
  );
};
const ResultContainer = styled(motion.div)`
  transition: 1s ease-in;
  h1 {
    padding: 5rem 0rem 1rem 1rem;
  }
  .buttons {
    display: flex;
    margin-left: 1rem;
    background-color: white;
    border-radius: 1.2rem;
    width: fit-content;
  }
  .animateColor {
    position: absolute;
    height: 5vh;
    background-color: #ebb15a;
    z-index: 1;
  }
`;
const ButtonComp = styled(motion.div)`
  text-align: center;
  height: 5vh;
  width: 25vh;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 5px;
  border: 1px solid black;
  transition: 0.5s all ease-out;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    width: 20vh;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-height: 500px) {
    font-size: 0.6rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Searched;
