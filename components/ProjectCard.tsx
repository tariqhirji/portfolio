import Badge from "./Badge";
import Button from "./Button";
import DegreePlanner from "@/public/DegreePlanner.jpg";
import Image from "next/image";
import Link from "next/link";

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
  buttonIcon: "code" | "private" | "shutdown";
  buttonUrl?: string | undefined;
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
  buttonIcon,
  buttonUrl,
}) => {
  return (
    <div
      className={`projectCard card card_secondary ${
        !isVertical
          ? "flex flex-col w-full lg:col-span-8 lg:flex-row"
          : "flex flex-col col-span-4 row-span-2 "
      }`}
    >
      {/* Card Content */}
      <div
        className={`flex flex-col gap-5 p-5  ${
          !isVertical
            ? "order-2 lg:order-2 w-full lg:w-[60%]"
            : "w-full order-2"
        }`}
      >
        <h2 className="font-bold dark:text-secondary">{title}</h2>
        <h2 className="text-gray dark:text-gray300 font-light">{subtitle}</h2>
        <div className="badges inline-flex gap-x-4 gap-y-2 flex-wrap">
          {badges.map((badge) => (
            <Badge text={badge.title} key={badge.title} />
          ))}
        </div>
        <p className="dark:text-secondary">{description}</p>
        <div>
          {buttonUrl !== undefined ? (
            <Link href={buttonUrl} target="_blank">
              <Button
                type="button"
                isDisabled={status === "inactive"}
                text={buttonText}
                fullWidth={false}
                icon={buttonIcon}
              />
            </Link>
          ) : (
            <Button
              type="button"
              isDisabled={status === "inactive"}
              text={buttonText}
              fullWidth={false}
              icon={buttonIcon}
            />
          )}
        </div>
      </div>

      {/* Card Media */}
      <article
        className={`${
          !isVertical
            ? "w-full lg:w-[40%] order-1 lg:order-1"
            : "w-full h-[50%] order-1"
        }`}
      >
        {mediaType === "image" ? (
          <Image
            src={DegreePlanner}
            alt="Degree Planner"
            width={0}
            height={0}
            className={`max-lg:min-h-[300px] ${
              !isVertical
                ? "sm:max-md:rounded-t-md lg:rounded-l-md"
                : "rounded-t-md"
            }`}
            style={{ width: "100%", height: "100%" }} // optional
          />
        ) : (
          <iframe
            src={mediaURL}
            width="100%"
            height="100%"
            title="YouTube video player"
            className={`max-lg:min-h-[300px] ${
              !isVertical
                ? "sm:max-md:rounded-t-md lg:rounded-l-md"
                : "rounded-t-md"
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </article>
    </div>
  );
};

export default ProjectCard;
