import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getImageURL } from "../api";

const Card = ({ movieTitle, movieImage, tvTitle, personImage }) => {
  return (
    <StyledMovie>
      <h1>{movieTitle}</h1>
      <h1>{tvTitle}</h1>
      <img
        src={
          movieImage
            ? getImageURL(500, movieImage)
            : "https://lh3.googleusercontent.com/proxy/IP4Qp5aL1JqV4IAjdVE8d26ZovGdw-VBmHtt20yRQ8jKm9lGpX8E7MV7-fBFdw_25Hl0FYfTY6kr3sbpTe-VV4BEgfozcgUn3G8KLOF1VIHIzM8EpcpoTrsrAkVsh-x7KFJV"
        }
        alt=""
      />
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
