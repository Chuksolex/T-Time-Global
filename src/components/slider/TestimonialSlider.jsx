import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css'; //
import { testimonialData } from '../data/testimonialdata';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <div className="testimonial-slider-container">
      <Slider {...settings}>
        {/* <div className="testimonial-slide">Testimonial 1</div>
        <div className="testimonial-slide">Testimonial 2</div>
        <div className="testimonial-slide">Testimonial 3</div>
        <div className="testimonial-slide">Testimonial 4</div>
        <div className="testimonial-slide">Testimonial 5</div> */}
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <p className="testimonial-message">{testimonial.message}</p>
                <div className="testimonial-author">
                  <p className="author-name fw-bold">{testimonial.name}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
