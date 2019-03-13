import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import randomstring from "randomstring";
import MovieDetailsLoader from "../components/loader/MovieDetailsLoader";
import MovieCard from "../components/MovieCard";
import CrewCasterLoader from "../components/loader/CrewCasterLoader";

const CrewCasterDetailContents = ({ creditData, characterData }) => {
  let renderCharacterDetailsLayout;
  let renderListOfCastMovieLayout;

  if (characterData === null) {
    renderCharacterDetailsLayout = <MovieDetailsLoader />;
  } else {
    renderCharacterDetailsLayout = (
      <Row>
        <Col xs={12} sm={4} style={{ marginBottom: "2rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${
              characterData.profile_path
            }`}
            alt="character banner"
            className="img-fluid"
          />
        </Col>

        <Col xs={12} sm={8} style={{ marginBottom: "2rem" }}>
          <h1 className="display-5">{characterData.name}</h1>

          <p>{characterData.biography}</p>

          <Row>
            <Col>
              <div>
                <h5>Birth Date</h5>
                <p>{characterData.birthday}</p>
              </div>
            </Col>

            <Col>
              <div>
                <h5>Place of Birth</h5>
                <p>{characterData.place_of_birth}</p>
              </div>
            </Col>

            <Col>
              <div>
                <h5>Popularity</h5>
                <p>{characterData.popularity}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  if (creditData === null) {
    renderListOfCastMovieLayout = <CrewCasterLoader />;
  } else {
    const {
      person: { known_for }
    } = creditData;

    renderListOfCastMovieLayout = (
      <Row>
        {known_for.map(otherMovie => (
          <MovieCard
            key={randomstring.generate(7)}
            movieID={otherMovie.id}
            movieTitle={otherMovie.original_title}
            movieDescription={otherMovie.overview}
            movieBanner={otherMovie.poster_path}
            movieReleaseDate={otherMovie.release_date}
          />
        ))}
      </Row>
    );
  }

  return (
    <Container>
      {renderCharacterDetailsLayout}

      <div>
        <h3>Other Casting Movie</h3>
        {renderListOfCastMovieLayout}
      </div>
    </Container>
  );
};

CrewCasterDetailContents.propTypes = {
  characterData: PropTypes.object,
  creditData: PropTypes.object
};

CrewCasterDetailContents.defaultProps = {
  characterData: null,
  creditData: null
};

export default CrewCasterDetailContents;
