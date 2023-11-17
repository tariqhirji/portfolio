import Image from "next/image";
import TEAMPLAYER from "@/public/team_Player.svg";
import INNOVATIVE from "@/public/innovative.svg";
import COMMUNICATOR from "@/public/communicator.svg";

interface TraitCardProps {
  title: string;
  description: string;
}

const TraitCard: React.FC<TraitCardProps> = ({ title, description }) => {
  return (
    <div className="card card_secondary flex flex-col gap-4 items-center dark:text-secondary">
      {title === "Team Player" && (
        <Image src={TEAMPLAYER} alt={title} width={200} height={200} />
      )}
      {title === "Innovative" && (
        <Image src={INNOVATIVE} alt={title} width={200} height={200} />
      )}
      {title === "Communicator" && (
        <Image src={COMMUNICATOR} alt={title} width={200} height={200} />
      )}
      <h2 className="font-bold">{title}</h2>
      <p className="px-8 text-center font-light text-lg">{description}</p>
    </div>
  );
};

export default TraitCard;
