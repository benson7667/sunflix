import React from "react";
import renderer from "react-test-renderer"; // ES6
import PopularPage from "../views/PopularPage";
import TrendingPage from "../views/TrendingPage";

describe("Trending Page", () => {
  it("Shows trending movies list", () => {
    const component = renderer.create(<TrendingPage />);
    console.log(component.toJSON());
  });
});
