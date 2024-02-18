import SubFrameFood from "../components/SubFrameFood";
import LineFrames from "../components/LineFrames";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ReactStars from "react-stars";
import { useEffect, useState } from "react";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";
import axios from "axios";

const ProductPageFood = () => {
  const [rating, setRating] = useState(0);
  const [form, setform] = useState("");
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [ReviewLoading, setReviewLoading] = useState(false);
  const [Added, setAdded] = useState(0);
  const productId = "65d07d5035cd19e6d6e5a4e1";

  const addReview = async () => {
    try {
      const response = await axios.post(
        "https://backend-truck.onrender.com/products/review/",
        {
          productId: "65d07d5035cd19e6d6e5a4e1",
          review: form,
          rating,
        }
      );

      console.log("Review added successfully:", response.data);
      setform("");
      // window.location.reload();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const getReview = async () => {
    try {
      const response = await axios.get(
        `https://backend-truck.onrender.com/products/review/${productId}`
      );

      console.log("Review fetched successfully:", response.data);
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="w-full mt-2 relative rounded-13xl bg-tint-1 overflow-hidden flex flex-col items-center justify-start gap-[8px]">
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
      </section>
      <div className="px-2 border-t-2 border-gray-600 self-stretch flex flex-col items-start justify-start">
        <ReactStars
          size={40}
          value={rating}
          half={true}
          className="ml-3"
          onChange={(rate) => setRating(rate)}
        />
        <div className="flex mx-auto justify-center items-center">
          <input
            value={form}
            onChange={(e) => setform(e.target.value)}
            placeholder="Share your thoughts..."
            className="p-3 px-8 text-white rounded outline-none mr-2 header bg-gray/50"
          />
          <button
            onClick={addReview}
            className="bg-accent font-bold text-lg text-white flex rounded justify-center w-full p-3 px-8"
          >
            {Loading ? <ThreeDots height={20} color="white" /> : "Share"}
          </button>
        </div>

        {ReviewLoading ? (
          <div className="w-full flex justify-center mt-7">
            <ThreeCircles height={40} color="white" />
          </div>
        ) : (
          <div className="mx-4 w-full">
            {data?.map((rev, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-700 py-2 px-4 w-full rounded-lg shadow-md shadow-gray-200 mt-2"
                >
                  <p className="text-lg font-bold text-accent">{rev.review}</p>
                  <ReactStars
                    size={24}
                    value={rev.rating}
                    half={true}
                    edit={false}
                  />
                  <p className="text-gray-600 text-md">Priyanka</p>
                  <p className=" text-md">
                    {new Date(rev.createdAt).toLocaleString()}
                  </p>

                 
                </div>
              );
            })}
          </div>
        )}
      </div>
      <FrameComponent />
    </div>
  );
};

export default ProductPageFood;
