import React from 'react';
import CTA from './CTA';
import Card from './Card';

function Specials({ items  }) {
  return (
    <div>
<div className='Specials'>
    <div className="container">
        <h1 className='specials-text'>This Weeks Special!</h1>
        <CTA className="cta-btn Specials-CTA" text="Reserve a Table" onClick={() => console.log("CTA clicked!")}/>
    </div>

</div>
    <div className='cards-specials'>
    {items.map((item) => (
            <Card key={item.id} imageSrc={item.imageSrc} header={item.title} description={item.description} />
        ))}
    </div>
    </div>
  );
}

export default Specials;