import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Stripe from "../components/Stripe";
import poster from "../image/Poster.jpg";

const Merch = () => {
  return (
    <div className="container text-center">
      <h2 className="text-center">Merchandise</h2>

      <Stripe
        title="Vietnam Poster"
        stripe="https://buy.stripe.com/9AQdR517aaUNcYU9AA"
        image={poster}
        description="Designed and printed by Ravenous Couple. Through their love of cooking and culture, they designed the
              names of Vietnamese foods into the shape of Vietnam"
      />
    </div>
  );
};

export default Merch;
