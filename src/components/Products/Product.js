import React from 'react';
import x from '../../img/unoptimized/cappuccino.jpg';
const optimizedPath = '../../img/optimized';
const unoptimizedPath = '../../img/unoptimized';

const Product = ({ img, title, description }) => {
  return (
    <div className="product">
      {/* <img src={`${unoptimizedPath}/${img}`} alt={title} /> */}
      <img className="product__img" src={x} alt={title} />
      <div className="product__body">
        <div className="product__name">{title}</div>
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
