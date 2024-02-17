import { Link } from "react-router-dom";

const MainHeading = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start gap-[16px] text-left text-21xl text-tint-1 font-label-l2">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[40px] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 self-stretch h-[168px] relative text-inherit leading-[56px] font-semibold font-inherit inline-block">
            The best food, delivered right to your home.
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-mid text-tint-3">
          <div className="self-stretch rounded-11xl bg-shade-4 flex flex-row items-center justify-center py-5 px-2.5">
            <Link to="/home">
              <div className="relative text-white tracking-[0.01em] leading-[20px] font-semibold">
                Start Ordering
              </div>
            </Link>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-2.5 text-white">
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              Sign Up Now
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch h-[34px] relative">
        <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-81xl bg-white w-[120px] h-1" />
      </footer>
    </section>
  );
};

export default MainHeading;
