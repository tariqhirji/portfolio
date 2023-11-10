import { DEEPFAKE } from "@/constants";
import Badge from "./Badge";
import Button from "./Button";
import DegreePlanner from "@/public/DegreePlanner.jpg";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  badges: { title: string }[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  badges,
  description,
}) => {
  return (
    <div className="projectCard col-span-8 card card_secondary">
      {/* Card Content */}
      <div className="flex flex-col gap-5 p-5 w-[60%]">
        <h2>{title}</h2>
        <h2 className="text-gray">{subtitle}</h2>
        <div className="badges inline-flex gap-4 flex-wrap">
          {badges.map((badge) => (
            <Badge text={badge.title} key={badge.title} />
          ))}
        </div>
        <p>{description}</p>
        <div>
          <Button
            type="button"
            variant="btn_blue"
            text="View More"
            fullWidth={false}
          />
        </div>
      </div>

      {/* Card Media */}
      <div className="w-[40%]">
        <Image
          src={DegreePlanner}
          alt="Degree Planner"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }} // optional
        />
      </div>
    </div>
  );
};

export default ProjectCard;
