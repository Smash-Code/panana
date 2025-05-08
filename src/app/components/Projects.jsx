import Image from "next/image"
const NODIT = '/assets/images/Nodit.svg'
const Movebit = '/assets/images/Movebit.svg'
const Coin = '/assets/images/Coinbase.svg'


const Projects = () => {
    return (
        <div className="text-center flex flex-col items-center mx-auto lg:pt-[88px] px-[10px] md:px-[50px] lg:px-[165px]" >
            <div className="text-[20px]" >
                Leading Projects We&apos;re Proud to Back
            </div>
            <div className="grid gird-cols-4 mb-[42px] items-center justify-center mt-[26px] md:mt-[32px]" >
                <img src='/assets/images/APT.png' className="w-[162px] h-[40px] col-span-4 md:col-span-2 lg:col-span-1" alt="APT" />
                <Image src={NODIT} width={129} height={40} className="col-span-4 md:col-span-2 lg:col-span-1" alt="NODIT" />
                <Image src={Movebit} width={217} height={44} className="col-span-4 md:col-span-2 lg:col-span-1" alt="Movebit" />
                <Image src={Coin} width={250} height={40} className="col-span-4 md:col-span-2 lg:col-span-1" alt="Coinbase" />
            </div>
        </div>
    )
}

export default Projects