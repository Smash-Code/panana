'use client';

// import React, { useState, useMemo } from 'react';
// import Image from 'next/image'; // Using next/image for optimization


// // Constants for styling and animation
// const SLIDER_CONSTANTS = {
//     rotationY: 35, // degrees
//     translateXAmount: 170, // px, for horizontal positioning of side images
//     translateZSide: -70, // px, to push side images slightly back
//     scaleSide: 0.75, // Scale factor for side images
//     scaleCenter: 1, // Scale factor for the center image
//     translateZCenter: 90, // px, to bring the center image forward
//     blurValue: '5px', // Blur amount for side images
//     imageWidth: 180, // Base width of an image in px
//     imageHeight: 270, // Base height of an image in px
//     transitionDuration: '700ms', // Speed of the transition
// };

// const ImageSlider = ({ images: propImages }) => {
//     // Ensure we always work with 3 images for this specific design
//     const images = useMemo(() => {
//         if (propImages.length === 0) return [];
//         if (propImages.length === 1) return [propImages[0], propImages[0], propImages[0]]; // Duplicate if only one
//         if (propImages.length === 2) return [propImages[0], propImages[1], propImages[0]]; // Duplicate to make 3
//         return propImages.slice(0, 3); // Take the first 3 if more are provided
//     }, [propImages]);

//     const [selectedIndex, setSelectedIndex] = useState(images.length > 1 ? 1 : 0); // Start with the middle image selected

//     if (images.length === 0) {
//         return <div className="text-white">No images to display.</div>;
//     }

//     const numImages = images.length; // This will be 3 for the intended design

//     const getItemStyle = (index) => {
//         const {
//             rotationY, translateXAmount, translateZSide, scaleSide,
//             scaleCenter, translateZCenter, blurValue, imageWidth, imageHeight
//         } = SLIDER_CONSTANTS;

//         let styleTransform = '';
//         let zIndex = 0;
//         let filter = 'blur(0px)';
//         let itemOpacity = 1;

//         // Base transform for centering the absolutely positioned items
//         const baseTransform = 'translate(-50%, -50%)';

//         if (numImages === 1) { // Special case for a single image
//             styleTransform = `${baseTransform} translateX(0px) translateZ(0px) rotateY(0deg) scale(${scaleCenter})`;
//             zIndex = 1;
//         } else { // Logic for 3 images
//             if (index === selectedIndex) {
//                 styleTransform = `${baseTransform} translateX(0px) translateZ(${translateZCenter}px) rotateY(0deg) scale(${scaleCenter})`;
//                 zIndex = numImages; // Highest z-index for selected
//                 filter = 'blur(0px)';
//             } else if (index === (selectedIndex + 1) % numImages) { // Element to the "visual right"
//                 styleTransform = `${baseTransform} translateX(${translateXAmount}px) translateZ(${translateZSide}px) rotateY(-${rotationY}deg) scale(${scaleSide})`;
//                 zIndex = numImages - 1;
//                 filter = `blur(${blurValue})`;
//             } else { // Element to the "visual left" (index === (selectedIndex - 1 + numImages) % numImages)
//                 styleTransform = `${baseTransform} translateX(-${translateXAmount}px) translateZ(${translateZSide}px) rotateY(${rotationY}deg) scale(${scaleSide})`;
//                 zIndex = numImages - 1;
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

//     // Calculate the approximate width needed for the slider perspective container
//     const perspectiveContainerWidth = useMemo(() => {
//         if (numImages <= 1) return SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter;
//         return (SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter) +
//             (2 * SLIDER_CONSTANTS.translateXAmount * 0.85) + // Adjusted for visual spacing
//             (2 * SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleSide * 0.3); // Part of side images width
//     }, [numImages]);

//     const perspectiveContainerHeight = SLIDER_CONSTANTS.imageHeight * SLIDER_CONSTANTS.scaleCenter + SLIDER_CONSTANTS.translateZCenter;


//     return (
//         <div className="flex items-center justify-center w-full" style={{ perspective: '1200px' }}>
//             <div
//                 className="relative"
//                 style={{
//                     width: `${perspectiveContainerWidth}px`,
//                     height: `${perspectiveContainerHeight}px`,
//                     transformStyle: 'preserve-3d', // Children will respect 3D transformations
//                 }}
//             >
//                 {images.map((image, index) => (
//                     <div
//                         key={image.id + '-' + index} // Ensure key is unique if images are duplicated
//                         className="absolute top-1/2 left-1/2 cursor-pointer"
//                         style={{
//                             ...getItemStyle(index),
//                             transitionProperty: 'transform, filter, opacity',
//                             transitionDuration: SLIDER_CONSTANTS.transitionDuration,
//                             transitionTimingFunction: 'ease-in-out',
//                         }}
//                         onClick={() => numImages > 1 && setSelectedIndex(index)}
//                     >
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             width={SLIDER_CONSTANTS.imageWidth}
//                             height={SLIDER_CONSTANTS.imageHeight}
//                             className="w-full h-full object-cover rounded-xl"
//                             priority={index === selectedIndex} // Prioritize loading the selected image
//                             style={{
//                                 boxShadow: index === selectedIndex
//                                     ? `0 0 35px 8px rgba(255, 223, 186, 0.6)` // Brighter, larger glow for selected
//                                     : `0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.15)`, // Subtle shadow for others
//                                 WebkitBackfaceVisibility: 'hidden', // Prevents flickering during CSS 3D transforms in WebKit browsers
//                                 backfaceVisibility: 'hidden', // Standard property for the same
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;




import React, { useMemo } from 'react';
import Image from 'next/image';



// Constants for styling and animation (can be adjusted)
const SLIDER_CONSTANTS = {
    rotationY: 35,
    translateXAmount: 170,
    translateZSide: -70,
    scaleSide: 0.75,
    scaleCenter: 1,
    translateZCenter: 90,
    blurValue: '5px',
    imageWidth: 180,
    imageHeight: 270,
    transitionDuration: '700ms',
};

const ImageSlider = ({
    images: propImages,
    selectedIndex,
    onImageClick,
}) => {
    // Memoize the array of images to be displayed (always 3 for this design)
    const displayImages = useMemo(() => {
        if (propImages.length === 0) return [];
        if (propImages.length === 1) return [propImages[0], propImages[0], propImages[0]];
        if (propImages.length === 2) return [propImages[0], propImages[1], propImages[0]]; // Use first as third
        return propImages.slice(0, 3); // Take the first 3
    }, [propImages]);

    if (displayImages.length === 0) {
        return <div className="text-white">No images to display.</div>;
    }

    const numDisplayImages = displayImages.length; // This will typically be 3

    const getItemStyle = (indexInDisplayArray) => {
        const {
            rotationY, translateXAmount, translateZSide, scaleSide,
            scaleCenter, translateZCenter, blurValue, imageWidth, imageHeight
        } = SLIDER_CONSTANTS;

        let styleTransform = '';
        let zIndex = 0;
        let filter = 'blur(0px)';
        let itemOpacity = 1;

        const baseTransform = 'translate(-50%, -50%)';

        if (numDisplayImages === 1) { // Should not happen if displayImages logic is correct (always 3 if propImages.length >=1)
            // This case is more for if displayImages itself could be 1.
            // With current displayImages logic, if propImages.length=1, displayImages.length=3.
            // So, effectively, we always operate as if numDisplayImages is 3 if propImages.length >= 1.
            // For safety, if somehow displayImages ended up with 1 item:
            styleTransform = `${baseTransform} translateX(0px) translateZ(0px) rotateY(0deg) scale(${scaleCenter})`;
            zIndex = 1;
        } else { // Logic for 3 images in displayImages
            if (indexInDisplayArray === selectedIndex) {
                styleTransform = `${baseTransform} translateX(0px) translateZ(${translateZCenter}px) rotateY(0deg) scale(${scaleCenter})`;
                zIndex = numDisplayImages;
                filter = 'blur(0px)';
            } else if (indexInDisplayArray === (selectedIndex + 1) % numDisplayImages) { // "Visual right"
                styleTransform = `${baseTransform} translateX(${translateXAmount}px) translateZ(${translateZSide}px) rotateY(-${rotationY}deg) scale(${scaleSide})`;
                zIndex = numDisplayImages - 1;
                filter = `blur(${blurValue})`;
            } else { // "Visual left" (indexInDisplayArray === (selectedIndex - 1 + numDisplayImages) % numDisplayImages)
                styleTransform = `${baseTransform} translateX(-${translateXAmount}px) translateZ(${translateZSide}px) rotateY(${rotationY}deg) scale(${scaleSide})`;
                zIndex = numDisplayImages - 1;
                filter = `blur(${blurValue})`;
            }
        }

        return {
            transform: styleTransform,
            zIndex,
            filter,
            opacity: itemOpacity,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
        };
    };

    const perspectiveContainerWidth = useMemo(() => {
        if (numDisplayImages <= 1 && propImages.length === 1) return SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter;
        // Calculation for 3 items
        return (SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleCenter) +
            (2 * SLIDER_CONSTANTS.translateXAmount * 0.85) +
            (2 * SLIDER_CONSTANTS.imageWidth * SLIDER_CONSTANTS.scaleSide * 0.3);
    }, [numDisplayImages, propImages.length]);

    const perspectiveContainerHeight = SLIDER_CONSTANTS.imageHeight * SLIDER_CONSTANTS.scaleCenter + SLIDER_CONSTANTS.translateZCenter;

    return (
        <div className="flex items-center justify-center w-full" style={{ perspective: '1200px' }}>
            <div
                className="relative"
                style={{
                    width: `${perspectiveContainerWidth}px`,
                    height: `${perspectiveContainerHeight}px`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {displayImages.map((image, index) => (
                    <div
                        key={image.id + '-' + index} // Key includes index in displayImages
                        className="absolute top-1/2 left-1/2 cursor-pointer"
                        style={{
                            ...getItemStyle(index),
                            transitionProperty: 'transform, filter, opacity',
                            transitionDuration: SLIDER_CONSTANTS.transitionDuration,
                            transitionTimingFunction: 'ease-in-out',
                        }}
                        onClick={() => onImageClick(index)} // Pass the index within displayImages
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={SLIDER_CONSTANTS.imageWidth}
                            height={SLIDER_CONSTANTS.imageHeight}
                            className="w-full h-full object-cover rounded-xl"
                            priority={index === selectedIndex}
                            style={{
                                boxShadow: index === selectedIndex
                                    ? `0 0 35px 8px rgba(255, 223, 186, 0.6)`
                                    : `0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.15)`,
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
