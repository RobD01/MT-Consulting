import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemGrid = (props) => {
  return (
    <>
      <h4 className="text-center mt-5">{props.title}</h4>
      <Container fluid="md" className="my-1">
        <Row>
          {props.list.map((item) => (
            <Col key={item} xs={12} md={4}>
              <LazyLoadImage
                src={item[0]}
                alt={item}
                className="gridImage"
                effect="blur"
              />
              <p className="gridText">{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemGrid;
