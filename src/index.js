import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import PopularPage from "./views/PopularPage";
import ArtistLandingPage from "./views/ArtistLandingPage";
import MovieLandingPage from "./views/MovieLandingPage";
import SearchResultPage from "./views/SearchResultPage";
import TrendingPage from "./views/TrendingPage";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={PopularPage} />
      <Route path="/trending" component={TrendingPage} />
      <Route path="/search-result" component={SearchResultPage} />
      <Route path="/movie/{movieID}" component={MovieLandingPage} />
      <Route path="/actor/{actorID}" component={ArtistLandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
