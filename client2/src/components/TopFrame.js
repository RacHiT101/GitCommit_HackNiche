const TopFrame = () => {
  return (
    <header className="self-stretch flex flex-col items-center justify-start gap-[25px]">
      <div className="self-stretch h-[43.3px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
        <div className="flex flex-col items-center justify-start">
          <img
            className="w-[28.4px] h-[11.1px] relative"
            loading="eager"
            alt=""
            src="/9411.svg"
          />
        </div>
        <img
          className="h-[30px] w-[219px] relative object-cover hidden"
          alt=""
          src="/notch@2x.png"
        />
        <div className="h-[11px] flex flex-row items-end justify-start gap-[5px]">
          <img
            className="h-[10.7px] w-[17px] relative"
            loading="eager"
            alt=""
            src="/mobile-signal1.svg"
          />
          <img
            className="h-[11px] w-[15.3px] relative min-h-[11px]"
            loading="eager"
            alt=""
            src="/wifi1.svg"
          />
          <img
            className="h-[11.3px] w-[24.3px] relative"
            loading="eager"
            alt=""
            src="/battery.svg"
          />
        </div>
        <img
          className="h-1.5 w-1.5 relative hidden"
          alt=""
          src="/recording-indicator.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 gap-[12px]">
        <div className="h-[3px] flex-1 relative rounded-2xl bg-tint-1" />
        <div className="h-[3px] flex-1 relative rounded-2xl bg-tint-1" />
        <div className="h-[3px] flex-1 relative rounded-2xl bg-mediumaquamarine">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumaquamarine w-[106px] h-[3px] hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-tint-1 w-[53px] h-[3px] z-[1]" />
        </div>
      </div>
    </header>
  );
};

export default TopFrame;
