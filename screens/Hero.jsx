import Image from "next/image";
import Tariq from "@/public/tariq.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-between bg-[#6c63ff]"
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-semibold">
          Hello World, <br />I am Tariq Hirji
        </h1>
        <Image src={Tariq} alt="tariq" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
