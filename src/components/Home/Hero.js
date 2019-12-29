import React from 'react';
import CoffeeCup from '../../img/coffee.png';

export default function Hero() {
  return (
    <header>
      <div className="container-fluid hero">
        <img className="col-sm-6 col-md-5 col-lg-4 hero__image" src={CoffeeCup} alt="" />
        <div className="hero__body">
          <h1 className="hero__title">
            Great Coffee,
            <br />
            Great Day
          </h1>
          <p className="hero__text">
            The unfiltered truth about the
            <br />
            best brew right at your doorstep.
          </p>
          <button>see all</button>
        </div>
      </div>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path d="M0,64L30,85.3C60,107,120,149,180,165.3C240,181,300,171,360,154.7C420,139,480,117,540,117.3C600,117,660,139,720,165.3C780,192,840,224,900,213.3C960,203,1020,149,1080,117.3C1140,85,1200,75,1260,69.3C1320,64,1380,64,1410,64L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
    </header>
  );
}
