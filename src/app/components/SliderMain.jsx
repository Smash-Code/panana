"use client";

import { useState, useMemo } from "react";
import ImageSlider from "../components/Slider"; // Assuming this path is correct
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const initialSliderImages = [
  {
    id: "img1",
    src: "/assets/images/asset1.svg",
    alt: "Scenic Landscape 1",
    description:
      "The fastest platform for emerging trends. AI-powered agents detect and create markets instantly, ensuring you see the hottest topics before anyone else. Early markets mean early predictions - leading to sharper insights, better forecasts, and a serious edge in knowledge gathering.",
  },
  {
    id: "img2",
    src: "/assets/images/assets2.svg",
    alt: "Mountain Valley",
    description:
      "Discover trends before they go mainstream. Our intelligent system tracks conversations across the digital world, identifying breakout moments in real time. Be the first to act with insights that matter — empowering you to predict, pivot, and profit ahead of the crowd",
  },
  {
    id: "img3",
    src: "/assets/images/asset3.svg",
    alt: "Mountain Valley",
    description:
      "Unlock the speed of foresight. Our platform harnesses AI to monitor shifts across industries, surfacing emerging themes instantly. Stay informed with actionable insights as trends evolve — giving you the clarity to lead, the timing to strike, and the confidence to move fast.",
  },
  {
    id: "img4",
    src: "/assets/images/asset1.svg",
    alt: "Forest Path",
    description:
      "Get tomorrow’s insights today. Our AI observes patterns across markets and media, detecting early signals with unmatched precision. Turn noise into foresight with a platform built for clarity, speed, and strategy — because knowing first isn’t just smart, it’s a competitive necessity.",
  },
  {
    id: "img5",
    src: "/assets/images/assets2.svg",
    alt: "Scenic Landscape 1",
    description:
      "Power your decisions with early signals. From global events to online buzz, our tech captures momentum as it builds. Transform raw data into sharp perspective with a system designed for instant awareness — helping you to see the signal from system before it becomes the story.",
  },
];

const NUM_SLIDER_CYCLE_ITEMS = 5; // This MUST match NUM_DISPLAY_ITEMS in Slider.jsx

export default function SliderImg() {

  const initialDisplayIndex = useMemo(() => {
    return Math.floor(NUM_SLIDER_CYCLE_ITEMS / 2);
  }, []);

  // selectedDisplaySlotIndex refers to which of the 5 visual slots (0-4) is currently "center".
  const [selectedDisplaySlotIndex, setSelectedDisplaySlotIndex] =
    useState(initialDisplayIndex);

  const handleImageClick = (clickedSlotIndex) => {
    // When an image in a slot is clicked, that slot becomes the new "center".
    setSelectedDisplaySlotIndex(clickedSlotIndex);
  };

  const handlePrev = () => {
    if (initialSliderImages.length === 0) return;
    setSelectedDisplaySlotIndex(
      (prevIndex) =>
        (prevIndex - 1 + NUM_SLIDER_CYCLE_ITEMS) % NUM_SLIDER_CYCLE_ITEMS,
    );
  };

  const handleNext = () => {
    if (initialSliderImages.length === 0) return;
    setSelectedDisplaySlotIndex((prevIndex) => prevIndex + 1);
  };

  const currentImageForDescription = useMemo(() => {
    if (initialSliderImages.length === 0) return null;


    const actualImageIndexInSourceArray =
      selectedDisplaySlotIndex % initialSliderImages.length;
    return initialSliderImages[actualImageIndexInSourceArray];
  }, [selectedDisplaySlotIndex, initialSliderImages]);

  const disableNavigation = initialSliderImages.length <= 1;

  const shadowColorRgb = "255, 223, 136";
  const shadowBlur = "80px";
  const shadowSpread = "60px";
  const shadowOpacity = 0.55;

  return (
    <main className="flex  flex-col items-center justify-center p-4 overflow-hidden">
      <div
        className="relative flex items-center justify-center w-full"
        style={{ paddingBlock: "10px" }}
      >
        <div
          className="absolute !h-[150px] !w-[150px]  md:!h-[400px] lg:!h-[250px] lg:!w-[250px] md:!w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"
          style={{
            background: "rgba(255, 223, 136 , 0.5)",
            boxShadow: `0 0 ${shadowBlur} ${shadowSpread} rgba(${shadowColorRgb}, ${shadowOpacity})`,
          }}
        />

        {initialSliderImages.length > 0 ? (
          <ImageSlider
            images={initialSliderImages} // Pass the full array of image data
            selectedIndex={selectedDisplaySlotIndex} // This is the index of the *slot* to be centered (0-4)
            onImageClick={handleImageClick} // This callback receives the clicked *slot index*
          />
        ) : (
          <div className="text-white text-xl h-[300px] flex items-center justify-center">
            Please provide images for the slider.
          </div>
        )}
      </div>

      {initialSliderImages.length > 0 && currentImageForDescription && (
        <div className="md:mt-8 mb-4 w-full max-w-sm sm:max-w-lg md:max-w-[56%] px-4 text-center">
          <p className="leading-[24px] text-[#52505F] text-[12px] md:text-[16px] min-h-[3em]">
            {currentImageForDescription.description}
          </p>
        </div>
      )}

      {initialSliderImages.length > 0 && (
        <div className="flex items-center mt-[16px] gap-[12px]">
          <button
            onClick={handlePrev}
            disabled={disableNavigation}
            className="cursor-pointer rounded-full flex items-center justify-center w-[48px] h-[48px] bg-[#FFB800] disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeftLong className="text-[18px] text-black" />
          </button>
          <button
            onClick={handleNext}
            disabled={disableNavigation}
            className="cursor-pointer rounded-full flex items-center justify-center w-[48px] h-[48px] bg-[#FFB800] disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-[18px] text-black" />
          </button>
        </div>
      )}
    </main>
  );
}
