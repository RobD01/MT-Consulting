import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
// import IframeResizer from "iframe-resizer-react";
// import { resize } from "../utils/iframeResizer.contentWindow.min.js";

const Message = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container text-center">
      <h2 className="text-center">Inquiries / Send a Message</h2>
      <p>
        Please complete form below to send us a message. We will respond to you
        shortly
      </p>
      {isLoading ? <Loading /> : null}
      {/* <IframeResizer
        log
        src="https://docs.google.com/forms/d/e/1FAIpQLSeEbd2lrylydSY5kAFs2mvGYxik__hNIMBBINFJJr7V94h2SQ/viewform?embedded=true"
        style={{ minWidth: "100%" }}
      /> */}

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeEbd2lrylydSY5kAFs2mvGYxik__hNIMBBINFJJr7V94h2SQ/viewform?embedded=true"
        width="100%"
        height="1200"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Message;
