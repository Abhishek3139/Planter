import { useNavigate } from 'react-router-dom';
import { Filters } from '../../components/filters';
import { Pagination } from '../../components/pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAllPlants } from '../../store/reducers/plantSlice';
import { GetAllPlants } from '../../store/thunkApi/plantsApi';
import bg from '../../../public/static/images/slideshow-v2-1.webp';

import { useState } from 'react';
export function Products() {
  const allPlants = useAppSelector(selectAllPlants);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentPageNumber, setCurrentpageNumber] = useState(1);
  const handleSelectFilter = (value: string) => {
    dispatch(GetAllPlants({ page: currentPageNumber, limit: 9, sort: value }));
  };

  return (
    <>
      <div className='products-background p-16' style={{ backgroundImage: `url(${bg})` }}>
        <div>
          <h1 className='text-4xl font-normal '>Products</h1>
          <div className='border-b-4 border-solid border-black w-12 inline-flex'></div>
          <nav aria-label='Breadcrumb' className='mt-3'>
            <ol role='list' className='flex justify-center'>
              <li>
                <div className='flex items-center'>
                  <a href='#' className='mr-2 text-sm font-medium text-gray-900'>
                    HOME
                  </a>
                  <svg
                    width='16'
                    height='20'
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-5 w-4 text-gray-300'
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <a href='#' className='mr-2 text-sm font-medium text-gray-900'>
                    PRODUCTS
                  </a>
                  {/* <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg> */}
                </div>
              </li>

              {/* <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a>
              </li> */}
            </ol>
          </nav>
        </div>
      </div>
      <div className='bg-white lg:flex'>
        <Filters />
        <div className='mx-auto px-4 py-6 sm:px-6  lg:max-w-7xl lg:px-8 lg:w-3/4'>
          <div className='flex justify-between items-center my-2'>
            <div className='flex font-semibold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                />
              </svg>
              FILTERS
            </div>
            <div>
              <select
                className='px-3 py-2 border-solid border border-[#b0b0b0] max-w-full text-sm'
                onChange={(e) => handleSelectFilter(e.target.value)}
              >
                {/* <option>Best Selling</option> */}
                {/* <option>Featured</option> */}
                <option value={'name'}>Alphabetically, A-Z</option>
                <option value={'-name'}>Alphabetically, Z-A</option>
                <option value={'price'}>Price, low to high</option>
                <option value={'-price'}>Price, high to low</option>
              </select>
            </div>
          </div>
          <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>
            {allPlants &&
              allPlants.map((product) => (
                <div
                  key={product._id}
                  className='group relative'
                  onClick={() => navigate(`/product/${product._id}`, { state: product })}
                >
                  <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='mt-4  md:flex md:justify-between'>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <a>
                          <span aria-hidden='true' className='absolute inset-0' />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className='text-sm font-medium text-gray-900'>{product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Pagination
        allPlantsLength={allPlants.length}
        currentPageNumber={currentPageNumber}
        setCurrentpageNumber={setCurrentpageNumber}
      />
    </>
  );
}
