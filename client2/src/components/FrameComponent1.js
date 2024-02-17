import FrameComponent2 from "./FrameComponent2";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[16px] text-left text-5xl text-shade-1 font-label-l2">
      <FrameComponent2 cheeseBurgers="Cheese burgers" prop="8.09" />
      <div className="self-stretch flex flex-row items-center justify-between text-base text-accent">
        <div className="relative font-semibold">Add extra Ingredient</div>
        <img
          className="h-[18px] w-[18px] relative"
          alt=""
          src="/arrowdown.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
