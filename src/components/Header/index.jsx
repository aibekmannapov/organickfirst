import React from "react";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { basket } = useSelector((s) => s.add);
  return (
    <div className="header py-[29px] fixed top-0  w-full z-[99] ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" width={40} />
            <h1
              onClick={() => navigate("/")}
              className="text-[#274C5B] cursor-pointer font-bold text-[40px]"
            >
              Organick
            </h1>
          </div>
          <div className="text-[#274C5B] text-[20px] font-bold flex items-center gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <select className="">
              <option value="pages">Pages</option>
              <option value="protectid">Protected Page</option>
              <option value="pages">Pages</option>
              <option value="pages">Pages</option>
            </select>
            <Link to={"/products"}>Shop</Link>
            <Link to={"/"}>Project</Link>
            <Link to={"/news"}>News</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className=" relative">
              <input
                type="text"
                placeholder="search..."
                className="text-2xl text-black bg-gray-300 py-[8px] px-[20px] rounded-3xl outline-none"
              />
              <div className=" bg-[#7EB693] absolute top-[4px] right-[5px] w-[40px] flex items-center justify-center h-[40px] rounded-[50%]">
                <a className="text-white text-[22px]">
                  <IoSearch />
                </a>
              </div>
            </div>
            <div className="flex items-center border-2 border-solid border-gray-300 gap-2 py-[2px] px-[10px] rounded-3xl">
              <div
                onClick={() => navigate("/basket")}
                className="w-[40px] ml-[-6px] cursor-pointer  h-[40px] rounded-[50%] flex items-center justify-center bg-[#274C5B]"
              >
                <a className="text-[22px] text-white">
                  <BsCart3 />
                </a>
              </div>
              <h1 className="text-[#274C5B] text-[24px] font-bold">
                Card ({basket.length ? basket.length : 0})
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
