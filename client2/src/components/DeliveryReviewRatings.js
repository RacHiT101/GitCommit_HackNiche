import LineFrames from "./LineFrames";
import FrameComponent2 from "./FrameComponent2";

const DeliveryReviewRatings = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-5 pb-[38px] gap-[32px] text-left text-base text-shade-1 font-label-l2">
      <LineFrames
        mins="10mins"
        prop="2k+"
        prop1="4.8"
        propWidth="unset"
        propAlignSelf="stretch"
        propPadding="unset"
      />
      <FrameComponent2 cheeseBurgers="Blonde Roast" prop="3.65" />
      <div className="self-stretch flex flex-col items-center justify-start relative gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-[15px] gap-[16px]">
          <div className="flex-1 rounded-31xl bg-shade-1 flex flex-col items-center justify-center gap-[6px] min-w-[72px] min-h-[96px] text-tint-1">
            <img
              className="w-6 h-6 relative object-cover"
              alt=""
              src="/papercup-1@2x.png"
            />
            <div className="h-[22px] relative tracking-[0.01em] font-medium inline-block">
              Small
            </div>
          </div>
          <div className="flex-1 rounded-31xl bg-white flex flex-col items-center justify-center gap-[6px] min-w-[72px] min-h-[96px]">
            <img
              className="w-8 h-8 relative object-cover"
              alt=""
              src="/papercup-2-1@2x.png"
            />
            <div className="h-[22px] relative tracking-[0.01em] font-medium inline-block">
              Medium
            </div>
          </div>
          <div className="flex-1 rounded-31xl bg-white flex flex-col items-center justify-center gap-[6px] min-w-[72px] min-h-[96px]">
            <img
              className="w-10 h-10 relative object-cover"
              alt=""
              src="/papercup-2-1-1@2x.png"
            />
            <div className="relative tracking-[0.01em] font-medium">Large</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-accent">
          <div className="relative font-semibold">Add Toppings</div>
          <img className="h-5 w-5 relative" alt="" src="/arrowdown.svg" />
        </div>
        <div className="w-full my-0 mx-[!important] absolute right-[0px] bottom-[-54.7px] left-[0px] rounded-13xl bg-accent flex flex-row items-center justify-center p-5 box-border gap-[6px] z-[2] text-mid text-white">
          <img className="h-6 w-6 relative" alt="" src="/bag2.svg" />
          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
            Add to cart
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryReviewRatings;
