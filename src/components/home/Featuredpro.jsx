import React from "react";
import "../../components/home/Featuredpro.css";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";
import Slider from "react-slick";
import img1 from "../../assets/image 1.png";
import img2 from "../../assets/image 3.png";
import img3 from "../../assets/image 1168.png";
import img4 from "../../assets/image 1169.png";

const Featuredpro = () => {
  const products = [
    { id: 1, img: img1, name: "Modern Chair", code: "Y523201", price: "$42.00" },
    { id: 2, img: img2, name: "Comfy Sofa", code: "Y523202", price: "$120.00" },
    { id: 3, img: img3, name: "Cantilever Chair", code: "Y523203", price: "$85.00" },
    { id: 4, img: img4, name: "Office Chair", code: "Y523204", price: "$65.00" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className=" font-font">
      <div className="container mx-auto px-4">
        <h1 className="text-[#1A0B5B] text-center text-3xl font-bold py-10 pt-20">
          Featured Products
        </h1>
        
        <Slider {...settings} className="px-2">
          {products.map((product) => (
            <div key={product.id} className="px-2"> {/* Add padding between slides */}
              <div className="group h-[370px] w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative">
                {/* Image Container */}
                <div className="relative bg-[#F6F7FB] flex justify-center items-center pt-12 pb-2.5 px-5 h-[230px] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="transition-transform duration-300 group-hover:scale-105 h-full object-contain"
                  />

                  {/* Action Buttons */}
                  <div className="absolute -top-20 -left-20 flex gap-2 transition-all duration-500 ease-out group-hover:top-3 group-hover:left-3">
                    <button className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                      <CiShoppingCart className="text-[#2F1AC4] text-lg cursor-pointer" />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                      <GiSelfLove className="text-[#2F1AC4] text-lg cursor-pointer" />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                      <FaSearchPlus className="text-[#2F1AC4] text-lg" />
                    </button>
                  </div>

                  {/* View Details Button */}
                  <a
                    href="#"
                    className="absolute w-[120px] h-10 bg-[#08D15F] text-white flex justify-center items-center font-semibold text-xs transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-x-1/2 left-1/2 -bottom-16 group-hover:-translate-y-18 rounded-md hover:bg-[#07b955]"
                  >
                    View Details
                  </a>
                </div>

                {/* Content Container */}
                <div className="group-hover:bg-[#2F1AC4] transition-colors duration-300 ease-in-out px-4 pb-4">
                  <div className="text-center py-2.5">
                    <h3 className="text-[#FB2E86] text-lg font-bold group-hover:text-white">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex justify-center gap-1 pb-2.5">
                    <div className="h-1 w-4 bg-[#F701A8] rounded-md"></div>
                    <div className="h-1 w-4 bg-[#05E6B7] rounded-md"></div>
                    <div className="h-1 w-4 bg-[#00009D] rounded-md group-hover:bg-[#FFEAC1]"></div>
                  </div>
                  <div className="text-center pb-2">
                    <h2 className="text-[#151875] text-sm font-semibold group-hover:text-white">
                      Code - {product.code}
                    </h2>
                  </div>
                  <div className="text-center pb-[14px]">
                    <h2 className="text-[#151875] text-sm font-semibold group-hover:text-white">
                      {product.price}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featuredpro;