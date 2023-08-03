import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";

import { LearnBlog } from "../services/Learn";

const Learn = () => {
  return (
    <div className="container text-center">
      <h2 className="text-center">Learn</h2>
      <p>
        Learning is a lifelong journey. It never stops, even after school. These
        resources include the blog section below, and our patreon and Youtube at
        the bottom.
      </p>
    </div>
  );
};

export default Learn;
