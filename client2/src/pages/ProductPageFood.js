import SubFrameFood from "../components/SubFrameFood";
import LineFrames from "../components/LineFrames";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const ProductPageFood = () => {
  return (
    <div className="w-full relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[8px]">
      <SubFrameFood />
      <section className="w-[350px] h-[296px] relative rounded-2xl bg-tint-2 overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_108px)] left-[calc(50%_-_129px)] w-[258px] h-[215.9px] object-cover"
          loading="eager"
          alt=""
          src="/rectangle-251@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-col items-center justify-start gap-[32px]">
        <LineFrames mins="15mins" prop="32+" prop1="4.2" />
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default ProductPageFood;
