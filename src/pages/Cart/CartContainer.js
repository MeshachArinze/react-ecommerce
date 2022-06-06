import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Context'

const CartContainer = ({children}) => {
//     const defaultList = [
//     { name: "ItemOne" },
//     { name: "ItemTwo" },
//     { name: "ItemThree" }
//   ];

//  const [list, updateList] = useState(defaultList);
//   const handleRemoveItem = (e) => {
//    const name = e.target.getAttribute("name")
//     updateList(list.filter(item => item.name !== name));
//   }
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2 className='size'>your phone</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />
        })}
      </div>
      {/* cart footer */}
      <footer className='flex translate-y-20 justify-evenly items-center'>
        <div className='cart-total'>
          <h4 className='text-lg uppercase'>
            total <span className='text-bold '>${total}</span>
          </h4>
        </div>
        <button
          className='bg-orange text-lg text-gray-light rounded py-2 px-4'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
      {/* <div>
      {list.map(item => {
        return (
          <>
            <span name={item.name} onClick={handleRemoveItem}>
              x
            </span>
            <span>{item.name}</span>
          </>
        );
      })}
    </div> */}
    </section>

  )
}

export default CartContainer