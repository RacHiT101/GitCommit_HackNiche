const WifiIcon = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-2 text-left text-xl text-shade-1 font-label-l2">
      <div className="flex-1 rounded-2xl bg-white flex flex-row items-start justify-start py-4 pr-[13px] pl-4 gap-[16px]">
        <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0 min-w-[120px]">
          <img
            className="absolute w-[calc(100%_-_24.8px)] top-[calc(50%_-_63px)] right-[12.8px] left-[12px] max-w-full overflow-hidden h-[126px] object-cover"
            loading="eager"
            alt=""
            src="/rectangle-352@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start relative gap-[28px] min-w-[120px] min-h-[136px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="h-[27px] relative font-medium inline-block">
              Blonde Roast
            </div>
            <div className="self-stretch flex flex-row items-baseline justify-between text-mid text-tint-10">
              <div className="h-[27px] relative font-medium inline-block">
                <span>₹</span>
                <span className="text-xl text-shade-1">{`7.30 `}</span>
              </div>
              <div className="relative text-sm font-medium">₹3.65 per unit</div>
            </div>
          </div>
          <div className="w-[120px] my-0 mx-[!important] absolute top-[85px] right-[3px] rounded-11xl box-border flex flex-row items-center justify-between py-3 px-4 text-black border-[1px] border-solid border-tint-3">
            <img
              className="h-[1.5px] w-3 relative"
              loading="eager"
              alt=""
              src="/line-3.svg"
            />
            <div className="h-[27px] relative inline-block">2</div>
            <div className="h-[27px] relative inline-block">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WifiIcon;
