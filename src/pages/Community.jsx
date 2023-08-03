import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import Loading from "../components/Loading";
import InfoToggle from "../components/InfoToggle";

const Community = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [showMessage, setShowMessage] = useState([]);
  // const [showForm, setShowForm] = useState([]);

  // Loading icon while getting data
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://opensheet.elk.sh/1F-6Ohqy8r7ih6mNocNBB4ksx1iobdqPpwdc3pJZo5dk/Sorted"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  const messageBoard = (
    <>
      {isLoading ? <Loading /> : null} <CommunityGrid list={data} />;
    </>
  );

  const inputForm = (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
      width="800"
      height="1100"
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
