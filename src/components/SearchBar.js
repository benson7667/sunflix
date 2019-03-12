import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Container
} from "reactstrap";

class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Row className="search">
          <Col sm="12">
            <InputGroup>
              <Input placeholder="Search Movie" />
              <InputGroupAddon addonType="prepend">
                <Button color="success" className="search-button">
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SearchBar;
