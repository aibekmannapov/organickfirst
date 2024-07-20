import React from "react";
import footer from "../../assets/Photo.jpg";
import logo from "../../assets/Logo.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
function Footer() {
  return (
    <div>
      <div className="container">
        <div className=" relative">
          <img src={footer} alt="img" className="rounded-[30px]" />
          <div className=" absolute top-[70px] gap-[210px] flex items-center right-[100px]">
            <h1 className="text-[55px] text-white font-bold">
              Subscribe to <br /> our Newsletter
            </h1>
            <div className="flex gap-[10px] items-center">
              <input
                className="py-[20px] rounded-[10px] text-[20px] px-[30px]"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="py-[20px] px-[52px] text-[20px] font-bold rounded-[10px] text-white bg-[#274C5B]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[35px] justify-center mt-[80px]">
          <div className="flex items-end flex-col justify-end">
            <h1 className="text-[#274C5B] text-[40px] font-bold">Contact Us</h1>
            <h2 className="text-[22px] text-gray-600 mt-[10px] font-bold">
              Email
            </h2>
            <a
              className="text-[20px] mt-[20px] text-gray-500 mt-[-2px] mb-[18px]"
              href="#"
            >
              needhelp@Organia.com
            </a>
            <h2 className="text-[22px] text-gray-600 mt-[10px] font-bold">
              Phone
            </h2>
            <a
              className="text-[20px] mt-[20px] text-gray-500 mt-[-2px] mb-[18px]"
              href="#"
            >
              666 888 888
            </a>
            <h2 className="text-[22px] text-gray-600 mt-[10px] font-bold">
              Address
            </h2>
            <a
              className="text-[20px] mt-[20px] text-gray-500 mt-[-2px] mb-[18px]"
              href="#"
            >
              88 road, borklyn street, USA
            </a>
          </div>
          <div className="w-[2px] h-[350px] bg-gray-300"></div>
          <div className="flex items-center flex-col gap-[30px]">
            <div className="flex items-center gap-[10px]">
              <img src={logo} alt="img" width={45} />
              <h1 className="text-[40px] text-[#274C5B] font-bold">Organick</h1>
            </div>
            <p className="text-[20px] w-[600px] text-gray-500 text-center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="flex mt-[10px] items-center gap-[18px]">
              <img src={img1} alt="img" className="cursor-pointer"/>
              <img src={img2} alt="img" className="cursor-pointer"/>
              <img src={img3} alt="img" className="cursor-pointer"/>
              <img src={img4} alt="img" className="cursor-pointer"/>
            </div>
          </div>
          <div className="w-[2px] h-[350px] bg-gray-300"></div>
          <div className="flex flex-col">
            <h1 className="text-[#274C5B] text-[40px] font-bold">
              Utility Pages
            </h1>
            <a className="text-[20px] mt-[20px] text-gray-500" href="#">
              Style Guide
            </a>
            <a className="text-[20px] mt-[20px] text-gray-500" href="#">
              404 Not Found
            </a>
            <a className="text-[20px] mt-[20px] text-gray-500" href="#">
              Password Protected
            </a>
            <a className="text-[20px] mt-[20px] text-gray-500" href="#">
              Licences
            </a>
            <a className="text-[20px] mt-[20px] text-gray-500" href="#">
              Changelog
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-300 mt-[80px]"></div>
      <a
        className="text-[22px] flex justify-center py-[30px] text-center text-gray-500"
        href="#"
      >
        Copyright ©{" "}
        <span className="text-[22px] text-gray-600 font-bold">Organick</span>
      </a>
    </div>
  );
}

export default Footer;
