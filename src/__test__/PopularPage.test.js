import React from "react";
import renderer from "react-test-renderer"; // ES6
import PopularPage from "../views/PopularPage";
import TrendingPage from "../views/TrendingPage";

// describe("Popular Page", () => {
//   it("Show a list of popular movies", () => {
//     const component = renderer.create(<PopularPage />);
//     const instance = component.getInstance();
//     console.log(instance);
//   });
// });

describe("Trending Page", () => {
  it("Shows trending movies list", () => {
    const component = renderer.create(<TrendingPage />);
    console.log(component.toJSON());
  });
});
