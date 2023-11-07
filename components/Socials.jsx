import { SOCIALS } from "@/constants";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center justify-start py-4 gap-12">
      {SOCIALS.map((social) => (
        <Link href={social.href} key={social.key} target="_blank">
          <div className="socialIcon">
            {social.key === "email" && <AiOutlineMail size={25} />}
            {social.key === "github" && <AiFillGithub size={25} />}
            {social.key === "linkedin" && <AiFillLinkedin size={25} />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
