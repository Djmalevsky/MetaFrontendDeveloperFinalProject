import React from 'react';
function StarRating() {
  return <div className="star-rating">★ ★ ★ ★ ★</div>;
}
const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    comment: "Amazing service and wonderful staff!",
    image: "/path/to/john-doe-image.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "I had a delightful experience!",
    image: "/path/to/jane-smith-image.jpg"
  },
  {
    id: 3,
    name: "Sam Wilson",
    comment: "Highly recommend to anyone looking for quality service.",
    image: "/path/to/sam-wilson-image.jpg"
  }
  //... add more testimonials as needed
];

function Testimonial({ image, name, comment }) {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image"/>
      <StarRating />
      <p className="testimonial-comment">{comment}</p>
      <p className="testimonial-name"><strong>{name}</strong></p>
    </div>
  );
}

function CustomersSay({ testimonials }) {
  return (
    <div className="testimonials-section">
      {testimonials.map(testimonial =>
        <Testimonial key={testimonial.id} {...testimonial} />
      )}
    </div>
  );
}

export default CustomersSay;
