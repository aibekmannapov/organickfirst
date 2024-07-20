import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import banner from "../../assets/imgShop.png";
import { getProduct } from "../../redux/reducers/addProduct.Slice";

function Products() {
  const { product } = useSelector((s) => s.add);
  const dispatch = useDispatch();

  const getProd = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://api.elchocrud.pro/api/v1/c66137e6aca92736621bd515d2402ec5/Organick`
      );
      const { data } = res;
      dispatch(getProduct(data));
    };
  };

  useEffect(() => {
    dispatch(getProd());
  }, []);
  return (
    <div className="">
      <div
        style={{
          background: `url(${banner}) no-repeat center`,
          minHeight: "55vh",
          marginTop: "115px",
        }}
        className=""
      ></div>
      <div className="container">
        <div className="flex items-center py-[60px] gap-[26px] flex-wrap">
          {product?.map((el) => (
            <ProductCard el={el} key={el._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
