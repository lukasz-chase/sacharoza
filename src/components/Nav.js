import React, { useState } from "react";
//import router
import { useHistory } from "react-router-dom";
//styled
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
//import searchedUrl
import { getSearchedMovie, getSearchedTv } from "../api";
//import axios
import axios from "axios";
import { Link } from "react-router-dom";
import NavMobileMenu from "./NavMobileMenu";

const Nav = ({ setSearchedMovie, setSearchedTv }) => {
  //state
  const [textInput, setTextInput] = useState("");
  const [moviesHover, setMoviesHover] = useState(false);
  const [tvHover, setTvHover] = useState(false);
  const [menu, setMenu] = useState(false);
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
    history.push("/searched");
  };
  const pageHandler = (e) => {
    if (e.key === "Enter") {
      history.push("/searched");
      submitSearch(e);
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
                <Link to="/movies/popular" style={{ padding: 0 }}>
                  <div className="list-item">Popular</div>
                </Link>
                <Link to="/movies/upcoming" style={{ padding: 0 }}>
                  <div className="list-item">Upcoming</div>
                </Link>
                <Link to="/movies/top" style={{ padding: 0 }}>
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
                <Link to="/tv-series/popular" style={{ padding: 0 }}>
                  <div className="list-item">Popular</div>
                </Link>
                <Link to="/tv-series/today" style={{ padding: 0 }}>
                  <div className="list-item">Today in TV</div>
                </Link>
                <Link to="/tv-series/on-air" style={{ padding: 0 }}>
                  <div className="list-item">On the air</div>
                </Link>
                <Link to="/tv-series/top" style={{ padding: 0 }}>
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

          <button onClick={(e) => submitSearch(e)} className="search-icon">
            <AiOutlineSearch />
          </button>
        </form>
      </RightNav>
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <NavMobileMenu
        textInput={textInput}
        inputHandler={inputHandler}
        pageHandler={pageHandler}
        submitSearch={submitSearch}
        menu={menu}
        setMenu={setMenu}
      />
    </Navbar>
  );
};

const Navbar = styled(motion.div)`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .menu-icon {
    display: none;
    font-size: 2rem;
    margin-right: 20px;
    @media screen and (max-width: 1000px) {
      display: block;
    }
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
  form {
    position: relative;
    .search-icon {
      position: absolute;
      right: 0;
      background: none;
      border: none;
      top: 0;
      font-size: 1.5rem;
    }
  }
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
