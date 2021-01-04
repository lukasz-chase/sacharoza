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
import UpcomingTv from "./pages/UpcomingTv";

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
      <Route path="/movie/:id">
        <MovieDetail />
      </Route>
      <Route path="/tvshow/:id" exact>
        <TvShowDetails />
      </Route>
      <Route path="/searched">
        <Searched searchedMovie={searchedMovie} searchedTv={searchedTv} />
      </Route>
      <Route path="/popular/movies" exact>
        <PopularMovies />
      </Route>
      <Route path="/upcoming/movies" exact>
        <UpcomingMovies />
      </Route>
      <Route path="/top/movies" exact>
        <TopRatedMovies />
      </Route>
      <Route path="/popular/tv" exact>
        <PopularTv />
      </Route>
      <Route path="/upcoming/tv" exact>
        <UpcomingTv />
      </Route>
      <Route path="/top/tv" exact>
        <TopRatedTv />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
