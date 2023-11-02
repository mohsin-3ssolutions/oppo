import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through the slides
    speed: 500, // Transition speed (milliseconds)
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='border rounded'>
          <img src="assets/images/inner_bg.jpg" width="100%" height="230" alt="Image 1" />
        </div>
        <div className='border rounded'>
          <img src="assets/images/inner_bg.jpg" width="100%" height="230" alt="Image 2" />
        </div>
        <div className='border rounded'>
          <img src="assets/images/inner_bg.jpg" width="100%" height="230" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
