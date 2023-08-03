import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../style/main.css";

const CommunityGrid = (props) => {
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
                  <p>{item.Timestamp}</p>
                  <p>Name: {item["Name / Alias"]}</p>
                </div>
                <p>{item.Message}</p>
                <p>Tags: {item["Tags (# is optional)"]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CommunityGrid;
