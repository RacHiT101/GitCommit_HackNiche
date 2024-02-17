import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import PizzaComponent from "./PizzaComponent";
import BurgerComponent from "./BurgerComponent";
import CoffeeComponent from "./CoffeeComponent";
import FriesComponent from "./FriesComponent";
import fries from "../assets/fries.svg";
import { useState } from "react";

const TabBarFrame = () => {
  const [filter, setfilter] = useState("");
  const handleClick = (food) => {
    setfilter(food);
    
  };
  console.log(filter);
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-0 text-left text-xl text-shade-1 font-label-l2">
      <div className="w-[672px] flex flex-col items-start justify-start gap-[3px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <Link to={{ pathname: "/fries", state: { filter } }}>
              <img
                className="w-full h-full"
                src={fries}
                alt="Fries"
              />
            </Link>
            <Link to={{ pathname: "/explore", state: { fromDashboard: true } }}>
              <img className="w-full h-full" src={fries} alt="Fries" />
            </Link>
            <Link to={{ pathname: "/explore", state: { fromDashboard: true } }}>
              <img className="w-full h-full" src={fries} alt="Fries" />
            </Link>
          </div>
        </div>
        <div className="bottom-2 fixed w-[390px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <div className="flex-1 rounded-21xl bg-shade-4 flex flex-row items-start justify-between py-[22px] px-8">
            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/home.svg"
            />
            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/heart-2.svg"
            />
            <Link to="/cart-or-basket">
              <img
                className="h-7 w-7 relative min-h-[28px]"
                loading="eager"
                alt=""
                src="/bag2-2.svg"
              />
            </Link>
            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/profilecircle.svg"
            />
          </div>
        </div>
        {/* <footer className="w-[410px] h-[34px] relative">
          <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_70px)] rounded-81xl bg-shade-4 w-[120px] h-1" />
        </footer> */}
      </div>
    </section>
  );
};

export default TabBarFrame;
{
  /* <div className="flex-1 rounded-2xl bg-white flex flex-row items-start justify-start py-4 pr-4 pl-2 box-border gap-[16px] min-w-[207px]">
              <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0">
                <img
                  className="absolute w-[calc(100%_-_12.5px)] top-[calc(50%_-_45px)] right-[6.5px] left-[6px] max-w-full overflow-hidden h-[90px] object-contain"
                  loading="eager"
                  alt=""
                  src="/rectangle-25-1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative font-medium pr-3">
                    Cheese burgers
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between text-mid text-tint-10">
                    <div className="h-[27px] relative font-medium inline-block">
                      <span>$</span>
                      <span className="text-xl text-shade-1">8.09</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-base text-tint-7">
                      <img
                        className="h-3 w-[12.7px] relative"
                        loading="eager"
                        alt=""
                        src="/union.svg"
                      />
                      <div className="h-[22px] relative font-medium inline-block">
                        4.2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-end gap-[12px]">
                  <div className="h-12 w-12 rounded-3xl box-border flex flex-row items-end justify-end py-3 pr-[11px] pl-[13px] border-[1px] border-solid border-tint-3">
                    <img className="h-6 w-6 relative" alt="" src="/heart.svg" />
                  </div>
                  <div className="h-12 w-12 rounded-3xl bg-accent flex flex-row items-center justify-center p-3 box-border">
                    <img className="h-6 w-6 relative" alt="" src="/bag2.svg" />
                  </div>
                </div>
              </div>
            </div> */
}
