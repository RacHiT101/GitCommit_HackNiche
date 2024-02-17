import Cart from "./pages/Cart";
import FoodDetails from "./pages/Details/FoodDetails";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/foodetails" element={<FoodDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
