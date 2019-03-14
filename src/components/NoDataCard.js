import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const NoDataCard = ({ title, description, smallDescrip }) => (
  <Container>
    <Jumbotron style={{ marginTop: "2rem" }}>
      <h1 className="display-3">{title}</h1>
      <p className="lead">{description}</p>
      <hr className="my-2" />

      <p>{smallDescrip}</p>

      <p className="lead">
        <Link to="/">
          <Button color="primary">Go Homepage</Button>
        </Link>
      </p>
    </Jumbotron>
  </Container>
);

NoDataCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  smallDescrip: PropTypes.string.isRequired
};

export default NoDataCard;
