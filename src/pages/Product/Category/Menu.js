import React from 'react'

const Menu = ({items}) => {
  return (
    <div className=''>
        {items.map((item) => {
            const {id, title, img, price, desc} = item;
            return <article key={id} className="p-8 h-full translate-y-32">
                <img className='rounded border-4 border-lightOrange' src={img} alt={title} />
                <div className=''>
                    <header className='flex justify-between'>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </header>
                    <p>{desc}</p>
                </div>
            </article>
        })}
    </div>
  )
}

export default Menu