const FrameComponent2 = ({ cheeseBurgers, prop }) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between text-left text-5xl text-shade-1 font-label-l2">
      <div className="flex flex-col items-start justify-start gap-[4px]">
        <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit">
          {cheeseBurgers}
        </h3>
        <div className="h-[33px] relative inline-block text-mid text-tint-10">
          <span className="font-medium">$</span>
          <span className="text-5xl font-semibold text-accent">{prop}</span>
        </div>
      </div>
      <div className="rounded-11xl flex flex-row items-center justify-start py-3 pr-[17px] pl-[15px] gap-[37px_26px] text-xl text-black border-[1px] border-solid border-tint-3">
        <img
          className="h-[1.5px] w-3 relative"
          loading="eager"
          alt=""
          src="/line-3.svg"
        />
        <div className="h-[27px] relative inline-block">1</div>
        <div className="h-[27px] relative inline-block">+</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
