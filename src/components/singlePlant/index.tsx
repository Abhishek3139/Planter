import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
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
    <div className='m-4 lg:mb-30'>
      {isLoading && <DivLoader />}
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
          allPlants.map((plant, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'
                  onClick={() => navigate(`/product/${plant._id}`, { state: plant })}
                >
                  <a>
                    <img
                      // src='https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                      // alt='Product'
                      src={plant.images[0]}
                      alt={plant.name}
                      className='h-80 w-72 object-cover rounded-t-xl'
                    />
                    <div className='px-4 py-3 w-72'>
                      {/* <span className='text-gray-400 mr-3 uppercase text-xs'>Brand</span> */}
                      <p className='text-lg font-bold text-black truncate block capitalize'>
                        {plant.name}
                      </p>
                      <div className='flex items-center'>
                        <p className='text-lg font-semibold text-black cursor-auto my-3'>
                          ${plant.price}
                        </p>
                        <del>
                          <p className='text-sm text-gray-600 cursor-auto ml-2'>
                            ${Math.round(plant.price + 20)}
                          </p>
                        </del>
                        {/* <div className='ml-auto'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            className='bi bi-bag-plus'
                            viewBox='0 0 16 16'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                            />
                            <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                          </svg>
                        </div> */}
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SinglePlant;
