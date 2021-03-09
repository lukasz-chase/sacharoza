import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getImageURL } from "../api";

const Card = ({ movieTitle, movieImage, tvTitle }) => {
  return (
    <StyledMovie>
      <p>{movieTitle}</p>
      <p>{tvTitle}</p>
      <img
        src={
          movieImage
            ? getImageURL(500, movieImage)
            : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
        }
        alt=""
      />
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  height: 45vh;
  width: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  margin-right: 1rem;
  margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    height: 30vh;
    width: 17vh;
  }
  p {
    color: black;
    font-size: 1rem;
    @media screen and (max-width: 1000px) {
      font-size: 0.5rem;
    }
  }
  img {
    width: 100%;
    height: 43vh;
    object-fit: cover;
    @media screen and (max-width: 1000px) {
      height: 29vh;
    }
  }
  &:hover {
    background-color: #fac601;
  }
`;

export default Card;
