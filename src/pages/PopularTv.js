import React from "react";
//import url
import { getPopularMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getPopularMedia}
      media={"tv"}
      title={"Popular Tv Series"}
    ></PageComponent>
  );
};

export default PopularTv;
