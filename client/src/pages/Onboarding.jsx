import React from "react";
import { Link } from "react-router-dom";
import onboarding from "../assets/onboarding.png"
const Onboarding = () => {
  return (
    <div className="text-white bg-[#78C4A4]">
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <img src={onboarding} className="ml-16"/>
        <p className="font-bold text-2xl text-center mx-auto px-7">
          The best food, delivered right to your home.
        </p>
        <Link to='/home'>
            <p className="bg-black text-white font-light mx-auto px-8 py-3 mt-8 rounded-xl ">Start Ordering</p>
        </Link>
        <p className=" font-light mx-auto mt-2">Login</p>
      </div>
    </div>
  );
};

export default Onboarding;