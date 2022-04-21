import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Slider = ({
  media,
  items,
  flexWrap = "no-wrap",
  overflowX = "scroll",
}) => {
  return (
    <StyledSlider style={{ flexWrap, overflowX }}>
      {items?.map((item) => (
        <Link
          to={`/${media}/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Card
            movieTitle={item.name}
            key={item.id}
            movieImage={item.poster_path}
          />
        </Link>
      ))}
    </StyledSlider>
  );
};
const StyledSlider = styled(motion.div)`
  min-height: 45vh;
  display: flex;
  padding: 0vh 2vh;
  width: 100%;
  @media screen and (max-width: 1000px) {
    min-height: 35vh;
  }
`;
export default Slider;
