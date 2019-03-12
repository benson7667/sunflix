import React from "react";
import { Container, Row, Col, Badge, Button } from "reactstrap";
import PropTypes from "prop-types";
import CrewCasterLoader from "../components/loader/CrewCasterLoader";
import MovieDetailsLoader from "../components/loader/MovieDetailsLoader";
import CrewCastMemberCard from "../components/CrewCastMemberCard";

const MovieDetailContent = ({ movieData, castcrewData }) => {
  let renderMovieDetailLayout;
  let renderCrewAndCasterLayout;
  const colorArray = [
    "secondary",
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "dark"
  ];

  console.log(movieData);
  console.log(castcrewData);

  if (movieData === null) {
    renderMovieDetailLayout = <MovieDetailsLoader />;
  } else {
    renderMovieDetailLayout = (
      <Row>
        <Col xs={12} sm={4} style={{ marginBottom: "2rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${
              movieData.poster_path
            }`}
            alt="movie banner"
            className="img-fluid"
          />
        </Col>

        <Col xs={12} sm={8} style={{ marginBottom: "2rem" }}>
          <h1 className="display-5">{movieData.title}</h1>

          <p>{movieData.overview}</p>

          <Row>
            <Col>
              <div>
                <h5>Runtime</h5>
                <p>{`${movieData.runtime} minutes`}</p>
              </div>
            </Col>

            <Col>
              <div>
                <h5>Year Released</h5>
                <p>
                  {movieData.release_date ? movieData.release_date : "Unknown"}
                </p>
              </div>
            </Col>

            <Col>
              <div>
                <h5>Language</h5>
                <p>
                  {movieData.original_language &&
                    movieData.original_language[0]["name"]}
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Production/Company</h5>
              <Button color="link">link</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <h5>Genre</h5>
                {movieData.genres &&
                  movieData.genres.map(genre => {
                    const randdomColor =
                      colorArray[Math.floor(Math.random() * colorArray.length)];
                    return (
                      <Badge
                        key={genre.id}
                        style={{ marginRight: "1rem" }}
                        color={randdomColor}
                      >
                        {genre.name}
                      </Badge>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  if (castcrewData === null) {
    renderCrewAndCasterLayout = <CrewCasterLoader />;
  } else {
    renderCrewAndCasterLayout = (
      <div>
        <div>
          <h3>Cast Members</h3>
          <Row>
            {castcrewData.cast &&
              castcrewData.cast.map(cast => (
                <CrewCastMemberCard member={cast} />
              ))}
          </Row>
        </div>

        <div className="mb-3">
          <h3>Crew Members</h3>
          <Row>
            {castcrewData.crew &&
              castcrewData.crew.map(crew => (
                <CrewCastMemberCard member={crew} />
              ))}
          </Row>
        </div>
      </div>
    );
  }

  return (
    <Container>
      {renderMovieDetailLayout}
      {renderCrewAndCasterLayout}
    </Container>
  );
};

MovieDetailContent.propTypes = {
  movieData: PropTypes.object,
  castcrewData: PropTypes.object
};

MovieDetailContent.defaultProps = {
  movieData: null,
  castcrewData: null
};

export default MovieDetailContent;
