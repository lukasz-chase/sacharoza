import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getImageURL } from "../api";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import components
import Episodes from "../components/Episodes";
import Toggle from "../components/Toggle";

const AllSeasons = ({ seasonsRef, seasons, id }) => {
  //handlers
  const closeSeasons = (e) => {
    const element = e.target;
    if (element.classList.contains("seasonsContainer")) {
      seasonsRef.current.style.display = "none";
    }
  };
  return (
    <SeasonsComponent
      onClick={closeSeasons}
      ref={seasonsRef}
      className="seasonsContainer"
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="closeTag"
        onClick={() => (seasonsRef.current.style.display = "none")}
      />
      {seasons.map((season) => (
        <>
          <SingleSeason key={season.id}>
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
                {season.air_date} || {season.episode_count} Episodes
              </p>
            </div>
          </SingleSeason>
          <Toggle state={true} arrowColor="white">
            <Episodes id={id} seasonsNumber={season.season_number}></Episodes>
          </Toggle>
        </>
      ))}
    </SeasonsComponent>
  );
};

const SeasonsComponent = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: none;
  .closeTag {
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 2rem;
    margin-right: 3rem;
    font-size: 7vh;
    color: #ed930c;
    transition: 0.5s ease-in;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;
const SingleSeason = styled(motion.div)`
  display: flex;
  background-color: white;
  width: 80%;
  align-items: center;
  position: relative;
  margin-top: 1vh;
  left: 10%;
  img {
    height: 30vh;
    width: 20vh;
    object-fit: cover;
  }
`;

export default AllSeasons;
