import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import randomString from "randomstring";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import LoadingPlaceholder from "../components/loader/LoadingPlaceholder";
import {
  loadPopularMovies,
  fetchMorePopularMovies
} from "../action/popularMoviesAction";

class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      moviesData: null,
      movies: null,
      page: 1,
      total_pages: 1
    };
  }

  // map global state to local state
  static getDerivedStateFromProps = (props, state) => {
    // check if global state data is different with local state data

    if (props.popularMovies.movies !== state.movies) {
      return {
        isLoading: props.popularMovies.isLoading,
        movies: props.popularMovies.movies,
        page: props.popularMovies.page,
        total_pages: props.popularMovies.total_pages
      };
    } else {
      return null;
    }
  };

  componentDidMount() {
    this.props._loadPopularMovies();
  }

  fetchMoreData = () => this.props._fetchMorePopularMovies(this.state.page + 1);

  render() {
    const { movies, page, total_pages, isLoading } = this.state;

    return (
      <Fragment>
        <Header title="Popular Movie" />

        {/* if movies is not null render ininite scrolling else render loading placeholder */}
        {movies && !isLoading ? (
          <InfiniteScroll
            dataLength={movies.length}
            next={this.fetchMoreData}
            hasMore={page < total_pages}
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

const mapStateToProps = state => ({
  popularMovies: state.popularMovies
});

const mapDispatchToProps = {
  _loadPopularMovies: loadPopularMovies,
  _fetchMorePopularMovies: fetchMorePopularMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularPage);
