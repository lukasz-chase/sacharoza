import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Trailers = ({ movieVideos }) => {
  const [officialTrailer, setOfficialTrailer] = useState(null);
  useEffect(() => {
    setOfficialTrailer(
      movieVideos.data.results.filter((video) =>
        video.name.includes("Official Trailer")
      )
    );
  }, [movieVideos.data.results]);
  return (
    <div>
      {officialTrailer && (
        <TrailersComponent>
          <h1>Official Trailer</h1>
          {officialTrailer.map((video) => (
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
      )}
    </div>
  );
};

const TrailersComponent = styled(motion.div)``;

export default Trailers;
