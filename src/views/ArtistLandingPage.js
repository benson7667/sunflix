import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import axios from "axios";
import CrewCasterDetailContents from "../components/CrewCasterDetailContent";
import Config from "../config/Constant";

class ArtistLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData: null,
      creditData: null
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { actorID, creditID }
      }
    } = this.props;

    try {
      const [resPersonData, resCreditData] = await Promise.all([
        axios.get(
          `${Config.apis_domain}person/${actorID}?api_key=${Config.apis_key}`
        ),
        axios.get(
          `${Config.apis_domain}credit/${creditID}?api_key=${Config.apis_key}`
        )
      ]);

      this.setState({
        characterData: resPersonData.data,
        creditData: resCreditData.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <Header title=" " />
        <CrewCasterDetailContents
          creditData={this.state.creditData}
          characterData={this.state.characterData}
        />
      </Container>
    );
  }
}

export default ArtistLandingPage;
