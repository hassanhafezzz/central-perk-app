import React from 'react';
import Hero from './Hero';

const Home = props => {
  return (
    <>
      <Hero />
      <div className="content container-md">
        <section>
          <h2 className="section__title">Refreshing Seasonal Coffee</h2>
        </section>
      </div>
      <section>
        <h2 className="section__title">Know More</h2>
      </section>
    </>
  );
};

export default Home;
