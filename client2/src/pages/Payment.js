import axios from "axios";
import { useState } from "react";
import CardFrame from "../components/CardFrame";
import FoodCard from "../components/FoodCard";
import WifiIcon from "../components/WifiIcon";
import HomeIndicatorRectangle from "../components/HomeIndicatorRectangle";
import { Link , useNavigate} from "react-router-dom";

function App() {
  const [book, setBook] = useState({
    price: 250,
  });
  const navigate = useNavigate();

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_FoePXosPESQXF7",
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5001/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
           navigate("/delivery-success");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:5001/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pt-8 h-screen relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[16px]">
      <CardFrame />
      <FoodCard />
      <WifiIcon />
      {/* <HomeIndicatorRectangle /> */}
      <div className="self-stretch px-10 flex flex-row items-center justify-between text-shade-1">
        <div className="h-[22px] relative font-medium inline-block">Total</div>
        <div className="h-[27px] relative font-medium inline-block text-mid text-tint-10">
          <span>$</span>
          <span className="text-xl text-shade-1">{`15.39 `}</span>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-start gap-[4px] text-left text-mid text-white font-label-l2">
        <Link to="/pay" className="no-underline  text-white decoration-none">
          <div className="w-[350px] rounded-13xl bg-accent flex flex-row items-center justify-center p-[22px] box-border">
            <div
              onClick={handlePayment}
              className=" tracking-[0.01em] text-lg leading-[20px] font-semibold"
            >
              Pay Now
            </div>
          </div>
        </Link>
      
      </section>
    </div>
  );
}

export default App;
