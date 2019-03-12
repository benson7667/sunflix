import React, { Component } from "react";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import axios from "axios";
import Config from "./config/Constant";

class App extends Component {
  async componentDidMount() {
    try {
      const res = await axios.get(
        `${
          Config.apis_domain
        }trending/all/day?api_key=a5a2e1df5be77e9da24487b810e7b88e`
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li class="input-field col s6">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">First Name</label>
              </li>

              <li>
                <a href="sass.html">Popular</a>
              </li>
              <li>
                <a href="badges.html">Trending</a>
              </li>
              <li>
                <a href="collapsible.html">Search</a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="row container">
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w1000_and_h563_face/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg" />
                <span class="card-title">Card Title</span>
              </div>

              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w1000_and_h563_face/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg" />
                <span class="card-title">Card Title</span>
              </div>

              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="https://image.tmdb.org/t/p/w1000_and_h563_face/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg" />
                <span class="card-title">Card Title</span>
              </div>

              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
