import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getImageURL } from "../api";

const Card = ({ movieTitle, movieImage, tvTitle, personImage }) => {
  console.log(personImage);
  return (
    <StyledMovie>
      <h1>{movieTitle}</h1>
      <h1>{tvTitle}</h1>
      <img src={movieImage} alt="" />
      {/* <img src={getImageURL(500, personImage.file_path)} alt="" /> */}
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  height: 45vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  h1 {
    color: black;
    font-size: 1rem;
  }
  img {
    width: 100%;
    height: 43vh;
    object-fit: cover;
  }
  &:hover {
    background-color: #fac601;
  }
`;

export default Card;
