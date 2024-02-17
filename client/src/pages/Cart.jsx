import React, { useState } from "react";
import cart1 from "../assets/cart1.png";
import { GiftIcon } from "@heroicons/react/outline";
const Cart = () => {
  const [promoCode, setPromoCode] = useState("Enter promo code");

  const handleChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with promoCode
    alert(`You entered ${promoCode}`);
  };
  return (
    <div className="flex flex-col">
      <div class="flex px-8 items-center justify-between mx-4  bg-white border rounded-lg shadow">
        <img
          class="object-cover h-24 rounded-t-lg md:rounded-none md:rounded-s-lg "
          src={cart1}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl tracking-tight text-gray-900 ">Burger </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$120</p>
        </div>
      </div>
      <div class="flex px-8 items-center justify-between m-4  bg-white border rounded-lg shadow">
        <img
          class="object-cover h-24 rounded-t-lg md:rounded-none md:rounded-s-lg "
          src={cart1}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl tracking-tight text-gray-900 ">Burger </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$120</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className=" border p-1 mx-4 flex items-center">
        <label htmlFor="promoCode" className="relative text-gray-400">
          <GiftIcon className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
          <input
            id="promoCode"
            name="promoCode"
            type="text"
            value={promoCode}
            onChange={handleChange}
            className="form-input text-sm w-full pl-12 pr-4"
          />
        </label>
        <button
          type="submit"
          className="bg-[#78C4A4] text-white px-3 py-2 rounded-md ml-4"
        >
          Apply
        </button>
      </form>
      <div>
        <p>Subtotal</p>
        <p>$15.39</p>
      </div>
    </div>
  );
};

export default Cart;
