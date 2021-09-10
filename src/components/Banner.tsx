import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/**
 * Main 화면의 Carousel 표시 컴포넌트
 * @returns
 */
function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <Image
          loading="lazy"
          src="https://links.papareact.com/gi1"
          alt="img1"
          width={1536}
          height={600}
        />
        <Image loading="lazy" src="https://links.papareact.com/6ff" alt="img2" layout="fill" />
        <Image loading="lazy" src="https://links.papareact.com/7ma" alt="img3" layout="fill" />
      </Carousel>
    </div>
  );
}

export default Banner;
