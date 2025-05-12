import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Slider from "./Slider";
import SliderImg from "./SliderMain";

const Topic = () => {
    return (
        <div className='mt-[90px] mx-auto max-w-[1350px] sm:mt-[120px] md:mt-[180px] flex flex-col items-center' >
            <div id="benefits" className='bg-[#FFB800] rounded-[6px] text-[12px] px-[10px] py-[2px]' >Product Features</div>
            <div className='text-center mt-[16px]  text-[27px] sm:text-[30px] md:text-[40px] md:leading-[48px]' >Trending Topics – Found <br /> Here First!</div>
            <div className="flex items-center justify-center ">
                <SliderImg />
                {/* <Image data-aos="zoom-in" src="/assets/images/slide.svg" width={900} height={256} alt="Slider" /> */}
            </div>
        </div >
    )
}

export default Topic