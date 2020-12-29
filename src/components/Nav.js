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
    axios
      .get(searchedMovieURL)
      .then((res) => setSearchedMovie(res))
      .catch((err) => console.log(err));
    axios
      .get(searchedTvURL)
      .then((res) => setSearchedTv(res))
      .catch((err) => console.log(err));
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
          <Link to="/movies">Movies</Link>
          {/* <div className="dropdown">
              <button>Trending</button>
              <button>In Theather</button>
              <button></button>
          </div> */}
          <Link to="/tvshows">TvShows</Link>
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
const Links = styled(motion.div)``;
const RightNav = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
`;

export default Nav;
