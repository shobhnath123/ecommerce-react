import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUs/Aboutus";
import ContactUs from "../Components/Contactus/Contactus";
import Products from "../Components/Products/Products";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Hero/Hero"; // Assuming Hero is your homepage

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
