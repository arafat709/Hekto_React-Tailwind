import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <section className="bg-[#7E33E0] font-font lg:block hidden">
        <div className="container mx-auto ">
          <div className="  flex justify-between items-center text-white font-semibold py-2 px-44 text-[14px]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <IoMailSharp />
                <a
                  href="mailto:demomail@gmail.com"
                  className="text-white hover:underline"
                >
                  demomail@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhoneCall />
                <a href="tel:1234567890" className="text-white hover:underline">
                  (12345) 67890
                </a>
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-6">
                <li>
                  <select className="cursor-pointer" name="language" id="">
                    <option value="">English</option>
                    <option value="">বাংলা</option>
                  </select>
                </li>
                <li>
                  <select className="cursor-pointer" name="currency" id="">
                    <option value="">USD</option>
                    <option value="">BDT</option>
                  </select>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                  <p>Login</p>
                  <FiLogIn />
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                  <p>Wishlist</p>
                  <GiSelfLove />
                </li>
                <li>
                  <FaCartArrowDown className="cursor-pointer text-2xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topbar;
