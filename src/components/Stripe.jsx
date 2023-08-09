import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Stripe = (props) => {
  return (
    <>
      <Container fluid="md" className="mt-4 mb-5">
        <Row>
          <Col xs={12} md={6} lg={4}>
            {props.image ? <img src={props.image} alt="Poster" /> : null}
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>{props.title}</h4>

            <a href={props.stripe} target="_blank" rel="noreferrer">
              <button className="button-dark mt-3 mb-3">Buy Now</button>
            </a>
            <p>{props.description}</p>

            <img
              src="https://www.goswimexcel.com/wp-content/uploads/2020/05/powered-by-stripe.png"
              alt="stripe"
              className="stripe"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stripe;
