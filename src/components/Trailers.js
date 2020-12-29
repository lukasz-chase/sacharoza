import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Trailers = ({ videos }) => {
  const [officialTrailer, setOfficialTrailer] = useState(null);
  useEffect(() => {
    setOfficialTrailer(
      videos.filter((video) => video.name === "Official Trailer")
    );
  }, [videos]);
  return (
    <TrailersComponent>
      <h1>Official Trailer</h1>
      {videos.map((video) => (
        <iframe
          title={video.id}
          key={video.id}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </TrailersComponent>
  );
};

const TrailersComponent = styled(motion.div)``;

export default Trailers;
