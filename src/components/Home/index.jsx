import React from "react";
import imageBg from "../../assets/Banner.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image2.png";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          background: `url(${imageBg}) no-repeat top/contain`,
          minHeight: "100vh",
          marginTop: "115px",
        }}
        className=""
      ></div>
      <div className="container">
        <div className=" relative">
          <button
            onClick={() => navigate("/createProduct")}
            className="text-[#274C5B] absolute top-[-405px] z-[100] left-[120px] py-[18px] px-[20px] rounded-[10px] text-[20px]  bg-[#EFD372] font-bold flex items-center gap-3"
          >
            Explore Now <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
