import React, { useRef, useEffect, useState } from "react";
//import axios
import axios from "axios";
//import url
import { getExternalId } from "../api";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
//url
import { getImageURL } from "../api";
//Components
import Credits from "../components/Credits";

const MediaArticle = ({
  budget,
  revenue,
  cast,
  status,
  language,
  crew,
  episodes,
  seasons,
  id,
  network,
}) => {
  //state
  const [externalIds, setExternalIds] = useState(null);
  //useEffect
  useEffect(() => {
    axios
      .get(getExternalId("movie", id))
      .then((res) => setExternalIds(res.data));
  }, [id]);
  //ref
  const creditsContainer = useRef(null);
  //handlers
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
              <img
                src={
                  person.profile_path
                    ? getImageURL(500, person.profile_path)
                    : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                }
                alt=""
              />
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
        {externalIds && externalIds.facebook_id != null && (
          <SocialMedia>
            <a
              href={`https://www.facebook.com/${externalIds.facebook_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="social" />
            </a>
            <a
              href={`https://www.instagram.com/${externalIds.instagram_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="social" />
            </a>
            <a
              href={`https://www.twitter.com/${externalIds.twitter_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="social" />
            </a>
          </SocialMedia>
        )}
        <Item>
          <p>Status</p>
          <p className="value">{status}</p>
        </Item>
        {network && (
          <Item>
            <p>Networks</p>
            {network.map((item) => (
              <img
                key={item.id}
                src={getImageURL(500, item.logo_path)}
                alt={item.name}
              />
            ))}
          </Item>
        )}
        {budget ? (
          <Item>
            <p>Budget</p>
            <p className="value">${budget.toLocaleString()}</p>
          </Item>
        ) : (
          <Item>
            <p>seasons</p>
            <p className="value">{seasons}</p>
          </Item>
        )}
        {revenue ? (
          <Item>
            <p>Revenue</p>
            <p className="value">${revenue.toLocaleString()}</p>
          </Item>
        ) : (
          <Item>
            <p>Episodes</p>
            <p className="value">{episodes}</p>
          </Item>
        )}
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
    position: absolute;
    left: 50%;
    margin-left: -3vh;
    margin-top: 2rem;
  }
`;
const ArticleLeft = styled(motion.div)`
  width: 85%;
  height: 47vh;
  display: flex;
  padding: 2rem 0rem;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-left: 1rem;
  margin-top: 5rem;
  .cast {
    display: flex;
  }
  .arrow {
    color: black;
    font-size: 7rem;
    display: flex;
    align-self: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ArticleRight = styled(motion.div)`
  width: 15%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const Cast = styled(motion.div)`
  min-height: 30vh;
  width: 20vh;
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
    height: 30vh;
    width: 20vh;
    object-fit: cover;
  }
`;
const SocialMedia = styled(motion.div)`
  display: flex;
  a {
    color: black;
    padding: 1rem 0rem;
    cursor: pointer;
    .social {
      font-size: 2rem;
      margin-right: 1.5rem;
    }
  }
`;
const Item = styled(motion.div)`
  padding: 1rem 0rem;
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  .value {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  img {
    display: flex;
    flex-wrap: wrap;
    width: 7rem;
    height: 3rem;
    object-fit: contain;
  }
`;
export default MediaArticle;
