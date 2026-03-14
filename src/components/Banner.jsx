import React from 'react'
import SmallBtn from './SmallBtn'
import BannerCard from './BannerCard'

const Banner = () => {
    return (
        <div className='w-full py-16 md:py-24 px-4'>
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
                <div className="">
                    <div className='text-xs font-semibold border border-[#00BFFF] px-4 py-2 text-[#00bfff] rounded-2xl bg-[#081318] inline uppercase'>
                        <span className='w-2 h-2 inline-block rounded-full bg-[#00BFFF] animate-pulse mr-2'></span>
                        500+ Companies Trust Us
                    </div>

                    <div className="flex flex-col">
                        <div className='max-w-full lg:max-w-[400px]'>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight font-grotesk py-5'>
                                Automate Technical{" "}
                                <span className='bg-gradient-to-r from-[#00BFFF] to-[#0ba6da] bg-clip-text text-transparent drop-shadow-[0_0_4px_#00BFFF]'>
                                    Hiring
                                </span>
                            </h1>
                            <p className='text-base md:text-lg font-medium text-[#707D8F] pb-3'>
                                AI-powered interviews. Live coding. Smart proctoring.
                            </p>
                            <p className='text-base md:text-lg font-semibold text-[#0ba6da] tracking-wide pb-4'>
                                Hire the best, faster.
                            </p>
                        </div>

                        {/* Small Badges */}
                        <div className='flex flex-wrap items-center gap-3'>
                            <SmallBtn text='No Credit Card' />
                            <SmallBtn text='5 Free Interviews' />
                            <SmallBtn text='Instant Setup' />
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8'>
                            <BannerCard num='80%' text='Time Saved' />
                            <BannerCard num='6+' text='Languages' />
                            <BannerCard num='24/7' text='Available' />
                            <BannerCard num='500+' text='Companies' />
                        </div>
                    </div>
                </div>
                <div className="relative h-fit rounded-2xl p-5 md:p-6 bg-[#0f1117] shadow-[0_0_40px_#00bfff15] border border-[#00bfff15]">
                    <h3 className='text-xl md:text-2xl font-semibold text-white font-grotesk tracking-wide'>
                        Book a Demo
                    </h3>
                    <p className='text-sm text-[#707d8f] py-3'>
                        Transform your hiring process today
                    </p>

                    <form className='border-b pb-5 border-b-[#23272f]'>
                        <label className='uppercase text-xs md:text-sm font-semibold tracking-wide text-[#707d8f]'>
                            Full Name *
                        </label>
                        <input
                            type="text"
                            className='w-full bg-[#1e2229] focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 px-3 py-3 md:py-4 text-sm md:text-base font-medium text-[#707d8f] rounded-xl mt-2 mb-4'
                            placeholder='John Doe'
                        />
                        <label className='uppercase text-xs md:text-sm font-semibold tracking-wide text-[#707d8f]'>
                            Mobile Number *
                        </label>
                        <input
                            type="text"
                            className='w-full bg-[#1e2229] focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 px-3 py-3 md:py-4 text-sm md:text-base font-medium text-[#707d8f] rounded-xl mt-2 mb-4'
                            placeholder='+91 98765 43210'
                        />
                        <button className='font-medium w-full text-sm px-3 bg-[#00BFFF] text-black py-3 rounded-xl hover:opacity-90 transition-opacity duration-200'>
                            Book Demo Now
                        </button>
                    </form>

                    <div className='pt-5'>
                        <p className='text-xs text-[#707d8f] uppercase tracking-wide text-center'>
                            Or start with free trial
                        </p>
                        <button className='font-medium w-full text-sm px-3 bg-[#080a0c] text-white py-3 rounded-xl border border-[#707d8f]/40 mt-3 hover:bg-[#00BFFF] hover:text-black hover:border-[#00BFFF] transition-all duration-300'>
                            Start Free Trial
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner