import Button from "@/components/Button";
import Socials from "@/components/Socials";
import SportsDynamic from "@/components/SportsDynamic";
import WeatherDynamic from "@/components/WeatherDynamic";
import { ABOUT } from "@/constants";
import Image from "next/image";
import TEAMPLAYER from "@/public/team_Player.svg";

const About = () => {
  return (
    <section id="about" className="pt-16 flex justify-start px-4">
      <div className="sectionContainer">
        <div className="flex flex-row gap-6">
          {/* Left Side - About text and details */}
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="sectionHeading uppercase">{ABOUT.title}</h1>
            <h3 className="mt-3">{ABOUT.description}</h3>
            <div>
              <Button
                isDisabled={false}
                text="View Resume"
                type="button"
                fullWidth={false}
              />
            </div>
            <Socials />
          </div>
          {/* Right Side - Weather + Sport Dynamics */}
          <div className="w-1/2 flex flex-col gap-6 pt-32">
            <WeatherDynamic />
            <SportsDynamic />
          </div>
        </div>

        <div className="flex py-6 gap-6">
          <div className="card card_secondary w-1/3 flex flex-col items-center">
            <Image
              src={TEAMPLAYER}
              alt="Team Player"
              width={200}
              height={200}
            />
            <h2>Team Player</h2>
          </div>
          <div className="card card_secondary w-1/3 flex flex-col items-center">
            <Image
              src={TEAMPLAYER}
              alt="Team Player"
              width={200}
              height={200}
            />
            <h2>Team Player</h2>
          </div>
          <div className="card card_secondary w-1/3 flex flex-col items-center">
            <Image
              src={TEAMPLAYER}
              alt="Team Player"
              width={200}
              height={200}
            />
            <h2>Team Player</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
