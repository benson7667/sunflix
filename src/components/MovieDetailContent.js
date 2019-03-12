import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";

const MovieDetailLoader = props => (
  <ContentLoader
    height={500}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="120.72" y="116.61" rx="0" ry="0" width="7.8" height="0" />
    <rect x="14.91" y="11.98" rx="0" ry="0" width="182.7" height="262.53" />
    <rect x="3.74" y="541.6" rx="0" ry="0" width="289" height="1" />
    <rect x="209.08" y="20.98" rx="0" ry="0" width="177.33" height="17" />
    <rect x="208.89" y="50.34" rx="0" ry="0" width="268.68" height="10.38" />
    <rect x="208.89" y="66.14" rx="0" ry="0" width="223" height="10.6" />
    <rect x="208.89" y="82.14" rx="0" ry="0" width="177.33" height="10.82" />
    <rect x="209.08" y="119.98" rx="0" ry="0" width="48.36" height="43.28" />
    <rect x="269.08" y="118.98" rx="0" ry="0" width="48.36" height="43.28" />
    <rect x="328.08" y="118.98" rx="0" ry="0" width="48.36" height="43.28" />
  </ContentLoader>
);

const MovieDetailContent = ({ movieData, castcrewData }) => {
  console.log([movieData, castcrewData]);
  console.log("movieData", movieData);

  const renderMovieContent = (
    <Row>
      <Col xs={12} sm={4} style={{ marginBottom: "1rem" }}>
        <img
          src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"
          alt="movie banner"
          className="img-fluid"
        />
      </Col>

      <Col xs={12} sm={8}>
        {movieData === null ? (
          <MovieDetailLoader />
        ) : (
          <h1 className="display-5">{movieData.title}</h1>
        )}

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <Row>
          <Col>
            <div>
              <h5>Runtime</h5>
              <p>2h 30mins</p>
            </div>
          </Col>

          <Col>
            <div>
              <h5>Year Released</h5>
              <p>2019-01-01</p>
            </div>
          </Col>

          <Col>
            <div>
              <h5>Language</h5>
              <p>English</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <h5>Production/Company</h5>
              <p>English</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  const renderCastCrewContent = (
    <Row style={{ textAlign: "center" }}>
      <Col>
        <h5>Cast Crew</h5>
        <p>James Wan</p>

        <h5>Cast Crew</h5>
        <p>James Wan</p>
      </Col>
    </Row>
  );

  return (
    <Container>
      {movieData !== null ? renderMovieContent : <MovieDetailLoader />}
      {castcrewData !== null ? renderCastCrewContent : <MovieDetailLoader />}
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
