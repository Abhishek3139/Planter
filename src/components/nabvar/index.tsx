export interface IAppProps {
  handleViewSidebar: () => void;
  handleShowCart: () => void;
}
import { FiMenu } from 'react-icons/fi';
import { HiShoppingCart } from 'react-icons/hi';
import { CiSearch, CiUser, CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
// import { useState } from "react";
// import { SideBar } from "../sidebar";
function Navbar({ handleViewSidebar, handleShowCart }: IAppProps) {
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
              <HiShoppingCart />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
