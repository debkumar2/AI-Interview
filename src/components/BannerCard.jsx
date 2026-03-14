import React from 'react'

const BannerCard = ({ num, text }) => {
    return (
        <div className='p-[1.5px] rounded-[13px] bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20] transition-transform duration-500 ease-out
  hover:scale-[1.03]'
            style={{ boxShadow: '0 0 12px #00bfff22' }}>
            <div className='flex flex-col gap-2 bg-[#111318] p-4 rounded-[11px]'>
                <h3 className='font-grotesk text-2xl font-bold text-[#00bfff]'>{num}</h3>
                <p className='text-xs text-[#707d8f] tracking-wide uppercase'>{text}</p>
            </div>
        </div>
    )
}

export default BannerCard
