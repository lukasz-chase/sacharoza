import React, { useState } from "react";
//importing components
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TvShowDetails from "./pages/TvShowDetails";
import Nav from "./components/Nav";
import Searched from "./pages/Searched";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App() {
  //state
  const [searchedMovie, setSearchedMovie] = useState();
  const [searchedTv, setSearchedTv] = useState();
  const [searchedPerson, setSearchedPerson] = useState();
  return (
    <div className="App">
      <Nav
        setSearchedMovie={setSearchedMovie}
        setSearchedTv={setSearchedTv}
        setSearchedPerson={setSearchedPerson}
      />
      <GlobalStyles />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id">
        <MovieDetail />
      </Route>
      <Route path="/tvshow/:id">
        <TvShowDetails />
      </Route>
      <Route path="/searched">
        <Searched
          searchedMovie={searchedMovie}
          searchedTv={searchedTv}
          searchedPerson={searchedPerson}
        />
      </Route>
    </div>
  );
}

export default App;
