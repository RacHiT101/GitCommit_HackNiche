import FrameComponent2 from "./FrameComponent2";

const FrameComponent1 = () => {
  const extraIngredients = [
    "Olives",
    "Extra Cheese",
    "Mushrooms",
    "Onions",
    "Tomatoes",
  ];

  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[16px] text-left text-5xl text-shade-1 font-label-l2">
      <FrameComponent2 cheeseBurgers="Cheese burgers" prop="10.99" />
      <div className="w-full text-xl flex flex-row items-center justify-between  text-accent">
        <div className="relative font-semibold">Add extra Ingredient</div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-[16px] text-left text-xl text-shade-1 font-label-l2">
        <select className="w-full">
          {extraIngredients.map((ingredient, index) => (
            <option key={index} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FrameComponent1;
