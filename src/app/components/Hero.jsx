"use client"
import Image from "next/image"
import { useState } from "react";
const HeroItem = '/assets/images/heroItem.svg'
const Logo = '/assets/icons/panana.svg'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from 'react-icons/hi';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* header  */}
            <div className="mx-auto max-w-[1350px] relative ">
                <div className="flex bg-[#FFD974] md:!bg-[#FFD974]/10 w-full items-center justify-between absolute h-[65px] px-[10px] md:px-[50px] lg:px-[165px]">
                    <div>
                        <Image src={Logo} width={135} height={29} className="w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center text-[#585858] gap-[8px] md:gap-[24px]">
                        <div>How it works</div>
                        <div>Benefit</div>
                        <FaXTwitter className="text-[24px]" />
                        <FaDiscord className="text-[24px]" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-[#585858] text-[24px]">
                            {isMenuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown with smooth animation */}
                <div
                    className={`md:hidden absolute top-[65px] left-0 right-0 bg-[#FFD974] shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col items-center text-[#585858] gap-[16px] py-4 px-[10px]">
                        <div className="py-2">How it works</div>
                        <div className="py-2">Benefit</div>
                        <div className="flex gap-[24px] py-2">
                            <FaXTwitter className="text-[24px]" />
                            <FaDiscord className="text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/assets/images/hero.svg" width={2880} height={1964} alt="Hero" />
            </div>
            <div className="absolute  w-full left-1/2 -translate-x-1/2 max-w-[1350px] top-[80px] md:top-[100px] lg:top-[125px] px-[10px] md:px-[50px] lg:px-[165px] xl:px-[0px]" >
                <div data-aos="zoom-in" className="text-[40px] md:text-[58px] lg:text-[76px] md:leading-[78px] font-bold text-center mx-auto" >
                    Truth Has Value. <br />
                    Trade it.
                </div>
                <div data-aos="zoom-in" className="bg-black text-white w-fit mt-[23px] mx-auto rounded-[8px] px-[20px] md:px-[27px] py-[6px] md:py-[8px]" >Start Trading Now</div>

                <div data-aos="fade-up" >
                    <Image src={HeroItem} width={934} height={599} className="w-full h-auto" alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero