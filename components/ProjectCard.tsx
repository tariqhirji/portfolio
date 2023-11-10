import { DEEPFAKE } from "@/constants";
import Badge from "./Badge";
import Button from "./Button";
import DegreePlanner from "@/public/DegreePlanner.jpg";
import Image from "next/image";

interface ProjectCardProps {
  isVertical: boolean;
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
  isVertical,
}) => {
  return (
    <div
      className={`projectCard card card_secondary ${
        !isVertical ? "col-span-8 flex" : "col-span-4 row-span-2 flex flex-col"
      }`}
    >
      {/* Card Content */}
      <div
        className={`flex flex-col gap-5 p-5  ${
          !isVertical ? "w-[60%]" : "w-full order-2"
        }`}
      >
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
      <div className={`${!isVertical ? "w-[40%]" : "w-full h-full order-1"}`}>
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
