import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper";
import HeroHome from './HeroHome';
import HeroHome2 from './HeroHome2';

import 'swiper/css';



const HeroCarousel = () => {
  return (
    <div className=''>
      <Swiper
      loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        className="mySwiper"

      >
        <SwiperSlide><HeroHome2 title={"Hire dedicated developers  "} desc={'Our team of highly-skilled developers is ready to become an intelligent extension of your company and help you boost your software development productivity by creating easy to maintain high-quality software products. '} /></SwiperSlide>
        <SwiperSlide><HeroHome2 title={"Product Design (UI/UX) "} desc={'We understand the importance of a delightful and pleasant digital experience for building apps that users love. Our designers and developers use various UI/UX design disciplines and Visual Elements interaction strategies to build modern digital products with a focus on user-centered design with usability and accessibility as priorities.'} /></SwiperSlide>
        <SwiperSlide><HeroHome2 title={"Frontend, Backend & Mobile Development Services "} desc={`We provide customized solutions for building reliable, scalable, and secure web and mobile services. We've honed our processes and implemented best development practices to build apps that match both the needs of our clients and the market demands. `} /></SwiperSlide>
        {/* <SwiperSlide><HeroHome/></SwiperSlide>
          <SwiperSlide><HeroHome/></SwiperSlide>
          <SwiperSlide><HeroHome/></SwiperSlide>
          <SwiperSlide><HeroHome/></SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default HeroCarousel