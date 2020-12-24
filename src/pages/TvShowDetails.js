import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getTvShowDetails, getImageURL } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const TvShowDetails = () => {
  // state;
  const [tvshow, setTvShow] = useState(null);
  //get the current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(getTvShowDetails(pathId));
  useEffect(() => {
    axios.get(getTvShowDetails(pathId)).then((res) => setTvShow(res));
  }, []);
  console.log(tvshow);
  return (
    <div>
      {tvshow && (
        <Details>
          <h1>{tvshow.data.name}</h1>
          <div className="smallDetails">
            <p>Released {tvshow.data.first_air_date}</p>
            <p>episodes: {tvshow.data.number_of_episodes}</p>
            <p>seasons: {tvshow.data.number_of_seasons}</p>
            <p>rating {tvshow.data.vote_average}</p>
          </div>
          <p>{tvshow.data.overview}</p>;
          <img src={getImageURL(500, tvshow.data.poster_path)} alt="" />
        </Details>
      )}
    </div>
  );
};
const Details = styled(motion.div)``;
export default TvShowDetails;
