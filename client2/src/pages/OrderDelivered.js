import ParentFrame1 from "../components/ParentFrame1";

const OrderDelivered = () => {
  return (
    <div className="w-full relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[99px]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[9px]">
        {/* <header className="self-stretch h-[43.3px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
          <div className="flex flex-col items-center justify-start">
            <img
              className="w-[28.4px] h-[11.1px] relative"
              loading="eager"
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
              loading="eager"
              alt=""
              src="/mobile-signal.svg"
            />
            <img
              className="h-[11px] w-[15.3px] relative min-h-[11px]"
              loading="eager"
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
        </header> */}
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-5">
          <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/close--24--outline.svg"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-[61px]">
        <ParentFrame1 />
      </section>
      <footer className="self-stretch h-[34px] relative">
        <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-81xl bg-shade-4 w-[120px] h-1" />
      </footer>
    </div>
  );
};

export default OrderDelivered;
