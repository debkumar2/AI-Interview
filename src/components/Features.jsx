import React from 'react'
import Heading from './Heading'
import FeatureCard from './FeatureCard'
import ButtonCom from './ButtonCom'

const Features = () => {
    return (
        <div className='py-10 max-w-screen-xl mx-auto px-4'>
            <div className='text-center'>
                <Heading text='Everything You' highlight='Need' subText='Powerful features to streamline technical hiring' />
            </div>
            <FeatureCard />
        </div>
    )
}

export default Features
