import React from "react";
//import url
import { getPopularMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularMovies = () => {
  return (
    <PageComponent
      api={getPopularMedia}
      media={"movie"}
      title={"Popular Movies"}
    ></PageComponent>
  );
};

export default PopularMovies;
