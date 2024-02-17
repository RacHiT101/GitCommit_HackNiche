import { useMemo } from "react";

const LineFrames = ({
  mins,
  prop,
  prop1,
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const lineFramesStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[350px] rounded-xl bg-tint-2 flex flex-row items-start justify-between py-3 pr-3.5 pl-4 box-border text-left text-base text-shade-1 font-label-l2"
      style={lineFramesStyle}
    >
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-5 w-5 relative"
            loading="eager"
            alt=""
            src="/clock.svg"
          />
          <div className="h-[22px] relative tracking-[0.01em] inline-block">
            {mins}
          </div>
        </div>
        <div className="relative text-sm tracking-[0.01em] text-tint-10">
          Delivery
        </div>
      </div>
      <div className="h-[49px] w-px relative box-border border-r-[1px] border-solid border-tint-3" />
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-5 w-5 relative"
            loading="eager"
            alt=""
            src="/messages3.svg"
          />
          <div className="h-[22px] relative tracking-[0.01em] inline-block">
            {prop}
          </div>
        </div>
        <div className="relative text-sm tracking-[0.01em] text-tint-10">
          Review
        </div>
      </div>
      <div className="h-[49px] w-px relative box-border border-r-[1px] border-solid border-tint-3" />
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div
          className="flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[3px]"
          style={frameDivStyle}
        >
          <img
            className="h-5 w-5 relative"
            loading="eager"
            alt=""
            src="/star.svg"
          />
          <div className="h-[22px] relative tracking-[0.01em] inline-block">
            {prop1}
          </div>
        </div>
        <div className="relative text-sm tracking-[0.01em] text-tint-10">
          Ratings
        </div>
      </div>
    </div>
  );
};

export default LineFrames;
