import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Learn from "./pages/Learn";
import Message from "./pages/Message";
import Merch from "./pages/Merch";
import Community from "./pages/Community";

import Navigation from "./components/Navbar";
import SocialComponent from "./components/Social";

function App() {
  return (
    <>
      <Navigation />

      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="learn" element={<Learn />} />
            <Route path="message" element={<Message />} />
            <Route path="merch" element={<Merch />} />
            <Route path="community" element={<Community />} />
          </Route>
        </Routes>
      </HashRouter>
      {/* social media */}
      <SocialComponent />
    </>
  );
}

export default App;
