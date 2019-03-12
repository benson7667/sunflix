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
import SearchBar from "./SearchBar";

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
                  <NavLink href="https://www.themoviedb.org">Popular</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://www.themoviedb.org">Trending</NavLink>
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
