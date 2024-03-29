import { Link } from "react-router-dom";

const TabBarFrame = () => {
  return (
    <section className="self-stretch py-4 flex flex-row items-start justify-start py-0 px-0 text-left text-xl text-shade-1 font-label-l2">
      <div className="w-[672px] flex flex-col items-start justify-start gap-[3px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
            <div className="flex-1 rounded-2xl bg-white flex flex-row items-start justify-start py-4 pr-4 pl-2 box-border gap-[16px] min-w-[207px]">
              <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0">
                <img
                  className="absolute w-[calc(100%_-_12.5px)] top-[calc(50%_-_45px)] right-[6.5px] left-[6px] max-w-full overflow-hidden h-[90px] object-contain"
                  loading="eager"
                  alt=""
                  src="/rectangle-25-1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative font-medium pr-3">
                    Cheese burgers
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between text-mid text-tint-10">
                    <div className="h-[27px] relative font-medium inline-block">
                      <span>₹</span>
                      <span className="text-xl text-shade-1">8.09</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-base text-tint-7">
                      <img
                        className="h-3 w-[12.7px] relative"
                        loading="eager"
                        alt=""
                        src="/union.svg"
                      />
                      <div className="h-[22px] relative font-medium inline-block">
                        4.2
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="self-stretch flex flex-row items-end justify-end gap-[12px]">
                  <div className="h-12 w-12 rounded-3xl box-border flex flex-row items-end justify-end py-3 pr-[11px] pl-[13px] border-[1px] border-solid border-tint-3">
                    <img className="h-6 w-6 relative" alt="" src="/heart.svg" />
                  </div>
                  <div className="h-12 w-12 rounded-3xl bg-accent flex flex-row items-center justify-center p-3 box-border">
                    <img className="h-6 w-6 relative" alt="" src="/bag2.svg" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-white flex flex-row items-start justify-start py-4 pr-4 pl-2 box-border gap-[16px] min-w-[207px]">
              <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[-30px] w-[179.4px] h-[152.7px] object-contain"
                  loading="eager"
                  alt=""
                  src="/rectangle-24-1@2x.png"
                />
              </div>
              <div className="h-[138px] flex-1 flex flex-col items-start justify-start gap-[28px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative font-medium pr-[7px]">
                    Margherita Pizza
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between text-mid text-tint-10">
                    <div className="self-stretch relative font-medium">
                      <span>₹</span>
                      <span className="text-xl text-shade-1">8.50</span>
                    </div>
                    <div className="h-[22px] flex flex-row items-center justify-start gap-[4px] text-base text-tint-7">
                      <img
                        className="h-3 w-[12.7px] relative"
                        loading="eager"
                        alt=""
                        src="/union.svg"
                      />
                      <div className="self-stretch relative font-medium">
                        4.8
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="self-stretch flex flex-row items-end justify-end gap-[12px]">
                  <div className="h-12 w-12 rounded-3xl box-border flex flex-row items-end justify-end py-3 pr-[11px] pl-[13px] border-[1px] border-solid border-tint-3">
                    <img
                      className="h-6 w-6 relative"
                      loading="eager"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="h-12 w-12 rounded-3xl bg-accent flex flex-row items-center justify-center p-3 box-border">
                    <img
                      className="h-6 w-6 relative"
                      loading="eager"
                      alt=""
                      src="/bag2.svg"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <div className="flex-1 rounded-21xl bg-shade-4 flex flex-row items-start justify-between py-[22px] px-8">
            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/home.svg"
            />

            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/heart-2.svg"
            />

            <Link to="/cart">
              <img
                className="h-7 w-7 relative min-h-[28px]"
                loading="eager"
                alt=""
                src="/bag2-2.svg"
              />
            </Link>
            <img
              className="h-7 w-7 relative min-h-[28px]"
              loading="eager"
              alt=""
              src="/profilecircle.svg"
            />
            <div id="google_translate_element" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabBarFrame;
