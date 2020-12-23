import React from "react";
//importing components
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TvShowDetails from "./pages/TvShowDetails";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
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
    </div>
  );
}

export default App;
