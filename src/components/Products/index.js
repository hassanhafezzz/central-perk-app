import React from 'react';
import Product from './Product';
import productsData from '../../data/unoptimized-products';
// import productsData from '../../data/optimized-products';

const Products = ({ limit }) => {
  const products = limit ? productsData.slice(0, limit) : productsData;
  return (
    <section className="container-lg">
      <h2 className="section__title">Refreshing Seasonal Coffee</h2>
      <div className="products">
        {products.map((product, i) => (
          <Product
            img={product.img}
            key={`${product.title}-${i}`}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
