import { MdLocationOn } from "react-icons/md";
import Socials from "@/components/Socials";
import Typewriter from "@/components/Typewriter";
import { HERO_CONTENT } from "@/constants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 2xl:gap-10">
      <Typewriter />
      <h2>{HERO_CONTENT.subtitle}</h2>
      <div className="flex text-white items-center">
        <MdLocationOn size={25} className="animate-bounce" />
        <h2 className="ml-3 w-full">{HERO_CONTENT.location}</h2>
      </div>
      <div className="flex justify-center lg:justify-start mb-4">
      <Socials variant="socialIcon_white" shadowColor="shadow-black" />
      </div>
    </div>
  );
};

export default HeroText;
