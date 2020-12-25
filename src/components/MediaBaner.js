import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { getImageURL } from "../api";

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
        <h2>{date} </h2>
        <h1>
          {genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </h1>
        <p>{overview}</p>;<p>Budget {budget}</p>
        <p>revenue {revenue}</p>
        <p>runtime {runtime}</p>
        <p>rating {rating}</p>
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
  width: 50%;
  img {
    height: 10vh;
    width: 30%;
  }
`;
const SmallDetails = styled(motion.div)`
  width: 50%;
  padding: 8rem 0rem;
`;

export default MediaBaner;
