import Image from "next/image";
import TEAMPLAYER from "@/public/team_Player.svg";

interface TraitCardProps {
  title: string;
  description: string;
}

const TraitCard: React.FC<TraitCardProps> = ({ title, description }) => {
  return (
    <div className="card card_secondary flex flex-col gap-4 items-center">
      <Image src={TEAMPLAYER} alt="Team Player" width={200} height={200} />
      <h2>{title}</h2>
      <p className="px-8 text-center">{description}</p>
    </div>
  );
};

export default TraitCard;
