import React from 'react'

const Heading = ({ text, highlight, subText }) => {
    return (
        <div>
            <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-4'>{text} <span className='bg-gradient-to-r from-[#00BFFF] to-[#0ba6da] 
bg-clip-text text-transparent drop-shadow-[0_0_4px_#00BFFF]'>{highlight}</span></h2>
            <p className='text-lg my-6 text-[#707D8F] font-medium'>{subText}</p>
        </div>
    )
}

export default Heading
