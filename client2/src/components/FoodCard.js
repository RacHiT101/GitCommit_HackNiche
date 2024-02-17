import axios from "axios";
import { useState } from "react";

const FoodCard = ({ product, cartId }) => {
  const [quantity, setQuantity] = useState(product?.quantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <section className="p-6 rounded-2xl bg-white flex flex-row items-start justify-start p-4 gap-[16px] text-left text-xl text-shade-1 font-label-l2">
      <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0">
        <img
          className="absolute w-[calc(100%_-_12.5px)] top-[calc(50%_-_45px)] right-[6.5px] left-[6px] max-w-full overflow-hidden h-[90px] object-cover"
          loading="eager"
          alt={product?.title}
          src={product?.image}
        />
      </div>
      <div className="flex flex-col items-end justify-start gap-[23px]">
        <div className="flex flex-row items-start justify-start py-0 pr-10 pl-0">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium">{product?.title}</div>
            <div className="h-[27px] relative font-medium inline-block text-mid text-tint-10">
              <span>Rs</span>
              <span className="text-xl text-shade-1">{product?.price}</span>
            </div>
          </div>
        </div>
        <div className="rounded-11xl flex flex-row items-center justify-start py-3 pr-[17px] pl-[15px] gap-[37px_26px] text-black border-[1px] border-solid border-tint-3">
          <button onClick={decrementQuantity}>-</button>
          <div className="h-[27px] relative inline-block">{quantity}</div>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
