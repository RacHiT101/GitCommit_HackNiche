const NameFrame = () => {
  return (
    <div className="self-stretch rounded-xl bg-shade-1 flex flex-col items-start justify-start py-4 pr-[27px] pl-4 gap-[12px] text-left text-xl text-tint-4 font-label-l2">
      <div className="h-[27px] relative font-medium inline-block">
        Driver details
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-tint-1">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-14 w-14 relative object-cover"
            loading="eager"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="h-[22px] relative tracking-[0.01em] font-semibold inline-block">
              Marcus Santorini
            </div>
            <div className="relative text-sm tracking-[0.01em] text-tint-4">
              ID: 101D12345
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-mid">
          <div className="rounded-3xl bg-accent flex flex-row items-center justify-center p-3 gap-[4px]">
            <img className="h-6 w-6 relative" alt="" src="/call.svg" />
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              Call driver
            </div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-3 px-3.5 gap-[8px] text-tint-2">
            <img className="h-6 w-6 relative" alt="" src="/messagetext.svg" />
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameFrame;
