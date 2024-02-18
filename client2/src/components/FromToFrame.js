import axios from "axios";
import { useEffect, useState } from "react";

const FromToFrame = ({step}) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          "https://backend-truck.onrender.com/order"
        ); // Replace with the actual GET order API endpoint
        setOrder(response.data);
      } catch (error) {
        console.error(error);
      }
    };
console.log(step)
    fetchOrder();
  }, []);
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-[24px] text-left text-base text-tint-4 font-label-l2">
      <div className="w-[203px] flex flex-col items-end justify-start gap-[6px] text-sm text-white">
        <div className="w-20 h-1 relative rounded-81xl bg-gray" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[130px] rounded-6xl bg-accent flex flex-row items-center justify-center p-0.5 box-border">
            {order && order.length > 0 && (
              <span className="font-medium text-shade-4">
                Order ID: {order[order?.length - 1].orderId}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-between">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative tracking-[0.01em]">Remaining time</div>
          <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-2 inline-block">
            2mins
          </div>
        </div>
        <div className="self-stretch  relative box-border border-r-[1px] border-solid border-gray" />
        <div className="ml-[10px] flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="h-[22px] relative tracking-[0.01em] inline-block">
            Estimated time
          </div>
          <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-2 inline-block">
            15mins
          </div>
        </div>
      </div>
      <div className=" box-border border-t-[1px] border-solid border-shade-1" />
      <div className=" flex flex-col items-start justify-start py-0 pr-1.5 pl-0 relative gap-[4px]">
        <div className="w-[200px] items-start flex flex-row justify-between">
          <div className="h-[22px] ">From</div>
          <div className="h-[22px]  ">To</div>
        </div>
        <div className=" flex flex-row items-start justify-between text-tint-1">
          <div className="relative tracking-[0.01em] font-semibold">
            {step[0]?.name}
          </div>
          <img className="w-10 h-10" loading="eager" alt="" src="/line-7.svg" />
          <div className="pl-6 relative tracking-[0.01em] font-semibold">
            {step[step?.length - 1]?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromToFrame;
