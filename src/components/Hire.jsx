import React from 'react'
import Heading from './Heading'

const Hire = () => {
  return (
    <div className='py-10 max-w-screen-xl mx-auto px-4 border-b border-white/10'>
      <div className='text-center'>
        <Heading
          text='Ready to Transform'
          highlight='Hiring?'
          subText='Join 500+ companies using AI to hire better, faster, smarter.'
        />
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <button className='bg-[#00bfff] border border-[#00bfff48] hover:bg-[#0ba6da] transition-all duration-300 py-3 px-6 text-[#080a0c] font-medium text-base md:text-lg rounded-2xl w-full sm:w-auto'>
            Start Free Trial
          </button>
          <button className='bg-[#080a0c] py-3 px-6 text-white hover:bg-[#00bfff] hover:text-[#080a0c] transition-all duration-300 font-medium text-base md:text-lg rounded-2xl border border-[#00bfff48] w-full sm:w-auto'>
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hire