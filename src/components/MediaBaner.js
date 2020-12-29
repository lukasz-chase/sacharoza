import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const MediaBaner = ({
  image,
  title,
  date,
  year,
  genres,
  overview,
  runtime,
  rating,
  tagline,
  screenplay,
  director,
}) => {
  //Get stars
  const getStars = () => {
    const stars = [];
    const ratingStars = Math.floor(rating);
    for (let i = 1; i <= 10; i++) {
      if (i <= ratingStars) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };
  return (
    <MediaBanerComponent>
      <Poster>
        <img src={image} alt="" />
      </Poster>
      <SmallDetails>
        <h1>
          {title} ({year})
        </h1>
        <UnderTitle>
          <span className="date">{date}</span>
          {genres.map((genre) => (
            <h4 key={genre.name}>{genre.name}</h4>
          ))}
          <span>{runtime ? `${runtime}min` : ""} </span>
        </UnderTitle>
        <div className="rating">
          <p>Rating: {rating}</p>
          {getStars()}
        </div>
        <Overview>
          <h4>{tagline}</h4>
          <h3>Overview</h3>
          <p>{overview}</p>
        </Overview>
        <Crew>
          {director.map((person) => (
            <span key={person.original_name}>
              <p className="name">{person.original_name}</p>
              <p>{person.job}</p>
            </span>
          ))}
          {screenplay.slice(1).map((person) => (
            <span key={person.original_name}>
              <p className="name">{person.original_name}</p>
              <p>{person.job}</p>
            </span>
          ))}
        </Crew>
      </SmallDetails>
    </MediaBanerComponent>
  );
};
const MediaBanerComponent = styled(motion.div)`
  display: flex;
  width: 100%;
  background-color: #f2c366;
  .rating {
    padding: 1rem 0rem;
    display: flex;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Poster = styled(motion.div)`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  padding: 7rem 0rem;
  img {
    height: 48vh;
    width: 30vh;
    object-fit: cover;
  }
`;
const SmallDetails = styled(motion.div)`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  padding: 1rem 2rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;
const UnderTitle = styled(motion.div)`
  display: flex;
  font-size: 1rem;
  font-weight: lighter;
  .date {
    margin-right: 1vh;
  }
  h4 {
    font-weight: lighter;
    margin-right: 1vh;
  }
`;
const Overview = styled(motion.div)`
  padding: 1rem 0rem;
  h4 {
    padding: 1rem 0rem;
    font-style: italic;
  }
`;
const Crew = styled(motion.div)`
  display: flex;
  align-items: center;
  .name {
    font-weight: bold;
    margin-right: 1rem;
  }
  p {
    margin-right: 1rem;
  }
`;

export default MediaBaner;
