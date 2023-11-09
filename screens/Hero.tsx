import Image from "next/image";
import Tariq from "@/public/tariq.svg";
import HeroText from "@/components/HeroText";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-between bg-blue">
      <div className="container mx-auto px-3 lg:flex lg:items-center lg:justify-between">
        <HeroText />
        <Image
          src={Tariq}
          alt="tariq"
          width={500}
          height={500}
          className="lg:mx-4"
        />
      </div>
    </section>
  );
};

export default Hero;
