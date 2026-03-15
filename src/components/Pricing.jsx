import React, { useState } from 'react'
import Heading from './Heading'

const plans = {
  monthly: [
    {
      name: 'Free', price: '0', period: '/mo', sub: '5 interviews/month',
      features: ['5 Interviews per month', 'Basic AI Interview Questions', 'Standard Proctoring', 'Email Reports', 'Community Support'],
      btnText: 'Start Free', btnStyle: 'outline', popular: false,
    },
    {
      name: 'Basic', price: '1,200', period: '/mo', sub: '20 interviews/month',
      features: ['20 Interviews per month', 'Advanced AI Questions', 'Camera Proctoring', 'DSA Coding Challenges', 'Custom Branding', 'Email & Chat Support', 'Detailed Analytics'],
      btnText: 'Get Started', btnStyle: 'outline', popular: false,
    },
    {
      name: 'Advanced', price: '5,000', period: '/mo', sub: '100 interviews/month',
      features: ['100 Interviews per month', 'Everything in Basic', 'White Label Solution', 'Webhook Integration', 'Custom Email Templates', 'Multi-language Support', 'Priority Support', 'API Access'],
      btnText: 'Get Started', btnStyle: 'primary', popular: true,
    },
    {
      name: 'Pro', price: '10,000', period: '/mo', sub: '250 interviews/month',
      features: ['250 Interviews per month', 'Everything in Advanced', 'Dedicated Account Manager', 'Custom Integrations', 'SLA Guarantee', 'Advanced Analytics & Insights', '24/7 Premium Support', 'Custom AI Model Training'],
      btnText: 'Contact Sales', btnStyle: 'outline', popular: false,
    },
  ],
  annual: [
    {
      name: 'Free', price: '0', period: '/mo', sub: '5 interviews/month',
      features: ['5 Interviews per month', 'Basic AI Interview Questions', 'Standard Proctoring', 'Email Reports', 'Community Support'],
      btnText: 'Start Free', btnStyle: 'outline', popular: false,
    },
    {
      name: 'Basic', price: '996', period: '/mo', sub: '20 interviews/month',
      features: ['20 Interviews per month', 'Advanced AI Questions', 'Camera Proctoring', 'DSA Coding Challenges', 'Custom Branding', 'Email & Chat Support', 'Detailed Analytics'],
      btnText: 'Get Started', btnStyle: 'outline', popular: false,
    },
    {
      name: 'Advanced', price: '4,150', period: '/mo', sub: '100 interviews/month',
      features: ['100 Interviews per month', 'Everything in Basic', 'White Label Solution', 'Webhook Integration', 'Custom Email Templates', 'Multi-language Support', 'Priority Support', 'API Access'],
      btnText: 'Get Started', btnStyle: 'primary', popular: true,
    },
    {
      name: 'Pro', price: '8,300', period: '/mo', sub: '250 interviews/month',
      features: ['250 Interviews per month', 'Everything in Advanced', 'Dedicated Account Manager', 'Custom Integrations', 'SLA Guarantee', 'Advanced Analytics & Insights', '24/7 Premium Support', 'Custom AI Model Training'],
      btnText: 'Contact Sales', btnStyle: 'outline', popular: false,
    },
  ],
}

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Pricing = () => {
  const [billing, setBilling] = useState('monthly')
  const activePlans = plans[billing]

  return (
    <div className="py-16 max-w-screen-xl mx-auto px-4" id='pricing'>
      <div className="text-center mb-10">
        <Heading text="Simple" highlight="Pricing" subText="Choose your plan. No hidden fees. Cancel anytime." />
      </div>
      <div className="flex justify-center mb-10 md:mb-12">
        <div className="flex items-center bg-[#1A1D25] border border-white/10 rounded-full p-1 gap-1">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              billing === 'monthly' ? 'bg-[#00BFFF] text-black' : 'text-[#707D8F] hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              billing === 'annual' ? 'bg-[#00BFFF] text-black' : 'text-[#707D8F] hover:text-white'
            }`}
          >
            Annual
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${
              billing === 'annual' ? 'bg-black/20 text-black' : 'bg-[#00BFFF]/10 text-[#00BFFF]'
            }`}>
              -17%
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {activePlans.map((plan) => (
          <div
            key={plan.name}
            className={`p-[1.5px] rounded-[13px] transition-transform duration-500 ease-out hover:scale-[1.03] ${
              plan.popular
                ? 'bg-gradient-to-br from-[#00bfff60] via-[#8a5cf650] to-[#00bfff50]'
                : 'bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20]'
            }`}
            style={{ boxShadow: plan.popular ? '0 0 24px #00bfff44' : '0 0 12px #00bfff22' }}
          >
            <div className="relative flex flex-col bg-[#111318] px-5 py-8 rounded-[11px] h-full pt-6">
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-[#00BFFF] text-black text-xs font-bold px-4 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-white font-semibold text-lg mb-3">{plan.name}</h3>

              <div className="flex items-end gap-1 mb-1">
                <span className="text-white text-3xl sm:text-4xl font-bold">₹{plan.price}</span>
                <span className="text-[#707D8F] text-sm mb-1">{plan.period}</span>
              </div>
              <p className="text-[#707D8F] text-sm mb-6">{plan.sub}</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-[#B0BBC8]">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.btnStyle === 'primary'
                    ? 'bg-[#00BFFF] text-black hover:opacity-90 hover:-translate-y-0.5'
                    : 'border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.04]'
                }`}
              >
                {plan.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex items-center justify-center mt-8'>
        <div
          className='p-[1.5px] w-full sm:w-auto rounded-[13px] bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20]'
          style={{ boxShadow: '0 0 12px #00bfff22' }}
        >
          <div className='flex flex-col gap-2 bg-[#111318] px-5 py-6 rounded-[11px] text-center'>
            <h3 className='font-grotesk font-semibold text-lg mb-1 text-[#f0f2f5]'>Need More Interviews?</h3>
            <p className='text-sm mb-4 text-[#707D8F]'>Custom enterprise plans with unlimited interviews</p>
            <div className='flex justify-center'>
              <button className='bg-[#080a0c] py-3 px-6 text-white hover:bg-[#00bfff] hover:text-[#080a0c] transition-all duration-300 font-medium text-sm rounded-2xl border border-[#00bfff48] w-full sm:w-fit'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing