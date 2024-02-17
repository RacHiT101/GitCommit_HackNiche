import DeliveryReviewRatings from "../components/DeliveryReviewRatings";

const ProductPageDrink = () => {
  return (
    <div className="w-full h-[844px] relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[8px] text-left text-base text-shade-4 font-label-l2">
      {/* <div className="self-stretch h-[43px] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-4 px-5 pb-[15px] box-border">
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
      </div> */}
      <header className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-2 text-left text-xl text-shade-4 font-label-l2">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/arrowleft.svg"
            />
          </div>
          <div className="h-[27px] relative font-medium inline-block">
            Details
          </div>
          <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
      </header>
      <section className="w-[350px] h-[296px] relative rounded-2xl bg-tint-2 overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_126px)] left-[calc(50%_-_95px)] w-[190.4px] h-[251.9px] object-cover"
          loading="eager"
          alt=""
          src="/rectangle-351@2x.png"
        />
      </section>
      {/* <div className="bg-[#F0ECE9] rounded-lg">
        <img src="/rectangle-351@2x.png" className="h-[280px] w-[280px]" />
      </div> */}
      <div className="relative font-medium hidden">Description</div>
      <DeliveryReviewRatings />
      <section className="self-stretch flex flex-col items-center justify-start min-h-[168px] text-left text-base font-label-l2">
        <div className="self-stretch h-[168px] relative tracking-[0.01em] leading-[28px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(176,_169,_162,_0),_rgba(176,_169,_162,_0)_75%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block box-border pl-5 pr-5 z-[1]">
          Our classic cheeseburger is made with a fresh, never-frozen beef patty
          that is cooked to perfection and topped with melted American cheese,
          lettuce, tomato, pickles, and onions. It is served on a toasted bun
          and is sure to satisfy your hunger.
        </div>
        <footer className="self-stretch h-[34px] relative mt-[-156px]">
          <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-81xl bg-shade-4 w-[120px] h-1" />
        </footer>
      </section>
    </div>
  );
};

export default ProductPageDrink;
