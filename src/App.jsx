import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Brand from './components/Brand'
import Integration from './components/Integration'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#080a0c] w-full'>
      <Navbar />
      <Banner />
      <Features />
      <Pricing />
      <Brand />
      <Integration />
    </div>
  )
}

export default App
