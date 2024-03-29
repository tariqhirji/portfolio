import Image from "next/image";
import Tariq from "@/public/tariq.svg";
import HeroText from "@/components/HeroText";
import { FaAnglesDown } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="flex bg-blue dark:bg-dark1 h-full">
      <div className="sectionContainer lg:flex lg:flex-col lg:justify-between">
        <div className="pt-20 lg:pt-12 lg:flex lg:items-center my-auto">
          <HeroText />
          <Image
            src={Tariq}
            alt="tariq"
            width={500}
            height={500}
            className="mx-auto justify-center lg:mx-4 lg:max-2xl:mt-6"
          />
        </div>
        <div className="items-end text-center pb-4">
          <span className="hidden lg:inline-block text-white animate-bounce hover:text-gray dark:hover:text-blue transition duration-150 ease-in">
            <Link href="#experience">
              <FaAnglesDown size={30} />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
