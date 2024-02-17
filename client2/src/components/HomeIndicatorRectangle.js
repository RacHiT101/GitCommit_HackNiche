const HomeIndicatorRectangle = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-[13px] text-left text-base text-tint-7 font-label-l2">
      <div className="flex-1 flex flex-col items-start justify-start gap-[48px]">
        <div className="self-stretch h-12 rounded-3xl box-border flex flex-row items-center justify-between py-3 pr-1 pl-4 border-[0.5px] border-solid border-tint-5">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="eager"
              alt=""
              src="/ticketdiscount.svg"
            />
            <div className="relative tracking-[0.01em]">{`Enter promo code `}</div>
          </div>
          <div className="rounded-xl bg-shade-1 flex flex-row items-center justify-center py-2.5 px-[15px] text-mid text-tint-1">
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              Apply
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="h-[22px] relative font-medium inline-block">
                Subtotal
              </div>
              <div className="h-[27px] w-[55px] relative font-medium inline-block text-sm text-tint-10">
                <span>$</span>
                <span className="text-shade-1 text-base">
                  <span>15.39</span>
                  <span className="text-xl">{` `}</span>
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative font-medium">Delivery fee</div>
              <div className="h-[27px] relative font-medium text-shade-1 inline-block">
                <span>Free</span>
                <span className="text-xl">{` `}</span>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/line-4.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between text-shade-1">
            <div className="h-[22px] relative font-medium inline-block">
              Total
            </div>
            <div className="h-[27px] relative font-medium inline-block text-mid text-tint-10">
              <span>$</span>
              <span className="text-xl text-shade-1">{`15.39 `}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndicatorRectangle;
