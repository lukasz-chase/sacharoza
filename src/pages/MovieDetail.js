import React, { useState, useEffect } from "react";
//import router
import { useLocation } from "react-router-dom";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getMediaDetails, getImageURL, getMediaCredits } from "../api";
//import components
import MediaBaner from "../components/MediaBaner";
import MediaArticle from "../components/MediaArticle";
import Trailers from "../components/Trailers";
import Similar from "../components/Similar";

const MovieDetail = () => {
  // state
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //get apis response
  useEffect(() => {
    axios
      .get(getMediaDetails("movie", pathId))
      .then((res) => setMovie(res))
      .catch((err) => `${console.log(err)} movie`);
    axios
      .get(getMediaCredits("movie", pathId))
      .then((res) => setCredits(res))
      .catch((err) => `${console.log(err)} credits`);
  }, [pathId]);
  return (
    <div>
      <Details>
        {movie && credits ? (
          <>
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
          </>
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
        <Trailers media="movie" id={pathId} />
        <Similar media="movie" id={pathId} />
      </Details>
    </div>
  );
};

const Details = styled(motion.div)``;

export default MovieDetail;
