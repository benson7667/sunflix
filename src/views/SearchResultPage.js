import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import LoadingPlaceholder from "../components/loader/LoadingPlaceholder";
import axios from "axios";
import randomString from "randomstring";
import NoResultCard from "../components/NoDataCard";
import Config from "../config/Constant";

export class SearchResultPage extends Component {
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
      const searchText = this.props.match.params.searchText;
      const { page } = this.state;

      const resResult = await axios.get(
        `${Config.apis_domain}search/movie?api_key=${
          Config.apis_key
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );

      this.setState({
        isLoading: false,
        movies: resResult.data.results
      });
    } catch (err) {
      console.log(err);
    }
  }

  fetchMoreData = async () => {
    const { movies, page } = this.state;

    try {
      const searchText = this.props.match.params.searchText;
      const res = await axios.get(
        `${Config.apis_domain}search/movie?api_key=${
          Config.apis_key
        }&language=en-US&query=${searchText}&page=${page +
          1}&include_adult=false`
      );

      if (res.data) {
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
    const { movies, totalPages, page, isLoading } = this.state;

    let renderSearchResultLayout;

    if (movies !== null && !isLoading) {
      if (movies.length === 0) {
        renderSearchResultLayout = (
          <NoResultCard
            title="No Result"
            description="Sorry, we could not find any match result."
            smallDescrip=" "
          />
        );
      } else {
        renderSearchResultLayout = (
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.fetchMoreData}
            hasMore={page < totalPages}
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
        );
      }
    } else {
      renderSearchResultLayout = <LoadingPlaceholder />;
    }

    return (
      <React.Fragment>
        <Header
          title={`Search Result : ${this.props.match.params.searchText}`}
        />
        {renderSearchResultLayout}
      </React.Fragment>
    );
  }
}

export default SearchResultPage;
