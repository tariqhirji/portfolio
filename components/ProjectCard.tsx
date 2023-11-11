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
  mediaType: "video" | "image";
  mediaURL: string;
  status: "active" | "inactive";
  buttonText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  badges,
  description,
  isVertical,
  mediaType,
  mediaURL,
  status,
  buttonText,
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
        <h2 className="font-bold">{title}</h2>
        <h2 className="text-gray">{subtitle}</h2>
        <div className="badges inline-flex gap-x-4 gap-y-2 flex-wrap">
          {badges.map((badge) => (
            <Badge text={badge.title} key={badge.title} />
          ))}
        </div>
        <p>{description}</p>
        <div>
          <Button
            type="button"
            isDisabled={status === "inactive"}
            text={buttonText}
            fullWidth={false}
          />
        </div>
      </div>

      {/* Card Media */}
      <article
        className={`${!isVertical ? "w-[40%]" : "w-full h-[50%] order-1"}`}
      >
        {mediaType === "image" ? (
          <Image
            src={DegreePlanner}
            alt="Degree Planner"
            width={0}
            height={0}
            className={`${!isVertical ? "rounded-r-md" : "rounded-t-md"}`}
            style={{ width: "100%", height: "100%" }} // optional
          />
        ) : (
          <iframe
            src={mediaURL}
            width="100%"
            height="100%"
            title="YouTube video player"
            className={`${!isVertical ? "rounded-r-md" : "rounded-t-md"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </article>
    </div>
  );
};

export default ProjectCard;
