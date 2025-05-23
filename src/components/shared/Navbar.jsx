import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/Hekto.png";
import { IoIosSearch } from "react-icons/io";
import { RiMenuSearchLine } from "react-icons/ri";
import { GiSplitCross } from "react-icons/gi";

const Navbar = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="font-font sticky top-0 z-50 bg-white shadow-sm">
      <header className="container mx-auto ">
        <div className="flex justify-between items-center py-3 lg:px-44 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="pr-4 lg:pr-15">
              <img src={logo} alt="logo" className="h-8" />
            </div>
            <div className="lg:block">
              <ul
                className={`gap-6 cursor-pointer font-semibold flex lg:justify-center lg:items-center${
                  isOpen
                    ? " absolute top-full h-screen left-0 w-[364px] bg-white/30 backdrop-blur-md shadow-md p-6 transition duration-500 ease-in-out"
                    : "absolute hidden transition duration-1000 ease-in-out"
                } flex-col lg:flex-row lg:flex`}
              >
                {isOpen && (
                  <li className="relative">
                    <input
                      className="border border-gray-300 focus:ring-pink-500 focus:border-pink-500 h-10 w-full rounded-md pl-4 pr-10 outline-none"
                      type="text"
                      placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <IoIosSearch className="text-gray-400" />
                    </div>
                  </li>
                )}

                <li>
                  <Link
                    to="/"
                    className="focus:text-pink-500 active:text-pink-500 transition duration-150 block py-2 lg:inline-block lg:py-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="focus:text-pink-500 active:text-pink-500 transition duration-150 block py-2 lg:inline-block lg:py-0"
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="focus:text-pink-500 active:text-pink-500 transition duration-150 block py-2 lg:inline-block lg:py-0"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="focus:text-pink-500 active:text-pink-500 transition duration-150 block py-2 lg:inline-block lg:py-0"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="focus:text-pink-500 active:text-pink-500 transition duration-150 block py-2 lg:inline-block lg:py-0"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 relative">
            <div className="relative hidden lg:block">
              <input
                className="border-1 border-gray-300 shadow-4xl drop-shadow-white-50 h-[30px] w-[250px] outline-one focus:outline-none focus:ring-0 rounded-md pl-4 pr-10"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 lg:right-0 right-8 text-white bg-[#FB2E86] h-[30px] w-[30px] flex justify-center items-center font-bold text-[20px] cursor-pointer rounded-r-md">
                <IoIosSearch className="text-white" />
              </div>
            </div>
            <div className="lg:hidden" onClick={handleMenuToggle}>
              {isOpen ? (
                <GiSplitCross className="text-4xl cursor-pointer" />
              ) : (
                <RiMenuSearchLine className="text-4xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
