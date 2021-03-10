import React from "react";
//import url
import { getUpcomingMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getUpcomingMedia}
      media={"movie"}
      title={"Upcoming Movies"}
      movie
    ></PageComponent>
  );
};

export default PopularTv;
