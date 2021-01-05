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
import Season from "../components/Seasons";

const TvShowDetails = () => {
  // state;
  const [tvshow, setTvShow] = useState(null);
  const [credits, setCredits] = useState(null);
  //get the current locaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  useEffect(() => {
    axios.get(getMediaDetails("tv", pathId)).then((res) => setTvShow(res.data));
    axios.get(getTvCredits("tv", pathId)).then((res) => setCredits(res.data));
    window.scrollTo(0, 0);
  }, [pathId]);
  return (
    <div>
      <Details>
        {tvshow && credits ? (
          <>
            <MediaBaner
              image={
                tvshow.poster_path
                  ? getImageURL(500, tvshow.poster_path)
                  : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
              title={tvshow.name}
              date={tvshow.first_air_date}
              year={tvshow.first_air_date.split("-")[0]}
              genres={tvshow.genres}
              overview={tvshow.overview}
              rating={tvshow.vote_average}
              tagline={tvshow.tagline}
              director={credits.crew.filter(
                (person) => person.job === "Director"
              )}
              screenplay={credits.crew.filter(
                (person) => person.job === "Screenplay"
              )}
            />
            <MediaArticle
              id={pathId}
              seasons={tvshow.number_of_seasons}
              episodes={tvshow.number_of_episodes}
              network={tvshow.networks}
              cast={credits.cast}
              crew={credits.crew}
              status={tvshow.status}
              language={tvshow.original_language}
            />
            <Season
              id={pathId}
              seasonsNumber={tvshow.number_of_seasons}
              seasons={tvshow.seasons}
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
