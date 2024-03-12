// import * as React from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  cartActions,
  selectCart,
  selectCartTotal,
  selectTotalCartItems,
} from '../../store/reducers/cartSlice';
export interface IAppProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Cart({ open, setOpen }: IAppProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const cartTotal = useAppSelector(selectCartTotal);
  const totalCartItems = useAppSelector(selectTotalCartItems);

  const handleIncQuantity = (quantity: number, productId: string, price: number) => {
    if (quantity)
      dispatch(
        cartActions.updateProductQuantity({
          quantity,
          id: productId,
          totalCartItems: totalCartItems + 1,
          cartTotal: cartTotal + price,
        }),
      );
  };
  const handleDecQuantity = (quantity: number, productId: string, price: number) => {
    if (quantity >= 1) {
      dispatch(
        cartActions.updateProductQuantity({
          quantity,
          id: productId,
          totalCartItems: totalCartItems - 1,
          cartTotal: cartTotal - price,
        }),
      );
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shopping cart
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => setOpen(false)}
                          >
                            <span className='absolute -inset-0.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul role='list' className='-my-6 divide-y divide-gray-200'>
                            {cart &&
                              cart.map((product) => (
                                <li key={product.id} className='flex py-6'>
                                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className='h-full w-full object-cover object-center'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3>
                                          <a>{product.name}</a>
                                        </h3>
                                        <p className='ml-4'>
                                          {product.price * product.cartQuantity}
                                        </p>
                                      </div>
                                      {/* <p className='mt-1 text-sm text-gray-500'>{product.color}</p> */}
                                    </div>

                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                      <button
                                        className='text-gray-500'
                                        onClick={() =>
                                          handleDecQuantity(
                                            product.cartQuantity - 1,
                                            product.id,
                                            product.price,
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      <p className='text-gray-500'>Qty {product.cartQuantity}</p>
                                      <button
                                        className='text-gray-500'
                                        onClick={() =>
                                          handleIncQuantity(
                                            product.cartQuantity + 1,
                                            product.id,
                                            product.price,
                                          )
                                        }
                                      >
                                        +
                                      </button>

                                      <div className='flex'>
                                        <button
                                          type='button'
                                          className='font-medium text-indigo-600 hover:text-indigo-500'
                                          onClick={() =>
                                            dispatch(
                                              cartActions.removeCartProduct({
                                                id: product.id,
                                                cartQuantity: product.cartQuantity,
                                                price: product.price,
                                              }),
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                        {!cart.length && <div>Your cart is empty</div>}
                      </div>
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>${cartTotal}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                        <a
                          href='#'
                          className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                          Checkout
                        </a>
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or{' '}
                          <Link to={'/products'}>
                            <button
                              type='button'
                              className='font-medium text-indigo-600 hover:text-indigo-500'
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden='true'> &rarr;</span>
                            </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    // <section>
    //   <div className="bg-[#f2f2f2] h-screen">
    //     <h2 className="text-3xl p-5">Your Cart</h2>
    //     <div className="flex uppercase m-10 text-xl bg-white h-[70%] p-4 rounded-xl">
    //       <div className="w-[65%] overflow-y-auto">
    //         {/* cart header */}
    //         <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
    //           <div className="w-[50%] text-left">product</div>
    //           <div className="w-[50%]">
    //             <ul className="flex justify-evenly">
    //               <li>price</li>
    //               <li>quantity</li>
    //               <li>total</li>
    //             </ul>
    //           </div>
    //           <div className="w-5"></div>
    //         </div>
    //         {/* cart items */}
    //         <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
    //           <div className="w-[50%] text-left flex justify-start my-4 items-center">
    //             <img src="public\p1.jpg" className="h-32" alt=".." />
    //             <div className="ml-4">Italian Stone Pine</div>
    //           </div>
    //           <div className="w-[50%] flex justify-evenly items-center">
    //             <div>$200</div>
    //             <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
    //               <button className="">-</button>1<button>+</button>
    //             </div>
    //             <div className="">$200</div>
    //           </div>
    //           <div className="w-5 pt-[68px]">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
    //           <div className="w-[50%] text-left flex justify-start my-4 items-center">
    //             <img src="public\p1.jpg" className="h-32" alt=".." />
    //             <div className="ml-4">Italian Stone Pine</div>
    //           </div>
    //           <div className="w-[50%] flex justify-evenly items-center">
    //             <div>$200</div>
    //             <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
    //               <button className="">-</button>1<button>+</button>
    //             </div>
    //             <div className="">$200</div>
    //           </div>
    //           <div className="w-5 pt-[68px]">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //         <div className="flex justify-between border-[#e7e7e7] border-b h-max pb-2 mr-3">
    //           <div className="w-[50%] text-left flex justify-start my-4 items-center">
    //             <img src="public\p1.jpg" className="h-32" alt=".." />
    //             <div className="ml-4">Italian Stone Pine</div>
    //           </div>
    //           <div className="w-[50%] flex justify-evenly items-center">
    //             <div>$200</div>
    //             <div className="bg-[#f2f2f2] w-24 p-2 flex justify-between rounded-3xl">
    //               <button className="">-</button>1<button>+</button>
    //             </div>
    //             <div className="">$200</div>
    //           </div>
    //           <div className="w-5 pt-[68px]">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //       {/* order summary */}
    //       <div className=" w-[35%]">
    //         <div className="bg-[#f2f2f2] w-80  m-10 p-6 mb-2">
    //           <div className="border-[#e7e7e7] border-b  text-left pb-4">
    //             order summary
    //           </div>
    //           <div className="border-[#e7e7e7] border-b py-6 text-xs">
    //             <div className="text-left flex  justify-between py-1">
    //               <div>subtotal</div>
    //               <div>$500</div>
    //             </div>
    //             <div className="text-left flex  justify-between py-1">
    //               <div>shipping</div>
    //               <div>free</div>
    //             </div>
    //           </div>
    //           <div className="text-left flex  justify-between  pt-4">
    //             <div>total</div>
    //             <div>$500</div>
    //           </div>
    //         </div>
    //         <div className="bg-[#145333] text-white font-semibold w-80 mx-10 py-3">
    //           <button className="text-lg">CHECK OUT</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
