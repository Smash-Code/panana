import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Topic = () => {
    return (
        <div className='mt-[90px] sm:mt-[120px] md:mt-[180px] flex flex-col items-center' >
            <div className='bg-[#FFB800] rounded-[6px] text-[12px] px-[10px] py-[2px]' >Product Features</div>
            <div className='text-center mt-[16px] text-[27px] sm:text-[30px] md:text-[40px] md:leading-[48px]' >Trending Topics – Found <br /> Here First!</div>
            <div>
                <Image src="/assets/images/slide.svg" width={900} height={256} alt="Slider" />
            </div>
            <div className="leading-[24px] text-[12px] md:text-[16px] w-[80%] sm:w-[70%] md:w-[49%] text-center" >
                The fastest platform for emerging trends. AI-powered agents detect and create markets instantly, ensuring you see the hottest topics before anyone else. Early markets mean early predictions - leading to sharper insights, better forecasts, and a serious edge in knowledge gathering.
            </div>
            <div className="flex items-center mt-[16px] gap-[12px]" >
                <div className="rounded-full flex items-center justify-center w-[48px] bg-[#FFB800] h-[48px]" >
                    <FaArrowLeftLong className="text-[18px]" />
                </div>
                <div className="rounded-full flex items-center justify-center w-[48px] bg-[#FFB800] h-[48px]" >
                    <FaArrowRight className="text-[18px]" />
                </div>
            </div>
        </div>
    )
}

export default Topic