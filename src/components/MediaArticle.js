import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//link
import { Link } from "react-router-dom";

const MediaArticle = ({ budget, revenue, cast }) => {
  return (
    <ArticleComponent>
      <h1>Cast</h1>
      <ArticleLeft>
        <div className="cast">
          {cast.slice(0, 9).map((person) => (
            <Cast key={person.original_name}>
              <p>{person.original_name}</p>
              <p>{person.character}</p>
            </Cast>
          ))}
          <Link to="/movie/id/cast">
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: "3rem", color: "black" }}
            />
          </Link>
        </div>
      </ArticleLeft>
      <ArticleRight>
        <Item>
          <p>Budget</p>
          <p className="value">${budget.toLocaleString()}</p>
        </Item>
        <Item>
          <p>Revenue</p>
          <p className="value">${revenue.toLocaleString()}</p>
        </Item>
      </ArticleRight>
    </ArticleComponent>
  );
};
const ArticleComponent = styled(motion.div)`
  display: flex;
  h1 {
    padding: 1rem;
    align-self: center;
  }
`;
const ArticleLeft = styled(motion.div)`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  overflow-x: scroll;
  .cast {
    display: flex;
  }
`;
const ArticleRight = styled(motion.div)`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
`;

const Cast = styled(motion.div)`
  width: 25vh;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  margin-right: 1rem;
  margin-top: 1rem;
  p {
    color: black;
  }
  &:hover {
    background-color: #fac601;
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
