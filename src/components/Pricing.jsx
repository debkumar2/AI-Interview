import React from 'react'
import Heading from './Heading'

const Pricing = () => {
  return (
     <div className='py-10 max-w-screen-xl mx-auto'>
      <div className='text-center'>
                <Heading text='Simple' highlight='Pricing' subText='Choose your plan. No hidden fees. Cancel anytime.' />
                <div>
                    <button>Monthly</button>
                    <button>Anunal <span>-17%</span></button>
                </div>
            </div>
    </div>
  )
}

export default Pricing
