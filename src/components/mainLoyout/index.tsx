import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/home';
import SingleProduct from '../singleProduct';
import { Products } from '../products';
import ProtectedRoute from '../../protectedRoutes';
import Navbar from '../nabvar';
import Sidebar from '../sidebar';
import { Cart } from '../cart';
import { useState } from 'react';

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
          <Route path='/product' element={<SingleProduct />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default MainLayoutRoutes;
