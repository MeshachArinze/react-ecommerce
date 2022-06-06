import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useGlobalContext } from "./Context";


const CartItem = (props) => {
  const {id, img, title, price, amount} = props.item;
    const {remove, increase, decrease, toggleAmount} = useGlobalContext();
  return (
    <article className='flex mb-10 w-full translate-y-10'>
      <div className='h-full w-1/3 flex-1'>
          <img className='block h-3/4  object-cover' src={img} alt={title} />
      </div>
      <div className='flex flex-col w-1/3 flex-1 justify-center items-center'>
        <h4 className='text-center'>{title}</h4>
        <h4 className='item-price text-center'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn px-5 py-1 rounded-full cursor-pointer bg-orange bg-orange-500 hover:bg-yellew-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 ... text-gray-light'
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div className='flex w-1/3 flex-col justify-center'>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increase(id)}>
          {<FaArrowUp size="21"  className='text-orange m-auto'/>}
        </button>
        {/* amount */}
        <p className='text-center'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease(id)}>
          {<FaArrowDown size="21" className='text-orange m-auto'/>}
        </button>
      </div>
    </article>
  )
}

export default CartItem;