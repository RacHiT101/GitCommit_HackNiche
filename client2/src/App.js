import { useEffect, useState } from "react";
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
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [translatedText, setTranslatedText] = useState("");

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

  // useEffect(() => {
  //   alanBtn({
  //     key: 'YOUR_KEY_FROM_ALAN_STUDIO_HERE',
  //     onCommand: (commandData) => {
  //       console.info(commandData.data);
  //     }
  //   });
  // }, []);

  // const GoogleTranslate = async () => {
  //   const encodedParams = new URLSearchParams();
  //   encodedParams.set("from", "auto");
  //   encodedParams.set("to", "hi");
  //   encodedParams.set("text", "hello");

  //   const options = {
  //     method: "POST",
  //     url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "X-RapidAPI-Key": "85a8296f9dmsh17ba95c1ee02951p12b8e0jsn65bf0df8edba",
  //       "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
  //     },
  //     data: encodedParams,
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // GoogleTranslate();
  }, []);

  return (
    <>
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
        {/* <Route path="/fries" element={<FriesComponent />} /> */}
      </Routes>
    </>
  );
}
export default App;
