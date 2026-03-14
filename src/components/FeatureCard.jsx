import React from 'react'
import FeatureCardDetails from '../models/FeatureCardDetails'

const FeatureCard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 py-6'>
            {FeatureCardDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className='p-[1.5px] rounded-[13px] bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20] transition-transform duration-500 ease-out hover:scale-[1.03]'
                        style={{ boxShadow: '0 0 12px #00bfff22' }}
                    >
                        <div className='flex flex-col gap-2 bg-[#111318] px-5 py-8 rounded-[11px] h-full'>
                            <div className="w-10 h-10 bg-[#0f2430] p-2 rounded-xl flex items-center justify-center shrink-0">
                                <Icon size={22} color='#00bfff' />
                            </div>
                            <h3 className='font-grotesk text-lg font-semibold text-white'>{item.heading}</h3>
                            <p className='text-[#707d8f] text-sm leading-relaxed'>{item.subHeading}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FeatureCard