import React from "react";
//import url
import { getOnAir } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getOnAir}
      media={"tv"}
      title={"Tv Series on Air"}
    ></PageComponent>
  );
};

export default PopularTv;
