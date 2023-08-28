import React from 'react';
import Mario_and_Adrian_A from './icons_assets/Mario_and_Adrian_A.jpg';

function Chicago() {
  return (
    <div className="about-chicago">
          <div className="container">
            <div className='text-content'>
            <h2>About Little Lemon Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Located in the heart of Chicago...</p>

            </div>
            <div className="image-content">
              <img src={Mario_and_Adrian_A} alt="Mario_and_Adrian" />
            </div>
          </div>
    </div>
  );
}

export default Chicago;
