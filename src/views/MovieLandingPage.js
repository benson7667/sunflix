import React, { Component } from "react";
import Header from "../components/Header";
import MovieDetailContent from "../components/MovieDetailContent";
import axios from "axios";
import Config from "../config/Constant";

class MovieLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: null,
      crewAndCast: null
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { movieID }
      }
    } = this.props;

    try {
      // calling two apis concurrently withou await the previous
      const [resCredit, resMovie] = await Promise.all([
        axios.get(
          `${Config.apis_domain}movie/${movieID}/credits?api_key=${
            Config.apis_key
          }&language=en-US`
        ),
        axios.get(
          `${Config.apis_domain}movie/${movieID}?api_key=${
            Config.apis_key
          }&language=en-US`
        )
      ]);

      this.setState({
        movieData: resMovie.data,
        crewAndCast: resCredit.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      match: {
        params: { movieID }
      }
    } = this.props;

    const { movieData, crewAndCast } = this.state;

    return (
      <React.Fragment>
        <Header title=" " />
        <MovieDetailContent movieData={movieData} castcrewData={crewAndCast} />
      </React.Fragment>
    );
  }
}

export default MovieLandingPage;
