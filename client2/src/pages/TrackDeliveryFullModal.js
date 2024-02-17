import FromToFrame from "../components/FromToFrame";
import NameFrame from "../components/NameFrame";

const TrackDeliveryFullModal = ({step}) => {
  return (
    <div className="">
     
        <div className="flex-1 bg-shade-2 flex flex-col items-center justify-start pt-1.5 px-1.5 pb-4 gap-[40px] z-[3]">
          <FromToFrame step={step}/>
          {/* <NameFrame /> */}
        </div>
    </div>
  );
};

export default TrackDeliveryFullModal;
