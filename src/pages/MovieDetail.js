import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getMovieDetails, getImageURL } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const MovieDetail = () => {
  // state;
  const [movie, setMovie] = useState(null);
  //get the current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  useEffect(() => {
    axios.get(getMovieDetails(pathId)).then((res) => setMovie(res));
  }, []);
  console.log(movie);
  return (
    <div>
      {movie && (
        <Details>
          <h1>{movie.data.title}</h1>
          <div className="smallDetails">
            <p>Released {movie.data.release_date}</p>
            <p>Budget {movie.data.budget}</p>
            <p>revenue {movie.data.revenue}</p>
            <p>runtime {movie.data.runtime}</p>
            <p>rating {movie.data.vote_average}</p>
          </div>
          <p>{movie.data.overview}</p>;
          <img src={getImageURL(500, movie.data.poster_path)} alt="" />
        </Details>
      )}
    </div>
  );
};
const Details = styled(motion.div)``;
export default MovieDetail;
