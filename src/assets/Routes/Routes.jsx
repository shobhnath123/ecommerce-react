import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUs/Aboutus";
import ContactUs from "../Components/Contactus/Contactus";
import Products from "../Components/Products/Products";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import PricingSection from "../Components/ITRFiling/PricingSection";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/itr"
          element={<PricingSection handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/about"
          element={<AboutUs handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/contact"
          element={<ContactUs handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/products"
          element={<Products handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/blogs"
          element={<Blogs handleOrderPopup={handleOrderPopup} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
