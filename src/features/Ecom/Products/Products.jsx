import { useLoaderData, useNavigation } from 'react-router-dom';
import ProductItem from './ProductItem';
import Loader from '../../../ui/Loader';
import { useState } from 'react';

function Products() {
  const products = useLoaderData();
  // console.log(products);

  return (
    <>
      <h1 className="mb-5">Results</h1>
      <div className="m-auto flex flex-wrap gap-2 sm:gap-9 md:gap-5">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

async function loader() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}

export { loader };

export default Products;
