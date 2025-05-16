import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Discount_Items = () => {
  return (
    <>
      <section>
        <div className="container mx-auto font-font">
          <h1 className="text-3xl font-bold text-center py-5 text-[#151875]">Discount Item</h1>
          <Tabs>
            <TabList className="flex justify-center space-x-4">
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Discount_Items;
