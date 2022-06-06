import React from 'react';
import { useState } from 'react';
import Loading from "./Product/Loading";
import Collection from './Product/Collection';
import Categories from "./Product/Category/Categories";
import Menu from "./Product/Category/Menu";
import { useEffect } from 'react';
import { productItems } from '../Data';
import { items } from "../Data"

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((i) => i.category === category);
    setMenuItems(newItems)
  }

  const removeTour = (id) => {
    const filterAll = product.filter((pro) => pro.id !== id);
    setProduct(filterAll);
  }

  const getTourItem =  () => {
    setLoading(false);

    try {
      const product = productItems;
      const allCategories = [
        "all",
        ...new Set(items.map((item) => item.category)),
      ];
      setLoading(false);
      setProduct(product);
      setCategories(allCategories);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    getTourItem();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
        
      </main>
    )
  }

  if (product.length === 0) {
    return <main>
      <div className='flex justify-center items-center'>
        <h2>no product left</h2>
      </div>
      <section className=''>
        <div className='title'>
          <h2>our menu</h2>
        </div>
      </section>
    </main>
  }
  return (
    <>
      <div>
        <Collection product={product} removeTour={removeTour} />
        <Categories filterItem={filterItem} categories={categories}/>
        <Menu items={menuItems} />
      </div>
    </>
  );
}



export default Product;