import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <Container>
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <h2>{title}</h2>
      </div>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
