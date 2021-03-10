import React from "react";
//import url
import { getNowPlayingMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const NowPlayingMovies = () => {
  return (
    <PageComponent
      api={getNowPlayingMedia}
      media={"movie"}
      title={"Now playing Movies"}
      movie
    ></PageComponent>
  );
};

export default NowPlayingMovies;
