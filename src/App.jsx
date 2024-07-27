import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Message from "./pages/Message";
import Merch from "./pages/Merch";
import Community from "./pages/Community";

import Navigation from "./components/Navbar";
import SocialComponent from "./components/Social";
import CommunityPost from "./components/CommunityPost";
import Sponsor from "./pages/Sponsor";

function App() {
  const [data, setData] = useState([]);

  // Loading icon while getting data
  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/11dks1tQTP8nZKmoPQOG7T10N0UvrP9ndnXpwJbvaiA4/Sorted"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Navigation />

      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="sponsor" element={<Sponsor />} />
            <Route path="message" element={<Message />} />
            <Route path="merch" element={<Merch />} />
            <Route path="community" element={<Community data={data} />} />
            <Route
              path="community/:id/"
              element={<CommunityPost data={data} />}
            />
          </Route>
        </Routes>
      </HashRouter>
      {/* social media */}
      <SocialComponent />
    </>
  );
}

export default App;
