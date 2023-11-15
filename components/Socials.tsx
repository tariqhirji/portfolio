import { SOCIALS } from "@/constants";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

interface SocialsProps {
  variant: "socialIcon_white" | "socialIcon_secondary" | "socialIcon_blue";
  shadowColor: "shadow-black" | "shadow-gray";
}

const Socials: React.FC<SocialsProps> = ({ variant, shadowColor }) => {
  return (
    <div className="flex items-center justify-start py-4 gap-12">
      {SOCIALS.map((social) => (
        <Link href={social.href} key={social.key} target="_blank">
          <div className={`socialIcon ${variant} ${shadowColor}`}>
            {social.key === "email" && (
              <div className="text-blue">
                <AiOutlineMail size={25} />
              </div>
            )}
            {social.key === "github" && (
              <div className="text-[#333333]">
                <AiFillGithub size={25} />
              </div>
            )}
            {social.key === "linkedin" && (
              <div className="text-[#0077B5]">
                <AiFillLinkedin size={25} />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
