import React from 'react'
import Heading from './Heading'
import IntegrationCard from './IntegrationCard'
import ButtonCom from './ButtonCom'

const Integration = () => {

    const webhookPayload = `{
  "event": "interview.completed",
  "candidate": "John Doe",
  "score": 85,
  "parameters": {
    "technical": 90,
    "coding": 85,
    "communication": 80
  },
  "report_url": "https://..."
}`

    return (
        <div className='py-10 max-w-screen-xl mx-auto px-4'>
            <div className='text-center'>
                <Heading text='Seamless' highlight='Integrations' subText='Connect with your favorite tools and automate workflow' />
            </div>

            <IntegrationCard />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-12'>
                <div>
                    <h3 className='text-xl md:text-2xl font-bold mb-4 text-white font-grotesk'>
                        Powerful Webhooks
                    </h3>
                    <p className='text-[#707d8f] text-sm md:text-base'>
                        Real-time notifications when interviews complete. Auto-sync with your ATS, CRM, or custom systems.
                    </p>
                    <ul className='flex flex-col gap-3 py-6'>
                        {[
                            'Interview started/completed events',
                            'Real-time report generation',
                            'Custom payload configuration',
                            'Retry mechanism & logging',
                        ].map((item) => (
                            <li key={item} className='flex items-center gap-2 text-sm text-[#d1d9e0]'>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00bfff] shrink-0"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <ButtonCom btnText='Start Integrating' fullWidth={false} primaryBtn={false} />
                </div>
                <div
                    className='p-[1.5px] rounded-[13px] bg-gradient-to-br from-[#00bfff26] via-[#8a5cf623] to-[#00bfff20]'
                    style={{ boxShadow: '0 0 12px #00bfff22' }}
                >
                    <div className="h-full bg-[#111318] rounded-[11px]">
                        <div className='w-full border-b border-white/10 px-4 flex items-center gap-3 py-4'>
                            <div className='flex gap-1.5'>
                                <div className='w-3 h-3 rounded-full bg-[#dc282899]'></div>
                                <div className='w-3 h-3 rounded-full bg-[#00bfff66]'></div>
                                <div className='w-3 h-3 rounded-full bg-[#00bfff33]'></div>
                            </div>
                            <span className='text-xs text-[#707d8f] ml-2 font-mono'>
                                webhook_payload.json
                            </span>
                        </div>
                        <pre className='p-4 md:p-5 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto'>
                            <code className='text-white'>{webhookPayload}</code>
                        </pre>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Integration