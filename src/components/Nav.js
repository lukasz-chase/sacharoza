import React, { useState } from "react";
//import router
import { useHistory } from "react-router-dom";
//styled
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import searchedUrl
import { getSearchedMovie, getSearchedTv } from "../api";
//import axios
import axios from "axios";
import { Link } from "react-router-dom";

const Nav = ({ setSearchedMovie, setSearchedTv }) => {
  //state
  const [textInput, setTextInput] = useState("");
  const [moviesHover, setMoviesHover] = useState(false);
  const [tvHover, setTvHover] = useState(false);
  const history = useHistory();
  //handlers
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    setTextInput("");
    const searchedMovieURL = getSearchedMovie(textInput);
    const searchedTvURL = getSearchedTv(textInput);
    axios.get(searchedMovieURL).then((res) => setSearchedMovie(res));
    axios.get(searchedTvURL).then((res) => setSearchedTv(res));
  };
  const pageHandler = (e) => {
    if (e.key === "Enter") {
      history.push("/searched");
    }
  };
  return (
    <Navbar>
      <Link to="/">
        <h1>sacharoza</h1>
      </Link>
      <RightNav>
        <Links>
          <Dropdown>
            <div className="header">
              <div
                className="title"
                onMouseEnter={() => setMoviesHover(true)}
                onMouseLeave={() => setMoviesHover(false)}
              >
                Movies{" "}
              </div>
            </div>
            {moviesHover && (
              <div
                className="list"
                onMouseEnter={() => setMoviesHover(true)}
                onMouseLeave={() => setMoviesHover(false)}
              >
                <Link to="/popular/movies" style={{ padding: 0 }}>
                  <div className="list-item">Popular</div>
                </Link>
                <Link to="/upcoming/movies" style={{ padding: 0 }}>
                  <div className="list-item">Upcoming</div>
                </Link>
                <Link to="/top/movies" style={{ padding: 0 }}>
                  <div className="list-item">Top Rated</div>
                </Link>
                <Link to="/movies/now-playing" style={{ padding: 0 }}>
                  <div className="list-item">now playing</div>
                </Link>
              </div>
            )}
          </Dropdown>
          <Dropdown>
            <div className="header">
              <div
                className="title"
                onMouseEnter={() => setTvHover(true)}
                onMouseLeave={() => setTvHover(false)}
              >
                TV Shows{" "}
              </div>
            </div>
            {tvHover && (
              <div
                className="list"
                onMouseEnter={() => setTvHover(true)}
                onMouseLeave={() => setTvHover(false)}
              >
                <Link to="/popular/tv" style={{ padding: 0 }}>
                  <div className="list-item">Popular</div>
                </Link>
                <Link to="/today/tv" style={{ padding: 0 }}>
                  <div className="list-item">Today in TV</div>
                </Link>
                <Link to="/on-air/tv" style={{ padding: 0 }}>
                  <div className="list-item">On the air</div>
                </Link>
                <Link to="/top/tv" style={{ padding: 0 }}>
                  <div className="list-item">Top Rated</div>
                </Link>
              </div>
            )}
          </Dropdown>
        </Links>
        <form>
          <input
            type="text"
            placeholder="search"
            value={textInput}
            onChange={inputHandler}
            onKeyDown={pageHandler}
          />

          <button onClick={submitSearch}>
            <Link to="/searched" style={{ padding: "1rem" }}>
              <FontAwesomeIcon className="search" icon={faSearch} />
            </Link>
          </button>
        </form>
      </RightNav>
    </Navbar>
  );
};

const Navbar = styled(motion.div)`
  position: fixed;
  width: 100%;
  min-height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  background-color: black;
  color: #e3ca0b;
  a {
    padding: 0rem 5rem;
    color: #fd980d;
    text-decoration: none;
  }
  form {
    justify-self: end;
  }
  input {
    text-align: center;
    font-size: 1rem;
    border-radius: 0.5rem;
    outline: none;
  }
`;
const Links = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const RightNav = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
`;
const Dropdown = styled(motion.div)`
  padding: 0rem 3rem;
  .list {
    position: absolute;
    background-color: white;
    padding-top: 1rem;
    border-radius: 0.5rem;
    .list-item {
      display: flex;
      height: 2rem;
      min-width: 12rem;
      padding: 1.2rem;
      align-items: center;
      color: black;
      &:hover {
        background-color: rgb(152, 152, 152, 0.3);
      }
    }
  }
`;
export default Nav;
