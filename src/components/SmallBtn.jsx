import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const SmallBtn = ({ text }) => {
    return (
        <>
            <button className='text-[#707d8f] font-medium text-xs border border-blue-700/10 py-2 px-3 flex items-center gap-2 rounded-4xl'>
                <CiCircleCheck fontSize={15}/>
                {text}
            </button>
        </>
    )
}

export default SmallBtn
