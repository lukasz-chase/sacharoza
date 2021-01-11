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
const ResultList = styled(motion.div)`
  min-height: 30vh;
  padding: 0vh 2vh;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
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
  &:hover {
    cursor: pointer;
  }
`;
export default Searched;
