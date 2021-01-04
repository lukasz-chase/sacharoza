import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//url
import { getImageURL } from "../api";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Credits = ({ cast, crew, creditsContainer }) => {
  //Handlers
  const closeCredits = (e) => {
    const element = e.target;
    if (element.classList.contains("credits")) {
      creditsContainer.current.style.display = "none";
    }
  };
  return (
    <CreditsComponent
      onClick={closeCredits}
      ref={creditsContainer}
      className="credits"
    >
      <CastComponent>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeTag"
          onClick={() => (creditsContainer.current.style.display = "none")}
        />
        <h1>Cast</h1>
        {cast.map((person) => (
          <div className="person" key={person.id}>
            <img
              src={
                person.profile_path
                  ? getImageURL(500, person.profile_path)
                  : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
              }
              alt=""
            />
            <Card>
              <span>{person.original_name}</span>
              <p>{person.character}</p>
            </Card>
          </div>
        ))}
      </CastComponent>
      <CrewComponent>
        <h1>Crew</h1>
        {crew.map((person) => (
          <div className="person" key={person.credit_id}>
            <img
              src={
                person.profile_path
                  ? getImageURL(500, person.profile_path)
                  : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
              }
              alt=""
            />
            <Card>
              <span>{person.original_name}</span>
              <p>{person.job}</p>
            </Card>
          </div>
        ))}
      </CrewComponent>
    </CreditsComponent>
  );
};

const CreditsComponent = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: none;
`;
const CrewComponent = styled(motion.div)`
  width: 50%;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  img {
    height: 10vh;
    width: 7vh;
  }
  .person {
    display: flex;
  }
  h1 {
    position: absolute;
    top: 0;
  }
`;
const CastComponent = styled(motion.div)`
  width: 40%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 50%;
  color: black;
  z-index: 10;
  img {
    height: 10vh;
    width: 7vh;
  }
  .person {
    display: flex;
  }
  .closeTag {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    font-size: 5vh;
    color: #ed930c;
    transition: 0.5s ease-in;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
  h1 {
    position: absolute;
    top: 0;
  }
`;
const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default Credits;
