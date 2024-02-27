import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
const SinglePlant = () => {
  const navigate = useNavigate();
  return (
    <div className="m-4 lg:mb-30">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p1.jpg" alt="plant" className="" />
            <p className="m-3">Italian Stone Pine</p>
            <span>200$</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p2.jpg" alt="plant" className="" />
            <p className="m-3">Aloe</p>
            <span>200$</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p1.jpg" alt="plant" className="" />
            <p className="m-3">Italian Stone Pine</p>
            <span>200$</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p2.jpg" alt="plant" className="" />
            <p className="m-3">Aloe</p>
            <span>200$</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p1.jpg" alt="plant" className="" />
            <p className="m-3">Italian Stone Pine</p>
            <span>200$</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div onClick={() => navigate("/product")}>
            <img src="public/p2.jpg" alt="plant" className="" />
            <p className="m-3">Aloe</p>
            <span>200$</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SinglePlant;
