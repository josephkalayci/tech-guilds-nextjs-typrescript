import React from 'react';

import Slider from 'react-slick';
import HeroSlide from './HeroSlide';

let settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
};

interface Props {
  slides: {
    heading: string;
    text: string;
    image: string;
    button: {
      variant: 'outlined' | 'contained';
      color: string;
      text: string;
      actionUrl?: string;
    };
  }[];
}

//TODO:add dot color variant as a prop
const Carausel: React.FC<Props> = (props) => {
  const { slides } = props;

  return (
    <Slider {...settings}>
      {slides.map((slide: any, index: number) => (
        <HeroSlide
          key={index}
          heading={slide.heading}
          text={slide.text}
          bgImage={slide.image}
          button={slide.button}
        />
      ))}
    </Slider>
  );
};

export default Carausel;
