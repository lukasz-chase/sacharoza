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
  const [searched, setSearched] = useState();
  return (
    <div className="App">
      <Nav setSearched={setSearched} />
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
        <Searched searched={searched} />
      </Route>
    </div>
  );
}

export default App;
