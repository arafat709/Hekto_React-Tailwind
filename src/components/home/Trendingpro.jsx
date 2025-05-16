import React from "react";
import tp1 from "../../assets/tp1.png";
import tp2 from "../../assets/tp2.png";
import tp3 from "../../assets/tp3.png";
import tp4 from "../../assets/tp4.png";
import tpB1 from "../../assets/tpB1.png";
import tpB2 from "../../assets/tpB2.png";
import tpB3 from "../../assets/tpB3.png";
import tpB4 from "../../assets/tpB4.png";
import tpB5 from "../../assets/tpB5.png";

const Trendingpro = () => {
  const trendingProducts = [
    {
      id: 1,
      title: "Gray & Pink Chair",
      oldPrice: 200,
      newPrice: 150,
      image: tp1,
    },
    {
      id: 2,
      title: "Red Eames-Style Chair",
      oldPrice: 200,
      newPrice: 150,
      image: tp2,
    },
    {
      id: 3,
      title: "White & Red Futuristic Chair",
      oldPrice: 200,
      newPrice: 150,
      image: tp3,
    },
    {
      id: 4,
      title: "Black & Red Sculpted Chair",
      oldPrice: 200,
      newPrice: 150,
      image: tp4,
    },
  ];

  return (
    <>
      <section className="px-4 py-12 sm:px-4 md:px-8">
        <div className="container mx-auto font-font">
          <h2 className="text-3xl font-bold text-center pb-10 md:pb-12 lg:pb-10 py-5 text-[#151875]">
            Trending Products
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-10">
            {trendingProducts.map((trending) => (
              <div
                key={trending.id}
                className="text-center shadow-md hover:shadow-lg rounded-lg p-4 bg-white transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gray-100 p-4 ">
                  <img
                    src={trending.image}
                    alt={trending.title}
                    className="mx-auto h-58 object-contain"
                  />
                </div>
                <h3 className="text-[#151875] font-semibold mt-4 text-lg">
                  {trending.title}
                </h3>
                <div className="mt-1">
                  <span className="text-[#151875] text-lg font-bold">
                    ${trending.newPrice}
                  </span>
                  <span className="text-[#1518754D] line-through ml-2 text-base">
                    <del>${trending.oldPrice}</del>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom's Content */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 md:gap-8 lg:gap-10 mt-10">
            {/* Promo banners */}
            {[
              { img: tpB1, title: "23% off in all products", link: "Shop Now" },
              {
                img: tpB2,
                title: "23% off in all products",
                link: "View Collection",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#EEEFFB] rounded-lg p-6 md:p-8 flex flex-col h-[276px]"
              >
                <h3 className="text-xl font-bold text-[#151875]">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="text-[#FB2E86] font-medium underline hover:underline"
                >
                  {item.link}
                </a>
                <div className="flex justify-end mt-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-40 object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Product List */}
            <div className="grid gap-3  h-[276px]">
              {[
                { img: tpB3, title: "Nordic Curve Chair", price: 250 },
                { img: tpB4, title: "Oak Comfort Armchair", price: 150 },
                { img: tpB5, title: "Minimalist Backrest Stool", price: 250 },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 flex items-center shadow-sm hover:shadow-md transition-shadow h-[84px]"
                >
                  <div className="bg-[#F5F6F8] p-2 rounded mr-4 flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-12 max-w-12 object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-[#151875]">
                      {product.title}
                    </h4>
                    <span className="text-[#1518754D] line-through text-sm">
                      <del>${product.price}.00</del>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trendingpro;
