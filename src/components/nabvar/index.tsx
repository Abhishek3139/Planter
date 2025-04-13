import { FiMenu } from 'react-icons/fi';
import { CiSearch, CiUser, CiHeart, CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectTotalCartItems } from '../../store/reducers/cartSlice';
import { FiShoppingCart } from 'react-icons/fi';
import { deleteCookies } from '../../utils/utils';

export interface IAppProps {
  handleViewSidebar: () => void;
  handleShowCart: () => void;
}

function Navbar({ handleViewSidebar, handleShowCart }: IAppProps) {
  const totalCartItems = useAppSelector(selectTotalCartItems);
  const navigate=useNavigate()
  const handleLogout = () => {
    deleteCookies()
    window.location.reload()
    navigate("/")
  };
  return (
    <header>
      <nav className='bg-white shadow-lg'>
        <div className='w-full flex justify-between items-center h-24 px-6'>
          {/* Sidebar Button */}
          <button className='lg:hidden text-2xl' onClick={handleViewSidebar}>
            <FiMenu />
          </button>

          {/* Logo Section */}
          <div className='flex items-center cursor-pointer' onClick={()=>navigate("/")}>
            <h1 className='text-3xl font-semibold text-green-600'>Planter</h1>
          </div>

          {/* Navigation Links */}
          <div className='hidden lg:flex space-x-8 items-center'>
            <Link to='/' className='text-lg font-medium hover:text-green-500'>
              Home
            </Link>
            <Link to='/products' className='text-lg font-medium hover:text-green-500'>
              Products
            </Link>
            <Link to='/orders' className='text-lg font-medium hover:text-green-500'>
              Orders
            </Link>
            <Link to='/blog' className='text-lg font-medium hover:text-green-500'>
              Blog
            </Link>
            <Link to='/page' className='text-lg font-medium hover:text-green-500'>
              Page
            </Link>
          </div>

          {/* Icons Section */}
          <div className='flex items-center space-x-6'>
            {/* Search Icon */}
            <button className='text-2xl text-gray-600 hover:text-green-500'>
              <CiSearch />
            </button>

            {/* User Profile Icon */}
            <Link to='/profile' className='text-2xl text-gray-600 hover:text-green-500'>
              <CiUser />
            </Link>

            {/* Wishlist Icon */}
            <button className='text-2xl text-gray-600 hover:text-green-500'>
              <CiHeart />
            </button>

            {/* Cart Icon */}
            <button
              className='relative text-2xl text-gray-600 hover:text-green-500 p-2 rounded-full'
              onClick={handleShowCart}
            >
              <FiShoppingCart />
              {/* Cart Item Badge */}
              {totalCartItems > 0 && (
                <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center font-semibold'>
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Logout Button */}
            <button className='text-2xl text-gray-600 hover:text-red-600' onClick={handleLogout}>
              <CiLogout />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
