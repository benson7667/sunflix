import React, { Component, Fragment } from "react";
import Navbar from "../components/NavbarComponent";
import { Container, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import LoadingPlaceholder from "../components/loader/LoadingPlaceholder";
import axios from "axios";
import randomString from "randomstring";
import Config from "../config/Constant";

export class TrendingPage extends Component {
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
    //   component mounted, always call the apis with page=1 parameter
    try {
      const res = await axios.get(
        `${Config.apis_domain}trending/all/day?api_key=${
          Config.apis_key
        }&page=1`
      );

      if (res.data) {
        this.setState({
          movies: res.data.results,
          page: res.data.page,
          totalPages: res.data.total_pages,
          isLoading: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  fetchMoreData = async () => {
    const { movies, page } = this.state;

    try {
      const res = await axios.get(
        `${Config.apis_domain}trending/all/day?api_key=${
          Config.apis_key
        }&page=${page + 1}`
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
        <Header title="Trending Movie" />

        {/* if movies is not null render ininite scrolling else render loading placeholder */}
        {movies && !isLoading ? (
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.fetchMoreData}
            hasMore={page != totalPages}
            loader={<LoadingPlaceholder />}
          >
            <Container>
              <Row>
                {movies.map(movie => (
                  <MovieCard
                    key={randomString.generate(7)}
                    movieID={movie.id}
                    movieTitle={
                      movie.original_name ? movie.original_name : movie.title
                    }
                    movieDescription={movie.overview}
                    movieBanner={movie.poster_path}
                    movieReleaseDate={movie.release_date}
                  />
                ))}
              </Row>
            </Container>
          </InfiniteScroll>
        ) : (
          <LoadingPlaceholder />
        )}
      </Fragment>
    );
  }
}

export default TrendingPage;
