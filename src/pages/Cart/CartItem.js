import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useGlobalContext } from "./Context";


const CartItem = (props) => {
  const {id, img, title, price, amount} = props.item;
    const {remove, increase, decrease} = useGlobalContext();
  return (
    <div className="flex flex-row px-4 mb-10 w-full translate-y-10">
      <div className="w-1/3">
        <img
          className="rounded w-1/2 h-full "
          src={img}
          alt={title}
        />
      </div>
      <div className="w-1/3 text-center">
        <h4>{title}</h4>
        <h4 >${price}</h4>
        {/* remove button */}
        <button
          className="px-5 py-1 rounded-full cursor-pointer bg-orange bg-orange-500 hover:bg-yellew-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 ... text-gray-light"
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col w-1/3 justify-start items-end">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          {<FaArrowUp size="21" className="text-orange m-auto" />}
        </button>
        {/* amount */}
        <p className='-translate-x-1.5'>{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          {<FaArrowDown size="21" className="text-orange m-auto" />}
        </button>
      </div>
    </div>
  );
}

export default CartItem;