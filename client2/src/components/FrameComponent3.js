const FrameComponent3 = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start py-0 px-3 gap-[14px]">
      <div className="flex flex-row items-start justify-start py-0 px-6">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[448px] w-[182px] my-0 mx-[!important] absolute top-[-394px] left-[-164px] flex flex-col items-start justify-start py-[177px] px-[33px] box-border">
            <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-[calc(100%_-_0.5px)] top-[-0.5px] right-[1px] bottom-[0.5px] left-[-0.5px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-pair.svg"
              />
              <img
                className="absolute top-[182px] left-[52.5px] w-[128.5px] h-[265.5px] z-[1]"
                alt=""
                src="/vector-single.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-3xl bg-accent shadow-[8px_8px_16px_rgba(120,_196,_164,_0.4),_-8px_-8px_16px_rgba(120,_196,_164,_0.4)] box-border flex flex-row items-center justify-center z-[2] border-[2px] border-solid border-white">
              <img className="h-6 w-6 relative" alt="" src="/box.svg" />
            </div>
          </div>
          <div className="h-12 w-12 rounded-3xl bg-primary shadow-[8px_8px_16px_rgba(64,_63,_62,_0.24),_-8px_-8px_16px_rgba(64,_63,_62,_0.24)] box-border flex flex-row items-center justify-center z-[2] border-[2px] border-solid border-white">
            <img className="h-6 w-6 relative" alt="" src="/shop.svg" />
          </div>
        </div>
      </div>
      <footer className="self-stretch rounded-3xl bg-shade-2 flex flex-row flex-wrap items-end justify-start pt-1.5 pb-4 pr-[59px] pl-5 gap-[9px] text-left text-sm text-white font-label-l2">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[84px] rounded-6xl bg-accent flex flex-row items-center justify-center p-0.5 box-border">
            <div className="relative tracking-[0.01em] font-semibold">
              #33-A45E
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-base">
            <div className="relative tracking-[0.01em]">Remaining time</div>
            <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-1 inline-block">
              2mins
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[45px] min-w-[107px] text-base">
          <div className="w-20 h-1 relative rounded-81xl bg-gray" />
          <div className="self-stretch h-[57px] flex flex-row items-start justify-start py-0 pr-0 pl-[23px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-start justify-between">
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gray" />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="h-[22px] relative tracking-[0.01em] inline-block">
                  Estimated time
                </div>
                <div className="h-[33px] relative text-5xl tracking-[0.01em] font-semibold text-tint-1 inline-block">
                  15mins
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent3;
