import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRoutes from "./assets/Routes/Routes";
import { CartProvider } from "./assets/Components/Cart/CartContext"; // Import CartProvider

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
    <CartProvider>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <AppRoutes />
      </div>
    </CartProvider>
  );
}

export default App;
