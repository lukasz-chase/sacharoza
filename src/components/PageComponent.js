import React, { useState, useEffect } from "react";
//import axios
import axios from "axios";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import components
import Slider from "./Slider";
//data
import { sortingItems, options } from "../descriptions/sortingItems";
//icons
import { MdArrowDropDown } from "react-icons/md";

const PageComponent = ({ api, media, title }) => {
  // state
  const [pageItem, SetPageItem] = useState([]);
  const [activeItem, setActiveItem] = useState([]);
  const [more, setMore] = useState(null);
  const [dropdown, setDropdown] = useState(null);
  const [dropdownTitle, setDropDownTitle] = useState("Popularity ascending");
  let [number, setNumber] = useState(2);
  //get apis response
  useEffect(() => {
    axios.get(api(media, "1")).then((res) => SetPageItem(res.data.results));
  }, [media, api]);
  useEffect(() => {
    axios.get(api(media, number)).then((res) => setMore(res.data.results));
  }, [number, media, api]);

  //handlers
  const ShowMoreHandler = () => {
    setNumber(number + 1);
    setActiveItem(
      activeItem.length === 0
        ? [...pageItem, ...more]
        : [...activeItem, ...more]
    );
  };
  const setSortHandler = ({ label, sortType, sortOrder }) => {
    setDropdown(false);
    setDropDownTitle(label);
    const sortProperty = options[sortType];
    if (sortProperty === "release_date") {
      if (sortOrder === "asc") {
        setActiveItem(
          [...pageItem].sort(
            (a, b) =>
              new Date(a.release_date ? a.release_date : a.first_air_date) -
              new Date(b.release_date ? b.release_date : b.first_air_date)
          )
        );
      } else {
        setActiveItem(
          [...pageItem].sort(
            (a, b) =>
              new Date(b.release_date ? b.release_date : b.first_air_date) -
              new Date(a.release_date ? a.release_date : a.first_air_date)
          )
        );
      }
    } else {
      if (sortOrder === "asc") {
        setActiveItem(
          [...pageItem].sort((a, b) => b[sortProperty] - a[sortProperty])
        );
      } else {
        setActiveItem(
          [...pageItem].sort((a, b) => a[sortProperty] - b[sortProperty])
        );
      }
    }
  };

  return (
    <>
      {pageItem ? (
        <PopularComponent>
          <Sorting>
            <span className="title">{title}</span>
            <div className="dd-wrapper">
              <div
                className="dd-header"
                onClick={() => setDropdown((prev) => !prev)}
              >
                <div className="dd-header-title">
                  {dropdownTitle}
                  <MdArrowDropDown size="3em" />
                </div>
              </div>
              <div
                className="dd-list"
                style={{ display: dropdown ? "flex" : "none" }}
              >
                {sortingItems.map((item) => (
                  <button
                    key={item.label}
                    className="dd-list-item"
                    onClick={() => setSortHandler(item)}
                    style={{
                      backgroundColor:
                        dropdownTitle === item.label ? "#f7cd43" : "",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </Sorting>
          <div style={{ width: "100%" }}>
            {activeItem.length === 0 ? (
              <Slider
                media={media}
                items={pageItem}
                flexWrap="wrap"
                overflowX="hidden"
              />
            ) : (
              <Slider
                media={media}
                items={activeItem}
                flexWrap="wrap"
                overflowX="hidden"
              />
            )}
            <button className="loadMore" onClick={ShowMoreHandler}>
              Load More
            </button>
          </div>
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .loadMore {
    position: sticky;
    bottom: 0;
    width: 91%;
    height: 10vh;
    font-size: 8vh;
    text-transform: upperCase;
    letter-spacing: 2vh;
    cursor: pointer;
    background-color: #f7df7e;
    transition: 0.3s all ease-in;
    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 3vh;
      height: 7vh;
    }
    &:hover {
      background-color: #f7cd43;
    }
  }
`;
const Sorting = styled(motion.div)`
  width: 20%;
  text-align: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  .title {
    text-transform: upperCase;
    font-size: 3vw;
  }
  .dd-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2vw;
    .dd-header {
      padding: 0.5vw;
      border: 1px solid black;
      transition: 0.5s ease-out;
      background-color: #f7cd43;
      cursor: pointer;
      .dd-header-title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .dd-list {
      flex-direction: column;
      border: 1px solid black;
      .dd-list-item {
        background-color: white;
        border: none;
        padding: 0.4vw;
        cursor: pointer;
        &:hover {
          background-color: #f3da8a;
        }
      }
    }
  }
`;

export default PageComponent;
