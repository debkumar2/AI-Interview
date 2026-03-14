import React from 'react'
import Heading from './Heading'
import { IoMdCheckmark } from 'react-icons/io'
import BrandList from './BrandList'
import ButtonCom from './ButtonCom'

const Brand = () => {
    return (
        <div className='w-full'>
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2">
                <div className='w-full'>
                    <div className="max-w-[395px]">
                        <span className='text-[#00bfff] font-medium text-xs tracking-wide uppercase inline-block pb-4'>White Label</span>
                        <Heading text='Your Brands,' highlight='Our Technology' subText='Complete white-label solution with custom branding, domain, and email templates. Make it 100% yours.' />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6 pb-8'>
                        {BrandList.map((item, index) => (
                            <div className="flex gap-2">
                                <div className="w-5 h-5 rounded-full bg-[#00bfff33] flex items-center justify-center">
                                    <IoMdCheckmark color='white' size={14} />
                                </div>
                                <div>
                                    <p className='text-sm text-[#e1e7ed]'>{item.heading}</p>
                                    <p className='text-xs text-[#707d8f]'>{item.subHeading}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ButtonCom btnText='Get White Label' fullWidth={false} primaryBtn={false} />
                </div>
                <div className='flex justify-center items-center flex-row'>
                    <div
                        className='p-[1.5px] rounded-[13px] bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20] animate-bounce w-fit'
                        style={{
                            boxShadow: '0 0 12px #00bfff22',
                            animationDelay: '0.4s',
                            animationDuration: '4s'
                        }}
                    >
                        <div className='flex flex-col gap-2 bg-[#111318] px-5 py-6 rounded-[11px]'>
                            <div className="flex items-center gap-4">
                                <span className='text-[#00BFFF] font-semibold text-xs bg-[#0e3546]  rounded-xl inline-block p-3'>AC</span>
                                <div>
                                    <h5 className='font-semibold text-sm text-white'>ACME CORP</h5>
                                    <p className='text-xs  text-[#707D8F]'>interviews.acmecorp.com</p>
                                </div>
                            </div>
                            <div className='p-5 max-w-[320px] mt-2 bg-[#1e2229] rounded-xl'>
                                <p className='text-xs font-medium tracking-wider capitalize text-[#707D8F]'>INTERVIEW INVITATION</p>
                                <p className='my-4 text-sm font-medium text-[#D1D9E0]'>Hi Sarah, you've been invited to interview for the Senior Software Engineer position.</p>
                                <ButtonCom btnText='Show Interview' fullWidth={true} primaryBtn={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
