import React from "react";
import sofa from "../../assets/sofa.png";
import sofasBackground from "../../assets/sofasBackground.png";
import bg from "../../assets/bg.png";
import Slider from "react-slick";

const Latest_FeaturePro = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const Latest_FeaturePro_Slide = () => (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-no-repeat bg-center w-full h-[570px] font-font lg:psx-44 px-6 relative"
    >
      <div className="container mx-auto h-full">
        {/* main container */}
        <div className="flex flex-col lg:flex-row justify-between items-center h-full relative">
          {/* Left side-Image container */}
          <div className="lg:w-1/2 w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img
                src={sofasBackground}
                alt="sofas background"
                className="max-w-[80%] max-h-[80%] object-contain opacity-90"
              />
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={sofa}
                alt="sofa"
                className="max-w-[80%] max-h-[80%] object-contain transform lg:translate-x-20"
              />
            </div>
          </div>
          {/* Right side */}
          <div className="lg:w-1/2 w-full lg:pl-8 pl-0 lg:mt-0 mt-8">
            <h2 className="text-[35px] font-bold text-[#151875] mb-6">
              Unique Features Of leatest & Trending Poducts
            </h2>
            <ul className="space-y-4 text-[#ACABC3] font-semibold mb-8">
              <li className="flex items-start">
                <span className="w-3 h-3 rounded-full bg-pink-500 mr-2 mt-1 flex-shrink-0"></span>
                <p>All frames constructed with hardwood solids and laminates</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 rounded-full bg-blue-600 mr-2 mt-1 flex-shrink-0"></span>
                <p>
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 rounded-full bg-teal-400 mr-2 mt-1 flex-shrink-0"></span>
                <p>Arms, backs and seats are structurally reinforced</p>
              </li>
            </ul>
            <div className="flex items-center gap-8">
              <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md hover:bg-[#e02678] transition cursor-pointer font-semibold">
                Add To Cart
              </button>
              <div className="text-[#151875]">
                <h4 className="font-bold">B&B Italian Sofa </h4>
                <h6 className="font-semibold">$100.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Slider {...settings}>
      <Latest_FeaturePro_Slide />
      <Latest_FeaturePro_Slide />
      <Latest_FeaturePro_Slide />
      <Latest_FeaturePro_Slide />
      <Latest_FeaturePro_Slide />
    </Slider>
  );
};

export default Latest_FeaturePro;
