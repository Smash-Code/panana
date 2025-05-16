"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Projects from "./Projects.jsx";
const HeroItem = "/assets/images/heroItem.svg";
const Logo = "/assets/icons/panana.svg";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 20; // Height of your sticky header
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="">
      {/* header  */}
      <div className="mx-auto max-w-[1500px] relative ">
        <div className="flex max-w-[1350px] fixed top-0 z-50 backdrop-blur-md bg-[#FFD974]/10 w-full items-center justify-between absolute h-[65px] px-[10px] md:px-[50px] lg:px-[165px]">
          <div>
            <Image src={Logo} width={135} height={29} className="w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-[#585858] gap-[8px] md:gap-[24px]">
            <div
              onClick={() => scrollToSection("how-it-works")}
              className="cursor-pointer"
            >
              How it works
            </div>
            <div
              onClick={() => scrollToSection("benefits")}
              className="cursor-pointer"
            >
              Benefit
            </div>

            <a href="#" rel="noopener noreferrer">
              <FaXTwitter className="text-[24px]" />
            </a>
            <a href="#" rel="noopener noreferrer">
              <FaDiscord className="text-[24px]" />
            </a>
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
          className={`md:hidden fixed z-50 absolute top-[61px] left-0 right-0 backdrop-blur-md bg-[#FFD974]/10 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col items-center text-[#585858] gap-[16px] py-4 px-[10px]">
            <div
              className="py-2 cursor-pointer"
              onClick={() => scrollToSection("how-it-works")}
            >
              How it works
            </div>
            <div
              className="py-2 cursor-pointer"
              onClick={() => scrollToSection("benefits")}
            >
              Benefit
            </div>
            <div className="flex gap-[24px] py-2">
              <a href="#" rel="noopener noreferrer">
                <FaXTwitter className="text-[24px]" />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaDiscord className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto absolute top-0">
        <Image
          src="/assets/images/hero.svg"
          width={5880}
          height={1964}
          alt="Hero-image"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-[1350px] mx-auto pt-[120px]">
        <div
          data-aos="zoom-in"
          className="text-[40px] md:text-[58px] lg:text-[76px] md:leading-[78px] font-bold text-center mx-auto"
        >
          Truth Has Value. <br />
          Trade it.
        </div>
        <Link
          href="#"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          className="bg-black text-white w-fit mx-auto rounded-[8px] px-[20px] md:px-[27px] py-[6px] md:py-[8px] hover:cursor-pointer mt-[23px] "
        >
          Start Trading Now{" "}
        </Link>
        <div data-aos="fade-up">
          <Image
            src={HeroItem}
            width={934}
            height={800}
            className="w-full h-auto"
            alt="Hero"
            priority
          />
        </div>
      </div>

      {/* <Projects /> */}
    </div>
  );
};

export default Hero;
