import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const DeliverySuccess = () => {
  return (
    <div className="w-full h-screen relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[117px]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[9px]"></section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-[61px] text-center text-5xl text-shade-4 font-label-l2">
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
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
              <h3 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block">
                Order successfully placed
              </h3>
              <div className="self-stretch h-14 relative text-base tracking-[0.01em] leading-[28px] inline-block text-tint-7">
                <span>{`Your order `}</span>
                <span className="font-medium text-shade-4">#33-A45E</span>
                <span> has been successfully processed</span>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-left text-mid text-white">
              <Link
                to="/map"
                className="w-[300px] no-underline  text-white decoration-none"
              >
                <div className="w-full rounded-13xl bg-accent flex flex-row items-center justify-center py-[22px] px-[9px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    View ETA
                  </div>
                </div>
              </Link>
              <Link
                to="/home"
                className="w-[300px] no-underline  text-white decoration-none"
              >
                <div className="rounded-11xl flex flex-row items-center justify-center text-accent">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    Continue Munching
                  </div>
                </div>
              </Link>
            </div>
            <QRCode value="hey" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliverySuccess;
