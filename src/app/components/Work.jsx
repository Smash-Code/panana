import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div className=' mx-auto max-w-[1550px] mt-[0px] md:mt-[90px] pt-[90px] md:pt-[180px] px-[10px]  md:px-[50px] lg:px-[90px]' >
            <div className='text-[30px] md:text-[50px] lg:text-[64px] font-bold text-center mx-auto' >
                How it Works
            </div>
            <div id="how-it-works" className='grid grid-cols-12  mt-[49px] md:mt-[64px] gap-[24px]' >
                <div data-aos="fade-right" className='flex flex-col items-center rounded-[8px] p-[24px] border-2 border-[#FFDF88] bg-[#FFF7D5] col-span-12 md:col-span-6' >
                    {/* heading */}
                    <div className='flex justify-between w-full' >
                        <div className='text-[22px] md:text-[36px] font-bold leading-[36px]' >
                            Turn Knowledge <br />
                            into Profit
                        </div>
                        <div className='text-[12px] px-[10px] bg-[#FFDF88] h-fit w-fit py-[2px] rounded-[6px]' >
                            Earn
                        </div>
                    </div>
                    {/* image */}
                    <div className='my-[30px] md:my-[64px] mx-auto' >
                        <Image src="/assets/images/work1.svg" width={397} height={260} alt="Work" />
                    </div>
                    {/* description */}
                    <div className='w-full' >
                        <div className='w-full  md:w-[64%] ' >

                            Put your insights to work and get rewarded. Predict outcomes, trade on real-world events, and monetize your knowledge. Here, truth isn't just powerful - it's profitable.
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 space-y-[24px]' >
                    {/* first box */}
                    <div className='col-span-12 md:col-span-6 space-y-[24px]' >
                        {/* first box */}
                        <div data-aos="fade-left" className=' grid grid-cols-12 gap-[12px] rounded-[8px] p-[24px] border-2 border-[#FFDF88] bg-[#FFF7D5]' >
                            <div className='h-full flex flex-col justify-between col-span-12 md:col-span-8' >
                                <div className='text-[12px] px-[10px] bg-[#FFDF88] h-fit w-fit py-[2px] rounded-[6px]' >
                                    Truth
                                </div>
                                <div className='mt-[16px]  sm:pr-[20px] text-[22px] md:text-[31px] md:leading-[32px] font-bold ' >
                                    Get Unfiltered,
                                    Accurate Forecasts
                                </div>
                                <div className='mt-[22px] mb-3 md:mb-0' >
                                    Access unbiased predictions powered by the community, free from censorship or centralized influence. Unlike traditional news and polls, our market-driven forecasts are faster, more accurate, and immune to media bias.
                                </div>
                            </div>
                            {/* <div className='col-span-1 hidden md:block' ></div> */}
                            <div className='col-span-12 md:col-span-4 h-full flex items-center justify-center' >
                                <div className='h-full w-full relative'>
                                    <Image
                                        src='/assets/images/work2.svg'
                                        width={580}
                                        height={292}
                                        alt='Work2'
                                        className='object-contain h-full w-full'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* second box */}
                        <div data-aos="fade-left" className=' grid grid-cols-12 gap-[12px] rounded-[8px] p-[24px] border-2 border-[#FFDF88] bg-[#FFF7D5]' >
                            <div className='h-full flex flex-col justify-between col-span-12 md:col-span-8' >
                                <div className='text-[12px] px-[10px] bg-[#FFDF88] h-fit w-fit py-[2px] rounded-[6px]' >
                                    Voice
                                </div>
                                <div className='mt-[16px] sm:pr-[20px] text-[22px] md:text-[31px] md:leading-[32px] font-bold ' >
                                    Get Unfiltered,
                                    Accurate Forecasts
                                </div>
                                <div className='mt-[22px]  mb-3 md:mb-0' >
                                    Access unbiased predictions powered by the community, free from censorship or centralized influence. Unlike traditional news and polls, our market-driven forecasts are faster, more accurate, and immune to media bias.
                                </div>
                            </div>
                            {/* <div className='col-span-1 hidden md:block' ></div> */}
                            <div className='col-span-12 md:col-span-4' >
                                <Image src='/assets/images/work3.svg' width={680} height={981} alt='Work2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work