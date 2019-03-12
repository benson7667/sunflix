import React from "react";
import ContentLoader from "react-content-loader";
import { Row, Col } from "reactstrap";
import randomstring from "randomstring";

const CrewCasterLoader = props => (
  <Row style={{ marginBottom: "3rem" }}>
    {Array(8)
      .fill(" ")
      .map(() => (
        <Col key={randomstring.generate(7)} sm={4}>
          <ContentLoader
            height={90}
            width={395}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            {...props}
          >
            <rect x="91" y="28" rx="4" ry="4" width="248.04" height="12.35" />
            <rect x="91" y="50" rx="3" ry="3" width="133.45" height="12.35" />
            <circle cx="45" cy="45" r="36" />
          </ContentLoader>
        </Col>
      ))}
  </Row>
);

export default CrewCasterLoader;
