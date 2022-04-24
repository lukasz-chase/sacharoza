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
          <h1>
            {videos.data.results.filter((video) =>
              video.name.includes("Official")
            ).length > 1
              ? "Official Trailer"
              : ""}{" "}
          </h1>
          <div className="trailers">
            {videos.data.results
              .filter((video) => video.name.includes("Official"))
              .map((video) => (
                <div className="wrapper" key={video.id}>
                  <iframe
                    title={video.id}
                    className="responsive-iframe"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
          </div>
          <h1>{videos.data.results.length > 1 ? "Videos" : ""}</h1>
          {videos.data.results.length > 1 ? (
            <Toggle state={true}>
              <VideosComponent>
                {videos.data.results.slice(1).map((video) => (
                  <div className="wrapper" key={video.id}>
                    <iframe
                      className="responsive-iframe"
                      title={video.id}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
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
  .trailers {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1250px) {
      flex-direction: column;
    }
    .wrapper {
      .responsive-iframe {
        margin: 0rem 1rem;
      }
    }
  }
`;
const VideosComponent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
  .wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    width: 20rem;
    .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0rem 1rem;
    }
  }
`;

export default Trailers;
