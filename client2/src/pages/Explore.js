import React from "react";
import { data } from "../Data";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Explore = () => {
  const [foods, setfoods] = useState(data);

  const location = useLocation();

  // Extract the foods state from the location object
  const { filter } = location.state || {};
  console.log(filter);

  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category == category;
      })
    );
  };

  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price == price;
      })
    );
  };
  return (
    <>
      <header className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-2 text-left text-xl text-shade-4 font-label-l2 mt-5">
        <div className="flex-1 flex flex-row items-center justify-between">
          <Link
            to="/home"
            className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3"
          >
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/arrowleft.svg"
            />
          </Link>
          <div className="h-[27px] relative font-medium inline-block">
            Explore
          </div>
          <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
      </header>
      <div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-tint-9">
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px] text-shade-4">
            <div className="w-14 h-14 relative rounded-37xl bg-white overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-white hidden" />
              <img
                className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_22px)] w-[43.2px] h-[46.3px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-28@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              All
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden " />
              <img
                className="absolute bottom-[-5.1px] left-[calc(50%_-_36px)] w-[71.8px] h-[61.1px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-24@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Pizza
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[11.4px] left-[5px] w-[43px] h-9 object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-25@2x.png"
              />
            </div>
            <div className="relative font-medium">Burger</div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_19px)] w-[38.1px] h-[50.4px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-35@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Drinks
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[calc(50%_-_29.9px)] left-[calc(50%_-_29px)] w-[57px] h-[61.1px] object-cover z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-38@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Fruits
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mx-5">
          <div>
            <p className="font-bold text-slate-600 ">Filter Type</p>
            <div className="flex justify-between flex-wrap ">
              <button
                onClick={() => setfoods(data)}
                className="border-2 py-1 font-bold px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white "
              >
                All
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="border-2 py-1 font-bold px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white "
              >
                VEG
              </button>
              <button
                onClick={() => filterType("fries")}
                className="border-2 py-1 font-bold px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white "
              >
                NON-VEG
              </button>
              <button
                onClick={() => filterType("pasta")}
                className="border-2 py-1 font-bold px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white "
              >
                JAIN
              </button>
            </div>
          </div>
          <div>
            <p className="font-bold text-slate-600">Filter Price</p>
            <div className="flex justify-between max-w-[390px] w-full ">
              <button
                onClick={() => setfoods(data)}
                className="border-2 px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white m-1"
              >
                All
              </button>
              <button
                onClick={() => filterPrice("under 100")}
                className="border-2 px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white m-1"
              >
                Under 100
              </button>
              <button
                onClick={() => filterPrice("under 150")}
                className="border-2 px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white m-1"
              >
                Under 150
              </button>
              <button
                onClick={() => filterPrice("under 200")}
                className="border-2 px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white m-1"
              >
                Under 200
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-5">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 rounded-lg"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-3">
              <p className="font-bold font-sans text-xl">{item.name}</p>
              <p>
                <span className="bg-orange-500 p-1 text-white rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore;
