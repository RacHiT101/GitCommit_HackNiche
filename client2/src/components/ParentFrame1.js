const ParentFrame1 = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[24px] text-center text-5xl text-shade-4 font-label-l2">
      <div className="w-40 h-40 rounded-61xl bg-tint-2 flex flex-row items-center justify-center">
        <img
          className="h-[104px] w-[104px] relative rounded-61xl"
          loading="eager"
          alt=""
          src="/confetti.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-3 gap-[6px]">
          <h3 className="m-0 self-stretch h-[33px] relative text-inherit font-semibold font-inherit inline-block">
            Order successfully delivered
          </h3>
          <div className="self-stretch h-[84px] relative text-base tracking-[0.01em] leading-[28px] inline-block text-tint-7">
            <span>{`Your order `}</span>
            <span className="font-medium text-shade-4">#33-A45E</span>
            <span>
              {" "}
              has been successfully delivered to your location. Thanks for being
              our valid customer.
            </span>
          </div>
        </div>
        <div className="self-stretch rounded-13xl bg-accent flex flex-row items-center justify-center py-[22px] px-[9px] text-left text-mid text-white">
          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
            Continue Shopping
          </div>
        </div>
        <div className="w-[150px] h-5 rounded-11xl" />
      </div>
    </div>
  );
};

export default ParentFrame1;
