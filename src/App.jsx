import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Announcement from "./pages/Announcement";
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
            <Route path="announcement" element={<Announcement />} />
          </Route>
        </Routes>
      </HashRouter>
      {/* social media */}
      <SocialComponent />
    </>
  );
}

export default App;
