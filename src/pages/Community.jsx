import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import Loading from "../components/Loading";
import InfoToggle from "../components/InfoToggle";

const Community = ({ data }) => {
  const messageBoard = (
    <>
      <CommunityGrid list={data} />
    </>
  );

  const inputForm = (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
      width="100%"
      height="1200"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  );

  return (
    <div className="container text-center">
      <h2 className="text-center">Community</h2>

      <p>
        We encourage the open discussion so that we can learn from each other,
        and share ideas. <br />
        This is a simple forum app with no user log in, and no reply function.
        <br />
        After submitting the form, refresh the page to display the new message
      </p>

      {/* Message Data */}
      <div>
        <InfoToggle section="Message Board" content={messageBoard} />
      </div>

      {/* Google Form */}
      <div>
        <InfoToggle section="Input Form" content={inputForm} />
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
      </div>
    </div>
  );
};

export default Community;
