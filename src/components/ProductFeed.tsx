import React from 'react';
import { IProduct } from 'typings/amazom';
import Product from './Product';

interface IProductFeed {
  products: IProduct[];
}

function ProductFeed({ products }: IProductFeed) {
  return (
    <div className="grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map(({ id, ...rest }) => (
        <Product key={id} id={id} {...rest} />
      ))}

      <img src="https://links.papareact.com/dyz" alt="" className="md:col-span-full" />

      <div className="md:col-span-2">
        {products.slice(4, 5).map(({ id, ...rest }) => (
          <Product key={id} id={id} {...rest} />
        ))}
      </div>

      {products.slice(5).map(({ id, ...rest }) => (
        <Product key={id} id={id} {...rest} />
      ))}
    </div>
  );
}

export default ProductFeed;
