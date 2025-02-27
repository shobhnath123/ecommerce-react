import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRoutes from "./assets/Routes/Routes";

function App() {
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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <AppRoutes /> {/* ✅ Loads routes properly */}
    </div>
  );
}

export default App;

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import AppRoutes from "./assets/Routes/Routes";
// // import Banner from "./assets/Components/Banner/Banner";
// // import Navbar from "./assets/Components/Navbar/Navbar";
// // import Hero from "./assets/Components/Hero/Hero";
// // import Products from "./assets/Components/Products/Products";
// // import TopProducts from "./assets/Components/TopProducts/TopProduct";
// // import Subscribe from "./assets/Components/Subscribe/Subscribe";
// // import Testimonials from "./assets/Components/Testomonials/Testimonials";
// // import Footer from "./assets/Components/Footer/Footer";
// function App() {
//   const [orderPopup, setOrderPopup] = useState(false);
//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 1000,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
//       <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//         {/* <Navbar handleOrderPopup={handleOrderPopup} />
//         <Hero handleOrderPopup={handleOrderPopup} />
//         <Products handleOrderPopup={handleOrderPopup} />
//         <TopProducts handleOrderPopup={handleOrderPopup} />
//         <Banner />
//         <Subscribe />
//         <Testimonials />
//         <Footer /> */}
//         <AppRoutes />
//       </div>
//     </>
//   );
// }

// export default App;
