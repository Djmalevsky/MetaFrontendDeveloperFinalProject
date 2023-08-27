import React from 'react';
import ResturantFood from './icons_assets/restauranfood.jpg';
import CTA from './CTA';

function CallToAction () {
  return (
    <div className='Home'>
    <div className="container">
      <div className="text-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
        <CTA text="Reserve a Table" onClick={() => console.log("CTA clicked!")}/>
      </div>
        <div className="image-content">
            <img src={ResturantFood} alt="Resturant Food" />
        </div>
    </div>
    </div>
  );
}

export default CallToAction;
