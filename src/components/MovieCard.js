import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from "reactstrap";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";

const MovieCard = ({
  movieTitle,
  movieReleaseDate,
  movieDescription,
  movieBanner
}) => (
  <Col style={{ marginBottom: "1.2rem" }} xs={6} md={3}>
    <Link to={"/trending"} style={{ textDecoration: "none", color: "black" }}>
      <Card>
        <CardImg
          top
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movieBanner}`}
          alt="Movie Banner"
        />
        <CardBody>
          <CardTitle style={{ height: "2rem" }}>
            <h6>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {movieTitle}
              </Truncate>
            </h6>
          </CardTitle>

          <CardText>
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {movieDescription}
            </Truncate>
          </CardText>

          <div className="text-right">
            <small>{movieReleaseDate}</small>
          </div>
        </CardBody>
      </Card>
    </Link>
  </Col>
);

MovieCard.propTypes = {
  movieBanner: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieDescription: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.string.isRequired
};

export default MovieCard;
