import React, { useState, useEffect } from "react";
//import router
import { useLocation } from "react-router-dom";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getMediaDetails, getImageURL, getMediaCredits } from "../api";
//import components
import MediaBaner from "../components/MediaBaner";

const MovieDetail = () => {
  // state;
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //get apis response
  useEffect(() => {
    axios.get(getMediaDetails("movie", pathId)).then((res) => setMovie(res));
    axios.get(getMediaCredits("movie", pathId)).then((res) => setCredits(res));
  }, []);
  return (
    <div>
      {movie && (
        <Details>
          <MediaBaner
            movie={movie}
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