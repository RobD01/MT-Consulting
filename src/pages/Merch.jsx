import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Merch = () => {
  return (
    <div className="container text-center">
      <h2 className="text-center">Merchandise</h2>
      <Container fluid="md" className="mt-4">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <img
              src="https://www.creatopy.com/blog/wp-content/uploads/2020/04/Save-the-Planet-Poster-Template.png"
              alt="Poster"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>Vietnam Poster</h4>
            <p>
              Designed and printed by{" "}
              <a
                href="https://www.instagram.com/ravenouscouple"
                target="_blank"
                rel="noreferrer"
              >
                Ravenous Couple
              </a>
              . Through their love of cooking and culture, they designed the
              names of Vietnamese foods into the shape of Vietnam{" "}
            </p>
            <a>
              <button className="button-dark">Buy Now</button>
            </a>

            <img
              src="https://www.goswimexcel.com/wp-content/uploads/2020/05/powered-by-stripe.png"
              alt="stripe"
              className="stripe"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Merch;
