import React, { useState } from 'react'
import ButtonCom from './ButtonCom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="fixed z-40 top-0 left-0 w-full bg-[#111318]/70 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="max-w-screen-xl mx-auto px-4 py-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="font-grotesk bg-[#00BFFF] px-2 py-1 text-black rounded-xl text-sm font-bold">AI</span>
                    <h4 className="font-grotesk text-lg font-semibold">INTERVIEW</h4>
                </div>
                <ul className='hidden md:flex text-[#A0AEBF] text-sm items-center gap-10 font-medium'>
                    <li>
                        {/* <a href="" className="hover:text-white transition-colors duration-200">Features</a> */}
                        <HashLink smooth to='/#features' className="hover:text-white transition-colors duration-200">Features</HashLink>
                    </li>
                    <li>
                        {/* <a href="" className="hover:text-white transition-colors duration-200">Pricing</a> */}
                        <HashLink smooth to='/#pricing' className="hover:text-white transition-colors duration-200">Pricing</HashLink>
                        </li>
                    <li>
                        {/* <a href="" className="hover:text-white transition-colors duration-200">Integrations</a> */}
                         <HashLink smooth to='/#integrations' className="hover:text-white transition-colors duration-200">Pricing</HashLink>
                        </li>
                    <li>
                        {/* <a href="" className="hover:text-white transition-colors duration-200">Demo</a> */}
                        <HashLink smooth to='' className="hover:text-white transition-colors duration-200">Demo</HashLink>
                        </li>
                </ul>
                <div className="hidden md:flex items-center gap-4">
                    <ButtonCom btnText="Login" primaryBtn={true} fullWidth={false} />
                    <ButtonCom btnText="Get Started" primaryBtn={false} fullWidth={false} />
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>

            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-5 flex flex-col gap-4 border-t border-white/10 pt-4">

                    <ul className='flex flex-col gap-4 text-[#A0AEBF] text-sm font-medium'>
                        <li><a href="" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Features</a></li>
                        <li><a href="" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Pricing</a></li>
                        <li><a href="" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Integrations</a></li>
                        <li><a href="" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Demo</a></li>
                    </ul>

                    <div className="flex flex-col gap-3 pt-2">
                        <ButtonCom btnText="Login" primaryBtn={true} fullWidth={true} />
                        <ButtonCom btnText="Get Started" primaryBtn={false} fullWidth={true} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar