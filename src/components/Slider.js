import React from "react";
import { motion } from "framer-motion";
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
        <div key={item.id}>
          <Card
            title={
              item.original_title ? item.original_title : item.original_name
            }
            key={item.id}
            id={item.id}
            movieImage={item.poster_path}
            media={media}
          />
        </div>
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
