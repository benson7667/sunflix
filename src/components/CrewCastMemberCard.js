import React from "react";
import { Col, Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import randomstring from "randomstring";

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit"
  }
};

const CrewCastMemberCard = ({ member }) => (
  <Col
    key={randomstring.generate(7)}
    sm={4}
    md={2}
    style={{ marginBottom: "1rem" }}
  >
    <Card>
      <Link style={styles.link} to={`/actor/${member.id}`}>
        <CardImg
          top
          src={
            member.profile_path
              ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${
                  member.profile_path
                }`
              : "https://fagos.org/public/images/default-manage.png"
          }
          alt={`img-of-${member.name}`}
        />
        <div
          style={{
            padding: ".5rem",
            height: "3rem"
          }}
        >
          <h6>{member.name}</h6>
        </div>
      </Link>
    </Card>
  </Col>
);

CrewCastMemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default CrewCastMemberCard;
