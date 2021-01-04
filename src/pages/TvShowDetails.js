import React, { useState, useEffect } from "react";
//import axios
import axios from "axios";
//use location
import { useLocation } from "react-router-dom";
//url
import { getMediaDetails, getImageURL, getTvCredits } from "../api";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import components
import MediaBaner from "../components/MediaBaner";
import MediaArticle from "../components/MediaArticle";
import Trailers from "../components/Trailers";
import Similar from "../components/Similar";

const TvShowDetails = () => {
  // state;
  const [tvshow, setTvShow] = useState(null);
  const [credits, setCredits] = useState(null);
  //get the current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  useEffect(() => {
    axios.get(getMediaDetails("tv", pathId)).then((res) => setTvShow(res));
    axios.get(getTvCredits("tv", pathId)).then((res) => setCredits(res));
    window.scrollTo(0, 0);
  }, [pathId]);

  return (
    <div>
      <Details>
        {tvshow && credits ? (
          <>
            <MediaBaner
              image={
                tvshow.data.poster_path
                  ? getImageURL(500, tvshow.data.poster_path)
                  : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
              title={tvshow.data.name}
              date={tvshow.data.first_air_date}
              year={tvshow.data.first_air_date.split("-")[0]}
              genres={tvshow.data.genres}
              overview={tvshow.data.overview}
              rating={tvshow.data.vote_average}
              tagline={tvshow.data.tagline}
              director={credits.data.crew.filter(
                (person) => person.job === "Director"
              )}
              screenplay={credits.data.crew.filter(
                (person) => person.job === "Screenplay"
              )}
            />
            <MediaArticle
              id={pathId}
              seasons={tvshow.data.number_of_seasons}
              episodes={tvshow.data.number_of_episodes}
              cast={credits.data.cast}
              crew={credits.data.crew}
              status={tvshow.data.status}
              language={tvshow.data.original_language}
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
        <Trailers media="tv" id={pathId} />
        <Similar media="tv" id={pathId} />
      </Details>
    </div>
  );
};
const Details = styled(motion.div)``;
export default TvShowDetails;
