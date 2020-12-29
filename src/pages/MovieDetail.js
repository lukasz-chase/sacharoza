import React, { useState, useEffect } from "react";
//import router
import { useLocation } from "react-router-dom";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import {
  getMediaDetails,
  getImageURL,
  getMediaCredits,
  getMediaVideo,
} from "../api";
//import components
import MediaBaner from "../components/MediaBaner";
import MediaArticle from "../components/MediaArticle";
import Trailers from "../components/Trailers";

const MovieDetail = () => {
  // state
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading, setLoading] = useState(true);
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //get apis response
  useEffect(() => {
    axios
      .get(getMediaDetails("movie", pathId))
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => `${console.log(err)} movie`);
    axios
      .get(getMediaCredits("movie", pathId))
      .then((res) => setCredits(res))
      .catch((err) => `${console.log(err)} credits`);
    axios
      .get(getMediaVideo("movie", pathId))
      .then((res) => {
        setVideos(res);
        setLoading(false);
      })
      .catch((err) => `${console.log(err)} video`);
  }, [pathId]);
  //checking if the data loaded
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {
        (movie,
        credits && (
          <Details>
            <MediaBaner
              movie={movie}
              image={
                movie.data.poster_path
                  ? getImageURL(500, movie.data.poster_path)
                  : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
              title={movie.data.title}
              date={movie.data.release_date}
              year={movie.data.release_date.split("-")[0]}
              genres={movie.data.genres}
              overview={movie.data.overview}
              runtime={movie.data.runtime}
              rating={movie.data.vote_average}
              tagline={movie.data.tagline}
              director={credits.data.crew.filter(
                (person) => person.job === "Director"
              )}
              screenplay={credits.data.crew.filter(
                (person) => person.job === "Screenplay"
              )}
            />
            <MediaArticle
              id={pathId}
              budget={movie.data.budget}
              revenue={movie.data.revenue}
              cast={credits.data.cast}
              crew={credits.data.crew}
              status={movie.data.status}
              language={movie.data.original_language}
            />
            <Trailers movieVideos={videos} />
          </Details>
        ))
      }
    </div>
  );
};

const Details = styled(motion.div)``;

export default MovieDetail;
