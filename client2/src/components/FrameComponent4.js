const FrameComponent4 = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start gap-[113px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
        {/* <div className="self-stretch h-[43.3px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
          <div className="flex flex-col items-center justify-start">
            <img
              className="w-[28.4px] h-[11.1px] relative"
              alt=""
              src="/941.svg"
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
              alt=""
              src="/mobile-signal.svg"
            />
            <img
              className="h-[11px] w-[15.3px] relative min-h-[11px]"
              alt=""
              src="/wifi.svg"
            />
            <img
              className="h-[11.3px] w-[24.3px] relative"
              alt=""
              src="/battery.svg"
            />
          </div>
          <img
            className="h-1.5 w-1.5 relative hidden"
            alt=""
            src="/recording-indicator.svg"
          />
        </div> */}
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-5">
          <div className="h-11 w-11 rounded-3xl bg-white flex flex-row items-center justify-start p-2.5 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/close--24--outline.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-48 flex flex-row items-start justify-start py-0 px-5 box-border">
        <div className="h-12 w-12 rounded-3xl bg-shade-1 shadow-[8px_8px_16px_rgba(64,_63,_62,_0.24),_-8px_-8px_16px_rgba(64,_63,_62,_0.24)] box-border flex flex-row items-center justify-center z-[1] border-[2px] border-solid border-white">
          <img
            className="h-6 w-6 relative"
            loading="eager"
            alt=""
            src="/home1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
