import React, { useState, useEffect } from "react";
//import router
import { useHistory } from "react-router-dom";
//styled
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
//import searchedUrl
import {
  getSearchedMovie,
  getSearchedTv,
  sessionUrl,
  authentication,
  getAccount,
} from "../api";
//import axios
import axios from "axios";
import { Link } from "react-router-dom";
import NavMobileMenu from "./NavMobileMenu";
import { useLocation } from "react-router-dom";
import {
  movieCategories,
  tvShowsCategories,
  userDropdown,
} from "../descriptions/dropdownLists";
import Dropdown from "./Dropdown";

const Nav = ({ setSearchedMovie, setSearchedTv }) => {
  //state
  const [textInput, setTextInput] = useState("");
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(null);
  const [session, setSession] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useHistory();
  const location = useLocation();
  const request_token = location.search?.split("=")[1]?.split("&")[0];
  //useEffect
  useEffect(() => {
    axios.get(authentication()).then((res) => setToken(res.data));
  }, []);
  useEffect(() => {
    if (token && request_token) {
      axios
        .get(sessionUrl(request_token))
        .then((res) => setSession(res.data.session_id));
      axios.get(getAccount(session)).then((res) => setUser(res.data));
    }
  }, [token, request_token, session]);
  useEffect(() => {
    if (user && session) {
      localStorage.setItem("user", JSON.stringify({ ...user, session }));
    }
  }, [user, session]);
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
    setMenu(false);
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
          <Dropdown title="Movies" list={movieCategories} />
          <Dropdown title="Tv Shows" list={tvShowsCategories} />
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
        {!user && (
          <a
            href={`https://www.themoviedb.org/authenticate/${token?.request_token}?redirect_to=http://localhost:3000/`}
          >
            sign in
          </a>
        )}
        {user && <Dropdown title={user.username} list={userDropdown} />}
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
  position: fixed;
  z-index: 3;
  width: 100vw;
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
export default Nav;
