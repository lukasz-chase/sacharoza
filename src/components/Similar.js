import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getSimilarMedia } from "../api";
//components
import Slider from "./Slider.js";

const Similar = ({ media, id }) => {
  //state
  const [similar, setSimilar] = useState(null);
  //use Effect
  useEffect(() => {
    axios
      .get(getSimilarMedia(media, id))
      .then((res) => setSimilar(res.data.results));
  }, [media, id]);
  return (
    <SimilarComponent>
      <h1>{similar ? `Similar ${media}` : ""}</h1>
      {similar ? (
        <Slider media={media} items={similar} />
      ) : (
        <iframe
          title="gihpy-embed"
          src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      )}
    </SimilarComponent>
  );
};

const SimilarComponent = styled(motion.div)`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Similar;
