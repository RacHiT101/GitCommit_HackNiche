import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import DeliveryTimeCard from "./components/DeliveryTimeCard";
import DeliveryDetailsCard from "./components/DeliveryDetailsCard";
import cart1 from "../../assets/cart1.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

const FoodDetails = () => {
  return (
    <>
      <div className="flex justify-between mt-5 items-center">
        {/* <div className="border-2 rounded-full border-black"> */}
        <div className="ml-5">
          <FaArrowLeftLong />
        </div>
        {/* </div> */}
        <h5 class="mb-2 text-xl tracking-tight text-gray-900 text-center">
          Details{" "}
        </h5>
        <div className="mr-5">
          <IoIosHeartEmpty />
        </div>
      </div>
      <div className="bg-[#F0ECE9] rounded-lg mx-5 my-5">
        <img src={cart1} className="ml-16" />
      </div>
      <div>
        <DeliveryDetailsCard />
      </div>
      <div className="">
        <div className="flex justify-between mx-5 mt-5">
          <div>
            <div>Cheese Burgers</div>
            <div>
              $ <span className="text-[#78C4A4]">809</span>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-gray-300 rounded-full">
            <div className="">-</div>
            <div>1</div>
            <div>+</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-5 mt-5 ">
        <div className="text-[#78C4A4]">Add extra Ingredient</div>
        <IoIosArrowDown />
      </div>
      <div className="mt-5 mx-5">
        <div>Description</div>
        <div>
          Our class cheeseburger is made with a fresh, never frozen beef patty{" "}
          that is cooked to{" "}
        </div>
      </div>
      <div className="bg-[#78C4A4] rounded-full flex mt-5 justify-center items-center gap-3 h-[64px]">
        <div>
          <BsCart3 className="" />
        </div>
        <div className="text-white">Add to Cart</div>
      </div>
    </>
  );
};

export default FoodDetails;
