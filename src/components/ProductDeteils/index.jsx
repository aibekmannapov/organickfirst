import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { basketProduct } from "../../redux/reducers/addProduct.Slice";
import banners from "../../assets/banners.png";
import ProductCard from "../ProductCard";
function ProductDeteils() {
  const { deteilsPro } = useSelector((s) => s.add);
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.add);
  return (
    <div>
      <div
        style={{
          background: `url(${banners}) no-repeat center`,
          minHeight: "55vh",
          marginTop: "115px",
        }}
        className=""
      ></div>
      <div className="container">
        <div className="flex items-center mt-[80px]  gap-[80px]">
          <div className="bg-gray-200 w-[500px] h-[500px] flex items-center justify-center rounded-[20px]">
            <img
              src={deteilsPro.image}
              alt="img"
              width={400}
              className="w-[400px] h-[400px]"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-[45px] text-[#274C5B] font-bold">
              {deteilsPro.name}
            </h1>
            <h1 className="font-bold text-[#274C5B] text-[30px]">
              {deteilsPro.price} Сом
            </h1>
            <p className="w-[600px] text-gray-600">{deteilsPro.description}</p>
            <div className="flex items-center gap-[20px]">
              <h1 className="text-[25px] text-[#274C5B] font-bold">
                Quentity :
              </h1>
              <h1 className="w-[120px] text-[#274C5B] h-[55px] rounded-[10px] text-[25px] flex items-center justify-center border-2 border-solid border-[#274C5B]">
                {deteilsPro.quentity}
              </h1>
              <button
                onClick={() => dispatch(basketProduct(deteilsPro))}
                className="flex items-center gap-5 font-bold py-[18px] px-[30px] rounded-[10px] text-white bg-[#274C5B]"
              >
                Add To Cart <FaArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-[30px] mt-[100px]">
          <div className="flex gap-[20px]">
            <button className="text-[22px] py-[20px] px-[40px] rounded-[10px] bg-[#274C5B] text-white font-bold">
              Product Description
            </button>
            <button className="text-[22px] py-[20px] px-[40px] rounded-[10px] bg-[#EFF6F1] text-[#274C5B] font-bold">
              Additional Info
            </button>
          </div>
          <p className="text-[18px] text-[#525C60] w-[1100px] text-center">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
        <div className="flex justify-center mt-[100px] flex-col">
          <h1 className="text-[45px] text-center font-bold mb-[50px] text-[#274C5B]">
            Related Products
          </h1>
          <div className="flex items-center mb-[80px] gap-[26px] flex-wrap">
            {product.slice(0, 4).map((el) => (
              <ProductCard el={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeteils;
