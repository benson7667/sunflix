import React, { Component, Fragment } from "react";
import Navbar from "../components/NavbarComponent";
import { Container, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
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
        `${Config.apis_domain}movie/popular?api_key=${
          Config.apis_key
        }&language=en-US&page=1`
      );

      if (res.data) {
        console.log(res.data);
        this.setState({
          movies: res.data.results,
          page: res.data.page,
          totalPages: res.data.total_pages
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  fetchMoreData = async () => {
    const { movies, page } = this.state;

    try {
      await this.setState({ page: page + 1 });
      const res = await axios.get(
        `${Config.apis_domain}movie/popular?api_key=${
          Config.apis_key
        }&language=en-US&page=${page}`
      );

      if (res.data) {
        console.log(res.data);
        this.setState({
          movies: movies.concat(res.data.results),
          page: res.data.page,
          totalPages: res.data.total_pages
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { movies, isLoading, page, totalPages } = this.state;

    return (
      <Fragment>
        <Navbar />
        <Header title="Popular Movie" />

        {movies ? (
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.fetchMoreData}
            hasMore={page != totalPages}
            loader={<h4>Loading...</h4>}
          >
            <Container>
              <Row>
                {this.state.movies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    movieTitle={movie.title}
                    movieDescription={movie.overview}
                    movieBanner={movie.poster_path}
                    movieReleaseDate={movie.release_date}
                  />
                ))}
              </Row>
            </Container>
          </InfiniteScroll>
        ) : (
          <h1>loading</h1>
        )}

        {/* <div className="text-center mt-5 mb-5">
            <Button>View More</Button>
          </div> */}
      </Fragment>
    );
  }
}

export default PopularPage;
