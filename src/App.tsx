import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nabvar";
import MainLayout from "./components/mainLoyout";
import { useState } from "react";
import SideBar from "./components/sidebar";
import SingleProduct from "./components/singleProduct";
import { Products } from "./components/page/products";
import Signin from "./components/forms/signin";
import { Cart } from "./components/cart";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleViewSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleShowCart = () => {
    setOpen(!open);
  };
  return (
    <BrowserRouter>
      {location.pathname !== "/signin" && (
        <Navbar
          handleViewSidebar={handleViewSidebar}
          handleShowCart={handleShowCart}
        />
      )}
      <Cart open={open} setOpen={handleShowCart} />
      <SideBar isOpen={showSidebar} handleViewSidebar={handleViewSidebar} />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/product" element={<SingleProduct />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        {/* <Route
          path="/cart"
          element={<Cart open={open} setOpen={handleShowCart} />}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
