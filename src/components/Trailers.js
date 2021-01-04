import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import component
import Toggle from "./Toggle";
//import axios
import axios from "axios";
//import url
import { getMediaVideo } from "../api";

const Trailers = ({ id, media }) => {
  //State
  const [videos, setVideos] = useState(null);
  //setting state
  useEffect(() => {
    axios.get(getMediaVideo(media, id)).then((res) => setVideos(res));
  }, [media, id]);
  return (
    <div>
      {videos && (
        <TrailersComponent>
          <h1>{videos.data.results.length > 1 ? "Official Trailer" : ""} </h1>
          {videos.data.results
            .filter((video) => video.name.includes("Official"))
            .map((video) => (
              <p key={video.id}>
                <iframe
                  title={video.id}
                  width="1100"
                  height="565"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            ))}
          <h1>{videos.data.results.length > 1 ? "Videos" : ""}</h1>
          {videos.data.results.length > 1 ? (
            <Toggle state={true}>
              <VideosComponent>
                {videos.data.results.slice(1).map((video) => (
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
          ) : (
            ""
          )}
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
