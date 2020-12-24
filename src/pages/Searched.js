import React, { useState, useEffect, Component } from "react";
//import comnponents
import Card from "../components/Card";
//import styles and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getPersonsImage } from "../api";

const Searched = ({ searchedMovie, searchedTv, searchedPerson }) => {
  const [movies, setMovies] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  const [person, setPerson] = useState(null);
  useEffect(() => {
    {
      searchedMovie && setMovies(searchedMovie.data.results);
      searchedTv && setTvShows(searchedTv.data.results);
      searchedPerson && setPerson(searchedPerson.data.results);
    }
  });
  console.log(movies);
  return (
    <ResultContainer>
      <h1>Movies</h1>
      {movies && (
        <ResultList>
          {movies.map((item) => (
            <Card
              key={item.id}
              movieTitle={item.title}
              movieImage={item.poster_path}
            />
          ))}
        </ResultList>
      )}
      <h1>Tv shows</h1>
      {tvshows && (
        <ResultList>
          {tvshows.map((item) => (
            <Card
              key={item.id}
              movieTitle={item.title}
              tvTitle={item.name}
              movieImage={item.poster_path}
            />
          ))}
        </ResultList>
      )}
      <h1>People</h1>
      {person && (
        <ResultList>
          {person.map((item) => (
            <Card
              key={item.id}
              movieTitle={item.title}
              tvTitle={item.name}
              personImage={getPersonsImage(item.id)}
            />
          ))}
        </ResultList>
      )}
    </ResultContainer>
  );
};
const ResultContainer = styled(motion.div)`
  h1 {
    padding: 4rem 0rem;
  }
`;
const ResultList = styled(motion.div)`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0rem 1rem;
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  overflow-x: hidden;
`;

export default Searched;
