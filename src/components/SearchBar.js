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
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  search = () => {
    const { searchText } = this.state;
    if (searchText && searchText.trim() !== "")
      this.props.history.push(`search-result/${this.state.searchText}`);
    else this.setState({ searchText: "" });
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Container>
        <Row className="search">
          <Col sm="12">
            <InputGroup>
              <Input
                value={this.state.searchText}
                onChange={this.handleChange}
                placeholder="Search Movie"
              />
              <InputGroupAddon addonType="prepend">
                <Button
                  onClick={this.search}
                  color="success"
                  className="search-button"
                >
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
export default withRouter(SearchBar);
