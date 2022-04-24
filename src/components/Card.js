import React, { useEffect, useState } from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//api
import {
  getImageURL,
  setFavorite,
  getFavorites,
  addToWatchList,
  getWatchList,
} from "../api";
//icons
import { AiTwotoneHeart } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
//axios
import axios from "axios";
//react router
import { Link } from "react-router-dom";

const Card = ({ title, movieImage, id, media }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOnWatchList, setIsOnWatchList] = useState(false);

  useEffect(() => {
    if (user) {
      axios
        .get(
          getFavorites(
            user.session,
            user.id,
            media === "movie" ? "movies" : media
          )
        )
        .then((res) =>
          setIsFavorite(res.data.results.find((media) => media.id === id))
        );
      axios
        .get(
          getWatchList(
            user.session,
            user.id,
            media === "movie" ? "movies" : media
          )
        )
        .then((res) =>
          setIsOnWatchList(res.data.results.find((media) => media.id === id))
        );
    }
  }, [id, media, user]);
  const addHandler = (favorite, api) => {
    if ((favorite && isFavorite) || (!favorite && isOnWatchList)) {
      axios
        .post(api(user.session, user.id), {
          media_type: media,
          media_id: id,
          ...(favorite ? { favorite: false } : { watchlist: false }),
        })
        .then(() =>
          favorite ? setIsFavorite(false) : setIsOnWatchList(false)
        );
    } else {
      axios
        .post(api(user.session, user.id), {
          media_type: media,
          media_id: id,
          ...(favorite ? { favorite: true } : { watchlist: true }),
        })
        .then(() => (favorite ? setIsFavorite(true) : setIsOnWatchList(true)));
    }
  };
  return (
    <StyledMovie>
      {user && (
        <>
          <AiTwotoneHeart
            className="heart"
            size="2em"
            onClick={() => addHandler(true, setFavorite)}
            style={{ color: isFavorite ? "red" : "white" }}
          />
          <BsBookmarkFill
            className="bookmark"
            size="2em"
            onClick={() => addHandler(false, addToWatchList)}
            style={{ color: isOnWatchList ? "black" : "white" }}
          />
        </>
      )}
      <Link
        to={`/${media}/${id}`}
        key={id}
        style={{ textDecoration: "none" }}
        onClick={() => window.scrollTo(0, 0)}
        className="link"
      >
        <img
          src={
            movieImage
              ? getImageURL(500, movieImage)
              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
          }
          alt=""
        />
        <p>{title}</p>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  height: 45vh;
  width: 30vh;
  position: relative;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  margin-right: 1rem;
  margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    height: 32vh;
    width: 17vh;
  }
  .heart,
  .bookmark {
    position: absolute;
    top: 5;
    margin: 1vh;
    &:hover {
      cursor: pointer;
      color: #fac601;
    }
  }
  .heart {
    right: 0;
  }
  .bookmark {
    left: 0;
  }
  p {
    color: black;
    font-size: 1rem;
    @media screen and (max-width: 1000px) {
      font-size: 0.5rem;
    }
  }
  img {
    width: 100%;
    height: 39vh;
    object-fit: cover;
    @media screen and (max-width: 1000px) {
      height: 29vh;
    }
  }
  &:hover {
    background-color: #fac601;
  }
`;

export default Card;
