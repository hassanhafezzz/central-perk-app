import React from 'react';

const Product = ({ src, srcset, sizes, title, description, date }) => {
  return (
    <div className="product">
      <picture>
        <img className="product__img" sizes={sizes} srcset={srcset} src={src} alt={title} />
      </picture>
      <div className="product__body">
        <div className="product__name">{title}</div>
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
