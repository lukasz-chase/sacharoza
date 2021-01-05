import React from "react";
//import url
import { getTopRatedMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getTopRatedMedia}
      media={"tv"}
      title={"Top rated TV series"}
    ></PageComponent>
  );
};

export default PopularTv;
