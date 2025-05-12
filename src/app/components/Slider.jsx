


'use client';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';

// Constants for styling and animation for smaller screens
const DEFAULT_SLIDER_CONSTANTS = {
    carouselRadius: 200,
    scaleCenter: 1,
    translateZCenterItem: 5,
    scaleSide: 0.7,
    blurValueSide: '5px',
    opacitySide: 0.75,
    scaleFar: 0.55,
    blurValueFar: '6px',
    opacityFar: 0.45,
    imageWidth: 160,
    imageHeight: 230,
    transitionDuration: '700ms',
    platformSize: 150,
    platformColorCore: 'rgba(255, 223, 186, 0.30)',
    platformColorEdge: 'rgba(255, 223, 186, 0)',
};

// Constants for styling and animation for larger screens
const LARGE_SCREEN_SLIDER_CONSTANTS = {
    carouselRadius: 480,
    scaleCenter: 1.2,
    translateZCenterItem: 30,
    scaleSide: 0.85,
    blurValueSide: '2px',
    opacitySide: 0.9,
    scaleFar: 0.7,
    blurValueFar: '4px',
    opacityFar: 0.65,
    imageWidth: 220,
    imageHeight: 300,
    transitionDuration: '800ms',
    platformSize: 420,
    platformColorCore: 'rgba(255, 223, 186, 0.50)',
    platformColorEdge: 'rgba(255, 223, 186, 0)',
};

const LARGE_SCREEN_BREAKPOINT = 1024; // lg
const MEDIUM_SCREEN_BREAKPOINT = 768; // md

const NUM_DISPLAY_ITEMS = 5;
const ANGLE_PER_ITEM = 360 / NUM_DISPLAY_ITEMS;

const ImageSlider = ({
    images: propImages,
    selectedIndex,
    onImageClick,
}) => {
    const [screenSizeCategory, setScreenSizeCategory] = useState('default');

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width >= LARGE_SCREEN_BREAKPOINT) {
                setScreenSizeCategory('large');
            } else if (width >= MEDIUM_SCREEN_BREAKPOINT) {
                setScreenSizeCategory('default'); // Or 'medium'
            } else {
                setScreenSizeCategory('default');
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const activeConstants = useMemo(() => {
        return screenSizeCategory === 'large'
            ? LARGE_SCREEN_SLIDER_CONSTANTS
            : DEFAULT_SLIDER_CONSTANTS;
    }, [screenSizeCategory]);

    const displayImages = useMemo(() => {
        if (!propImages || propImages.length === 0) return [];
        const filledImages = [];
        for (let i = 0; i < NUM_DISPLAY_ITEMS; i++) {
            const imageObj = propImages[i % propImages.length];
            filledImages.push({ ...imageObj, uniqueId: `${imageObj.id}-${i}` });
        }
        return filledImages;
    }, [propImages]);

    if (displayImages.length === 0) {
        return <div className="text-white">No images to display.</div>;
    }

    // This is the rotation applied to the main carousel container
    const carouselRotationY = -selectedIndex * ANGLE_PER_ITEM;

    const getItemStyle = (indexInDisplayArray) => {
        const {
            carouselRadius,
            scaleCenter, translateZCenterItem,
            scaleSide, blurValueSide, opacitySide,
            scaleFar, blurValueFar, opacityFar,
            imageWidth, imageHeight
        } = activeConstants;

        // This is the angle to position the item on the circle
        const itemAngle = indexInDisplayArray * ANGLE_PER_ITEM;

        // Calculate the effective angle relative to the front for styling (scale, blur, etc.)
        let effectiveAngle = (itemAngle + carouselRotationY) % 360;
        if (effectiveAngle > 180) effectiveAngle -= 360;
        if (effectiveAngle < -180) effectiveAngle += 360;

        // Determine style based on position
        let scale = scaleFar;
        let blur = blurValueFar;
        let opacity = opacityFar;
        let zIndex = NUM_DISPLAY_ITEMS - 2;
        let itemSpecificTranslateZ = 0;

        const absEffectiveAngle = Math.abs(effectiveAngle);
        const isCenter = absEffectiveAngle < ANGLE_PER_ITEM / 2;

        if (isCenter) {
            scale = scaleCenter;
            blur = 'blur(0px)';
            opacity = 1;
            zIndex = NUM_DISPLAY_ITEMS;
            itemSpecificTranslateZ = translateZCenterItem;
        } else if (absEffectiveAngle < ANGLE_PER_ITEM * 1.5) {
            scale = scaleSide;
            blur = `blur(${blurValueSide})`;
            opacity = opacitySide;
            zIndex = NUM_DISPLAY_ITEMS - 1;
        }

        // --- MODIFICATION START ---
        // Calculate the counter-rotation needed to make the item face the viewer.
        // The total rotation affecting the item's orientation is the sum of the
        // carousel's rotation and the item's angle on the carousel.
        // We apply the negative of this total rotation.
        const counterRotationY = -(carouselRotationY + itemAngle);
        // --- MODIFICATION END ---

        // Apply transforms:
        // 1. Rotate item to its position on the circle.
        // 2. Translate it outwards along Z.
        // 3. Apply the counter-rotation to make it face forward again.
        // 4. Scale the item.
        const transform = `
            rotateY(${itemAngle}deg)
            translateZ(${carouselRadius + itemSpecificTranslateZ}px)
            rotateY(${counterRotationY}deg)
            scale(${scale})
        `;

        // Base transform to center the item's origin
        const baseTransform = 'translate(-50%, -50%)';

        return {
            transform: `${baseTransform} ${transform}`,
            zIndex,
            filter: blur,
            opacity: opacity,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
        };
    };

    const rotatingContainerWidth = activeConstants.imageWidth;
    const rotatingContainerHeight = activeConstants.imageHeight + 130; // Adjust as needed

    return (
        <div className="flex lg:pt-[50px] items-center justify-center w-full h-full" style={{ perspective: '1800px', overflow: 'hidden' }}>
            {/* This container rotates the whole carousel */}
            <div
                className="relative"
                style={{
                    width: `${rotatingContainerWidth}px`, // Base width for positioning
                    height: `${rotatingContainerHeight}px`, // Base height for positioning
                    transformStyle: 'preserve-3d',
                    transition: `transform ${activeConstants.transitionDuration} ease-in-out`, // Only transition transform here
                    transform: `translateZ(-${activeConstants.carouselRadius}px) rotateY(${carouselRotationY}deg)`,
                }}
            >
                {/* Platform */}
                <div
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                        width: `${activeConstants.platformSize}px`,
                        height: `${activeConstants.platformSize}px`,
                        background: `radial-gradient(circle, ${activeConstants.platformColorCore} 0%, ${activeConstants.platformColorEdge} 70%)`,
                        // Position platform relative to the rotating container
                        transform: `translate(-50%, -50%) translateZ(-20px) translateY(${activeConstants.imageHeight / 2 - 20}px) rotateX(90deg)`,
                        zIndex: 0,
                        transition: `width ${activeConstants.transitionDuration} ease-in-out, height ${activeConstants.transitionDuration} ease-in-out, transform ${activeConstants.transitionDuration} ease-in-out`,
                    }}
                />

                {/* Image Items */}
                {displayImages.map((image, index) => (
                    <div
                        key={image.uniqueId || `${image.id}-${index}-${propImages.length}`}
                        className="absolute top-1/2 left-1/2 cursor-pointer"
                        style={{
                            ...getItemStyle(index),
                            // Transition properties applied to each item
                            transitionProperty: 'transform, filter, opacity, width, height',
                            transitionDuration: activeConstants.transitionDuration,
                            transitionTimingFunction: 'ease-in-out',
                        }}
                        onClick={() => onImageClick(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={activeConstants.imageWidth} // Use constants for consistency
                            height={activeConstants.imageHeight}
                            className="w-full h-full object-cover rounded-xl block" // Ensure image is block
                            priority={isCenter(index, selectedIndex)} // Simplified priority check
                            style={{
                                boxShadow: isCenter(index, selectedIndex)
                                    ? `0 0 45px 10px rgba(255, 223, 186, 0.65)`
                                    : `0 8px 12px -3px rgba(0,0,0,0.3), 0 3px 5px -2px rgba(0,0,0,0.15)`,
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


const isCenter = (index, selectedIndex) => {

    const displaySlot = (index - selectedIndex + NUM_DISPLAY_ITEMS) % NUM_DISPLAY_ITEMS;

    return index === selectedIndex;
};


export default ImageSlider;
