import TopFrame from "../components/TopFrame";
import MainHeading from "../components/MainHeading";
import Spline from '@splinetool/react-spline';

const Onboarding = () => {
  return (
    <div className="w-full relative  bg-accent overflow-hidden flex flex-col items-start justify-start gap-[391px]">
      <TopFrame />
      <MainHeading />
      <section className="w-[401px] h-[376px] absolute my-0 mx-[!important] top-[118px] left-[-35px]">
        <img
          className="absolute top-[319px] left-[33.8px] w-[71.3px] h-[56.8px] object-contain"
          loading="eager"
          alt=""
          src="/frame-18@2x.png"
        />
        <img
          className="absolute top-[-0.2px] left-[183.9px] w-[66.2px] h-[62.7px] overflow-hidden object-contain"
          loading="eager"
          alt=""
          src="/food-options-1@2x.png"
        />
        <img
          className="absolute top-[54px] left-[322.8px] w-[58.7px] h-[60.4px] object-contain"
          loading="eager"
          alt=""
          src="/frame-17@2x.png"
        />
        <img
          className="absolute top-[8.2px] left-[58.1px] w-[37.4px] h-[44.5px] object-contain"
          loading="eager"
          alt=""
          src="/frame-14@2x.png"
        />
        {/* <img
          className="absolute top-[33px] left-[0px] w-[379.1px] h-[327.2px] object-contain z-[2]"
          alt=""
          src="/burgerpngpngimagesyellowimages12-2@2x.png"
        /> */}
        <Spline scene="https://prod.spline.design/7qUU9WYe53aAZIvs/scene.splinecode" />
        <img
          className="absolute top-[294.9px] left-[353.9px] w-[47.2px] h-[35.6px] object-contain z-[3]"
          loading="eager"
          alt=""
          src="/frame-16@2x.png"
        />
      </section>
    </div>
  );
};

export default Onboarding;
