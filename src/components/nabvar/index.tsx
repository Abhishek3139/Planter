import { FiMenu } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center h-24 bg-white m-0">
          <button className="text-2xl m-3 lg:hidden">
            <FiMenu />
          </button>
          <ul className="hidden lg:flex lg:justify-between">
            <li className="mx-2 my-3">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="mx-2 my-3">SHOP</li>
            <li className="mx-2 my-3">PRODUCTS</li>
            <li className="mx-2 my-3">BLOG</li>
            <li className="mx-2 my-3">PAGE</li>
          </ul>
          <h1 className="w-full text-5xl  m-2">Planter</h1>
          <button className="hidden my-1 mx-2 lg:block text-2xl">
            <CiSearch />
          </button>
          <button className="hidden my-3 mx-2 lg:block text-2xl">
            <CiUser />
          </button>
          <button className="hidden my-3 mx-2 lg:block text-2xl ">
            <CiHeart />
          </button>
          <button className="text-2xl my-3 mx-2">
            <HiShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
