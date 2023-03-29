import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-fade';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, EffectCube, EffectFlip, EffectFade } from 'swiper';
import { Card,servicesData as services } from './Card';
// import { services } from './data/servicesData';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectCube, EffectFlip, EffectFade]);

const ServicesCarousel = () => {
  return (
    <div className='my-12 py-4 mx-2'>
       <h2 className="h2 font-red-hat-display mb-4 text-center">Services</h2>
       <Swiper
        loop
      spaceBetween={50}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,

      }}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      grabCursor
      centeredSlides
      cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
      flipEffect={{ rotate: 30, slideShadows: false }}
      fadeEffect={{ crossFade: true }}
      className=' md:block hidden'
      
    >
      {services.map((service) => (
        <SwiperSlide key={service.id} className=''>
          <Card service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
       <Swiper
        loop
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      grabCursor
      centeredSlides
      cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
      flipEffect={{ rotate: 30, slideShadows: false }}
      fadeEffect={{ crossFade: true }}
      className='block md:hidden'
      
    >
      {services.map((service) => (
        <SwiperSlide key={service.id} className=''>
          <Card service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
  );
};

export default ServicesCarousel;
