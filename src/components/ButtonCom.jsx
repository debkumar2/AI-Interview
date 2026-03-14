import React from 'react'

const ButtonCom = ({ btnText, primaryBtn,fullWidth }) => {
    return (
        <>
            <button className={`font-bold text-sm py-2 px-3 ${primaryBtn ? 'bg-transparent' : 'bg-[#00BFFF]'} rounded-xl ${primaryBtn ? 'text-[#707D8F]' : 'text-[#1f1f1f]'} font-medium  ${primaryBtn ? 'hover:bg-[#0ba6da] hover:text-white' : 'hover:bg-[#0ba6da]'} transition-all duration-300 ${fullWidth ? 'w-full' :'w-fit'}`}>{btnText}</button>
        </>
    )
}

export default ButtonCom
