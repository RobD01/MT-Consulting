import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images

const Services = () => {
  // Images

  const marketing = [
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
    [, "Development and implementation of the Brand strategy."],
    [, "Developing the marketing strategy for new and existing products"],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Services</h2>

      {/* Ao Dai */}
      <ItemGrid title="Photography / Videography" list={marketing} />
      <ItemGrid title="Social Media" list={marketing} />
      <ItemGrid title="Web Development" list={marketing} />
      <ItemGrid title="Business Strategies" list={marketing} />
    </div>
  );
};

export default Services;
