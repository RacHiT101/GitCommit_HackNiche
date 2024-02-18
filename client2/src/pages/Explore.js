import React, { useEffect } from "react";
import { data } from "../Data";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Explore = () => {
  const [foods, setfoods] = useState(data);
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
const [quantity, setQuantity] = useState(1);
  const { categoryy } = useParams();
  console.log(categoryy);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5001/products/");
      const modifiedProducts = res.data.map((product) => ({
        ...product,
        ParentCategory: product.categories[1], // Add the second category as a new field
      }));

      console.log(modifiedProducts);
      setProducts(modifiedProducts);
    } catch (err) {
      console.log(err);
    }
  };
  const filterType = (type) => {
    // Filter items based on category
    const filtered = products.filter(
      (product) => product.categories[2] === type
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    getProduct();
    // console.log(count)
  }, []);
  console.log(products);
  useEffect(() => {
    if (categoryy) {
      // Filter items based on categories[1]
      const filtered = products.filter(
        (product) => product.categories[1] === categoryy
      );
      setFilteredItems(filtered);
    } else {
      // If no filter is selected, display all products
      setFilteredItems(products);
    }
  }, [products, categoryy]);

  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price == price;
      })
    );
  };

const addToCart = async (productId, title, quantity,image,price) => {
  try {
    const response = await axios.post("http://localhost:5001/cart", {
      userId: "65d042e8ce62ca59ab4f1b13", // replace with actual user ID
      products: [
        {
          productId: productId,
          title: title,
          quantity: quantity,
          image:image,
          price:price
        },
      ],
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
      <header className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-2 text-left text-xl text-shade-4 font-label-l2 mt-5">
        <div className="flex-1 flex flex-row items-center justify-between">
          <Link
            to="/home"
            className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3"
          >
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/arrowleft.svg"
            />
          </Link>
          <div className="h-[27px] relative font-medium inline-block">
            Explore
          </div>
          <div className="h-11 w-11 rounded-3xl box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] border-[1px] border-solid border-tint-3">
            <img
              className="h-6 w-6 relative"
              loading="eager"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
      </header>
      <div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-tint-9">
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px] text-shade-4">
            <div className="w-14 h-14 relative rounded-37xl bg-white overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-white hidden" />
              <img
                className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_22px)] w-[43.2px] h-[46.3px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-28@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              All
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden " />
              <img
                className="absolute bottom-[-5.1px] left-[calc(50%_-_36px)] w-[71.8px] h-[61.1px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-24@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Pizza
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[11.4px] left-[5px] w-[43px] h-9 object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-25@2x.png"
              />
            </div>
            <div className="relative font-medium">Burger</div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_19px)] w-[38.1px] h-[50.4px] object-contain z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-35@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Drinks
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[4px] min-w-[55px] max-w-[56px]">
            <div className="w-14 h-14 relative rounded-37xl bg-tint-2 overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0.71%] right-[-0.54%] bottom-[-0.71%] left-[0.54%] rounded-37xl bg-tint-2 hidden" />
              <img
                className="absolute top-[calc(50%_-_29.9px)] left-[calc(50%_-_29px)] w-[57px] h-[61.1px] object-cover z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-38@2x.png"
              />
            </div>
            <div className="h-[22px] relative font-medium inline-block">
              Fruits
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mx-5">
          <div>
            <p className="font-bold ">Filter Type</p>
            <div className="flex justify-between flex-wrap ">
              <button
                onClick={() => filterType("Veg")}
                className="py-2 text-lg  px-4 rounded-2xl bg-accent text-white"
              >
                VEG
              </button>
              <button
                onClick={() => filterType("Non Veg")}
                className="py-2 text-lg  px-4 rounded-2xl bg-accent text-white"
              >
                NON-VEG
              </button>
              <button
                onClick={() => filterType("Jain")}
                className="py-2 text-lg  px-4 rounded-2xl bg-accent text-white"
              >
                JAIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-5">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 rounded-lg"
          >
            <img
              className="w-full  h-[300px] object-fit rounded-t-lg"
              src={item.image}
              alt={item.title}
            />
            <div className="flex justify-between px-2 py-3">
              <p className="font-bold font-sans text-xl">{item.title}</p>
              <p>
                <span className="bg-accent px-4 py-2 text-white rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  addToCart(
                    item._id,
                    item.title,
                    quantity,
                    item.image,
                    item.price
                  );
                  setQuantity(1);
                }}
                className="bg-accent text-white px-4 py-2 rounded-lg m-4"
              >
                Add to Cart
              </button>
              <div className="p-2 flex gap-2 justify-center items-center">
                <button
                  className="text-xl"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="text-xl ">{quantity}</span>
                <button
                  className="text-xl"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore;
