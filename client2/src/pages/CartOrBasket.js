import CardFrame from "../components/CardFrame";
import FoodCard from "../components/FoodCard";
import WifiIcon from "../components/WifiIcon";
import HomeIndicatorRectangle from "../components/HomeIndicatorRectangle";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CartOrBasket = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
   const handleCheckout = async () => {
     // Calculate the total cost
     const totalCost = carts.reduce((total, cart) => {
       return (
         total +
         cart.products.reduce((cartTotal, product) => {
           return cartTotal + product?.price * product?.quantity;
         }, 0)
       );
     }, 0);

     // Create the order
     const order = {
       user: {
         id: "65d042e8ce62ca59ab4f1b13", // Replace with the actual user ID
         username: "Priyanka", // Replace with the actual username
       },
       products: carts.flatMap((cart) =>
         cart.products.map((product) => ({
           productId: product?._id,
           quantity: product?.quantity,
           title: product?.title,
         }))
       ),
       status:"Preparing",
       amount: totalCost,
       preorder:true,
     };

     // Make the POST request to the order API
     try {
       const response = await axios.post("http://localhost:5001/order", order);
       console.log(response.data);
       navigate("/pay");
     } catch (error) {
       console.error(error);
     }
   };

useEffect(() => {
  const getCarts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/cart/find/65d042e8ce62ca59ab4f1b13"
      );
      setCarts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  getCarts();
}, []);
const totalPrice = carts.reduce((total, cart) => {
  return (
    total +
    cart.products.reduce((cartTotal, product) => {
      return cartTotal + product.price * product.quantity;
    }, 0)
  );
}, 0);
  return (
    <div className="w-full py-8 h-screen relative rounded-13xl bg-tint-1  flex flex-col items-center justify-start gap-[16px]">
      <CardFrame />
      {carts.map((cart, cartIndex) =>
        cart.products.map((product, productIndex) => (
          <FoodCard
            key={`${cartIndex}-${productIndex}`}
            product={product}
            cartId={cart._id}
            
          />
        ))
      )}
      <HomeIndicatorRectangle totalPrice={totalPrice} />
      <section className="self-stretch flex flex-col items-center justify-start gap-[4px] text-left text-mid text-white font-label-l2">
        <Link
          // to="/pay"
          className="no-underline  text-white decoration-none"
          onClick={handleCheckout}
        >
          <div className="w-[350px] rounded-13xl bg-accent flex flex-row items-center justify-center p-[22px] box-border">
            <div className=" tracking-[0.01em] text-lg leading-[20px] font-semibold">
              Checkout
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CartOrBasket;
