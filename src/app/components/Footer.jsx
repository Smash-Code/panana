import Image from "next/image"
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=" flex flex-col items-center bg-gradient-to-t from-[#FFCD4B] to-[#FFFBEB] py-[50px] md:py-[100px] px-[80px] md:px-[196px] mt-[90px] md:mt-[180px]" >
            <div>
                <Image src="/assets/images/PananaFooter.svg" width={760} height={200} alt="Footer Logo" />
            </div>
            <div className="mt-[48px] text-[24px] flex items-center gap-[24px] md:gap-[48px] text-[#585858]" >
                <FaXTwitter />
                <FaDiscord />
            </div>
            <div className="mt-[60px] md:mt-[128px] text-[20px]" >
                © 2025 Panana. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer