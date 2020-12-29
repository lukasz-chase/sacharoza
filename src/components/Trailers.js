import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import component
import Toggle from "./Toggle";

const Trailers = ({ movieVideos }) => {
  const [officialTrailer, setOfficialTrailer] = useState(null);
  useEffect(() => {
    setOfficialTrailer(
      movieVideos.data.results.filter((video) =>
        video.name.includes("Official Trailer")
      )
    );
  }, [movieVideos.data.results]);
  console.log(movieVideos.data.results);
  return (
    <div>
      {officialTrailer && (
        <TrailersComponent>
          <h1>Official Trailer</h1>
          {officialTrailer.map((video) => (
            <p key={video.id}>
              <iframe
                title={video.id}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </p>
          ))}
          <h1>{movieVideos.data.results.length > 1 ? "Videos" : ""}</h1>
          <Toggle state={true}>
            <VideosComponent>
              {movieVideos.data.results.slice(1).map((video) => (
                <p key={video.id}>
                  <iframe
                    className="videosClass"
                    title={video.id}
                    width="400"
                    height="245"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </p>
              ))}
            </VideosComponent>
          </Toggle>
        </TrailersComponent>
      )}
    </div>
  );
};

const TrailersComponent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  h1 {
    padding: 1rem 0rem;
  }
`;
const VideosComponent = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0rem;
  .videosClass {
    margin: 1rem;
  }
`;

export default Trailers;
