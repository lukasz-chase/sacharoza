import React, { useState, useEffect, useRef } from "react";
//import axios
import axios from "axios";
//import url
import { getNowPlayingMedia } from "../api";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import components
import Card from "../components/Card";
//link
import { Link } from "react-router-dom";

const NowPlayingMovies = () => {
  // state
  const [playing, setPlaying] = useState(null);
  const [active, setActive] = useState(null);
  const [more, setMore] = useState(null);
  let [number, setNumber] = useState(2);
  //Ref
  const select = useRef(null);
  //get apis response
  useEffect(() => {
    axios
      .get(getNowPlayingMedia("movie", "1"))
      .then((res) => setPlaying(res.data.results));
  }, [playing]);
  useEffect(() => {
    axios
      .get(getNowPlayingMedia("movie", number))
      .then((res) => setMore(res.data.results));
  }, [number]);
  //handlers
  const sortHandler = () => {
    window.scrollTo(0, 0);
    if (select.current.options[select.current.selectedIndex].value === "1") {
      setActive(
        active
          ? active.sort((a, b) => b.popularity - a.popularity)
          : playing.sort((a, b) => b.popularity - a.popularity)
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "2"
    ) {
      setActive(
        active
          ? active.sort((a, b) => a.popularity - b.popularity)
          : playing.sort((a, b) => a.popularity - b.popularity)
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "3"
    ) {
      setActive(
        active
          ? active.sort((a, b) => a.vote_average - b.vote_average)
          : playing.sort((a, b) => a.vote_average - b.vote_average)
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "4"
    ) {
      setActive(
        active
          ? active.sort((a, b) => b.vote_average - a.vote_average)
          : playing.sort((a, b) => b.vote_average - a.vote_average)
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "5"
    ) {
      setActive(
        active
          ? active.sort(
              (a, b) => new Date(a.release_date) - new Date(b.release_date)
            )
          : playing.sort(
              (a, b) => new Date(a.release_date) - new Date(b.release_date)
            )
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "6"
    ) {
      setActive(
        active
          ? active.sort(
              (a, b) => new Date(b.release_date) - new Date(a.release_date)
            )
          : playing.sort(
              (a, b) => new Date(b.release_date) - new Date(a.release_date)
            )
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "7"
    ) {
      setActive(
        active
          ? active.sort((a, b) => (a.title < b.title ? -1 : 1))
          : playing.sort((a, b) => (a.title < b.title ? -1 : 1))
      );
    } else if (
      select.current.options[select.current.selectedIndex].value === "8"
    ) {
      setActive(
        active
          ? active.sort((a, b) => (a.title > b.title ? -1 : 1))
          : playing.sort((a, b) => (a.title > b.title ? -1 : 1))
      );
    }
  };
  const ShowMoreHandler = () => {
    setNumber(number + 1);
    if (active) {
      setActive([...active, ...more]);
    } else {
      setActive([...playing, ...more]);
    }
  };
  return (
    <>
      {playing ? (
        <PopularComponent>
          <Sorting>
            <div className="sortComponent">
              <span>Now playing Movies</span>
              <select ref={select} name="" id="" onChange={sortHandler}>
                <option value="1">Popularity descending</option>
                <option value="2">Popularity ascending</option>
                <option value="3">Vote descending</option>
                <option value="4">Vote ascending</option>
                <option value="5">Date descending</option>
                <option value="6">Date ascending</option>
                <option value="7">Title (A-Z)</option>
                <option value="8">Title (Z-A)</option>
              </select>
            </div>
          </Sorting>
          {active ? (
            <Movies>
              {active.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    movieTitle={movie.title}
                    key={movie.id}
                    movieImage={movie.poster_path}
                  />
                </Link>
              ))}
              <button className="loadMore" onClick={ShowMoreHandler}>
                Load More
              </button>
            </Movies>
          ) : (
            <Movies>
              {playing.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    movieTitle={movie.title}
                    key={movie.id}
                    movieImage={movie.poster_path}
                  />
                </Link>
              ))}
              <button className="loadMore" onClick={ShowMoreHandler}>
                Load More
              </button>
            </Movies>
          )}
        </PopularComponent>
      ) : (
        <iframe
          title="gihpy-embed"
          src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

const PopularComponent = styled(motion.div)`
  display: flex;
  padding: 5rem 0rem;
`;
const Sorting = styled(motion.div)`
  width: 20%;
  text-align:center;
  .sortComponent {
    position:fixed;
    left:5%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    font-size: 3vh;
    select {
      margin-top: 1rem;
      padding: 0.5rem 0rem;
      font-size: 2vh;
     cursor: pointer;
      &:focus{
       outline:none;
        option{
          &:checked{
            background:  #e3ca0b !important;       
          }
        }
      }
      }
    }
  }
`;
const Movies = styled(motion.div)`
  min-height: 70vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .loadMore {
    position: relative;
    margin-top: 2vh;
    width: 90%;
    height: 10vh;
    font-size: 8vh;
    text-transform: upperCase;
    letter-spacing: 2vh;
    cursor: pointer;
    background-color: #f7df7e;
    transition: 0.3s all ease-in;
    &:hover {
      background-color: #f7cd43;
    }
  }
`;

export default NowPlayingMovies;
