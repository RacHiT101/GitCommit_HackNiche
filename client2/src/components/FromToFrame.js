const FromToFrame = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-[24px] text-left text-base text-tint-4 font-label-l2">
      <div className="w-[203px] flex flex-col items-end justify-start gap-[6px] text-sm text-white">
        <div className="w-20 h-1 relative rounded-81xl bg-gray" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[84px] rounded-6xl bg-accent flex flex-row items-center justify-center p-0.5 box-border">
            <div className="relative tracking-[0.01em] font-semibold">
              #33-A45E
            </div>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[57px] flex flex-row items-start justify-between">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative tracking-[0.01em]">Remaining time</div>
          <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-2 inline-block">
            2mins
          </div>
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gray" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="h-[22px] relative tracking-[0.01em] inline-block">
            Estimated time
          </div>
          <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-2 inline-block">
            15mins
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-shade-1" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0 relative gap-[4px]">
        <img
          className="w-[30px] h-[5.8px] absolute my-0 mx-[!important] top-[calc(50%_-_0px)] left-[calc(50%_-_15px)]"
          loading="eager"
          alt=""
          src="/line-7.svg"
        />
        <div className="w-[212px] flex flex-row items-start justify-between">
          <div className="h-[22px] relative inline-block">From</div>
          <div className="h-[22px] relative inline-block">To</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between text-tint-1">
          <div className="relative tracking-[0.01em] font-semibold">
            Oba Akinjoba str.
          </div>
          <div className="relative tracking-[0.01em] font-semibold">
            A152, Conoil Rd.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromToFrame;
