import React from 'react'
import servicePic1 from "../../assets/homeS1.png";
import servicePic2 from "../../assets/homeS2.png";
import servicePic3 from "../../assets/homeS3.png";
import servicePic4 from "../../assets/homeS4.png";

const Homeservice = () => {

    const services = [
        { id: 1, title: "Free Shipping", description: "Enjoy completely free shipping on all orders above $99 anywhere in the country", image: servicePic1 },
        { id: 2, title: "Cash Back", description: "Not satisfied? Get 100% cash back within 30 days with our money-back guarantee", image: servicePic2 },
        { id: 3, title: "Premium Quality", description: "We source only the highest quality products with strict quality control standards", image: servicePic3 },
        { id: 4, title: "24/7 Support", description:  "Our customer service team is available round the clock to assist you with any queries", image: servicePic4 },
    ];

  return (
    <>
          <section className='py-12 font-font'>
              <div className="container mx-auto px-4">
                  <h2 className='text-[#151875] text-3xl font-bold text-center mb-12'>What Shopex Offer!</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {services.map((service) => (
                          <div key={service.id} className="p-6 text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ">
                                {/* Image Container */}
                              <div className="flex justify-center items-center mb-4">
                              <img src={service.image} alt={service.title} className='h-16 w-auto object-contain'/>
                                </div>
                              <h3 className='text-xl font-bold text-[#151875] mb-2'>{service.title}</h3>
                                <p className='text-sm leading-relaxed text-[#1A0B5B4D] font-semibold pb-2'>{service.description}</p>
                          </div>
                      ))};
                      
                  </div>
            </div>      
      </section>
    </>
  )
}

export default Homeservice
