import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images

const Services = () => {
  // Images

  const photography = [
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
  ];

  const socialMedia = [
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
  ];

  const webDev = [
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
  ];

  const realEstate = [
    [
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      `General consultaion (not your formal real estate agent) 
    is by the hourly fee. Consultation includes: Budget planning,
    Return on Investment, Cash Flow, Interest rate & Economic Analysis`,
    ],
    [
      "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      `As the Seller's agent, the commission fee is 6% of sales price. 
      As the Buyer's agent, there is no cost to the Buyer`,
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Services</h2>

      {/* Ao Dai */}
      <ItemGrid title="Photography / Videography" list={photography} />
      <ItemGrid title="Social Media" list={socialMedia} />
      <ItemGrid title="Web Development" list={webDev} />
      <ItemGrid title="Real Estate Consult" list={realEstate} />
    </div>
  );
};

export default Services;
