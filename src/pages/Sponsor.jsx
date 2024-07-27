import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import SponsorList from "../components/SponsorList";
import { sponsor } from "../services/Home";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Sponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container ">
      <Row>
        <Col xs={12} sm={6}>
          <h4 className="">Become a sponsor</h4>

          <Link
            to="https://buy.stripe.com/bIY28n7vy1kd9MIfZ1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <button className="button-dark">Buy</button>
          </Link>
          <p className="text-rose-700 text-sm">
            Buy button will open a new window to the stripe platform
          </p>
          <p>
            This is a great way to put your brand and business in front of
            investors and everyone passionate about finance.
          </p>

          <p>Sponsorship benefits include:</p>
          <ul className="pl-5" style={{ listStyleType: "none" }}>
            <li>Logo placement on sponsors page</li>
            <li>Link to your company website</li>
            <li>Company description, max 50 words</li>
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          <h4 className="">In partnership with our community sponsors</h4>
          {
            // @ts-expect-error object type
            <SponsorList list={sponsor} />
          }
        </Col>
      </Row>
    </div>
  );
};

export default Sponsor;
