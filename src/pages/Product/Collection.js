import React from 'react';
import Item from './Item';

const Collection = ({product, removeTour}) => {
    let products = product;

  return (
    <section className='translate-y-20'>
      <div className="title flex flex-col items-center">
        <h2>our Goods</h2>
        <div className=""></div>
      </div>
      <div>
        {products.map((item) => {
          const { id } = item;

          return <Item key={id} {...item} removeTour={removeTour}/>;
        })}
      </div>
    </section>
  );
}

export default Collection