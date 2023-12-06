import { MdLocationOn } from "react-icons/md";
import Socials from "@/components/Socials";
import Typewriter from "@/components/Typewriter";
import { HERO_CONTENT } from "@/constants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-6 xl:gap-10 lg:mt-20">
      <Typewriter />
      <h2 className="text-black dark:text-secondary">
        {HERO_CONTENT.subtitle}
      </h2>
      <div className="flex text-white dark:text-slate items-center">
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
