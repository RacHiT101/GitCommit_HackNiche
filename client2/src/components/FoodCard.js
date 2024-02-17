const FoodCard = () => {
  return (
    <section className="rounded-2xl bg-white flex flex-row items-start justify-start p-4 gap-[16px] text-left text-xl text-shade-1 font-label-l2">
      <div className="h-[136px] w-[120px] relative rounded-lg bg-tint-2 overflow-hidden shrink-0">
        <img
          className="absolute w-[calc(100%_-_12.5px)] top-[calc(50%_-_45px)] right-[6.5px] left-[6px] max-w-full overflow-hidden h-[90px] object-cover"
          loading="eager"
          alt=""
          src="/rectangle-25-1@2x.png"
        />
      </div>
      <div className="flex flex-col items-end justify-start gap-[23px]">
        <div className="flex flex-row items-start justify-start py-0 pr-10 pl-0">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium">Cheese burgers</div>
            <div className="h-[27px] relative font-medium inline-block text-mid text-tint-10">
              <span>$</span>
              <span className="text-xl text-shade-1">8.09</span>
            </div>
          </div>
        </div>
        <div className="rounded-11xl flex flex-row items-center justify-start py-3 pr-[17px] pl-[15px] gap-[37px_26px] text-black border-[1px] border-solid border-tint-3">
          <img
            className="h-[1.5px] w-3 relative"
            loading="eager"
            alt=""
            src="/line-3.svg"
          />
          <div className="h-[27px] relative inline-block">1</div>
          <div className="h-[27px] relative inline-block">+</div>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
