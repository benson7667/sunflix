import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Container>
    <Jumbotron style={{ marginTop: "2rem" }}>
      <h1 className="display-3">Page Not Found!</h1>
      <p className="lead">
        The link you followed may be broken, or the page may have been removed.
      </p>
      <hr className="my-2" />

      <p>The Request URL was not found</p>

      <p className="lead">
        <Link to="/">
          <Button color="primary">Go Homepage</Button>
        </Link>
      </p>
    </Jumbotron>
  </Container>
);

export default NotFound;
