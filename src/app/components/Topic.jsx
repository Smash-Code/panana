import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Slider from "./Slider";
import SliderImg from "./SliderMain";

const Topic = () => {
    return (
        <div id="benefits" className=' mx-auto max-w-[1350px] mt-[45px] sm:mt-[60px] md:mt-[90px] flex flex-col items-center' >
            <div className='bg-[#FFB800] mt-[45px] sm:mt-[60px] md:mt-[90px]  rounded-[6px] relative text-[12px] px-[10px] py-[2px]' >Product Features</div>
            <div className='text-center mt-[16px]  text-[27px] relative sm:text-[30px] md:text-[40px] md:leading-[48px] ' >Trending Topics – Found <br /> Here First!</div>
            <div className="flex items-center justify-center ">
                <SliderImg />
            </div>
        </div >
    )
}

export default Topic