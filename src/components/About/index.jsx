import React from "react";
import nanner1 from "../../assets/Banner.png";
import image3 from "../../assets/image3.png";
import about from "../../assets/About.png";
import tractor from "../../assets/Tractor.png";
import plant from "../../assets/Plant.png";
import { FaArrowCircleRight } from "react-icons/fa";

function About() {
  return (
    <div>
      <div
        style={{
          background: `url(${nanner1}) no-repeat center`,
          minHeight: "55vh",
          marginTop: "115px",
        }}
        className=""
      ></div>
      <div className="container">
        <div className="flex items-center mt-[200px]  gap-[20px]">
          <img
            src={image3}
            alt="img"
            width={800}
            className=" absolute mt-[50px] ml-[-120px]"
          />
          <div className="w-[700px] ml-[700px]">
            <img src={about} alt="img" />
            <h1 className="text-[40px] mb-[20px] text-[#274C5B] font-bold">
              We do Creative <br />
              Things for Success
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="">
              <div className="flex items-center gap-[10px]">
                <img src={tractor} alt="img" />
                <h1>
                  Modern Agriculture <br />
                  Equipment
                </h1>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src={plant} alt="img" />
                <h1>
                  No growth <br /> hormones are used
                </h1>
              </div>
            </div>
            <button className="flex text-[20px] gap-[10px] py-[20px] px-[35px] rounded-[15px] bg-[#274C5B] text-white items-center">
              Explore More <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
