import React from "react";
//import url
import { getTodaysTv } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getTodaysTv}
      media={"tv"}
      title={"TV Series, today in TV"}
    ></PageComponent>
  );
};

export default PopularTv;
