import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/font.css";
import "../style/main.css";
import ItemGrid from "../components/ItemGrid";
import { body } from "../services/Home";

const Home = () => {
  return (
    <div className="container">
      {/* Title */}

      <div className="titleImage"></div>
      <div className="titleText">
        <p className="titleHeading">Money Theory</p>
        <p className="titleSubHeading"> Finance and Business Coaching</p>
      </div>

      {/* Body */}

      {/* Address, Phone */}

      <Container fluid="md">
        <Row>
          <Col s={12} m={6} lg={4}>
            <div className="address">
              <p>Covering all of Orange County, CA </p>
              <p>
                <b>Email: </b> moneytheory34@gmail.com{" "}
              </p>
              <p>
                <b>Hours:</b> Mon - Fri: 10am - 6pm{" "}
              </p>
              <p>
                <b>Phone: </b>(714) 383 - 0695{" "}
              </p>
              {/* <p>Email: goodjobstax@gmail.com | goodjobs92843@sbcglobal.net </p> */}
            </div>
          </Col>
          <Col s={12} m={6} lg={8}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42445.56402102732!2d-117.9746008949834!3d33.7262157342606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd270b73476835%3A0x464c4b5cfd95a7eb!2sMile%20Square%20Regional%20Park!5e0!3m2!1sen!2sus!4v1690610750560!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Grid 1, images */}
      <ItemGrid list={body} />
    </div>
  );
};

export default Home;
