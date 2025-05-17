import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ShopBanner = () => {
  return (
    <>
          <section className='font-font bg-[#F6F5FF]'>
              <div className="container mx-auto px-6 lg:px-44">
                  <div className="flex-col items-center py-30">
                  <h1 className='text-[#101750] text-[36px] font-bold'>Shop Grid Default</h1>
                  <ul>
                      <li>
                          <Link to='/home' className='text-[#000000]'>
                              Home
                          </Link>
                          <span> . </span>
                          <Link to='/pages' className='text-[#000000]'>
                              Pages
                          </Link>
                          <span> . </span>
                          <span className='text-[#FB2E86]'>Shop Grid Default</span>
                      </li>
                  </ul>
                  </div>
              </div>
      </section>
    </>
  )
}

export default ShopBanner
