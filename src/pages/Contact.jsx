import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import SocialLink from "../components/SocialLink";

const Contact = () => {
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

  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Contact Us</h2>

      {/* social media */}
      <SocialLink />

      {/* Contact Form */}
      <div className="mt-5">
        <h5>
          To book a consultation or for any questions, please complete form
          below.
        </h5>
        <h5>
          We don't believe in spam or solicitations, so we do not use any
          automatic email list.
        </h5>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeEbd2lrylydSY5kAFs2mvGYxik__hNIMBBINFJJr7V94h2SQ/viewform?embedded=true"
          width="100%"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
