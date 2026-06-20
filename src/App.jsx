import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from './Pages/About/About'
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import OrganicVeg from "./Pages/Products/OrganicVeg";
import A2Milk from "./Pages/Products/A2Milk";
import Nursery from "./Pages/Products/Nursery";
import Vermicompost from "./Pages/Products/Vermicompost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/organic-vegetables" element={<OrganicVeg />} />
        <Route path="/A2Milk" element={<A2Milk />} />
        <Route path="/nursery" element={<Nursery />} />
        <Route path="/vermicompost" element={<Vermicompost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;