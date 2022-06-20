import React from 'react'

const Menu = ({items}) => {
  return (
    <div className=''>
        {items.map((item) => {
            const {id, title, img, price, desc} = item;
            return <article key={id} className="p-8 h-full grid grid-cols-1 place-items-center md:grid-cols-2 md:h-full md:mb-36 translate-y-32">
                <img className='rounded border-4 border-lightOrange' src={img} alt={title} />
                <div className='md:block'>
                    <header className='flex justify-between md:block text-center'>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </header>
                    <p className='p-3'>{desc}</p>
                </div>
            </article>
        })}
    </div>
  )
}

export default Menu