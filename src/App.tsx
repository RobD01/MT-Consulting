import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Home, PostDetails, Sponsor } from "./_root/pages";
import RootLayout from "./_root/pages/RootLayout";
import { Toaster } from "./components/ui/toaster";
import Product from "./_root/pages/Product";
import Resume from "./_root/pages/Resume";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="sponsor" element={<Sponsor />} />

          <Route path="/posts/:id" element={<PostDetails />} />
        </Route>
        <Route path="resume" element={<Resume />} />
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
