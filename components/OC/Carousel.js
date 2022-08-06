import React from "react";
import Carousel from "better-react-carousel";
import CarouselItem from "./CarouselItem";
const MyCarousel = () => {
  return (
    <div className="">
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop={true}
        showDots={true}
        dotColorActive="#12629E"
        dotColorInactive="#112E49"
        autoplay={3000}
        mobileBreakpoint={640}
      >
        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>

        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>

        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>

        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>

        
        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>
        
        <Carousel.Item>
        <CarouselItem/>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default MyCarousel;
