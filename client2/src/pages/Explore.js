import React from "react";
import { data } from "../Data";
import { useState } from "react";
import { Link } from "react-router-dom";
const Explore = () => {
  const [foods, setfoods] = useState(data);

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
        <h1 className="text-accent text-xl font-bold text-center">
          TOP RATED MENU
        </h1>
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
              {/* <button
                onClick={() => filterType("sandwich")}
                className="border-2 px-4 rounded-2xl border-accent text-accent hover:bg-accent hover:text-white "
              >
                Sandwiches
              </button> */}
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
