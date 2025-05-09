'use client';

import { useState, useMemo } from 'react';
import ImageSlider from '../components/Slider'; // Assuming this path is correct
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const initialSliderImages = [
    {
        id: 'img1',
        src: '/assets/images/asset1.svg',
        alt: 'Scenic Landscape 1',
        description: 'The fastest platform for emerging trends. AI-powered agents detect and create markets instantly, ensuring you see the hottest topics before anyone else. Early markets mean early predictions - leading to sharper insights, better forecasts, and a serious edge in knowledge gathering.'
    },
    {
        id: 'img2',
        src: '/assets/images/assets2.svg',
        alt: 'Mountain Valley',
        description: 'The fastest platform for emerging trends. AI-powered agents detect and create markets instantly, ensuring you see the hottest topics before anyone else. Early markets mean early predictions - leading to sharper insights, better forecasts, and a serious edge in knowledge gathering.'
    },
    {
        id: 'img3',
        src: '/assets/images/asset3.svg',
        alt: 'Forest Path',
        description: 'The fastest platform for emerging trends. AI-powered agents detect and create markets instantly, ensuring you see the hottest topics before anyone else. Early markets mean early predictions - leading to sharper insights, better forecasts, and a serious edge in knowledge gathering.'
    },

    // Example with a fourth image, though only first 3 are used by current slider logic for display slots
    // { 
    //     id: 'img4', 
    //     src: '/assets/images/asset4.png', // Assuming you have asset4.png
    //     alt: 'Coastal View', 
    //     description: 'Breathtaking view of the coast with waves crashing against the cliffs.' 
    // },
];

export default function SliderImg() {
    const initialIndex = useMemo(() => {
        if (initialSliderImages.length === 0) return 0;
        return initialSliderImages.length > 0 ? 1 : 0; // Start with middle slot (index 1)
    }, []);

    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    // The ImageSlider component displays 3 images. This is the cycle length for selectedIndex.
    const cycleLength = 3;

    const handleImageClick = (newIndex) => {
        setSelectedIndex(newIndex);
    };

    const handlePrev = () => {
        if (initialSliderImages.length === 0) return;
        setSelectedIndex((prevIndex) => (prevIndex - 1 + cycleLength) % cycleLength);
    };

    const handleNext = () => {
        if (initialSliderImages.length === 0) return;
        setSelectedIndex((prevIndex) => (prevIndex + 1) % cycleLength);
    };

    const currentImageForDescription = useMemo(() => {
        if (initialSliderImages.length === 0) return null;

        // selectedIndex refers to the slot in the 3-image display (0, 1, or 2)
        if (initialSliderImages.length === 1) {
            return initialSliderImages[0]; // Always the first image if only one
        }
        if (initialSliderImages.length === 2) {
            // Slot 0 shows initialImages[0], Slot 1 shows initialImages[1], Slot 2 shows initialImages[0]
            return selectedIndex === 1 ? initialSliderImages[1] : initialSliderImages[0];
        }
        // For 3 or more images, the 3 display slots map directly to the first 3 initial images
        // Slot 0 -> initialImages[0], Slot 1 -> initialImages[1], Slot 2 -> initialImages[2]
        if (selectedIndex >= 0 && selectedIndex < initialSliderImages.length && selectedIndex < 3) {
            return initialSliderImages[selectedIndex];
        }
        // Fallback or if selectedIndex is somehow out of expected range for initialSliderImages < 3
        // This should ideally not be hit if selectedIndex is always 0, 1, or 2.
        // And initialSliderImages.length >= 3 maps directly.
        return initialSliderImages[0]; // Default to first image as a safe fallback

    }, [selectedIndex, initialSliderImages]);

    // Disable navigation if there's only one unique image or no images
    const disableNavigation = initialSliderImages.length <= 1;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4"> {/* Added a bg color for context */}

            {initialSliderImages.length > 0 ? (
                <ImageSlider
                    images={initialSliderImages}
                    selectedIndex={selectedIndex}
                    onImageClick={handleImageClick}
                />
            ) : (
                <div className="text-white text-xl h-[300px] flex items-center justify-center">
                    Please provide images for the slider.
                </div>
            )}

            {/* Description Section */}
            {initialSliderImages.length > 0 && currentImageForDescription && (
                <div className="mt-8 mb-4 w-full max-w-sm sm:max-w-md md:max-w-xl px-4 text-center">
                    <p className="leading-[24px] text-[#52505F] text-[12px] md:text-[16px] min-h-[3em]"> {/* min-h to reduce layout shift */}
                        {currentImageForDescription.description}
                    </p>
                </div>
            )}

            {/* Navigation Buttons Section */}
            {initialSliderImages.length > 0 && (
                <div className="flex items-center mt-[16px] gap-[12px]" >
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
