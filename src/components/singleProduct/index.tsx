import { StarIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';
import { SinglePlantType } from '../../modals/plantsModal';
import { useAppDispatch } from '../../store/hooks';
import { cartActions } from '../../store/reducers/cartSlice';
import { CartItems } from '../../modals/cartModals';
import { useState } from 'react';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SingleProduct() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const { name, images, description, price, _id: id }: SinglePlantType = location.state;

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

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>Home</li>
            <li>/</li>
            <li className="capitalize text-gray-900">{name}</li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-7xl grid grid-cols-1 gap-6 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-[400px] object-cover rounded-xl shadow-sm"
            />
            <div className="hidden lg:flex gap-4">
              <img src={images[1]} alt={name} className="h-48 w-1/2 object-cover rounded-lg" />
              <img src={images[2]} alt={name} className="h-48 w-1/2 object-cover rounded-lg" />
            </div>
          </div>
          <div className="lg:col-span-2">
            {/* Product info */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-xl text-green-600 font-semibold mb-4">${price}</p>

            {/* Reviews */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-500' : 'text-gray-300',
                      'h-5 w-5'
                    )}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {reviews.totalCount} reviews
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <label className="text-lg font-medium text-gray-800">Quantity:</label>
              <div className="flex items-center border rounded-md px-2">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="text-lg font-bold px-2 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg font-bold px-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleCart}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 rounded-md transition-all"
            >
              Add to Cart
            </button>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Description</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
