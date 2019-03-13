import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Container,
  Form
} from "reactstrap";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  search = e => {
    e.preventDefault();

    const { searchText } = this.state;
    if (searchText && searchText.trim() !== "") {
      this.props.history.push(`search-result/${this.state.searchText}`);
    }

    this.setState({ searchText: "" });
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Container>
        <Row className="search">
          <Col sm="12">
            <Form>
              <InputGroup>
                <Input
                  value={this.state.searchText}
                  onChange={this.handleChange}
                  placeholder="Search Movie"
                />
                <InputGroupAddon addonType="prepend">
                  <Button
                    type="submit"
                    onClick={this.search}
                    color="success"
                    className="search-button"
                  >
                    Search
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(SearchBar);
