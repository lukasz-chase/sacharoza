import React, { useState, useEffect } from "react";
//import router
import { useLocation } from "react-router-dom";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getMovieDetails, getImageURL } from "../api";
//import components
import MediaBaner from "../components/MediaBaner";

const MovieDetail = () => {
  // state;
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState({});
  //get the current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  useEffect(() => {
    axios.get(getMovieDetails(pathId)).then((res) => setMovie(res));
  }, []);
  // console.log();
  return (
    <div>
      {movie && (
        <Details>
          <MediaBaner
            image={getImageURL(500, movie.data.poster_path)}
            title={movie.data.title}
            date={movie.data.release_date}
            year={movie.data.release_date.split("-")[0]}
            genres={movie.data.genres}
            overview={movie.data.overview}
            budget={movie.data.budget}
            revenue={movie.data.revenue}
            runtime={movie.data.runtime}
            rating={movie.data.vote_average}
          />
        </Details>
      )}
    </div>
  );
};

const Details = styled(motion.div)``;

export default MovieDetail;
