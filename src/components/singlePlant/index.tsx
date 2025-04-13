import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { SinglePlantType } from '../../modals/plantsModal';
import DivLoader from '../loaders/divLoader';
import { useAppSelector } from '../../store/hooks';
import { selectIsLoading } from '../../store/reducers/plantSlice';

interface Iprops {
  allPlants: Array<SinglePlantType>;
}

const SinglePlant = ({ allPlants }: Iprops) => {
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <div className="m-4">
      {isLoading && <DivLoader />}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="py-4"
      >
        {allPlants.map((plant, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(`/product/${plant._id}`, { state: plant })}
              className="cursor-pointer w-72 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={plant.images[0]}
                alt={plant.name}
                className="w-full h-72 object-cover transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 capitalize truncate">{plant.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-green-600 font-bold text-base">${plant.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${Math.round(plant.price + 20)}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SinglePlant;
