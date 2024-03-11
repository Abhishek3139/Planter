export interface IAppProps {
  handleViewSidebar: () => void;
  handleShowCart: () => void;
}
import { FiMenu } from 'react-icons/fi';
// import { HiShoppingCart } from 'react-icons/hi';
import { CiSearch, CiUser, CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectTotalCartItems } from '../../store/reducers/cartSlice';
// import { useState } from "react";
// import { SideBar } from "../sidebar";
function Navbar({ handleViewSidebar, handleShowCart }: IAppProps) {
  const totalCartItems = useAppSelector(selectTotalCartItems);
  // const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div className='w-full flex justify-between items-center h-24 bg-white m-0'>
          <div className=' lg:w-80'>
            <button className='text-2xl m-3 lg:hidden' onClick={handleViewSidebar}>
              <FiMenu />
            </button>
            <ul className='hidden lg:flex lg:justify-between'>
              <li className='mx-2 my-3'>
                <Link to={'/'}>HOME</Link>
              </li>
              <li className='mx-2 my-3'>SHOP</li>
              <Link to={'/products'}>
                <li className='mx-2 my-3'>PRODUCTS</li>
              </Link>
              <li className='mx-2 my-3'>BLOG</li>
              <li className='mx-2 my-3'>PAGE</li>
            </ul>
          </div>
          <div className='lg:w-80'>
            <h1 className='w-full text-5xl  m-2'>Planter</h1>
          </div>
          <div className='flex justify-center lg:w-80'>
            <button className='hidden my-1 mx-4 lg:block text-2xl'>
              <CiSearch />
            </button>
            <button className='hidden my-3 mx-4 lg:block text-2xl'>
              <CiUser />
            </button>
            <button className='hidden my-3 mx-4 lg:block text-2xl '>
              <CiHeart />
            </button>
            <button
              className='text-2xl my-3 mx-4'
              // onClick={() => navigate("/cart")}
              onClick={handleShowCart}
            >
              <a role='button' className='relative flex'>
                <svg className='flex-1 w-8 h-8 fill-current' viewBox='0 0 24 24'>
                  <path d='M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z' />
                </svg>
                <span className='absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>
                  {totalCartItems}
                </span>
              </a>
              {/* <HiShoppingCart /> */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
