import React, { useState, useEffect } from "react";
//import axios
import axios from "axios";
//url
import { getSeasons, getImageURL } from "../api";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Episodes = ({ id, seasonsNumber }) => {
  //state
  const [season, setSeason] = useState(null);
  //useEffect
  useEffect(() => {
    axios
      .get(getSeasons(id, seasonsNumber))
      .then((res) => setSeason(res.data.episodes));
  }, [id, seasonsNumber]);
  return (
    <>
      {season && (
        <EpisodesComponent>
          {season.map((episode) => (
            <SingleEpisode key={episode.name}>
              <img
                src={
                  episode.still_path
                    ? getImageURL("500", episode.still_path)
                    : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                }
                alt=""
              />
              <div className="episodeInfo">
                <span>
                  {episode.episode_number}.{episode.name}
                </span>
                <p>{episode.overview}</p>
              </div>
            </SingleEpisode>
          ))}
        </EpisodesComponent>
      )}
    </>
  );
};

const EpisodesComponent = styled(motion.div)``;
const SingleEpisode = styled(motion.div)`
  display: flex;
  background-color: white;
  width: 80%;
  align-items: center;
  position: relative;
  margin-top: 1vh;
  left: 10%;
  font-weight: bold;
  font-size: 1rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
    left: 0;
    font-size: 0.8rem;
  }
  img {
    height: 20vh;
    width: 15vh;
    object-fit: cover;
  }
  .episodeInfo {
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      font-weight: lighter;
    }
  }
`;

export default Episodes;
