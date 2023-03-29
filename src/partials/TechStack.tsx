import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper";
import HeroHome from './HeroHome';
import HeroHome2 from './HeroHome2';
import TechStackCard from './TechCard'
import 'swiper/css';
import {SiAngular,SiPython,SiReact,SiWordpress,SiShopify,SiJavascript,SiTypescript,SiVuedotjs} from 'react-icons/si'





const TechStack = () => {
    return (
        <div className=''>
            <Swiper
                //    effect="coverflow"
                loop
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={3}
                mousewheel={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,

                }}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                speed={5000}
                className="mySwiper"
            //         loop: true,
            //   autoplay: {
            //     delay: 1,
            //     disableOnInteraction: false
            //   },
            //   slidesPerView: 'auto',
            //   speed: 1000,
            //   grabCursor: true,
            //   mousewheelControl: true,
            //   keyboardControl: true,

            >


                <SwiperSlide><TechStackCard name="Python" description="" Logo={SiPython} color="" className="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Javascript" description="" Logo={SiJavascript} color="" className="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Angular" description="" Logo={SiAngular} color="" className="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="React" description="" Logo={SiReact} color="" className="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Vue" description="" Logo={SiVuedotjs} color="" className="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Wordpress" description="" Logo={SiWordpress} color="" className="" />  </SwiperSlide>
                {/* <SwiperSlide><TechStackCard name="Javascript" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Angular" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="React" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Vue" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Node" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Wordpress" description="" logo="" />  </SwiperSlide>
                <SwiperSlide><TechStackCard name="Shopify" description="" logo="" />  </SwiperSlide> */}

            </Swiper>
        </div>
    )
}

export default TechStack