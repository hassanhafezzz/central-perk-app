import React from 'react';
import Product from './Product';
import productsData from '../../data/products';

const Products = props => {
  return (
    <div className="products">
      {productsData.map(product => (
        <Product img={product.img} title={product.title} description={product.description} />
      ))}
    </div>
  );
};

export default Products;
