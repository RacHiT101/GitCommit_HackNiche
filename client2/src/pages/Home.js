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
                    <div className="w-[212px] flex-1 flex flex-col items-start justify-start gap-[4px]">
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
                  <div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-tint-9">
                    <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px] text-shade-4">
                      <div className="w-14 h-14 relative rounded-37xl bg-white overflow-hidden shrink-0">
                        <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-white hidden" />
                        <img
                          className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_22px)] w-[43.2px] h-[46.3px] object-contain z-[1]"
                          loading="eager"
                          alt=""
                          src="/rectangle-28@2x.png"
                        />
                      </div>
                      <div className="h-[22px] relative font-medium inline-block">
                        All
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
                      <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
                        <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden " />
                        <img
                          className="absolute bottom-[-5.1px] left-[calc(50%_-_36px)] w-[71.8px] h-[61.1px] object-contain z-[1]"
                          loading="eager"
                          alt=""
                          src="/rectangle-24@2x.png"
                        />
                      </div>
                      <div className="h-[22px] relative font-medium inline-block">
                        Pizza
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
                      <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
                        <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
                        <img
                          className="absolute top-[11.4px] left-[5px] w-[43px] h-9 object-contain z-[1]"
                          loading="eager"
                          alt=""
                          src="/rectangle-25@2x.png"
                        />
                      </div>
                      <div className="relative font-medium">Burger</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
                      <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
                        <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
                        <img
                          className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_19px)] w-[38.1px] h-[50.4px] object-contain z-[1]"
                          loading="eager"
                          alt=""
                          src="/rectangle-35@2x.png"
                        />
                      </div>
                      <div className="h-[22px] relative font-medium inline-block">
                        Drinks
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
                      <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
                        <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
                        <img
                          className="absolute top-[calc(50%_-_29.9px)] left-[calc(50%_-_29px)] w-[57px] h-[61.1px] object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/rectangle-38@2x.png"
                        />
                      </div>
                      <div className="h-[22px] relative font-medium inline-block">
                        Fruits
                      </div>
                    </div>
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
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[227px] text-5xl text-tint-1">
                <div className="self-stretch h-[354px] flex flex-row items-end justify-start">
                  <div className="self-stretch w-[350px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-44 rounded-2xl bg-accent overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 box-border relative gap-[24px]">
                      <div className="w-[232px] flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px]">
                        <h3 className="m-0 w-[133px] h-7 relative text-inherit leading-[28px] font-semibold font-inherit inline-block">
                          Get 15% off
                        </h3>
                        <div className="self-stretch flex-1 relative text-base font-medium">
                          off your order when you sign up for our newsletter.
                        </div>
                      </div>
                      <div className="w-[142px] h-11 rounded-lg bg-shade-1 flex flex-row items-center justify-center p-3 box-border text-mid">
                        <div className="self-stretch w-[114px] relative tracking-[0.01em] leading-[20px] font-semibold inline-block">
                          Claim Voucher
                        </div>
                      </div>
                      <img
                        className="w-[182px] h-[182px] absolute my-0 mx-[!important] right-[-32px] bottom-[-50px] object-contain z-[1]"
                        loading="eager"
                        alt=""
                        src="/rectangle-27@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[4px] ml-[-340px] text-base text-tint-9">
                    <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
                      <img
                        className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_22px)] w-[43.2px] h-[46.3px] object-contain z-[1]"
                        loading="eager"
                        alt=""
                        src="/rectangle-28@2x.png"
                      />
                    </div>
                    <div className="w-[51px] h-[22px] relative font-medium inline-block">
                      Snacks
                    </div>
                  </div>
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
