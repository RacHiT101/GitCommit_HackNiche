import FromToFrame from "../components/FromToFrame";
import NameFrame from "../components/NameFrame";

const TrackDeliveryFullModal = () => {
  return (
    <div className="w-full relative rounded-13xl overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-2 box-border gap-[108px] bg-cover bg-no-repeat bg-[top]">
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[5px] gap-[9px]">
        <header className="self-stretch h-[43.3px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
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
        </header>
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-5">
          <div className="h-11 w-11 rounded-3xl bg-white flex flex-row items-center justify-start p-2.5 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/close--24--outline.svg"
            />
          </div>
        </div>
      </section>
      <img
        className="w-[128.5px] h-[265.5px] relative hidden"
        alt=""
        src="/vector-single.svg"
      />
      <div className="w-48 flex flex-row items-start justify-start py-0 px-5 box-border">
        <div className="h-12 w-12 rounded-3xl bg-shade-1 shadow-[8px_8px_16px_rgba(64,_63,_62,_0.24),_-8px_-8px_16px_rgba(64,_63,_62,_0.24)] box-border flex flex-row items-center justify-center z-[1] border-[2px] border-solid border-white">
          <img className="h-6 w-6 relative" alt="" src="/home1.svg" />
        </div>
      </div>
      <div className="w-12 h-12 rounded-3xl bg-accent shadow-[8px_8px_16px_rgba(120,_196,_164,_0.4),_-8px_-8px_16px_rgba(120,_196,_164,_0.4)] box-border hidden flex-row items-center justify-center border-[2px] border-solid border-white">
        <img className="h-6 w-6 relative" alt="" src="/box.svg" />
      </div>
      <div className="w-12 h-12 rounded-3xl bg-primary shadow-[8px_8px_16px_rgba(64,_63,_62,_0.24),_-8px_-8px_16px_rgba(64,_63,_62,_0.24)] box-border hidden flex-row items-center justify-center border-[2px] border-solid border-white">
        <img className="h-6 w-6 relative" alt="" src="/shop.svg" />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-3 relative">
        <img
          className="h-[448px] w-[181.5px] absolute my-0 mx-[!important] top-[-113.5px] right-[67px]"
          alt=""
          src="/vector-pair.svg"
        />
        <div className="flex-1 rounded-3xl bg-shade-2 flex flex-col items-center justify-start pt-1.5 px-1.5 pb-4 gap-[40px] z-[3]">
          <FromToFrame />
          <NameFrame />
        </div>
      </section>
    </div>
  );
};

export default TrackDeliveryFullModal;
