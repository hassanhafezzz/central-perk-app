import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Products from '../Products';

const Home = props => {
  return (
    <>
      <Hero />
      <div className="content">
        <div className="sample-products-wrapper container-md">
          <Products limit={3} />
          <Link to="/products" className="link-button">
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
