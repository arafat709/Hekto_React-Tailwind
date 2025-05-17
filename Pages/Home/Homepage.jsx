import React from "react";
import Topbar from "../../src/components/shared/Topbar";
import Navbar from "../../src/components/shared/Navbar";
import Hero from "../../src/components/home/Hero";
import Featuredpro from "../../src/components/home/Featuredpro";
import Latestpro from "../../src/components/home/Latestpro";
import Homeservice from "../../src/components/home/Homeservice";
import Latest_FeaturePro from "../../src/components/home/Latest_FeaturePro";
import Trendingpro from "../../src/components/home/Trendingpro";
import Discount_Items from "../../src/components/home/Discount_Items";

const home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Featuredpro />
      <Latestpro />
      <Homeservice />
      <Latest_FeaturePro />
      <Trendingpro />
      <Discount_Items />
    </>
  );
};

export default home;
