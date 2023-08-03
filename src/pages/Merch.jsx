import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stripe from "../components/Stripe";

const Merch = () => {
  return (
    <div className="container text-center">
      <h2 className="text-center">Merchandise</h2>

      <Stripe
        title="Vietnam Poster"
        stripe="https://buy.stripe.com/9AQdR517aaUNcYU9AA"
        image="https://www.creatopy.com/blog/wp-content/uploads/2020/04/Save-the-Planet-Poster-Template.png"
        description="Designed and printed by Ravenous Couple. Through their love of cooking and culture, they designed the
              names of Vietnamese foods into the shape of Vietnam"
      />
    </div>
  );
};

export default Merch;
