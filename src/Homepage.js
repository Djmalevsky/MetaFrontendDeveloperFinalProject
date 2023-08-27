import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomerSay';
import Chicago from './Chicago';

import Testimonial1 from './icons_assets/Testimonial1.jpg';
import Testimonial2 from './icons_assets/Testimonial2.jpg';
import Testimonial3 from './icons_assets/Testimonial3.jpg';
import Greeksalad from './icons_assets/greek_salad.jpg';
import lemonDessert from './icons_assets/lemondessert.jpg';
import Bruchetta from './icons_assets/bruchetta.png';

function Homepage () {
    const testimonialData = [
        {
          id: 1,
          name: "John Johnson",
          comment: "Fast service and wonderful staff!",
          image: Testimonial1
        },
        {
          id: 2,
          name: "Jane A.",
          comment: "I had the best experience!",
          image: Testimonial2
        },
        {
          id: 3,
          name: "Sam William",
          comment: "Highly recommend to anyone looking for quality service.",
          image: Testimonial3
        }
        //... add more testimonials as needed
      ];
        const specialsData = [
            {
              id: 1,
              imageSrc: Greeksalad,
              title: 'Greek salad',
              description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
            },
            {
              id: 2,
              imageSrc: lemonDessert,
              title: 'Lemon Desert',
              description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined. '
            },
            {
              id: 3,
              imageSrc: Bruchetta,
              title: 'Bruchetta',
              description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
            },
            // ... add as many specials as you have
          ];
  return (
    <>
        <CallToAction />
        <Specials items={specialsData} />
        <CustomersSay testimonials={testimonialData} />
        <Chicago />
    </>
  );
}

export default Homepage;
