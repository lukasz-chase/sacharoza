import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ title, image }) => {
  return (
    <StyledMovie>
      <h1>{title}</h1>
      <img src={image} alt="" />
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
