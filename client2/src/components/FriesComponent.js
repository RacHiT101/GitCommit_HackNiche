import Spline from "@splinetool/react-spline";
import fries from "../assets/fries.svg"
import { Link } from "react-router-dom";
export default function FriesComponent() {
  return (
    <div className="w-full h-full">
    {/* <Link to="/explore"> */}
    <Link to={{pathname:"/explore", state: {fromDashboard: true }}}>
      <img className="w-full h-full" src={fries} alt="Fries" />
    </Link>
  </div>
  );
}
