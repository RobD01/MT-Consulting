import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../style/main.css";
import { Link } from "react-router-dom";

const CommunityGrid = (props) => {
  return (
    <>
      <h4 className="text-center mt-5">{props.title}</h4>
      <Container fluid="md" className="mt-4">
        <Row>
          {props.list.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}>
              <div className="message-grid">
                <div className="message-header">
                  <p className="message-date">{item.Timestamp}</p>
                  <p className="message-name">Name: {item.Name}</p>
                  <p className="message-tag"># {item.Tags}</p>
                </div>
                <p className="message-title">{item.Title}</p>
                <p className="message-content">
                  {item.Message.substring(0, 150)}
                </p>
                <Link to={`/community/${item.id}`}>
                  <button>View Full Post</button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CommunityGrid;
