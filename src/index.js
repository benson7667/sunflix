import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import PopularPage from "./views/PopularPage";
import ArtistLandingPage from "./views/ArtistLandingPage";
import MovieLandingPage from "./views/MovieLandingPage";
import SearchResultPage from "./views/SearchResultPage";
import TrendingPage from "./views/TrendingPage";
import NotFound from "./views/NotFound";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={PopularPage} />
      <Route exact path="/popular" component={PopularPage} />
      <Route exact path="/trending" component={TrendingPage} />
      <Route exact path="/search-result" component={SearchResultPage} />
      <Route exact path="/movie/{movieID}" component={MovieLandingPage} />
      <Route exact path="/actor/{actorID}" component={ArtistLandingPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
