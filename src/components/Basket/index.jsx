import React from "react";
import { useSelector } from "react-redux";
import BasketProduct from "../BasketProduct";
import imgBas from "../../assets/imgBasket1.png";
function Basket() {
  const { basket } = useSelector((s) => s.add);
  console.log(basket, "bas");
  return (
    <div
      style={{
        paddingTop: basket.length ? "0" : "650px",
        marginTop: "140px",
        marginBottom: "30px",
      }}
      className=""
    >
      <div className="container">
        {basket.length ? (
          <div className="relative w-[50%] overflow-x-scroll h-[550px] shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((el) => (
                  <BasketProduct el={el} key={el._id} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <img
            src={imgBas}
            alt="img"
            className="w-[62vh] absolute top-[130px] ml-[300px]"
          />
        )}
      </div>
    </div>
  );
}

export default Basket;
