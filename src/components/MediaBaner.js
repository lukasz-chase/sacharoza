import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const MediaBaner = ({
  image,
  title,
  date,
  year,
  genres,
  overview,
  budget,
  revenue,
  runtime,
  rating,
}) => {
  return (
    <MediaBanerComponent>
      <Poster>
        <img src={image} alt="" />
      </Poster>
      <SmallDetails>
        <h1>
          {title} ({year})
        </h1>
        <UnderTitle>
          <span>{date}</span>
          <span>-</span>
          {genres.map((genre) => (
            <h4 key={genre.name}>{genre.name} -</h4>
          ))}
          <span>{runtime} min</span>
        </UnderTitle>
        <h3>Overview</h3>
        <p>{overview}</p>
        {/* <p>Budget {budget}</p>
        <p>revenue {revenue}</p>
        <p>rating {rating}</p> */}
      </SmallDetails>
    </MediaBanerComponent>
  );
};
const MediaBanerComponent = styled(motion.div)`
  display: flex;
  width: 100%;
  background-color: #f2c366;
`;
const Poster = styled(motion.div)`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  padding: 7rem 0rem;
  img {
    height: 45vh;
    width: 30vh;
    object-fit: cover;
  }
`;
const SmallDetails = styled(motion.div)`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  padding: 7rem 2rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;
const UnderTitle = styled(motion.div)`
  display: flex;
  font-size: 1rem;
  font-weight: lighter;
  padding: 0rem 3rem;
  span {
    padding: 0rem 1rem;
  }
  h4 {
    font-weight: lighter;
  }
`;
export default MediaBaner;
