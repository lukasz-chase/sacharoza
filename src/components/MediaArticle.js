import React, { useRef } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//url
import { getImageURL } from "../api";
//Components
import Credits from "../components/Credits";

const MediaArticle = ({ budget, revenue, cast, status, language, crew }) => {
  const creditsContainer = useRef(null);
  const openCredits = () => {
    creditsContainer.current.style.display = "block";
  };
  return (
    <ArticleComponent>
      <h1>Cast</h1>
      <ArticleLeft>
        <div className="cast">
          {cast.slice(0, 10).map((person) => (
            <Cast key={person.original_name}>
              <img src={getImageURL(500, person.profile_path)} alt="" />
              <p>{person.original_name}</p>
              <p>{person.character}</p>
            </Cast>
          ))}
          <FontAwesomeIcon
            onClick={openCredits}
            icon={faArrowRight}
            className="arrow"
          />
        </div>
      </ArticleLeft>
      <ArticleRight>
        <Item>
          <p>Status</p>
          <p className="value">{status}</p>
        </Item>
        <Item>
          <p>Budget</p>
          <p className="value">${budget.toLocaleString()}</p>
        </Item>
        <Item>
          <p>Revenue</p>
          <p className="value">${revenue.toLocaleString()}</p>
        </Item>
        <Item>
          <p>Original language</p>
          <p className="value">{language}</p>
        </Item>
      </ArticleRight>
      <Credits crew={crew} cast={cast} creditsContainer={creditsContainer} />
    </ArticleComponent>
  );
};
const ArticleComponent = styled(motion.div)`
  display: flex;
  h1 {
    padding: 1rem;
  }
`;
const ArticleLeft = styled(motion.div)`
  width: 70%;
  height: 39vh;
  display: flex;
  padding: 2rem 0rem;
  overflow-x: scroll;
  overflow-y: hidden;
  .cast {
    display: flex;
  }
  .arrow {
    color: black;
    font-size: 7rem;
    margin-top: 5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ArticleRight = styled(motion.div)`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
`;

const Cast = styled(motion.div)`
  min-height: 25vh;
  width: 15vh;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  margin-right: 1rem;
  margin-top: 1rem;
  p {
    color: black;
  }
  img {
    height: 20vh;
    width: 15vh;
    object-fit: cover;
  }
`;
const Item = styled(motion.div)`
  padding: 1rem 0rem;
  p {
    font-size: 1.5rem;
  }
  .value {
    font-weight: lighter;
    font-size: 1rem;
  }
`;
export default MediaArticle;
