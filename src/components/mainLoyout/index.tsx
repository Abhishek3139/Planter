import { Route, Routes } from 'react-router-dom';
import SingleProduct from '../singleProduct';
import ProtectedRoute from '../../protectedRoutes';
import Navbar from '../nabvar';
import Sidebar from '../sidebar';
import { Cart } from '../cart';
import { useState } from 'react';
import { Home } from '../../page/home';
import { Products } from '../../page/products';
import UserProfile from '../../page/userProfile';
import Orders from '../../page/order';
import AdminAddPlant from '../../page/admin/addPlant';
import AdminDashboard from '../../page/admin';
import AdminOrders from '../../page/admin/allOrders';
import AboutUs from '../../page/aboutUs';
import Favorites from '../../page/favorites';
import Checkout from '../../page/checkout';

function MainLayoutRoutes() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleViewSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleShowCart = () => {
    setOpen(!open);
  };
  return (
    <>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && (
        <Navbar handleViewSidebar={handleViewSidebar} handleShowCart={handleShowCart} />
      )}
      <Cart open={open} setOpen={handleShowCart} />
      <Sidebar isOpen={showSidebar} handleViewSidebar={handleViewSidebar} />
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/profile' element={<UserProfile />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/admin' element={<AdminDashboard />}></Route>
          <Route path='/admin/orders' element={<AdminOrders />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />


          <Route path='/admin/plant' element={<AdminAddPlant />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default MainLayoutRoutes;
