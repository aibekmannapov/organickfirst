import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { deleteProd, productDet } from "../../redux/reducers/addProduct.Slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductCard({ el }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteProduct = async (id) => {
    await axios.delete(
      `https://api.elchocrud.pro/api/v1/c66137e6aca92736621bd515d2402ec5/Organick/${id}`
    );
    dispatch(deleteProd(id));
  };
  const getProduct = () => {
    dispatch(productDet(el));
    navigate(`/productDeteils/${el._id}`);
  };
const arrNumbers = [1,2,3,4,5]
  return (
    <div className="w-[300px] relative rounded-[20px] border-2 flex items-center gap-[10px] flex-col border-solid border-[#274C5B] p-[15px]">
      <a
        onClick={() => deleteProduct(el._id)}
        className="text-[25px] absolute cursor-pointer text-[#274C5B] right-[10px] top-[10px]"
      >
        <IoClose />{" "}
      </a>
      <img src={el.image} alt="img" className="w-[280px] my-[25px] h-[280px]" />
      <h1
        onClick={() => getProduct()}
        className="text-[35px] text-[#274C5B] font-bold"
      >
        {el.name}
      </h1>

      <div className="flex">
                {arrNumbers.map((number) => (
                  <div
                    key={number}
                    className="star"
                    style={{
                      background: number <= el.rating ? "orange" : "gray",
                    }}
                  ></div>
                ))}
              </div>
      <h1 className="font-bold text-[#274C5B] text-[25px]">{el.price} Cом</h1>
    </div>
  );
}

export default ProductCard;
