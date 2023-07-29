import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../style/main.css";

const AnnouncementGrid = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h4 className="text-center mt-5">{props.title}</h4>
      <Container fluid="md" className="mt-4">
        <Row>
          {props.list.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}>
              <div className="gridText">
                <div className="title">
                  <p>
                    <b>{item.Title}</b>
                  </p>
                  <p>{item.Date}</p>
                </div>
                <p>{showMore ? item.Story : item.Story.substring(0, 150)}</p>
                <span
                  onClick={() => setShowMore(!showMore)}
                  className="showMoreStyle"
                >
                  {item.Story.length > 200
                    ? showMore
                      ? "Hide"
                      : "Show More"
                    : null}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AnnouncementGrid;
