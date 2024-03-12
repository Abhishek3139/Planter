import { StarIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';
import { SinglePlantType } from '../../modals/plantsModal';
import { useAppDispatch } from '../../store/hooks';
import { cartActions } from '../../store/reducers/cartSlice';
import { CartItems } from '../../modals/cartModals';
import { useState } from 'react';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SingleProduct() {
  const dispatch = useAppDispatch();
  const loaction = useLocation();
  const [quantity, setQuantity] = useState(1);

  const { name, images, description, price, _id: id }: SinglePlantType = loaction.state;
  const handleCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (quantity) dispatch(cartActions.updateProductQuantity({ quantity, id }));

    const payload: CartItems = {
      name,
      image: images[0],
      price,
      id,
      cartQuantity: quantity,
    };
    dispatch(cartActions.addCartProduct(payload));
  };

  const handleIncQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <a href={breadcrumb.href} className='mr-2 text-sm font-medium text-gray-900'>
                    Product
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-5 w-4 text-gray-300'
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <a
                href={product.href}
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <img src={images[0]} alt={name} className='h-full w-full object-cover object-center' />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img src={images[1]} alt={name} className='h-72 w-full object-fill object-center' />
            </div>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img src={images[2]} alt={name} className='h-72 w-full object-fill object-center' />
            </div>
          </div>
          <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
            <img src={images[3]} alt={name} className='h-full w-full object-cover object-center' />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{name}</h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>{price}$</p>

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <div>
              <label className='text-2xl tracking-tight text-gray-900'>Quanity</label>
              <button className='bg-red-300 w-5' onClick={handleDecQuantity}>
                -
              </button>
              {quantity}
              <button className='bg-red-300 w-5' onClick={handleIncQuantity}>
                +
              </button>
            </div>

            <form className='mt-10'>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={handleCart}
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
