import Image from "next/image";
import Tariq from "@/public/tariq.svg";
import NavbarText from "@/components/NavbarText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-between bg-[#6c63ff]"
    >
      <div className="container mx-auto px-3 lg:flex lg:items-center lg:justify-between">
        <NavbarText />
        <Image
          src={Tariq}
          alt="tariq"
          width={500}
          height={500}
          className="mx-4"
        />
      </div>
    </section>
  );
};

export default Hero;
