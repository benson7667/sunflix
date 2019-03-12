import React, { Component, Fragment } from "react";
import Navbar from "../components/NavbarComponent";
import { Button, Container, Row } from "reactstrap";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import Config from "../config/Constant";

class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: null,
      page: 1,
      totalPages: 0
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${
          Config.apis_domain
        }movie/popular?api_key=a5a2e1df5be77e9da24487b810e7b88e&language=en-US&page=1`
      );

      if (res.data) {
        console.log(res.data);
        this.setState({
          movies: res.data.results,
          isLoading: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movies, isLoading } = this.state;

    let renderLayout;
    if (movies && !isLoading)
      renderLayout = movies.map(movie => (
        <MovieCard
          key={movie.id}
          movieTitle={movie.title}
          movieDescription={movie.overview}
          movieBanner={movie.poster_path}
          movieReleaseDate={movie.release_date}
        />
      ));
    else renderLayout = <h1>Loading Data</h1>;

    return (
      <Fragment>
        <Navbar />
        <Header title="Popular Movie" />

        <Container>
          <Row>{renderLayout}</Row>

          <div className="text-center mt-5 mb-5">
            <Button>View More</Button>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default PopularPage;
