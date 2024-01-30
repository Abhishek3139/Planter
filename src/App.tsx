import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nabvar";
import MainLayout from "./components/mainLoyout";
import { useState } from "react";
import SideBar from "./components/sidebar";
import SingleProduct from "./components/singleProduct";
import { Products } from "./components/page/products";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleViewSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <BrowserRouter>
      <Navbar handleViewSidebar={handleViewSidebar} />
      <SideBar isOpen={showSidebar} handleViewSidebar={handleViewSidebar} />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/product" element={<SingleProduct />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
