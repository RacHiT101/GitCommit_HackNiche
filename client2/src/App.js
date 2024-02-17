import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
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
import Explore2 from "./components/Explore2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

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
      <Route path="/cart-or-basket" element={<CartOrBasket />} />
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
      <Route path="/fries" element={<FriesComponent />} />

    </Routes>
  );
}
export default App;
