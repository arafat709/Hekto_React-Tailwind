import React from "react";
import "../../components/home/Hero.css";  
import heroBG from "../../assets/heroBackground.png";
import herochair from "../../assets/heroChair.png";
import chairsbg from "../../assets/heroChairsBg.png";
import discount from "../../assets/heroDisc.png";
import lamp from "../../assets/heroLamp.png";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Single slide component to avoid repetition
  const Slide = () => (
    <section
      className="bg-cover bg-no-repeat bg-center w-full h-[570px] font-font lg:px-44 px-6 relative"
      style={{ backgroundImage: `url(${heroBG})` }}
    >
      <div className="container mx-auto h-full">
        <div className="lg:flex lg:justify-between items-center h-full">
          <div className="lg:w-1/2 w-2/3 lg:space-y-3 space-y-2 lg:pt-0 pt-10">
            <img
              className="lg:h-[300px] h-[250px] lg:w-[300px] w-[250px] absolute lg:left-[-50px] left-auto right-[-20px] top-0"
              src={lamp}
              alt="lamp"
            />
            <p className="text-[#FB2E86] font-bold lg:text-[16px] text-[14px]">
              Best Furniture For Your Castle....
            </p>
            <h1 className="lg:text-[39px] text-[29px] font-bold leading-tight">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-[#8A8FB9] font-semibold lg:text-[16px] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="lg:bg-[#FB2E86] bg-transparent capitalize lg:text-white text-[#FB2E86] lg:w-[140px] w-[120px] lg:h-[45px] h-[40px] font-semibold rounded-xs lg:hover:bg-transparent hover:bg-[#FB2E86] lg:hover:text-pink-500 hover:text-white lg:hover:border-2 lg:border-0 border-2 lg:hover:border-pink-500 hover:border-0 transition duration-500 ease-in-out cursor-pointer mt-1">
              shop now
            </button>
          </div>
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <img
              className="relative z-10 lg:h-[430px] h-[300px] w-auto object-contain lg:mt-20"
              src={herochair}
              alt="hero chair"
            />
            <img
              className="absolute lg:right-0 lg:h-[580px] h-[350px] w-auto object-contain z-0"
              src={chairsbg}
              alt="chairs background"
            />
            <img
              className="absolute lg:right-[-40px] right-[150px] lg:top-[80px] top-5 z-20 lg:h-[100px] h-[80px] w-auto object-contain animate-bounce delay-500"
              src={discount}
              alt="discount"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Slider {...settings}>
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Slider>
  );
};

export default Hero;
