// import Image from "next/image"
// const NODIT = '/assets/images/Nodit.svg'
// const Movebit = '/assets/images/Movebit.svg'
// const Coin = '/assets/images/Coinbase.svg'


// const Projects = () => {
//     return (
//         <div className="text-center flex flex-col items-center mx-auto lg:pt-[88px] px-[10px] md:px-[50px] lg:px-[165px]" >
//             <div className="text-[20px]" >
//                 Leading Projects We&apos;re Proud to Back
//             </div>
//             <div className="flex mb-[42px] flex-wrap space-y-[40px] items-center justify-between w-full mt-[26px] md:mt-[32px]" >
//                 <Image src='/assets/images/Aptos.svg' width={162} height={40} alt="APT" />
//                 <Image src={NODIT} width={129} height={40} className="" alt="NODIT" />
//                 <Image src={Movebit} width={217} height={44} className="" alt="Movebit" />
//                 <Image src={Coin} width={250} height={40} className="" alt="Coinbase" />
//             </div>
//         </div>
//     )
// }

// export default Projects

// import Image from "next/image"
// const NODIT = '/assets/images/Nodit.svg'
// const Movebit = '/assets/images/Movebit.svg'
// const Coin = '/assets/images/Coinbase.svg'


// const Projects = () => {
//     return (
//         <div className="text-center flex flex-col items-center mx-auto lg:pt-[88px] px-[10px] md:px-[50px] lg:px-[165px]" >
//             <div className="text-[20px]" >
//                 Leading Projects We&apos;re Proud to Back
//             </div>
//             <div className="flex mb-[42px] flex-wrap justify-between gap-[30px] items-center w-full mt-[26px] md:mt-[32px]" >
//                 <Image
//                     src='/assets/images/Aptos.svg'
//                     width={162}
//                     height={40}
//                     alt="APT"
//                     className="w-[80px] sm:w-[120px] md:w-[162px] h-auto"
//                 />
//                 <Image
//                     src={NODIT}
//                     width={129}
//                     height={40}
//                     alt="NODIT"
//                     className="w-[70px] sm:w-[90px] md:w-[129px] h-auto"
//                 />
//                 <Image
//                     src={Movebit}
//                     width={217}
//                     height={44}
//                     alt="Movebit"
//                     className="w-[110px] sm:w-[170px] md:w-[217px] h-auto"
//                 />
//                 <Image
//                     src={Coin}
//                     width={250}
//                     height={40}
//                     alt="Coinbase"
//                     className="w-[110px] sm:w-[180px] md:w-[250px] h-auto"
//                 />
//             </div>
//         </div>
//     )
// }

// export default Projects
import Image from "next/image"
const NODIT = '/assets/images/Nodit.svg'
const Movebit = '/assets/images/Movebit.svg'
const Coin = '/assets/images/Coinbase.svg'


const Projects = () => {
    return (
        <div className="text-center max-w-[1350px] flex flex-col items-center mt-[30px] lg:mt-[2px] mx-auto px-[10px] md:px-[50px] lg:px-[165px]" >
            <div className="text-[14px] md:text-[20px]" >
                Leading Projects We&apos;re Proud to Back
            </div>
            <div className="flex flex-wrap justify-center md:justify-between gap-x-[30px] gap-y-[40px] items-center w-full mt-[26px] md:mt-[32px] mb-[42px]" >
                <div className="flex justify-center">
                    <Image
                        data-aos="zoom-in"
                        src='/assets/images/Aptos.svg'
                        width={162}
                        height={40}
                        alt="APT"
                        className="w-[90px] sm:w-[140px] md:w-[162px] h-auto"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        data-aos="zoom-in"
                        src={NODIT}
                        width={129}
                        height={40}
                        alt="NODIT"
                        className="w-[70px] sm:w-[110px] md:w-[129px] h-auto"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        data-aos="zoom-in"
                        src={Movebit}
                        width={217}
                        height={44}
                        alt="Movebit"
                        className="w-[130px] sm:w-[190px] md:w-[217px] h-auto"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        data-aos="zoom-in"
                        src={Coin}
                        width={250}
                        height={40}
                        alt="Coinbase"
                        className="w-[140px] sm:w-[220px] md:w-[250px] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
