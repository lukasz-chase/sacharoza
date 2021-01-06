import React, { useState, useEffect, useRef } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getSeasons, getImageURL } from "../api";
//import Components
import AllSeasons from "../components/AllSeasons";

const Season = ({ id, seasonsNumber, seasons }) => {
  //State
  const [season, setSeason] = useState(null);

  useEffect(() => {
    axios.get(getSeasons(id, seasonsNumber)).then((res) => setSeason(res.data));
  }, [id, seasonsNumber]);
  //ref
  const seasonsRef = useRef(null);
  //handlers
  const seasonsHandler = () => {
    seasonsRef.current.style.display = "block";
  };
  return (
    <div>
      {season ? (
        <SeasonsComponent>
          <h1>Latest Season</h1>
          <LatestSeason>
            <img
              src={
                season.poster_path
                  ? getImageURL("500", season.poster_path)
                  : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
              alt=""
            />
            <div className="seasonInfo">
              <span>{season.name}</span>
              <p>
                {season.air_date} || {season.episodes.length} Episodes
              </p>
            </div>
            <div className="line"></div>

            <span className="rest" onClick={seasonsHandler}>
              See all seasons
            </span>
          </LatestSeason>
          <AllSeasons id={id} seasonsRef={seasonsRef} seasons={seasons} />
        </SeasonsComponent>
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
    </div>
  );
};

const SeasonsComponent = styled(motion.div)`
  width: 85%;
  padding: 0rem 1rem;
  margin-top: -10vh;
  font-size: 3rem;
  font-weight: bold;
  h1 {
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;
const LatestSeason = styled(motion.div)`
  margin-top: 1vh;
  display: flex;
  box-shadow: 1px 3px 8px 1px #888888;
  align-items: center;
  img {
    height: 100%;
    width: 25vh;
    object-fit: cover;
  }
  .seasonInfo {
    padding: 1rem;
    p {
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
  .line {
    margin-left: 7rem;
    height: 30vh;
    border: 1px solid black;
  }
  .rest {
    margin-left: 2rem;
    cursor: pointer;
  }
`;

export default Season;
