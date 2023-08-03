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

      <CommunityGrid list={data} />
      <iframe
        src="https://forms.gle/kapWtWwZFbLXNTC79"
        frameborder="0"
        width="100%"
        height="1100px"
      ></iframe>
    </div>
  );
};

export default Community;
