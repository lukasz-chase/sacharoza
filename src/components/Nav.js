import React, { useState, useEffect } from "react";
//styled
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import searchedUrl
import { getSearchedItem } from "../api";
//import axios
import axios from "axios";
import { Link } from "react-router-dom";

const Nav = ({ setSearched }) => {
  //state
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    setTextInput("");
  };
  useEffect(() => {
    axios.get(getSearchedItem(textInput)).then((res) => setSearched(res));
  }, []);

  return (
    <Navbar>
      <Link to="/">
        <h1>saharoza</h1>
      </Link>
      <RightNav>
        <Links>
          <a href="">Movies</a>
          {/* <div className="dropdown">
              <button>Trending</button>
              <button>In Theather</button>
              <button></button>
          </div> */}
          <a href="">TvShows</a>
        </Links>
        <form>
          <input
            type="text"
            placeholder="search"
            value={textInput}
            onChange={inputHandler}
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
  }
`;
const Links = styled(motion.div)``;
const RightNav = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
`;

export default Nav;
