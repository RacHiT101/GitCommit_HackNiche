import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductPageFood from "./pages/ProductPageFood";
import Explore from "./pages/Explore";
import ProductPageDrink from "./pages/ProductPageDrink";
import CartOrBasket from "./pages/CartOrBasket";
import TrackDelivery from "./pages/TrackDelivery";
import TrackDeliveryFullModal from "./pages/TrackDeliveryFullModal";
import Onboarding from "./pages/Onboarding";
import DeliverySuccess from "./pages/DeliverySuccess";
import OrderDelivered from "./pages/OrderDelivered";
import MapBoxx from "./components/maps/MapBoxx";
import Payment from "./pages/Payment";
import alanBtn from "@alan-ai/alan-sdk-web";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);
  
  useEffect(() => {
    // Initialize Alan AI with your project key
    const alan = alanBtn({
      key: "655f88c1605de19ff1e46d6c5e9493b02e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "navigation") {
          console.log(commandData.route);
          // Use your router's API to navigate to the route
          navigate(commandData.route);
        }
      },
    });

    // Clean up the Alan SDK when the component unmounts
    return () => {
      alan.deactivate();
    };
  }, []);
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-page-food":
        title = "";
        metaDescription = "";
        break;
      case "/product-page-drink":
        title = "";
        metaDescription = "";
        break;
      case "/cart-or-basket":
        title = "";
        metaDescription = "";
        break;
      case "/track-delivery":
        title = "";
        metaDescription = "";
        break;
      case "/track-delivery-full-modal":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding":
        title = "";
        metaDescription = "";
        break;
      case "/delivery-success":
        title = "";
        metaDescription = "";
        break;
      case "/order-delivered":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/fries":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product-page-food" element={<ProductPageFood />} />
      <Route path="/product-page-drink" element={<ProductPageDrink />} />
      <Route path="/cart" element={<CartOrBasket />} />
      <Route path="/track-delivery" element={<TrackDelivery />} />
      <Route path="/items/:categoryy" element={<Explore />} />

      <Route
        path="/track-delivery-full-modal"
        element={<TrackDeliveryFullModal />}
      />
      <Route path="/" element={<Onboarding />} />
      <Route path="/delivery-success" element={<DeliverySuccess />} />
      <Route path="/order-delivered" element={<OrderDelivered />} />
      <Route path="/map" element={<MapBoxx />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/pay" element={<Payment />} />
      {/* <Route path="/fries" element={<FriesComponent />} /> */}
    </Routes>
  );
}
export default App;
