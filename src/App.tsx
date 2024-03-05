import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from "./components/nabvar";
// import { useState } from "react";
// import SideBar from "./components/sidebar";
import Signin from './components/forms/signin';
// import { Cart } from "./components/cart";
import Signup from './components/forms/signup';
import { ForgotPassword } from './components/forms/forgotPassword';
import MainLayoutRoutes from './components/mainLoyout';

function App() {
  // const [showSidebar, setShowSidebar] = useState(false);
  // const [open, setOpen] = useState(false);

  // const handleViewSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  // const handleShowCart = () => {
  //   setOpen(!open);
  // };
  return (
    <BrowserRouter>
      {/* {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Navbar
          handleViewSidebar={handleViewSidebar}
          handleShowCart={handleShowCart}
        />
      )}
      <Cart open={open} setOpen={handleShowCart} />
      <SideBar isOpen={showSidebar} handleViewSidebar={handleViewSidebar} /> */}
      <Routes>
        <Route path='/' element={<MainLayoutRoutes />} />
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>

        {/* <Route
          path="/cart"
          element={<Cart open={open} setOpen={handleShowCart} />}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
