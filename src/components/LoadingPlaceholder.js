import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContentLoader from "react-content-loader";
import randomstring from "randomstring";

const MyLoader = props => (
  <ContentLoader
    height={556}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
    <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
    <rect x="3.59" y="4.18" rx="0" ry="0" width="291.81" height="402.1" />
    <rect x="120.72" y="116.61" rx="0" ry="0" width="7.8" height="0" />
    <rect x="18.33" y="420.45" rx="0" ry="0" width="191.36" height="20.24" />
    <rect x="93.44" y="457.61" rx="0" ry="0" width="0" height="0" />
    <rect x="18.24" y="448.6" rx="0" ry="0" width="153.64" height="21.16" />
    <rect x="146.3" y="497.99" rx="0" ry="0" width="137.08" height="22.08" />
    <rect x="87.33" y="267.59" rx="0" ry="0" width="0" height="0" />
    <rect x="89.33" y="184.59" rx="0" ry="0" width="0" height="0" />
    <rect x="4.74" y="404.59" rx="0" ry="0" width="1.02" height="140" />
    <rect x="292.74" y="404.59" rx="0" ry="0" width="1" height="140" />
    <rect x="3.74" y="541.6" rx="0" ry="0" width="289" height="1" />
  </ContentLoader>
);

const LoadingPlaceholder = () => (
  <Container>
    <Row>
      {Array(8)
        .fill("")
        .map(() => (
          <Col
            key={randomstring.generate(7)}
            style={{ marginBottom: "1.2rem" }}
            xs={6}
            md={3}
          >
            <MyLoader />
          </Col>
        ))}
    </Row>
  </Container>
);

export default LoadingPlaceholder;
