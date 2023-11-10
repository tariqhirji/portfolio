import Image from "next/image";
import Tariq from "@/public/tariq.svg";
import HeroText from "@/components/HeroText";

const Hero = () => {
  return (
    <section id="hero" className="flex bg-blue h-full">
      <div className="sectionContainer lg:flex lg:flex-col lg:justify-between">
        <div className="lg:flex lg:items-center my-auto">
          <HeroText />
          <Image
            src={Tariq}
            alt="tariq"
            width={500}
            height={500}
            className="lg:mx-4"
          />
        </div>
        <div className="items-end w-full text-center pb-4">scroll down</div>
      </div>
    </section>
  );
};

export default Hero;
