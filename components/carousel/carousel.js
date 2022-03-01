import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

const carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <div className="w-full h-96">
    <SwiperSlide>
        <img  src="/images/carousel/slider-one.jpeg" alt="slider one" className="object-cover h-96 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <img  src="/images/carousel/slider-two.jpeg" alt="slider one" className="object-cover h-96 w-full"/>
      </SwiperSlide>
    </div>

    </Swiper>
  );
};

export default carousel;
