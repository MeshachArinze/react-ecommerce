import React from 'react';
import Item from '../Collection/Item/Item';

const Collection = ({product, removeTour}) => {
    let products = product;

  return (
    <section>
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