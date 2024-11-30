import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Home, Sponsor } from "./_root/pages";
import RootLayout from "./_root/pages/RootLayout";
import Product from "./_root/pages/Product";
import Resume from "./_root/pages/Resume";
import Appointment from "./_root/pages/Appointment";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="resume" element={<Resume />} />
      </Routes>
    </main>
  );
};

export default App;
