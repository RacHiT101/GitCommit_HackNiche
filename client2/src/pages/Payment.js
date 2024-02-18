import axios from "axios";
import { useEffect, useState } from "react";
import CardFrame from "../components/CardFrame";
import FoodCard from "../components/FoodCard";
import WifiIcon from "../components/WifiIcon";
import HomeIndicatorRectangle from "../components/HomeIndicatorRectangle";
import { Link , useNavigate} from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

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
      const { data } = await axios.post(orderUrl, {
        amount: order[order?.length - 1].amount,
      });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
const [order, setOrder] = useState(null);

useEffect(() => {
  const fetchOrder = async () => {
    try {
      const response = await axios.get("http://localhost:5001/orde0r"); // Replace with the actual GET order API endpoint
      setOrder(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchOrder();
}, []);
  return (
    <div className="w-full pt-8 h-screen relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[16px]">
      <p className="text-2xl">Checkout Page</p>
      {/* <WifiIcon /> */}
      {/* <HomeIndicatorRectangle /> */}
      {order && order.length > 0 && (
        <Box
          key={order[order?.length - 1]._id}
          borderWidth="2px"
          borderColor="gray.500"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          mb={4}
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Order ID: {order[order?.length - 1].orderId}
          </Text>
          <Text fontSize="md" mb={2}>
            Status: {order[order?.length - 1].status}
          </Text>
          
          <ul className="list-disc pl-5">
            {order[order?.length - 1].products.map((product) => (
              <li key={product?.productId} className="mb-1">
                <Text>
                  {product?.title}: {product?.quantity}
                </Text>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between items-center">
            <Text fontSize="md" >
              Total Price:{" "}
            </Text>
            <div className="font-medium inline-block text-mid text-tint-10">
              <span>Rs  </span>
              <span className="text-xl text-shade-1">
                {order[order?.length - 1]?.amount}
              </span>
            </div>
          </div>
        </Box>
      )}

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
