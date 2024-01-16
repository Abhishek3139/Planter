// import * as React from 'react';

// export interface IAppProps {
// }
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export function FilterProducts() {
  return (
    <div className="flex overflow-x-scroll">
      <div className="">Top rating</div>
      <div>Best sellers</div>
      <div>Featured products</div>

      {/* <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <button className="text-lg border-white border-2 border-r-black pr-10 pl-5">
            Top rating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="text-lg border-white border-2 border-r-black pr-10 pl-5">
            Best sellers
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="text-lg">Featured products</button>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
