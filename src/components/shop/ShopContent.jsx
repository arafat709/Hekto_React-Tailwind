import React, { useContext } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { RiListView } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { apiData } from "../shared/ContexAPI";

const ShopContent = () => {
  const brands = [
    "Coaster Furniture",
    "Fusion Dot High Fashion",
    "Unique Furniture Restor",
    "Dream Furniture Flipping",
    "Young Repurposed",
    "Green DIY furniture",
  ];
  const discount = ["20% Cashback", "25% Cashback Offer", "20% Discount"];
  const ratings = [
    { stars: "★★★★★", count: 2341 },
    { stars: "★★★★☆", count: 1726 },
    { stars: "★★★☆☆", count: 258 },
    { stars: "★★☆☆☆", count: 25 },
  ];
  const categories = [
    "Prestashop",
    "Magento",
    "Bigcommerce",
    "osCommerce",
    "3dcart",
    "Bags",
    "Accessories",
    "Jewellery",
    "Watches",
  ];
  const price = [
    "$0.00 - $150.00",
    "$150.00 - $350.00",
    "$150.00 - $504.00",
    "$450.00 +",
  ];
  let products = useContext(apiData);
  // console.log(products);

  return (
    <section className="font-font">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start py-10 lg:px-44 px-6 gap-4 lg:items-center">
          <div>
            <h2 className="text-[#151875] text-xl font-bold">
              Ecommerce Accessories & Fashion Item
            </h2>
            <h4 className="text-[#8A8FB9]">
              About 9,620 results (0.62 seconds)
            </h4>
          </div>

          <div className="flex gap-4">
            <ul className="flex flex-wrap gap-4 text-[#3F509E] font-semibold items-center">
              <li className="flex items-center gap-2">
                Per Page:
                <input
                  className="border rounded border-[#E7E6EF] w-14 h-6 px-1"
                  type="number"
                  min="1"
                  defaultValue="10"
                />
              </li>

              <li className="flex items-center gap-2">
                Sort By:
                <select className="border rounded border-[#E7E6EF] w-[75px] h-6 px-1">
                  <option value="">Best Match</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </li>

              <li className="flex items-center gap-2">
                View:
                <div className="flex gap-2">
                  <button
                    className=" hover:text-[#FB2E86] transition-colors  cursor-pointer"
                    aria-label="Grid view"
                  >
                    <HiOutlineViewGridAdd size={20} />
                  </button>
                  <button
                    className=" hover:text-[#FB2E86] transition-colors  cursor-pointer"
                    aria-label="List view "
                  >
                    <RiListView size={20} />
                  </button>
                </div>
                <li className="flex justify-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-[#E7E6EF] rounded px-2 w-[100px] md:w-32 h-6"
                  />
                </li>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:px-44 px-6">
          {/* Filters Section */}
          <div className="w-full lg:w-1/4">
            {/* Product Brand */}
            <div className="pb-4">
              <h1 className="text-[#151875] font-bold pb-2">Product Brand</h1>
              <hr />
            </div>
            <div>
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-violet-100"
                >
                  <div className="w-4 h-4 rounded-sm border flex items-center justify-center bg-violet-100 border-gray-300">
                    {" "}
                    <FaCheck className="w-3 h-3 text-violet-600" />
                  </div>
                  <span className="text-sm text-gray-400 font-semibold">
                    {brand}
                  </span>
                </div>
              ))}
              {/* Discount Item */}
              <div className="mt-5">
                <div className="pb-4">
                  <h1 className="text-[#151875] font-bold pb-2">
                    Discount Offer
                  </h1>
                  <hr />
                </div>
                {discount.map((disc) => (
                  <div
                    key={disc}
                    className="flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-violet-100"
                  >
                    <div className="w-4 h-4 rounded-sm border flex items-center justify-center bg-[hsl(323,100%,93%)] border-gray-300">
                      {" "}
                      <FaCheck className="w-3 h-3 text-[hsl(324,100%,62%)]" />
                    </div>
                    <span className="text-sm text-gray-400 font-semibold">
                      {disc}
                    </span>
                  </div>
                ))}
              </div>
              {/* Rating Item */}
              <div className="mt-5">
                <div className=" pb-4">
                  <h1 className="text-[#151875] font-bold pb-2">Rating Item</h1>
                  <hr />
                </div>
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-violet-100"
                  >
                    <div className="w-4 h-4 rounded-sm border flex items-center justify-center bg-[hsl(45,100%,93%)] border-gray-300">
                      <FaCheck className="w-3 h-3 text-[hsl(45,100%,59%)]" />
                    </div>
                    <span className="text-sm text-[#FFCC2E] font-semibold">
                      {rating.stars}
                    </span>
                    <span className="text-sm text-gray-400 font-bold">
                      ({rating.count})
                    </span>
                  </div>
                ))}
              </div>
              {/* Categories */}
              <div className="mt-5">
                <div className=" pb-4">
                  <h1 className="text-[#151875] font-bold pb-2">Categories</h1>
                  <hr />
                </div>
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-violet-100"
                  >
                    <div className="w-4 h-4 rounded-sm border flex items-center justify-center bg-[hsl(14,100%,93%)] border-gray-300">
                      <FaCheck className="w-3 h-3 text-[hsl(0,65%,59%)]" />
                    </div>
                    <span className="text-sm text-gray-400 font-semibold">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
              {/* Price Filter */}
              <div className="mt-5">
                <div className="pb-4">
                  <h1 className="text-[#151875] font-bold pb-2">
                    Price Filter
                  </h1>
                  <hr />
                </div>
                {price.map((priceRange) => (
                  <div
                    key={priceRange}
                    className="flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-violet-100"
                  >
                    <div className="w-4 h-4 rounded-sm border flex items-center justify-center bg-[hsl(227,73%,93%)] border-gray-300">
                      <FaCheck className="w-3 h-3 text-[hsl(226,52%,60%)]" />
                    </div>
                    <span className="text-sm text-gray-400 font-semibold">
                      {priceRange}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 9).map((product) => (
                <div
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="bg-[#F6F7FB] p-4 h-64 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-[#151875] font-semibold text-lg mb-2 line-clamp-2 h-14">
                      {product.title}
                    </h3>

                    {/* Rating Dots */}
                    <div className="flex gap-1 mb-3">
                      <span className="bg-[#DE9034] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#EC42A2] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#8568FF] w-3 h-3 rounded-full"></span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center">
                      <span className="text-[#151875] font-bold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                      <button className="text-[#FB2E86] hover:text-[#d12670] transition-colors cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContent;
