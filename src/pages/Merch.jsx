import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Stripe from "../components/Stripe";
import poster from "../image/Poster.jpg";
import stick from "../image/Mt-Fuji-Stick.jpg";

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
      <Stripe
        title="ABC to Vietnamese: Alphabet Series"
        stripe="https://www.amazon.com/ABC-Vietnamese-Alphabet-Robert-Dao/dp/B08PJKJBS5"
        description="This book is the perfect gift for anyone new to 
        Vietnamsese. It teaches the 
        rules of the language and how it differs from English. 
        Every letter comes with an example word and sentence to 
        provide a full experience on how to apply the lessons 
        into everyday life."
        image="https://m.media-amazon.com/images/I/61Gb18UB7iL._SL1500_.jpg"
      />
      <Stripe
        title="Mt Fuji Walking Stick"
        stripe="https://buy.stripe.com/aEU8wL2be2oh2kg002"
        description="This staff with stamps serve as undeniable proof of your triumphant 
        climb. At the summit, the clouds swirl beneath you and breathtaking views 
        of the sunrise before your eyes. This walking stick becomes your talisman—
        a tangible reminder of conquering one of nature's magnificent wonders. "
        image={stick}
      />
    </div>
  );
};

export default Merch;
