import React from 'react';

const Product = ({ img, title, description, date }) => {
  return (
    <div className="product">
      <img className="product__img" src={img} alt={title} />
      <div className="product__body">
        <div className="product__name">{title}</div>
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
