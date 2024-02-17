const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-base text-shade-4 font-label-l2">
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="relative font-medium">Description</div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start min-h-[168px] text-white">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border min-h-[168px]">
          <div className="self-stretch h-[168px] relative tracking-[0.01em] leading-[28px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b0a9a2,_rgba(176,_169,_162,_0)_75%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[1]">
            Our classic cheeseburger is made with a fresh, never-frozen beef
            patty that is cooked to perfection and topped with melted American
            cheese, lettuce, tomato, pickles, and onions. It is served on a
            toasted bun and is sure to satisfy your hunger.
          </div>
          <div className="self-stretch rounded-13xl bg-accent flex flex-row items-center justify-center p-5 gap-[7px] z-[2] mt-[-108px] text-mid">
            <img className="h-6 w-6 relative" alt="" src="/bag2.svg" />
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              Add to cart
            </div>
          </div>
        </div>
        <footer className="self-stretch h-[34px] relative mt-[-40px]">
          <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-81xl bg-shade-4 w-[120px] h-1" />
        </footer>
      </div>
    </div>
  );
};

export default FrameComponent;
