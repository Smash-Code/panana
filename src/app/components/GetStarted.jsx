import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="bg-[#FFB903] max-w-[1350px] mt-[90px] md:mt-[180px] space-y-[24px] p-[24px] mx-auto md:mx-[50px] lg:mx-[165px] xl:mx-auto text-center ">
      <div
        data-aos="fade-down"
        className="text-[29px] sm:text-[38px] md:text-[48] font-semibold md:font-bold"
      >
        Get Started With Panana.
      </div>
      <div data-aos="zoom-in" className="text-[14px] md:text-[16px]">
        Explore a new realm of efficiency and success.
      </div>
      <Link
        href="#"
        rel="noopener noreferrer"
        data-aos="fade-up"
        className="hover:cursor-pointer bg-white w-fit mt-[23px] mx-auto rounded-[8px] px-[20px] md:px-[27px] py-[6px] md:py-[8px]"
      >
        Start Trading Now
      </Link>
    </div>
  );
};

export default GetStarted;

