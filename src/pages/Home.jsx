import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";

// images
import image3 from "../images/ao-dai/3.jpg";
import image5 from "../images/ao-dai/5.jpg";
import image7 from "../images/ao-dai/7.jpg";
import SocialLink from "../components/SocialLink";

// Grid

// Images
const services = [
  [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    `MISSION: developing and implementing strategies to 
    strengthen your online footprint. Your customer's attention
    is a scarce resouce, and we can help you gain market share.`,
  ],
  [
    "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600",
    `SERVICES: Photography, videography, web development, 
    business strategies, budgeting, and cash flow analysis.`,
  ],
  [
    "https://images.pexels.com/photos/5520289/pexels-photo-5520289.jpeg?auto=compress&cs=tinysrgb&w=600",
    `Conduct research market conditions in specific
    areas, and analyze customer preferences to determine potential sales of
    a product or service`,
  ],
];

const socialLink = [
  [
    "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    "https://www.youtube.com/watch?v=aWIRSRMmdN0",
  ],
  [
    "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
    "https://www.instagram.com/xuanloanfabrics/",
  ],
];

const Home = () => {
  return (
    <div className="container">
      <Navigation />

      {/* Title */}

      <div className="titleImage"></div>
      <h2 className="titleText">MT Consulting</h2>

      {/* Body */}

      {/* Grid 1, images */}
      <ItemGrid title="Business & Marketing Solutions" list={services} />

      {/* social media */}
      <SocialLink />
    </div>
  );
};

export default Home;
