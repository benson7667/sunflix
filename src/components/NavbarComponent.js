import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit"
  }
};

class NavbarComponent extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Navbar color="light" light expand="md">
            <Container>
              <NavbarBrand href="/">Sunflix</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/popular">
                    <Link style={styles.link} to="/popular">
                      Popular
                    </Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>
                    <Link style={styles.link} to="/trending">
                      Trending
                    </Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <SearchBar />
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavbarComponent;
