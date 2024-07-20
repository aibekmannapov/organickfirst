import React from "react";
import { useDispatch } from "react-redux";
import {
  basketDelete,
  desCriment,
  inCriment,
} from "../../redux/reducers/addProduct.Slice";

function BasketProduct({ el }) {
  const dispatch = useDispatch();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          src={el.image}
          class="w-16 md:w-32 rounded-[10px] max-w-full max-h-full"
          alt="Apple Watch"
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {el.name}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(desCriment(el._id))}
            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <h1 className="bg-gray-50 flex items-center justify-center w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {el.quentity}
          </h1>
          <button
            onClick={() => dispatch(inCriment(el._id))}
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {el.price}
      </td>
      <td class="px-6 py-4">
        <h1
          onClick={() => dispatch(basketDelete(el._id))}
          className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </h1>
      </td>
    </tr>
  );
}

export default BasketProduct;
