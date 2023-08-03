import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import Loading from "../components/Loading";

const Community = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

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

  return (
    <div className="container text-center">
      <h2 className="text-center">Community</h2>

      {isLoading ? <Loading /> : null}

      {/* Message Data */}
      <CommunityGrid list={data} />

      {/* Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
        width="700"
        height="520"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Community;
