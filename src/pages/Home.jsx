import React from "react";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import SocialLink from "../components/SocialLink";
import contractLogo from "../images/viewContractLogo.jpg";

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
    "https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    `SERVICES: Photography, videography, web development, 
    business strategies, budgeting, and cash flow analysis.`,
  ],
  [
    "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    `We provide complimentary finance and business lectures 
    on the Youtube channel and Patreon. See Social Media links
    below. `,
  ],
];

const client = [
  [
    "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    `FEE: Our services are on a flat hourly fee of $ 50.00.
    The amount billed will be deducted from the Retainer Deposit
    of $ 1,000.00. Any amount remaining from the conclusion
    of our services will be refunded to the client.`,
  ],
  [
    contractLogo,
    `Please see sample service agreement above for details on the terms.`,
    "https://drive.google.com/file/d/1XTpEpe0ndEheEzeXIweB6alvlnoBlF7_/view?usp=sharing",
  ],
  [
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    `We are also trained real estate agents. We can guide you in your journey to buy or sell your home`,
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

      <ItemGrid title="Business & Marketing Solutions" list={services} />
      <ItemGrid title="Become a client" list={client} />

      {/* social media */}
      <SocialLink />
    </div>
  );
};

export default Home;
