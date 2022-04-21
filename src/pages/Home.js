import React, { useState, useRef } from "react";
import axios from "axios";
//getting url
import { getTrendingMedia } from "../api";
//importing components
import Baner from "../components/Baner";
import Slider from "../components/Slider";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //state
  const [trendingMoviesDay, setTrendingMoviesDay] = useState(null);
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState(null);
  const [trendingTvDay, setTrendingTvDay] = useState(null);
  const [trendingTvWeek, setTrendingTvWeek] = useState(null);
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [trendingTv, setTrendingTv] = useState(null);
  //fetch axios
  React.useEffect(() => {
    axios
      .get(getTrendingMedia("movie", "day"))
      .then((res) => setTrendingMoviesDay(res.data.results));
    axios
      .get(getTrendingMedia("movie", "week"))
      .then((res) => setTrendingMoviesWeek(res.data.results));
    axios
      .get(getTrendingMedia("tv", "day"))
      .then((res) => setTrendingTvDay(res.data.results));
    axios
      .get(getTrendingMedia("tv", "week"))
      .then((res) => setTrendingTvWeek(res.data.results));
  }, []);
  React.useEffect(() => {
    setTrendingMovie(trendingMoviesWeek);
    setTrendingTv(trendingTvWeek);
  }, [trendingMoviesWeek, trendingTvWeek]);
  //Event handlers
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const button4Ref = useRef(null);
  const trendingMovieHandler = (currentBtn, setTrend, whichTrend) => {
    button1Ref.current.classList.remove("active");
    button2Ref.current.classList.remove("active");
    currentBtn.current.classList.add("active");
    setTrend(whichTrend);
  };
  const trendingTvHandler = (currentBtn, setTrend, whichTrend) => {
    button3Ref.current.classList.remove("active");
    button4Ref.current.classList.remove("active");
    currentBtn.current.classList.add("active");
    setTrend(whichTrend);
  };
  return (
    <StyledHome>
      <Baner />
      <ColumnHeader>
        <h1>Trending movies</h1>
        <ButtonsStyle>
          <button
            ref={button1Ref}
            onClick={() =>
              trendingMovieHandler(
                button1Ref,
                setTrendingMovie,
                trendingMoviesDay
              )
            }
          >
            Today
          </button>
          <button
            ref={button2Ref}
            className="active"
            onClick={() =>
              trendingMovieHandler(
                button2Ref,
                setTrendingMovie,
                trendingMoviesWeek
              )
            }
          >
            This Week
          </button>
        </ButtonsStyle>
      </ColumnHeader>
      <Slider media="movie" items={trendingMovie} />
      <ColumnHeader>
        <h1>trending tv shows:</h1>
        <ButtonsStyle>
          <button
            ref={button3Ref}
            onClick={() =>
              trendingTvHandler(button3Ref, setTrendingTv, trendingTvDay)
            }
          >
            Today
          </button>
          <button
            ref={button4Ref}
            className="active"
            onClick={() =>
              trendingTvHandler(button4Ref, setTrendingTv, trendingTvWeek)
            }
          >
            This Week
          </button>
        </ButtonsStyle>
      </ColumnHeader>
      <Slider items={trendingTv} />
    </StyledHome>
  );
};
const StyledHome = styled(motion.div)`
  width: 100%;
`;

const ColumnHeader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  h1 {
    margin-right: 2vh;
    &:first-letter {
      text-transform: upperCase;
    }
    @media screen and (max-width: 1000px) {
      margin: 1rem 0;
      font-size: 1rem;
    }
  }
  button {
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem;
    transition: 0.5s ease-in;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
  .active {
    outline: none;
    background-color: #ed930c;
  }
`;

const ButtonsStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;
export default Home;
