import React from "react";
import { Card, Col } from "react-bootstrap";

const Meal = (props) => {
  const { name, img, description } = props;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Meal;
