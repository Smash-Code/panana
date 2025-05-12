// 'use client';
// import React, { useMemo } from 'react';
// import Image from 'next/image';



// // Constants for styling and animation (can be adjusted)
// const SLIDER_CONSTANTS = {
//     rotationY: 35,
//     translateXAmount: 170,
//     translateZSide: -70,
//     scaleSide: 0.75,
//     scaleCenter: 1,
//     translateZCenter: 90,
//     blurValue: '5px',
//     imageWidth: 180,
//     imageHeight: 270,
//     transitionDuration: '700ms',
// };

// const ImageSlider = ({
//     images: propImages,
//     selectedIndex,
//     onImageClick,
// }) => {
//     // Memoize the array of images to be displayed (always 3 for this design)
//     const displayImages = useMemo(() => {
//         if (propImages.length === 0) return [];
//         if (propImages.length === 1) return [propImages[0], propImages[0], propImages[0]];
//         if (propImages.length === 2) return [propImages[0], propImages[1], propImages[0]]; // Use first as third
//         return propImages.slice(0, 3); // Take the first 3
//     }, [propImages]);

//     if (displayImages.length === 0) {
//         return <div className="text-white">No images to display.</div>;
//     }

//     const numDisplayImages = displayImages.length; // This will typically be 3

//     const getItemStyle = (indexInDisplayArray) => {
//         const {
//             rotationY, translateXAmount, translateZSide, scaleSide,
//             scaleCenter, translateZCenter, blurValue, imageWidth, imageHeight
//         } = SLIDER_CONSTANTS;

//         let styleTransform = '';
//         let zIndex = 0;
//         let filter = 'blur(0px)';
//         let itemOpacity = 1;

//         const baseTransform = 'translate(-50%, -50%)';

//         if (numDisplayImages === 1) { // Should not happen if displayImages logic is correct (always 3 if propImages.length >=1)
//             // This case is more for if displayImages itself could be 1.
//             // With current displayImages logic, if propImages.length=1, displayImages.length=3.
//             // So, effectively, we always operate as if numDisplayImages is 3 if propImages.length >= 1.
//             // For safety, if somehow displayImages ended up with 1 item:
//             styleTransform = `${baseTransform} translateX(0px) translateZ(0px) rotateY(0deg) scale(${scaleCenter})`;
//             zIndex = 1;
//         } else { // Logic for 3 images in displayImages
//             if (indexInDisplayArray === selectedIndex) {
//                 styleTransform = `${baseTransform} translateX(0px) translateZ(${translateZCenter}px) rotateY(0deg) scale(${scaleCenter})`;
//                 zIndex = numDisplayImages;
//                 filter = 'blur(0px)';
//             } else if (indexInDisplayArray === (selectedIndex + 1) % numDisplayImages) { // "Visual right"
//                 styleTransform = `${baseTransform} translateX(${translateXAmount}px) translateZ(${translateZSide}px) rotateY(-${rotationY}deg) scale(${scaleSide})`;
//                 zIndex = numDisplayImages - 1;
//                 filter = `blur(${blurValue})`;
//             } else { // "Visual left" (indexInDisplayArray === (selectedIndex - 1 + numDisplayImages) % numDisplayImages)
//                 styleTransform = `${baseTransform} translateX(-${translateXAmount}px) translateZ(${translateZSide}px) rotateY(${rotationY}deg) scale(${scaleSide})`;
//                 zIndex = numDisplayImages - 1;
//                 filter = `blur(${blurValue})`;
//             }
//         }

//         return {
//             transform: styleTransform,
//             zIndex,
//             filter,
//             opacity: itemOpacity,
//             width: `${imageWidth}px`,
//             height: `${imageHeight}px`,
//         };
//     };

//     const perspectiveContainerWidth = useMemo(() => {
//         if (numDisplayImages <= 1 && propImages.length === 1) return SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter;
//         // Calculation for 3 items
//         return (SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter) +
//             (2 * SLIDER_CONSTANTS.translateXAmount * 0.85) +
//             (2 * SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleSide * 0.3);
//     }, [numDisplayImages, propImages.length]);

//     const perspectiveContainerHeight = SLIDER_CONSTANTS.imageHeight * SLIDER_CONSTANTS.scaleCenter + SLIDER_CONSTANTS.translateZCenter;

//     return (
//         <div className="flex items-center justify-center w-full" style={{ perspective: '1200px' }}>
//             <div
//                 className="relative"
//                 style={{
//                     width: `${perspectiveContainerWidth}px`,
//                     height: `${perspectiveContainerHeight}px`,
//                     transformStyle: 'preserve-3d',
//                 }}
//             >
//                 {displayImages.map((image, index) => (
//                     <div
//                         key={image.id + '-' + index} // Key includes index in displayImages
//                         className="absolute top-1/2 left-1/2 cursor-pointer"
//                         style={{
//                             ...getItemStyle(index),
//                             transitionProperty: 'transform, filter, opacity',
//                             transitionDuration: SLIDER_CONSTANTS.transitionDuration,
//                             transitionTimingFunction: 'ease-in-out',
//                         }}
//                         onClick={() => onImageClick(index)} // Pass the index within displayImages
//                     >
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             width={SLIDER_CONSTANTS.imageWidth}
//                             height={SLIDER_CONSTANTS.imageHeight}
//                             className="w-full h-full object-cover rounded-xl"
//                             priority={index === selectedIndex}
//                             style={{
//                                 boxShadow: index === selectedIndex
//                                     ? `0 0 35px 8px rgba(255, 223, 186, 0.6)`
//                                     : `0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.15)`,
//                                 WebkitBackfaceVisibility: 'hidden',
//                                 backfaceVisibility: 'hidden',
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;

// image from left and right
'use client';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';

// Constants for styling and animation for smaller screens
const DEFAULT_SLIDER_CONSTANTS = {
    carouselRadius: 200, // Significantly smaller radius for compact view (was 220)
    itemRotationYAdjust: 0,

    scaleCenter: 1, // Center image relative scale
    translateZCenterItem: 5, // Less pop forward (was 10)

    scaleSide: 0.7, // Relative scale for side items (was 0.75)
    blurValueSide: '5px',
    opacitySide: 0.75, // Slightly less opaque (was 0.8)

    scaleFar: 0.55, // Relative scale for far items (was 0.6)
    blurValueFar: '6px',
    opacityFar: 0.45, // Less opaque (was 0.5)

    imageWidth: 160, // Smaller images (was 160)
    imageHeight: 230, // Maintaining aspect ratio (was 240)
    transitionDuration: '700ms', // Can be slightly faster for smaller movements
    platformSize: 150, // Smaller platform (was 200)
    platformColorCore: 'rgba(255, 223, 186, 0.30)', // Less intense glow
    platformColorEdge: 'rgba(255, 223, 186, 0)',
};

// Constants for styling and animation for larger screens
const LARGE_SCREEN_SLIDER_CONSTANTS = {
    carouselRadius: 480, // Very large radius for wide spread (was 450)
    itemRotationYAdjust: 0,

    scaleCenter: 1.2, // More pop for the center image (was 1.15)
    translateZCenterItem: 30, // Pushed further forward (was 25)

    scaleSide: 0.85, // Side items relatively larger (was 0.8)
    blurValueSide: '2px',
    opacitySide: 0.9,

    scaleFar: 0.7, // Far items relatively larger (was 0.65)
    blurValueFar: '4px', // Slightly less blur for better visibility
    opacityFar: 0.65, // More opaque

    imageWidth: 220, // Significantly larger images (was 280)
    imageHeight: 300, // Maintaining aspect ratio (was 420)
    transitionDuration: '800ms',
    platformSize: 420, // Much larger platform (was 380)
    platformColorCore: 'rgba(255, 223, 186, 0.50)', // More intense glow
    platformColorEdge: 'rgba(255, 223, 186, 0)',
};

const LARGE_SCREEN_BREAKPOINT = 1024; // lg
const MEDIUM_SCREEN_BREAKPOINT = 768; // md - Optional intermediate step

const NUM_DISPLAY_ITEMS = 5;
const ANGLE_PER_ITEM = 360 / NUM_DISPLAY_ITEMS;

const ImageSlider = ({
    images: propImages,
    selectedIndex,
    onImageClick,
}) => {
    const [screenSizeCategory, setScreenSizeCategory] = useState('default'); // 'default', 'medium', 'large'

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width >= LARGE_SCREEN_BREAKPOINT) {
                setScreenSizeCategory('large');
            } else if (width >= MEDIUM_SCREEN_BREAKPOINT) {
                // For now, medium will use default, but you can define MEDIUM_SLIDER_CONSTANTS
                setScreenSizeCategory('default'); // Or 'medium' if you add medium constants
            } else {
                setScreenSizeCategory('default');
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const activeConstants = useMemo(() => {
        if (screenSizeCategory === 'large') {
            return LARGE_SCREEN_SLIDER_CONSTANTS;
        }
        // Add 'medium' case here if you implement MEDIUM_SLIDER_CONSTANTS
        return DEFAULT_SLIDER_CONSTANTS;
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

    const carouselRotationY = -selectedIndex * ANGLE_PER_ITEM;

    const getItemStyle = (indexInDisplayArray) => {
        const {
            carouselRadius, itemRotationYAdjust,
            scaleCenter, translateZCenterItem,
            scaleSide, blurValueSide, opacitySide,
            scaleFar, blurValueFar, opacityFar,
            imageWidth, imageHeight
        } = activeConstants;

        const itemAngle = indexInDisplayArray * ANGLE_PER_ITEM;
        let effectiveAngle = (itemAngle + carouselRotationY) % 360;
        if (effectiveAngle > 180) effectiveAngle -= 360;
        if (effectiveAngle < -180) effectiveAngle += 360;

        let scale = scaleFar;
        let blur = blurValueFar;
        let opacity = opacityFar;
        let zIndex = NUM_DISPLAY_ITEMS - 2;
        let itemSpecificTranslateZ = 0;
        let finalItemRotationY = -itemAngle + itemRotationYAdjust;

        const absEffectiveAngle = Math.abs(effectiveAngle);
        const isCenter = absEffectiveAngle < ANGLE_PER_ITEM / 2;

        if (isCenter) {
            scale = scaleCenter;
            blur = 'blur(0px)';
            opacity = 1;
            zIndex = NUM_DISPLAY_ITEMS;
            itemSpecificTranslateZ = translateZCenterItem;
            finalItemRotationY = 0;
        } else if (absEffectiveAngle < ANGLE_PER_ITEM * 1.5) {
            scale = scaleSide;
            blur = `blur(${blurValueSide})`;
            opacity = opacitySide;
            zIndex = NUM_DISPLAY_ITEMS - 1;
        }

        const transform = `
            rotateY(${itemAngle}deg)
            translateZ(${carouselRadius + itemSpecificTranslateZ}px)
            rotateY(${finalItemRotationY}deg)
            scale(${scale})
        `;
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
    const rotatingContainerHeight = activeConstants.imageHeight + 130;

    return (
        <div className="flex lg:pt-[50px] items-center justify-center w-full h-full" style={{ perspective: '1800px', overflow: 'hidden' }}>
            <div
                className="relative"
                style={{
                    width: `${rotatingContainerWidth}px`,
                    height: `${rotatingContainerHeight}px`,
                    transformStyle: 'preserve-3d',
                    transition: `transform ${activeConstants.transitionDuration} ease-in-out, width ${activeConstants.transitionDuration} ease-in-out, height ${activeConstants.transitionDuration} ease-in-out`, // Added width/height transition
                    transform: `translateZ(-${activeConstants.carouselRadius}px) rotateY(${carouselRotationY}deg)`,
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                        width: `${activeConstants.platformSize}px`,
                        height: `${activeConstants.platformSize}px`,
                        background: `radial-gradient(circle, ${activeConstants.platformColorCore} 0%, ${activeConstants.platformColorEdge} 70%)`,
                        transform: `translate(-50%, -50%) translateZ(-20px) translateY(${activeConstants.imageHeight / 2 - 20}px) rotateX(90deg)`,
                        zIndex: 0,
                        transition: `width ${activeConstants.transitionDuration} ease-in-out, height ${activeConstants.transitionDuration} ease-in-out, transform ${activeConstants.transitionDuration} ease-in-out`, // Added transition
                    }}
                />

                {displayImages.map((image, index) => (
                    <div
                        key={image.uniqueId || `${image.id}-${index}-${propImages.length}`}
                        className="absolute top-1/2 left-1/2 cursor-pointer"
                        style={{
                            ...getItemStyle(index),
                            transitionProperty: 'transform, filter, opacity, width, height', // Ensure width and height are part of transition
                            transitionDuration: activeConstants.transitionDuration,
                            transitionTimingFunction: 'ease-in-out',
                        }}
                        onClick={() => onImageClick(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={activeConstants.imageWidth}
                            height={activeConstants.imageHeight}
                            className="w-full h-full object-cover rounded-xl"
                            // Adjust priority logic if needed, this one is fine
                            priority={Math.abs(((index * ANGLE_PER_ITEM + carouselRotationY) % 360)) < ANGLE_PER_ITEM / 2}
                            style={{
                                boxShadow: Math.abs(((index * ANGLE_PER_ITEM + carouselRotationY) % 360)) < ANGLE_PER_ITEM / 2
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

export default ImageSlider;




// 5 images slider with rotation

// 'use client';
// import React, { useMemo, useState, useEffect } from 'react';
// import Image from 'next/image';

// // Constants for styling and animation for smaller screens
// const DEFAULT_SLIDER_CONSTANTS = {
//     carouselRadius: 220, // Radius of the circle the images sit on
//     itemRotationYAdjust: 0, // Adjust item's own Y rotation to face viewer more directly

//     scaleCenter: 1,
//     translateZCenterItem: 10, // Small push forward for the center item from the radius

//     scaleSide: 0.75,
//     blurValueSide: '3px',
//     opacitySide: 0.8,

//     scaleFar: 0.6,
//     blurValueFar: '6px',
//     opacityFar: 0.5,

//     imageWidth: 160,
//     imageHeight: 240,
//     transitionDuration: '800ms', // Slightly longer for smoother rotation
// };

// // Constants for styling and animation for larger screens
// const LARGE_SCREEN_SLIDER_CONSTANTS = {
//     carouselRadius: 320, // Larger radius for wider spread
//     itemRotationYAdjust: 0,

//     scaleCenter: 1.1,
//     translateZCenterItem: 15,

//     scaleSide: 0.85,
//     blurValueSide: '2px',
//     opacitySide: 0.9,

//     scaleFar: 0.7,
//     blurValueFar: '5px',
//     opacityFar: 0.6,

//     imageWidth: 200,
//     imageHeight: 300,
//     transitionDuration: '800ms',
// };

// const LARGE_SCREEN_BREAKPOINT = 1024;
// const NUM_DISPLAY_ITEMS = 5;
// const ANGLE_PER_ITEM = 360 / NUM_DISPLAY_ITEMS; // 72 degrees for 5 items

// const ImageSlider = ({
//     images: propImages,
//     selectedIndex, // This will be 0-4, controlled by parent
//     onImageClick,
// }) => {
//     const [isLargeScreen, setIsLargeScreen] = useState(false);

//     useEffect(() => {
//         const checkScreenSize = () => {
//             setIsLargeScreen(window.innerWidth >= LARGE_SCREEN_BREAKPOINT);
//         };
//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);
//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, []);

//     const activeConstants = useMemo(() => {
//         return isLargeScreen ? LARGE_SCREEN_SLIDER_CONSTANTS : DEFAULT_SLIDER_CONSTANTS;
//     }, [isLargeScreen]);

//     const displayImages = useMemo(() => {
//         if (!propImages || propImages.length === 0) return [];
//         const filledImages = [];
//         for (let i = 0; i < NUM_DISPLAY_ITEMS; i++) {
//             // Ensure unique key if propImages are less than NUM_DISPLAY_ITEMS
//             // The image object itself will be from propImages modulo its length
//             const imageObj = propImages[i % propImages.length];
//             filledImages.push({ ...imageObj, uniqueId: `${imageObj.id}-${i}` });
//         }
//         return filledImages;
//     }, [propImages]);


//     if (displayImages.length === 0) {
//         return <div className="text-white">No images to display.</div>;
//     }

//     // Calculate the rotation for the main carousel container
//     // to bring the selectedIndex to the front (0 degrees).
//     const carouselRotationY = -selectedIndex * ANGLE_PER_ITEM;

//     const getItemStyle = (indexInDisplayArray) => {
//         const {
//             carouselRadius, itemRotationYAdjust,
//             scaleCenter, translateZCenterItem,
//             scaleSide, blurValueSide, opacitySide,
//             scaleFar, blurValueFar, opacityFar,
//             imageWidth, imageHeight
//         } = activeConstants;

//         const itemAngle = indexInDisplayArray * ANGLE_PER_ITEM;

//         // Determine distance from the "front" (0 degrees after carousel rotation)
//         // The effective angle of this item relative to the viewer
//         let effectiveAngle = (itemAngle + carouselRotationY) % 360;
//         if (effectiveAngle > 180) effectiveAngle -= 360; // Normalize to -180 to 180
//         if (effectiveAngle < -180) effectiveAngle += 360;


//         let scale = scaleFar;
//         let blur = blurValueFar;
//         let opacity = opacityFar;
//         let zIndex = NUM_DISPLAY_ITEMS - 2; // Default for far items
//         let itemSpecificTranslateZ = 0;

//         const absEffectiveAngle = Math.abs(effectiveAngle);

//         if (absEffectiveAngle < ANGLE_PER_ITEM / 2) { // Center item (closest to 0 degrees)
//             scale = scaleCenter;
//             blur = 'blur(0px)';
//             opacity = 1;
//             zIndex = NUM_DISPLAY_ITEMS;
//             itemSpecificTranslateZ = translateZCenterItem;
//         } else if (absEffectiveAngle < ANGLE_PER_ITEM * 1.5) { // Near side items
//             scale = scaleSide;
//             blur = `blur(${blurValueSide})`;
//             opacity = opacitySide;
//             zIndex = NUM_DISPLAY_ITEMS - 1;
//         }
//         // Far items use default values

//         // Transform for each item:
//         // 1. Rotate it to its position on the circle.
//         // 2. Translate it out to the radius.
//         // 3. Apply an additional rotation so it faces the center/viewer.
//         // 4. Apply scaling and other effects.
//         const transform = `
//             rotateY(${itemAngle}deg)
//             translateZ(${carouselRadius + itemSpecificTranslateZ}px)
//             rotateY(${-itemAngle + itemRotationYAdjust}deg)
//             scale(${scale})
//         `;
//         // The base translate(-50%, -50%) is to center the item's origin before these transforms
//         const baseTransform = 'translate(-50%, -50%)';


//         return {
//             transform: `${baseTransform} ${transform}`,
//             zIndex,
//             filter: blur,
//             opacity: opacity,
//             width: `${imageWidth}px`,
//             height: `${imageHeight}px`,
//         };
//     };

//     // Container width/height needs to be large enough to contain the rotated carousel
//     // This is an approximation. The actual perceived width depends on perspective.
//     const perspectiveContainerSize = useMemo(() => {
//         const { carouselRadius, imageWidth, scaleCenter } = activeConstants;
//         // Diameter of carousel + width of an image
//         return (carouselRadius * 2) + (imageWidth * scaleCenter);
//     }, [activeConstants]);


//     return (
//         <div className="flex items-center justify-center w-full h-full" style={{ perspective: '1800px', overflow: 'hidden' }}> {/* Increased perspective, overflow hidden */}
//             <div
//                 className="relative"
//                 style={{
//                     width: `${activeConstants.imageWidth}px`, // Container is effectively the size of one item at the center
//                     height: `${activeConstants.imageHeight}px`,
//                     transformStyle: 'preserve-3d',
//                     transition: `transform ${activeConstants.transitionDuration} ease-in-out`,
//                     transform: `translateZ(-${activeConstants.carouselRadius}px) rotateY(${carouselRotationY}deg)`,
//                 }}
//             >
//                 {displayImages.map((image, index) => (
//                     <div
//                         // key={image.uniqueId} // Use the uniqueId created in displayImages
//                         key={image.id + '-' + index + '-' + propImages.length} // Fallback key
//                         className="absolute top-1/2 left-1/2 cursor-pointer" // Items are positioned relative to this rotating container
//                         style={{
//                             ...getItemStyle(index),
//                             transitionProperty: 'transform, filter, opacity, width, height',
//                             transitionDuration: activeConstants.transitionDuration,
//                             transitionTimingFunction: 'ease-in-out',
//                         }}
//                         onClick={() => onImageClick(index)}
//                     >
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             width={activeConstants.imageWidth}
//                             height={activeConstants.imageHeight}
//                             className="w-full h-full object-cover rounded-xl"
//                             priority={Math.abs(((index * ANGLE_PER_ITEM + carouselRotationY) % 360)) < ANGLE_PER_ITEM / 2} // Prioritize center-most
//                             style={{
//                                 boxShadow: Math.abs(((index * ANGLE_PER_ITEM + carouselRotationY) % 360)) < ANGLE_PER_ITEM / 2
//                                     ? `0 0 45px 10px rgba(255, 223, 186, 0.65)`
//                                     : `0 8px 12px -3px rgba(0,0,0,0.3), 0 3px 5px -2px rgba(0,0,0,0.15)`,
//                                 WebkitBackfaceVisibility: 'hidden',
//                                 backfaceVisibility: 'hidden',
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;
