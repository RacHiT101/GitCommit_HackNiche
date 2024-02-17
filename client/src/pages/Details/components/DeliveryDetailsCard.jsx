import React from "react";
import { CiClock2 } from "react-icons/ci";
import { VscPreview } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";

const DeliveryDetailsCard = () => {
  return (
    <>
      <div className="bg-[#F0ECE9] rounded-lg mx-5 flex gap-5 justify-between">
        <div>
          <div className="flex items-center">
            <CiClock2 />
            <div> 15 mins</div>
          </div>
          <div className="text-[#8A837D]">Delivery</div>
        </div>
        <div>
          <div className="flex items-center">
            <VscPreview />
            <div> 32+</div>
          </div>
          <div className="text-[#8A837D]">Review</div>
        </div>
        <div>
          <div className="flex items-center">
            <CiStar />
            <div> 4.2</div>
          </div>
          <div>Ratings</div>
        </div>
      </div>
    </>
  );
};

export default DeliveryDetailsCard;
