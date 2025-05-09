import Image from "next/image"
const HeroItem = '/assets/images/heroItem.svg'
const Logo = '/assets/icons/panana.svg'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="relative">
            <div className="flex w-full items-center justify-between absolute h-[65px] px-[10px] md:px-[50px] lg:px-[165px]" >
                <div>
                    <Image src={Logo} width={135} height={29} className="w-auto" />
                </div>
                <div className="flex items-center text-[#585858] gap-[8px] md:gap-[24px]" >
                    <div>How it works</div>
                    <div>Benefit</div>
                    <FaXTwitter className="text-[24px]" />
                    <FaDiscord className="text-[24px]" />
                </div>
            </div>
            <div>
                <Image src="/assets/images/hero.svg" width={2880} height={1964} alt="Hero" />
            </div>            <div className="absolute top-[80px] md:top-[100px] lg:top-[125px] mx-auto w-full px-[10px] md:px-[50px] lg:px-[165px]" >
                <div className="text-[40px] md:text-[58px] lg:text-[76px] md:leading-[78px] font-bold text-center mx-auto" >
                    Truth Has Value. <br />
                    Trade it.
                </div>
                <div>
                    <Image src={HeroItem} width={934} height={599} className="w-full h-auto" alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero