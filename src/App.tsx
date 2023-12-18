import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nabvar";
import MainLayout from "./components/mainLoyout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
