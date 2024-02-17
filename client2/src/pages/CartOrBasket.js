import CardFrame from "../components/CardFrame";
import FoodCard from "../components/FoodCard";
import WifiIcon from "../components/WifiIcon";
import HomeIndicatorRectangle from "../components/HomeIndicatorRectangle";

const CartOrBasket = () => {
  return (
    <div className="w-full relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[16px]">
      <CardFrame />
      <FoodCard />
      <WifiIcon />
      <HomeIndicatorRectangle />
      <section className="self-stretch flex flex-col items-center justify-start gap-[4px] text-left text-mid text-white font-label-l2">
        <div className="w-[350px] rounded-13xl bg-accent flex flex-row items-center justify-center p-[22px] box-border">
          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
            Checkout
          </div>
        </div>
        <footer className="self-stretch h-[34px] relative">
          <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_60px)] rounded-81xl bg-shade-4 w-[120px] h-1" />
        </footer>
      </section>
    </div>
  );
};

export default CartOrBasket;
