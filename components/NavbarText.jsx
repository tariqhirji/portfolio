import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Socials from "@/components/Socials";

const NavbarText = () => {
  return (
    <div className="flex flex-col gap-8 max-lg:mt-20 ">
      <h1>
        Hello World, <br /> I am <span className="text-white">Tariq Hirji</span>
      </h1>
      <h2>
        I am a software developer mainly focused on frontend design and
        development.
      </h2>
      <div className="flex text-white items-center">
        <MdLocationOn size={25} className="mb-1" />
        <h2 className="ml-3">Based in Toronto, Canada</h2>
      </div>
      <Socials />
    </div>
  );
};

export default NavbarText;
