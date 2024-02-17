import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;