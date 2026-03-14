import React from 'react'
import ButtonCom from './ButtonCom'

const Navbar = () => {
    return (
        <div className="fixed z-40 top-0 left-0 w-full bg-[#111318]/70 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="max-w-screen-xl mx-auto py-4 text-white flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <span className="font-grotesk bg-[#00BFFF] px-2 py-1 text-black rounded-xl text-sm font-bold">AI</span>
                    <h4 className="font-grotesk text-lg font-semibold">INTERVIEW</h4>
                </div>

                <ul className='text-[#A0AEBF] text-sm flex items-center gap-10 font-medium'>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Integrations</a></li>
                    <li><a href="">Demo</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <ButtonCom btnText="Login" primaryBtn={true} fullWidth={false}/>
                    <ButtonCom btnText="Get Started" primaryBtn={false} fullWidth={false}/>
                </div>

            </div>
        </div>
    )
}

export default Navbar
