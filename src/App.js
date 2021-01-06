import React, { useState } from "react";
//importing components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
//importing pages
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import PopularMovies from "./pages/PopularMovies";
import TvShowDetails from "./pages/TvShowDetails";
import Searched from "./pages/Searched";
import PopularTv from "./pages/PopularTv";
import TopRatedMovies from "./pages/TopRatedMovies";
import TopRatedTv from "./pages/TopRatedTv";
import UpcomingMovies from "./pages/UpcomingMovies";
import OnAir from "./pages/OnAir";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import Today from "./pages/Today";

//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App() {
  //state
  const [searchedMovie, setSearchedMovie] = useState();
  const [searchedTv, setSearchedTv] = useState();
  return (
    <div className="App">
      <Nav setSearchedMovie={setSearchedMovie} setSearchedTv={setSearchedTv} />
      <GlobalStyles />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id" exact>
        <MovieDetail />
      </Route>
      <Route path="/tv/:id" exact>
        <TvShowDetails />
      </Route>
      <Route path="/searched">
        <Searched searchedMovie={searchedMovie} searchedTv={searchedTv} />
      </Route>
      <Route path="/movies/popular" exact>
        <PopularMovies />
      </Route>
      <Route path="/movies/upcoming" exact>
        <UpcomingMovies />
      </Route>
      <Route path="/movies/top" exact>
        <TopRatedMovies />
      </Route>
      <Route path="/movies/now-playing" exact>
        <NowPlayingMovies />
      </Route>
      <Route path="/tv-series/popular" exact>
        <PopularTv />
      </Route>
      <Route path="/tv-series/on-air" exact>
        <OnAir />
      </Route>
      <Route path="/tv-series/top" exact>
        <TopRatedTv />
      </Route>
      <Route path="/tv-series/today" exact>
        <Today />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
