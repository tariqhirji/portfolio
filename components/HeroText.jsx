import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Socials from "@/components/Socials";
import Typewriter from "@/components/Typewriter";
import { HERO_CONTENT } from "@/constants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-10 max-lg:mt-20 ">
      <Typewriter />
      <h2>{HERO_CONTENT.subtitle}</h2>
      <div className="flex text-white items-center">
        <MdLocationOn size={25} className="mb-1" />
        <h2 className="ml-3 w-full">{HERO_CONTENT.location}</h2>
      </div>
      <Socials />
    </div>
  );
};

export default HeroText;
