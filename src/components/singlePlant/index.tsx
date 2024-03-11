import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import { SinglePlantType } from '../../modals/plantsModal';
interface Iprops {
  allPlants: Array<SinglePlantType>;
}

const SinglePlant = ({ allPlants }: Iprops) => {
  const navigate = useNavigate();
  return (
    <div className='m-4 lg:mb-30'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
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
        {allPlants &&
          allPlants.length &&
          allPlants.map((plant, index) => {
            return (
              <SwiperSlide key={index}>
                <div onClick={() => navigate(`/product/${plant._id}`, { state: plant })}>
                  <img
                    src={plant.images[0]}
                    alt={plant.name}
                    className='h-[420px] w-[340px] object-fill'
                  />
                  <p className='m-3'>{plant.name}</p>
                  <span>{plant.price}</span>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SinglePlant;
