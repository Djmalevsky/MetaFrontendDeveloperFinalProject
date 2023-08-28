import React, { useReducer  }  from 'react';
import Homepage from './Homepage';
import Specials from './Specials';
import CustomersSay from './CustomerSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage'; // If you've this component, import it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import lemonDessert from './icons_assets/lemondessert.jpg';
import Greeksalad from './icons_assets/greek_salad.jpg';
import Bruchetta from './icons_assets/bruchetta.png';

import Testimonial1 from './icons_assets/Testimonial1.jpg';
import Testimonial2 from './icons_assets/Testimonial2.jpg';
import Testimonial3 from './icons_assets/Testimonial3.jpg';
import CallToAction from './CallToAction';
export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(currentTimes, action) {
  return currentTimes;
}

function Main() {
  
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
      ];
      const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <Router>
    <main>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hero" element={<CallToAction />} />
        <Route path="/specials" element={<Specials items={specialsData} />} />
        <Route path="/testimonials" element={<CustomersSay testimonials={testimonialData} />} />
        <Route path="/about-chicago" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        {/* You can continue adding more routes as needed */}
      </Routes>

    </main>
    </Router>
  );
}

export default Main;
