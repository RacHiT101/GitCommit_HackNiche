import { Link } from "react-router-dom";
import TabBarFrame from "../components/TabBarFrame";

const Home = () => {
  return (
    <div className="w-full relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-start justify-start gap-[16px]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0 text-left text-base text-shade-4 font-label-l2">
        <div className="w-[740px] flex flex-col items-start justify-start gap-[9px]">
          {/* <header className="w-[390px] h-[43.3px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
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
          <div className="self-stretch flex flex-row items-start justify-start pt-8 py-0 pr-0 pl-5">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start gap-[24px] ">
                <div className="self-stretch flex flex-row items-center justify-between py-0 pr-2.5 pl-0 text-tint-8">
                  <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
                    <img
                      className="h-6 w-6 relative"
                      loading="eager"
                      alt=""
                      src="/element3.svg"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[4px]">
                    <div className="flex flex-row items-start justify-center gap-[4px]">
                      <img
                        className="h-5 w-5 relative"
                        loading="eager"
                        alt=""
                        src="/locationtick.svg"
                      />
                      <div className="h-[22px] relative font-semibold inline-block">
                        DJSCE
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-0 px-2 gap-[4px] text-shade-4">
                      <div className="relative tracking-[0.01em]">
                       Juhu, Vile Parle
                      </div>
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/arrowdown.svg"
                      />
                    </div>
                  </div>
                  <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
                    <img
                      className="h-6 w-6 relative"
                      loading="eager"
                      alt=""
                      src="/notification.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[184px] flex flex-row items-start justify-start pt-0 pb-2 pr-2.5 pl-0 box-border text-5xl">
                  <div className="self-stretch flex-1 rounded-2xl bg-primary overflow-hidden flex flex-col items-start justify-start p-4 relative gap-[24px]">
                    <div className=" flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit">
                        Get up to 60%
                      </h3>
                      <div className="self-stretch flex-1 relative text-base font-medium">
                        off your next order now with our mobile app
                      </div>
                    </div>
                    <div className="rounded-3xl bg-accent flex flex-row items-center justify-center py-3 pr-2.5 pl-3.5 text-mid text-tint-1">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Claim Voucher
                      </div>
                    </div>
                    <img
                      className="w-[176.6px] h-[132.5px] absolute my-0 mx-[!important] right-[-38.5px] bottom-[-18.4px] z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-64.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[16px] text-tint-7">
                  <div className=" rounded-3xl box-border flex flex-row items-end justify-start py-3 px-4 gap-[12px] border-[0.5px] border-solid border-tint-5">
                    <img
                      className="h-6 w-6 relative min-h-[20px]"
                      alt=""
                      src="/searchnormal.svg"
                    />
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      class="h-full w-full rounded-full bg-transparent text-sm font-medium text-navy-700 outline-none  "
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between py-0 pr-2.5 pl-0 text-xl">
                  <div className="text-xl relative font-bold inline-block">
                    Recommended
                  </div>
                  <Link to="/explore">
                    <div className="text-lg relative text-base font-semibold text-accent inline-block">
                      View all
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TabBarFrame />
    </div>
  );
};

export default Home;
