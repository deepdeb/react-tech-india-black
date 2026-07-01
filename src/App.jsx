import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductsAndServices from "./pages/ProductsAndServices";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Chatbot from "./components/Chatbot";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white cursor-none">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products-and-services" element={<ProductsAndServices />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        {/* Chatbot - appears on all pages */}
        <Chatbot />
      </div>
    </BrowserRouter>
  )
}

export default App