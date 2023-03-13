import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Swipers() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://media.architecturaldigest.com/photos/63f796b5fa9fc1dcbe5cb62d/16:9/w_2560%2Cc_limit/image%2520(5).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plushdesigninteriors.com.au/wp-content/uploads/2020/02/iStock-1066999774.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2014/08/spacious-living-room.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.teahub.io/photos/full/0-4510_stylish-modern-living-room-design-idea-interior-you.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://roohome.com/wp-content/uploads/2016/08/Sergey-Procopchuk3-1280x720.jpg" />
        </SwiperSlide>

        <div className="autoplay-progress mt-[-1500px]">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipers;
