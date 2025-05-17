import React from "react";
import ShopContent from "../../src/components/shop/ShopContent";
import ShopBanner from "../../src/components/shop/ShopBanner";
import Topbar from "../../src/components/shared/Topbar";
import Navbar from "../../src/components/shared/Navbar";

const Shoppage = () => {
  return (
    <>
      <Topbar />
      <Navbar/>
      <ShopBanner />
      <ShopContent />
    </>
  );
};

export default Shoppage;
