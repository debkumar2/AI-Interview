import React from 'react'

const Footer = () => {
    return (
        <div className='py-8 max-w-screen-xl mx-auto px-4'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                <div className="flex items-center gap-3">
                    <span className="font-grotesk bg-[#00BFFF] px-2 py-1 text-black rounded-xl text-sm font-bold">AI</span>
                    <h4 className="font-grotesk text-base font-semibold text-white">INTERVIEW</h4>
                </div>
                <p className='text-xs text-[#707d8f] text-center sm:text-left'>© 2026 AI Interview. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer