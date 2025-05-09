import Image from "next/image"
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gradient-to-t from-[#FFCD4B] to-[#FFFBEB]" >

            <div className="mx-auto max-w-[1350px] flex flex-col items-center  py-[50px] md:py-[100px] px-[80px] md:px-[196px] mt-[90px] md:mt-[180px]" >
                <div className="w-[200px] h-[50px] md:w-[760px] md:h-[200px] xl:w-[550px] xl:h-[150px]" >
                    <Image data-aos="zoom-in" src="/assets/images/PananaFooter.svg" width={760} height={200} alt="Footer Logo" />
                </div>
                <div data-aos="fade-up" className="mt-[48px] text-[24px] flex items-center gap-[24px] md:gap-[48px] text-[#585858]" >
                    <FaXTwitter />
                    <FaDiscord />
                </div>
                <div className="mt-[60px] text-center md:mt-[128px] text-[12px] sm:text-[16px] md:text-[20px]" >
                    © 2025 Panana. All Rights Reserved.
                </div>
            </div>
        </div>

    )
}

export default Footer