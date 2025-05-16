import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../home/Latestpro.css";
import "react-tabs/style/react-tabs.css";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";
import img1 from "../../assets/lp1.png";
import img2 from "../../assets/lp2.png";
import img3 from "../../assets/lp3.png";
import img4 from "../../assets/lp4.png";
import img5 from "../../assets/lp5.png";
import img6 from "../../assets/lp6.png";
import sale from "../../assets/sale.png";

const Latestpro = () => {
  // Product data
  const products = {
    newArrival: [
      { id: 1, name: "Comfort Handy Craft", price: 42, oldPrice: 65, img: img1 },
      { id: 2, name: "Modern Chair", price: 55, oldPrice: 80, img: img2 },
      { id: 3, name: "Elegant Chair", price: 120, oldPrice: 150, img: img3 },
      { id: 4, name: "Cozy Sofa", price: 320, oldPrice: 400, img: img4 },
      { id: 5, name: "Stylish Sofa", price: 45, oldPrice: 60, img: img5 },
      { id: 6, name: "Luxury Chair", price: 580, oldPrice: 700, img: img6 },
    ],
    bestSeller: [
      { id: 4, name: "Cozy Sofa", price: 320, oldPrice: 400, img: img4 },
      { id: 5, name: "Stylish Sofa", price: 45, oldPrice: 60, img: img5 },
    ],
    featured: [
      { id: 6, name: "Luxury Chair", price: 580, oldPrice: 700, img: img6 },
      { id: 1, name: "Comfort Handy Craft", price: 42, oldPrice: 65, img: img1 },
    ],
    specialOffer: [
      { id: 2, name: "Modern Chair", price: 55, oldPrice: 80, img: img2 },
      { id: 4, name: "Cozy Sofa", price: 320, oldPrice: 400, img: img4 },
      { id: 6, name: "Luxury Chair", price: 580, oldPrice: 700, img: img6 },
    ],
  };

  return (
    <section className="py-8 font-font">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center py-5">Latest Products</h2>

        <Tabs>
          <TabList className="flex justify-center items-center mb-8 gap-4">
            <Tab className="px-4 py-2 cursor-pointer ">New Arrival</Tab>
            <Tab className="px-4 py-2 cursor-pointer ">Best Seller</Tab>
            <Tab className="px-4 py-2 cursor-pointer">Featured</Tab>
            <Tab className="px-4 py-2 cursor-pointer ">Special Offer</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.newArrival.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-[#F7F7F7] p-6 flex justify-center items-center transition duration-300 group-hover:shadow-lg relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-48 object-contain"
                    />
                    {/* Actions buttons and sale tag */}
                    {/* Sale tag */}
                    <div className="absolute top-2 -left-10 -translate-x-20 group-hover:translate-x-30 transition-all duration-300">
                      <img src={sale} alt="sale" className="w-16 h-16" />
                    </div>

                    {/* Action buttons */}
                    <div className="absolute -left-20 top-2/3 -translate-y-1/2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-30 transition-all duration-300 ">
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <CiShoppingCart />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <GiSelfLove />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <FaSearchPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 font-semibold">
                    <h4 className="text-[#151875] text-lg">{product.name}</h4>
                    <h5 className="text-[#151875]">
                      ${product.price}{" "}
                      <span className="text-[#FB2448] text-sm ml-1">
                        <del>${product.oldPrice}</del>
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.bestSeller.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-[#F7F7F7] p-6 flex justify-center items-center transition duration-300 group-hover:shadow-lg relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-48 object-contain"
                    />
                    {/* Actions buttons and sale tag */}
                    {/* Sale tag */}
                    <div className="absolute top-2 -left-10 -translate-x-20 group-hover:translate-x-30 transition-all duration-300">
                      <img src={sale} alt="sale" className="w-16 h-16" />
                    </div>

                    {/* Action buttons */}
                    <div className="absolute -left-20 top-2/3 -translate-y-1/2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-30 transition-all duration-300 ">
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <CiShoppingCart />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <GiSelfLove />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <FaSearchPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 font-semibold">
                    <h4 className="text-[#151875] text-lg">{product.name}</h4>
                    <h5 className="text-[#151875]">
                      ${product.price}{" "}
                      <span className="text-[#FB2448] text-sm ml-1">
                        <del>${product.oldPrice}</del>
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.featured.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-[#F7F7F7] p-6 flex justify-center items-center transition duration-300 group-hover:shadow-lg relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-48 object-contain"
                    />
                    {/* Actions buttons and sale tag */}
                    {/* Sale tag */}
                    <div className="absolute top-2 -left-10 -translate-x-20 group-hover:translate-x-30 transition-all duration-300">
                      <img src={sale} alt="sale" className="w-16 h-16" />
                    </div>

                    {/* Action buttons */}
                    <div className="absolute -left-20 top-2/3 -translate-y-1/2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-30 transition-all duration-300 ">
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <CiShoppingCart />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <GiSelfLove />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <FaSearchPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 font-semibold">
                    <h4 className="text-[#151875] text-lg">{product.name}</h4>
                    <h5 className="text-[#151875]">
                      ${product.price}{" "}
                      <span className="text-[#FB2448] text-sm ml-1">
                        <del>${product.oldPrice}</del>
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.specialOffer.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-[#F7F7F7] p-6 flex justify-center items-center transition duration-300 group-hover:shadow-lg relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-48 object-contain"
                    />
                    {/* Actions buttons and sale tag */}
                    {/* Sale tag */}
                    <div className="absolute top-2 -left-10 -translate-x-20 group-hover:translate-x-30 transition-all duration-300">
                      <img src={sale} alt="sale" className="w-16 h-16" />
                    </div>

                    {/* Action buttons */}
                    <div className="absolute -left-20 top-2/3 -translate-y-1/2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-30 transition-all duration-300 ">
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <CiShoppingCart />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <GiSelfLove />
                      </button>
                      <button className="bg-[#EEEFFB] p-2 rounded-full text-[#2F1AC4] transition cursor-pointer">
                        <FaSearchPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 font-semibold">
                    <h4 className="text-[#151875] text-lg">{product.name}</h4>
                    <h5 className="text-[#151875]">
                      ${product.price}{" "}
                      <span className="text-[#FB2448] text-sm ml-1">
                        <del>${product.oldPrice}</del>
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Latestpro;
